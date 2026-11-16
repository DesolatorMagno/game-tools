(function () {
  const { razas, etapas, examenes, tipos, dens, fuente } = window.DATA;
  const monstruos = window.MONSTRUOS || [];
  const contenedor = document.getElementById("razas");
  const resultado = document.getElementById("resultado");
  const selProgreso = document.getElementById("progreso");
  const selExamen = document.getElementById("examen");
  const seccionDens = document.getElementById("dens");
  const buscador = document.getElementById("buscar");
  const listaMonstruos = document.getElementById("lista-monstruos");
  const detalleMonstruo = document.getElementById("detalle-monstruo");
  document.getElementById("fuente").textContent = fuente;

  const CLAVE = "daphne-progreso";
  const CLAVE_EX = "daphne-examenes";
  let razaActual = null;
  let monstruoActual = null;
  let progreso = 99; // 99 = mostrar todo
  let superados = 5; // exámenes de grado ya aprobados (5 = todos)

  function el(tag, cls, texto) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (texto) e.textContent = texto;
    return e;
  }

  // ---- progreso guardado (opcional: si localStorage falla, sigue funcionando)
  try {
    const g = localStorage.getItem(CLAVE);
    if (g) progreso = Number(g);
    const x = localStorage.getItem(CLAVE_EX);
    if (x !== null) superados = Number(x);
  } catch (e) { /* sin almacenamiento */ }

  selProgreso.append(new Option("Mostrar todo", "99"));
  for (const e of etapas) selProgreso.append(new Option("Hasta " + e.nombre, String(e.n)));
  selProgreso.value = String(progreso);
  selProgreso.addEventListener("change", () => {
    progreso = Number(selProgreso.value);
    try { localStorage.setItem(CLAVE, String(progreso)); } catch (e) { /* ignorar */ }
    pintar();
  });

  // El examen pendiente (el siguiente al último aprobado) ya se puede hacer, por eso superados + 1.
  selExamen.append(new Option("Ninguno aprobado", "0"));
  for (const e of examenes) selExamen.append(new Option(`Hasta ${e.nombre} (nivel ${e.nivel})`, String(e.n)));
  selExamen.value = String(superados);
  selExamen.addEventListener("change", () => {
    superados = Number(selExamen.value);
    try { localStorage.setItem(CLAVE_EX, String(superados)); } catch (e) { /* ignorar */ }
    pintar();
  });

  function visible(l) {
    if (l.examen != null && l.examen > superados + 1) return false;
    return l.etapa == null || l.etapa <= progreso;
  }

  function etiqueta(l) {
    const partes = [];
    if (l.tipo) partes.push(tipos[l.tipo]);
    if (l.examen != null) partes.push("Examen " + examenes[l.examen - 1].nombre);
    if (l.etapa != null) partes.push("Abismo " + l.etapa);
    else if (l.examen == null) partes.push("progreso sin determinar");
    return partes.join(" · ");
  }

  // Lista de lugares filtrada por progreso (la usan las dos pestañas).
  function pintarLugares(cont, lugares) {
    const mostrar = lugares.filter(visible);
    const ocultos = lugares.length - mostrar.length;
    const ul = el("ul", "lugares");
    for (const l of mostrar) {
      const li = el("li");
      li.append(el("div", "titulo", l.en || l.jp));
      if (l.en && l.jp) li.append(el("div", "jp", l.jp + (l.probable ? "  ·  nombre en inglés probable, sin confirmar" : "")));
      li.append(el("div", "etiqueta", etiqueta(l)));
      if (l.nota) li.append(el("div", "nota", l.nota));
      ul.append(li);
    }
    cont.append(ul);
    if (!mostrar.length) cont.append(el("p", "vacio", "Con tu progreso aún no hay lugares disponibles."));
    if (ocultos) cont.append(el("p", "vacio", `${ocultos} lugar(es) oculto(s) porque requieren avanzar más (historia o exámenes de grado).`));
  }

  function pintarRaza(raza) {
    resultado.replaceChildren();
    resultado.append(el("h2", "", `${raza.en} · ${raza.jp}`));
    if (raza.monstruos.length) {
      resultado.append(el("p", "monstruos", "Monstruos de ejemplo: " + raza.monstruos.join("、")));
    }
    if (raza.aviso) resultado.append(el("p", "aviso", raza.aviso));
    if (!raza.lugares.length) {
      if (!raza.aviso) resultado.append(el("p", "vacio", "La fuente no lista lugares para este tipo."));
      return;
    }
    pintarLugares(resultado, raza.lugares);
  }

  function nombre(m) { return m.en || m.jp; }

  function pintarMonstruo(m) {
    detalleMonstruo.replaceChildren();
    if (!m) {
      detalleMonstruo.append(el("p", "vacio", "Busca o elige un monstruo para ver dónde aparece."));
      return;
    }
    detalleMonstruo.append(el("h2", "", m.en ? `${m.en} · ${m.jp}` : m.jp));
    if (m.probable) detalleMonstruo.append(el("p", "aviso", "El nombre en inglés es una deducción, sin confirmar en el juego."));
    if (m.no) detalleMonstruo.append(el("p", "monstruos", "Compendio: n.º " + m.no));
    if (m.v && m.v.length) detalleMonstruo.append(el("p", "monstruos", "Variantes: " + m.v.join(", ")));
    const raza = razas.find(r => r.id === m.raza);
    detalleMonstruo.append(el("p", "monstruos", raza ? `Raza: ${raza.en} (${raza.jp})` : "Raza: la fuente no la indica"));
    if (m.especial) detalleMonstruo.append(el("p", "aviso", "Monstruo importante (jefe o especial), no un enemigo común."));
    detalleMonstruo.append(el("p", "meta", "Los lugares son los principales; la lista no es exhaustiva."));
    pintarLugares(detalleMonstruo, m.lugares);
  }

  function norm(s) { return (s || "").toLowerCase(); }

  function pintarListaMonstruos() {
    const q = norm(buscador.value.trim());
    const filtrados = monstruos
      .filter(m => !q || norm(m.en).includes(q) || norm(m.jp).includes(q) || (m.v || []).some(x => norm(x).includes(q)))
      .sort((a, b) => nombre(a).localeCompare(nombre(b), "en"));
    listaMonstruos.replaceChildren();
    for (const m of filtrados) {
      const b = el("button", "raza");
      b.type = "button";
      b.setAttribute("aria-pressed", m === monstruoActual ? "true" : "false");
      b.append(nombre(m));
      if (m.en) b.append(el("small", "", m.jp));
      b.addEventListener("click", () => {
        monstruoActual = m;
        pintarListaMonstruos();
        pintarMonstruo(m);
      });
      listaMonstruos.append(b);
    }
    if (!filtrados.length) listaMonstruos.append(el("p", "vacio", "Sin resultados. Si te salió una misión con un monstruo que no está, dime su nombre y lo agrego."));
  }
  buscador.addEventListener("input", pintarListaMonstruos);

  function pintarDens() {
    seccionDens.replaceChildren();
    seccionDens.append(el("h2", "", "Dens"));
    seccionDens.append(el("p", "meta", "Mazmorras de un piso por elemento; el mapa cambia en cada entrada. Dan mena y equipo elemental."));
    const ul = el("ul", "lugares");
    for (const d of dens.filter(x => x.etapa <= progreso)) {
      const li = el("li");
      li.append(el("div", "titulo", `${d.en} · ${d.elemento}`));
      li.append(el("div", "etiqueta", "Desbloqueo: " + d.desbloqueo));
      li.append(el("div", "nota", d.nota));
      ul.append(li);
    }
    seccionDens.append(ul);
    const ocultos = dens.filter(x => x.etapa > progreso).length;
    if (ocultos) seccionDens.append(el("p", "vacio", `${ocultos} den(s) oculto(s) por tu progreso.`));
  }

  function pintar() {
    if (razaActual) pintarRaza(razaActual);
    pintarMonstruo(monstruoActual);
    pintarDens();
  }

  // ---- pestañas
  const pestanas = document.querySelectorAll(".pestana");
  function irA(id) {
    pestanas.forEach(p => p.setAttribute("aria-selected", p.dataset.panel === id ? "true" : "false"));
    document.querySelectorAll(".panel").forEach(p => { p.hidden = p.id !== id; });
  }
  pestanas.forEach(p => p.addEventListener("click", () => irA(p.dataset.panel)));

  for (const r of razas) {
    const b = el("button", "raza");
    b.type = "button";
    b.setAttribute("aria-pressed", "false");
    b.append(r.en);
    b.append(el("small", "", r.jp));
    b.addEventListener("click", () => {
      contenedor.querySelectorAll(".raza").forEach(x => x.setAttribute("aria-pressed", "false"));
      b.setAttribute("aria-pressed", "true");
      razaActual = r;
      pintar();
    });
    contenedor.append(b);
  }
  pintarListaMonstruos();
  pintarMonstruo(null);
  pintarDens();
})();
