(function () {
  const PJ = window.PERSONAJES;
  const MIS = window.MIS || { tengo: [], equipos: [] };
  const porNombre = new Map(PJ.map(p => [p.n, p]));

  const AFFLATUS = ["Beast", "Plant", "Star", "Mineral", "Spirit", "Intellect"];
  const ROLES = ["Daño", "Apoyo", "Sostén"];
  // Etiquetas de la fuente -> rol general. Las que no aparecen aquí (Riposte, Moxie, Burn...) son mecánicas y se ignoran.
  const ETIQUETA_ROL = {
    "DPS": "Daño", "Burst DMG": "Daño", "Assassination": "Daño", "Reaper": "Daño", "Nasty Wound": "Daño", "Sub-DPS": "Daño",
    "Support": "Apoyo", "Dynamo": "Apoyo", "Inspiration": "Apoyo", "Rank Up": "Apoyo", "Extra Action": "Apoyo",
    "Debuff": "Apoyo", "Control": "Apoyo", "Dispeller": "Apoyo",
    "Heal": "Sostén", "Shield": "Sostén", "DEF": "Sostén", "Immunity": "Sostén", "Purify": "Sostén"
  };

  const K_TENGO = "r99-tengo", K_EQ = "r99-equipos";
  let tengo = new Set(MIS.tengo);
  let equipos = MIS.equipos.map(e => e.slice());

  function leer(k) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch (e) { return null; } }
  function guardar(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* sin almacenamiento */ } }
  const gt = leer(K_TENGO); if (Array.isArray(gt)) tengo = new Set(gt);
  const ge = leer(K_EQ); if (Array.isArray(ge)) equipos = ge;
  if (!equipos.length) equipos = [["", "", "", ""]];

  function el(tag, cls, texto) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (texto != null) e.textContent = texto;
    return e;
  }

  // ---- roles de un personaje: { Daño: peso, ... }; la primera categoría reconocida pesa 2, las demás 1
  const cacheRoles = new Map();
  function pesos(p) {
    if (cacheRoles.has(p.n)) return cacheRoles.get(p.n);
    const w = { "Daño": 0, "Apoyo": 0, "Sostén": 0 };
    let primero = true;
    for (const t of p.r) {
      const c = ETIQUETA_ROL[t];
      if (!c || w[c]) continue;
      w[c] = primero ? 2 : 1;
      primero = false;
    }
    cacheRoles.set(p.n, w);
    return w;
  }
  function categoriaPrincipal(p) {
    for (const t of p.r) if (ETIQUETA_ROL[t]) return ETIQUETA_ROL[t];
    return null;
  }

  // Mejor reparto de 3 roles entre los miembros (permutaciones): devuelve roles cubiertos y peso.
  function evaluar(miembros) {
    const ws = miembros.map(pesos);
    const n = ws.length;
    let mejor = { cubiertos: [], peso: -1 };
    function rec(i, usados, cub, peso) {
      if (i === ROLES.length) {
        if (cub.length * 100 + peso > mejor.cubiertos.length * 100 + mejor.peso) mejor = { cubiertos: cub.slice(), peso };
        return;
      }
      rec(i + 1, usados, cub, peso); // dejar este rol sin cubrir
      for (let m = 0; m < n; m++) {
        if (usados & (1 << m)) continue;
        const w = ws[m][ROLES[i]];
        if (!w) continue;
        cub.push(ROLES[i]);
        rec(i + 1, usados | (1 << m), cub, peso + w);
        cub.pop();
      }
    }
    rec(0, 0, [], 0);
    return mejor;
  }

  // Afflatus de un personaje: el principal y, si cambia según el equipamiento, el alternativo.
  function afls(p) { return [p.a, p.a2].filter(Boolean); }
  function textoAfl(p, vacio) { return p.a2 ? `${p.a} / ${p.a2} (según el set)` : (p.a || vacio); }
  // En un equipo solo cuenta el Afflatus principal: el alternativo no está activo a la vez.
  function afflatusDistintos(ms) { return new Set(ms.map(m => m.a).filter(Boolean)).size; }

  // ---- pestañas
  const pestanas = document.querySelectorAll(".pestana");
  function irA(id) {
    pestanas.forEach(p => p.setAttribute("aria-selected", p.dataset.panel === id ? "true" : "false"));
    document.querySelectorAll(".panel").forEach(p => { p.hidden = p.id !== id; });
    if (id === "p-equipos") pintarEquipos();
    if (id === "p-ideas") pintarIdeas();
  }
  pestanas.forEach(p => p.addEventListener("click", () => irA(p.dataset.panel)));

  // ---- colección
  const cuadricula = document.getElementById("cuadricula");
  const fAff = document.getElementById("f-afflatus");
  const fEstado = document.getElementById("f-estado");
  const fVista = document.getElementById("f-vista");
  const fGrupo = document.getElementById("f-grupo");
  const buscar = document.getElementById("buscar");
  const matriz = document.getElementById("matriz-cuerpo");
  for (const a of AFFLATUS) fAff.append(new Option(a, a));
  const K_VISTA = "r99-vista";
  const gv = leer(K_VISTA);
  if (gv && gv.vista) fVista.value = gv.vista;
  if (gv && gv.grupo != null) fGrupo.value = gv.grupo;

  function alternar(p) {
    if (tengo.has(p.n)) tengo.delete(p.n); else tengo.add(p.n);
    guardar(K_TENGO, [...tengo]);
    const y = window.scrollY;
    pintarColeccion();
    window.scrollTo(0, y);
  }

  function pintarTarjeta(p) {
    const b = el("button", "pj A-" + p.a);
    b.type = "button";
    b.setAttribute("aria-pressed", tengo.has(p.n) ? "true" : "false");
    b.append(el("span", "nom", p.n));
    const s = el("small");
    s.append(el("span", "af", textoAfl(p, "Afflatus ?")), ` · ${p.d || "daño ?"} · ${p.e}★`);
    b.append(s);
    b.append(el("small", "", p.r.slice(0, 3).join(", ")));
    if (p.c) b.title = p.c;
    b.addEventListener("click", () => alternar(p));
    return b;
  }

  function filaLista(p) {
    const tr = el("tr", "A-" + p.a + (tengo.has(p.n) ? " tengo" : ""));
    const td0 = el("td", "chk");
    const cb = document.createElement("input");
    cb.type = "checkbox"; cb.checked = tengo.has(p.n);
    cb.setAttribute("aria-label", "Tengo a " + p.n);
    td0.append(cb);
    tr.append(td0, el("td", "nom", p.n), el("td", "", p.e + "★"), el("td", "af", textoAfl(p, "?")), el("td", "", p.d || "?"), el("td", "rol", p.r.slice(0, 3).join(", ")));
    if (p.c) tr.title = p.c;
    tr.addEventListener("click", ev => { if (ev.target !== cb) alternar(p); });
    cb.addEventListener("change", () => alternar(p));
    return tr;
  }

  function tablaLista(lista) {
    const t = el("table", "lista");
    const cab = el("thead"), fr = el("tr");
    ["Tengo", "Personaje", "Rareza", "Afflatus", "Daño", "Rol"].forEach(h => fr.append(el("th", "", h)));
    cab.append(fr); t.append(cab);
    const cuerpo = el("tbody");
    lista.forEach(p => cuerpo.append(filaLista(p)));
    t.append(cuerpo);
    return t;
  }

  const CLAVE_GRUPO = {
    "afflatus": p => p.a || "Afflatus sin confirmar",
    "rol": p => categoriaPrincipal(p) || "Sin rol clasificado",
    "rareza": p => p.e + "★"
  };

  // Matriz Afflatus × rol principal: cuántos tienes de cuántos existen.
  function pintarMatriz() {
    const filas = AFFLATUS.concat([null]);
    const t = el("table", "matriz");
    const cab = el("tr"); cab.append(el("th", "", ""));
    ROLES.forEach(r => cab.append(el("th", "", r))); cab.append(el("th", "", "Total"));
    t.append(cab);
    for (const a of filas) {
      const tr = el("tr", "A-" + a);
      tr.append(el("th", "af", a || "Sin confirmar"));
      let tt = 0, th = 0;
      for (const r of ROLES) {
        const todos = PJ.filter(p => p.a === a && categoriaPrincipal(p) === r);
        const mios = todos.filter(p => tengo.has(p.n));
        tt += todos.length; th += mios.length;
        const td = el("td", !todos.length ? "vacia" : mios.length === 0 ? "cero" : mios.length === 1 ? "poco" : "", todos.length ? `${mios.length}/${todos.length}` : "–");
        tr.append(td);
      }
      const todosA = PJ.filter(p => p.a === a);
      tr.append(el("td", "total", `${todosA.filter(p => tengo.has(p.n)).length}/${todosA.length}`));
      t.append(tr);
    }
    matriz.replaceChildren(t);
  }

  function pintarColeccion() {
    const q = buscar.value.trim().toLowerCase();
    const lista = PJ.filter(p =>
      (!q || p.n.toLowerCase().includes(q)) &&
      (!fAff.value || afls(p).includes(fAff.value)) &&
      (!fEstado.value || (fEstado.value === "si") === tengo.has(p.n)))
      .sort((x, y) => y.e - x.e || x.n.localeCompare(y.n));
    cuadricula.replaceChildren();
    cuadricula.className = fVista.value === "lista" ? "" : "cuadricula";
    const clave = CLAVE_GRUPO[fGrupo.value];
    const grupos = new Map();
    for (const p of lista) { const k = clave ? clave(p) : ""; if (!grupos.has(k)) grupos.set(k, []); grupos.get(k).push(p); }
    const orden = [...grupos.keys()];
    if (fGrupo.value === "afflatus") orden.sort((x, y) => (AFFLATUS.indexOf(x) + 99) % 99 - (AFFLATUS.indexOf(y) + 99) % 99);
    for (const k of orden) {
      const ps = grupos.get(k);
      if (clave) {
        const mios = ps.filter(p => tengo.has(p.n)).length;
        cuadricula.append(el("h3", "grupo", `${k} · tienes ${mios} de ${ps.length}`));
      }
      if (fVista.value === "lista") cuadricula.append(tablaLista(ps));
      else {
        const g = el("div", "cuadricula");
        ps.forEach(p => g.append(pintarTarjeta(p)));
        cuadricula.append(g);
      }
    }
    if (!lista.length) cuadricula.append(el("p", "meta", "Ningún personaje coincide con los filtros."));
    document.getElementById("resumen-coleccion").textContent =
      `Tienes ${tengo.size} de ${PJ.length} personajes. Mostrando ${lista.length}.`;
    pintarMatriz();
  }
  [buscar, fAff, fEstado].forEach(x => x.addEventListener("input", pintarColeccion));
  [fVista, fGrupo].forEach(x => x.addEventListener("input", () => { guardar(K_VISTA, { vista: fVista.value, grupo: fGrupo.value }); pintarColeccion(); }));
  document.getElementById("restablecer").addEventListener("click", () => {
    if (!window.MIS) { alert("No encontré mis-personajes.js, no hay nada a lo que restablecer."); return; }
    if (!confirm("Esto reemplaza tu colección y equipos guardados en este navegador por los de mis-personajes.js. ¿Seguir?")) return;
    tengo = new Set(MIS.tengo);
    equipos = MIS.equipos.map(e => e.slice());
    guardar(K_TENGO, [...tengo]); guardar(K_EQ, equipos);
    pintarColeccion();
  });

  // ---- mis equipos
  const contEquipos = document.getElementById("equipos");

  function textoResumen(ms) {
    const caja = el("div", "resumen");
    if (!ms.length) return caja;
    const ev = evaluar(ms);
    const linea1 = el("div");
    for (const r of ROLES) {
      const ok = ev.cubiertos.includes(r);
      linea1.append(el("span", ok ? "ok" : "falta", (ok ? "✓ " : "✗ ") + r + "   "));
    }
    caja.append(linea1);
    const cuenta = (f) => {
      const m = new Map();
      ms.forEach(x => { const ks = f(x); (ks.length ? ks : ["?"]).forEach(k => m.set(k, (m.get(k) || 0) + 1)); });
      return [...m].map(([k, v]) => `${k} ×${v}`).join(", ");
    };
    caja.append(el("div", "meta", "Afflatus: " + cuenta(x => (x.a ? [x.a] : []))));
    caja.append(el("div", "meta", "Daño: " + cuenta(x => (x.d ? [x.d] : []))));
    return caja;
  }

  function tarjetaMiembro(p) {
    const d = el("div", "miembro A-" + p.a);
    d.append(el("div", "nom", p.n));
    d.append(el("small", "", `${textoAfl(p, "Afflatus ?")} · ${p.d || "daño ?"}`));
    d.append(el("small", "", p.r.join(", ")));
    return d;
  }

  function pintarEquipos() {
    contEquipos.replaceChildren();
    equipos.forEach((eq, i) => {
      const caja = el("div", "equipo");
      const quitar = el("button", "boton quitar", "Quitar equipo");
      quitar.type = "button";
      quitar.addEventListener("click", () => { equipos.splice(i, 1); if (!equipos.length) equipos.push(["", "", "", ""]); guardar(K_EQ, equipos); pintarEquipos(); });
      caja.append(quitar, el("h3", "", "Equipo " + (i + 1)));
      const selects = el("div", "selects");
      for (let s = 0; s < 4; s++) {
        const sel = document.createElement("select");
        sel.append(new Option("— vacío —", ""));
        const nombres = new Set([...tengo, eq[s]].filter(Boolean));
        [...nombres].sort((a, b) => a.localeCompare(b)).forEach(n => sel.append(new Option(n, n)));
        sel.value = eq[s] || "";
        sel.addEventListener("change", () => { eq[s] = sel.value; guardar(K_EQ, equipos); pintarEquipos(); });
        selects.append(sel);
      }
      caja.append(selects);
      const ms = eq.filter(Boolean).map(n => porNombre.get(n)).filter(Boolean);
      const miembros = el("div", "miembros");
      ms.forEach(p => miembros.append(tarjetaMiembro(p)));
      caja.append(miembros, textoResumen(ms));
      contEquipos.append(caja);
    });
  }
  document.getElementById("nuevo-equipo").addEventListener("click", () => {
    equipos.push(["", "", "", ""]); guardar(K_EQ, equipos); pintarEquipos();
  });

  // ---- equipos nuevos
  const contIdeas = document.getElementById("ideas");
  const contFaltas = document.getElementById("faltas");
  const chkEvitar = document.getElementById("evitar");

  function combinaciones(pool, k, cb) {
    const idx = [];
    (function rec(ini) {
      if (idx.length === k) { cb(idx.map(i => pool[i])); return; }
      for (let i = ini; i < pool.length; i++) { idx.push(i); rec(i + 1); idx.pop(); }
    })(0);
  }

  // Todos los equipos de 4 que cubren los 3 roles, de mejor a peor (más peso de rol y más Afflatus distintos).
  function equiposValidos(pool) {
    const res = [];
    combinaciones(pool, 4, ms => {
      const ev = evaluar(ms);
      if (ev.cubiertos.length === ROLES.length) res.push({ ms, puntos: ev.peso + 0.5 * afflatusDistintos(ms) });
    });
    return res.sort((a, b) => b.puntos - a.puntos);
  }

  // Elige hasta `max` equipos que se parezcan poco entre sí (como mucho `solape` miembros en común).
  function elegirVariados(cands, max, solape) {
    const elegidos = [];
    for (const c of cands) {
      if (elegidos.every(e => e.ms.filter(m => c.ms.includes(m)).length <= solape)) elegidos.push(c);
      if (elegidos.length >= max) break;
    }
    return elegidos;
  }

  function pintarIdeas() {
    contIdeas.replaceChildren(); contFaltas.replaceChildren();
    const usados = new Set(equipos.flat().filter(Boolean));
    const duenos = [...tengo].map(n => porNombre.get(n)).filter(Boolean);
    const pool = chkEvitar.checked ? duenos.filter(p => !usados.has(p.n)) : duenos;
    if (pool.length < 4) { contIdeas.append(el("p", "meta", "Con estos filtros no quedan 4 personajes para formar un equipo.")); return; }

    const cands = equiposValidos(pool);
    contIdeas.append(el("h2", "", "Equipos que puedes armar"));
    contIdeas.append(el("p", "meta", `Se revisaron ${pool.length} personajes. Los equipos de abajo cubren daño, apoyo y sostén, y buscan variedad de Afflatus y de miembros entre sí.`));
    const elegidos = elegirVariados(cands, 6, 1);
    if (!elegidos.length) contIdeas.append(el("p", "meta", "No hay ningún equipo que cubra los tres roles con estos personajes."));
    elegidos.forEach((c, i) => {
      const caja = el("div", "idea");
      caja.append(el("strong", "", `Idea ${i + 1}: `), document.createTextNode(c.ms.map(m => m.n).join(", ")));
      const miembros = el("div", "miembros");
      c.ms.forEach(p => miembros.append(tarjetaMiembro(p)));
      caja.append(miembros, textoResumen(c.ms));
      contIdeas.append(caja);
    });

    // Qué te falta: cuántos equipos disjuntos salen y qué rol escasea.
    let libres = pool.slice(), n = 0;
    while (libres.length >= 4) {
      const v = equiposValidos(libres);
      if (!v.length) break;
      n++;
      const quitar = new Set(v[0].ms);
      libres = libres.filter(p => !quitar.has(p));
    }
    contFaltas.append(el("h2", "", "Qué te falta"));
    contFaltas.append(el("p", "meta", `Sin repetir personajes entre sí, con lo que tienes saldrían unos ${n} equipos completos${chkEvitar.checked ? " (además de los que ya usas)" : ""} (cálculo aproximado, voraz).`));
    const cuenta = { "Daño": 0, "Apoyo": 0, "Sostén": 0 };
    pool.forEach(p => { const c = categoriaPrincipal(p); if (c) cuenta[c]++; });
    contFaltas.append(el("p", "meta", "Personajes libres por rol principal: " + ROLES.map(r => `${r} ${cuenta[r]}`).join(" · ")));
    const escaso = ROLES.slice().sort((a, b) => cuenta[a] - cuenta[b])[0];
    const candidatos = PJ.filter(p => !tengo.has(p.n) && categoriaPrincipal(p) === escaso)
      .sort((a, b) => b.e - a.e || a.n.localeCompare(b.n)).slice(0, 10);
    contFaltas.append(el("p", "meta", `El rol más escaso es «${escaso}». Personajes que no tienes y que lo cubren como rol principal (solo comprueban el rol, no si son buenos):`));
    const ul = el("ul", "lista-simple");
    candidatos.forEach(p => ul.append(el("li", "", `${p.n} · ${p.e}★ · ${textoAfl(p, "Afflatus ?")} · ${p.r.slice(0, 3).join(", ")}`)));
    contFaltas.append(ul);
  }
  chkEvitar.addEventListener("change", pintarIdeas);

  pintarColeccion();
})();
