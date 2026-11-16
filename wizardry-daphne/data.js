// Datos de Wizardry Variants Daphne (versión global).
//
// Fuentes:
//  - Wikiwiki JP "モンスター" (raza -> lugares), edición vista 2026-10-17:
//    https://wikiwiki.jp/wiz_daphne/モンスター
//  - Guía comunitaria en inglés (nombres globales, orden de la historia, Dens), vista 2026-11-15:
//    https://wizardry.fasterthoughts.io/abyss-guides/1-beginning-abyss/maps/
//
// Campos de cada lugar:
//  jp        nombre en la fuente japonesa
//  en        nombre global (si se conoce)
//  probable  true = el nombre en inglés es una deducción mía, no confirmada
//  etapa     abismo de la historia necesario (1-4); null = no se pudo determinar
//  tipo      "abismo" | "den" | "examen" | "evento" | null
window.DATA = {
  fuente: "Wikiwiki (JP) 2026-10-17 + guía fasterthoughts.io 2026-11-15",

  etapas: [
    { n: 1, nombre: "Abismo 1 · Beginning Abyss" },
    { n: 2, nombre: "Abismo 2 · Trade Waterways" },
    { n: 3, nombre: "Abismo 3 · Guarda Fortress" },
    { n: 4, nombre: "Abismo 4 · Isberg" }
  ],

  // Exámenes de grado (el nivel del personaje principal los desbloquea de 10 en 10 desde el 20)
  examenes: [
    { n: 1, nombre: "Lead", nivel: 20 },
    { n: 2, nombre: "Bronze", nivel: 30 },
    { n: 3, nombre: "Iron", nivel: 40 },
    { n: 4, nombre: "Steel", nivel: 50 },
    { n: 5, nombre: "Copper", nivel: 60 }
  ],

  tipos: {
    abismo: "Historia",
    den: "Den",
    examen: "Examen de grado",
    evento: "Evento / petición"
  },

  razas: [
    {
      id: "humano", jp: "人族", en: "Human",
      monstruos: ["バンデット"],
      lugares: [
        { jp: "はじまりの奈落 低層", en: "Beginning Abyss (low floors)", etapa: 1, tipo: "abismo", nota: "Grupo de bandidos" },
        { jp: "青銅等級試験", en: "Bronze Exam", etapa: null, tipo: "examen", examen: 2 },
        { jp: "別離の洞窟", etapa: null, tipo: null, nota: "Apuntar a bandidos" }
      ]
    },
    {
      id: "aventurero", jp: "冒険者", en: "Adventurer",
      monstruos: [],
      lugares: [
        { jp: "青銅等級試験", en: "Bronze Exam", etapa: null, tipo: "examen", examen: 2 },
        { jp: "船内 2層", en: "Ship, 2nd deck (Trade Waterways)", probable: true, etapa: 2, tipo: "abismo" },
        { jp: "光の魔窟", en: "Den of Light", etapa: 3, tipo: "den" }
      ]
    },
    {
      id: "subhumano", jp: "亜人", en: "Demi-human",
      monstruos: ["ゴブリン", "サハギン"],
      lugares: [
        { jp: "はじまりの奈落 低層", en: "Beginning Abyss, B3F Goblin Den", probable: true, etapa: 1, tipo: "abismo", nota: "Nido de goblins (el Goblin Den está en el B3F); bounty: ゴブリンダディ; apuntar a los acompañantes invocados" }
      ]
    },
    {
      id: "bestia", jp: "魔獣", en: "Beast",
      monstruos: ["ボーパルバニー", "サソリ女", "ゴーゴン"],
      lugares: [
        { jp: "水路 低層", en: "Trade Waterways (early zones)", etapa: 2, tipo: "abismo", nota: "Grupo de sahuagin" },
        { jp: "ル・ビッケンの洞窟", etapa: null, tipo: null },
        { jp: "南の洞窟", etapa: null, tipo: null, nota: "Solo en la ruta del almirante de la fortaleza" }
      ]
    },
    {
      id: "insecto", jp: "虫", en: "Insect",
      monstruos: ["奈落蟲"],
      lugares: []
    },
    {
      id: "magico", jp: "魔法生物", en: "Magical creature",
      monstruos: ["スライム", "ガスクラウド", "クリーピングコイン", "フライングソード"],
      lugares: [
        { jp: "はじまりの奈落 B6F〜", en: "Beginning Abyss B6F+ (Map Killer)", etapa: 1, tipo: "abismo", nota: "Grupos de Flying Sword" },
        { jp: "交易水路 低層", en: "Trade Waterways (early zones)", etapa: 2, tipo: "abismo", nota: "Grupos de slime" },
        { jp: "鉛等級試験", en: "Lead Exam", etapa: null, tipo: "examen", examen: 1 },
        { jp: "砂影の洞窟", en: "Plot of the Sand Shadow (event)", probable: true, etapa: null, tipo: "evento", nota: "Gas Cloud / monedas y otros" }
      ]
    },
    {
      id: "no-muerto", jp: "不死", en: "Undead",
      monstruos: ["ワイト", "ポルターガイスト", "スケルトンメイジ"],
      lugares: [
        { jp: "はじまりの奈落 B6F〜B8F", en: "Beginning Abyss B6F–B8F (Amongst the Dead)", etapa: 1, tipo: "abismo", nota: "La petición «Undead March» de este abismo sirve para subir de nivel" },
        { jp: "鉛等級試験", en: "Lead Exam", etapa: null, tipo: "examen", examen: 1, nota: "El jefe es un no-muerto y cada pocas rondas invoca enemigos extra, entre ellos esqueletos. Se puede repetir (cuenta para la semanal de 3 peticiones no diarias). Según la guía, huir reinicia los enemigos extra con los que empieza" },
        { jp: "悪霊島", en: "Island of Ghosts", etapa: null, tipo: "evento", nota: "Petición de Debra" },
        { jp: "デボラ好感度ダンジョン", en: "Debra's request dungeon", probable: true, etapa: null, tipo: "evento", nota: "Mazmorra de afinidad de Debra" },
        { jp: "不落の城塞 1〜3区", en: "Guarda Fortress, Zones 1–3", probable: true, etapa: 3, tipo: "abismo" },
        { jp: "カタコンベ", etapa: null, tipo: null }
      ]
    },
    {
      id: "aberrante", jp: "異形", en: "Aberration",
      monstruos: ["むさぼる大口"],
      lugares: [
        { jp: "王都依頼［大異形の残香］周回", etapa: null, tipo: "evento", nota: "Repetir la petición; retirarse tras 1 combate = 5 enemigos" },
        { jp: "水路依頼［敵勢力の撃退］周回", en: "Trade Waterways request: repel enemy forces", probable: true, etapa: 2, tipo: "evento", nota: "Retirarse tras 2 combates = 7 enemigos" },
        { jp: "賞金首：焦土を呼ぶ砂影", en: "Bounty: Sand Shadow", probable: true, etapa: null, tipo: "evento", nota: "Apuntar a los acompañantes invocados" }
      ]
    },
    {
      id: "demonio", jp: "悪魔", en: "Demon",
      monstruos: ["レッサーデーモン", "グレーターデーモン"],
      lugares: [
        { jp: "王都依頼［大異形の残香］周回", etapa: null, tipo: "evento", nota: "Retirarse tras 2 combates = 3 enemigos" },
        { jp: "鬼啼島", en: "Island of the Wailing Oni", etapa: null, tipo: "evento", nota: "Ruta de la 2.ª vuelta" },
        { jp: "北穿の幽霊城 5区", etapa: null, tipo: "evento", nota: "Solo fuera del periodo del evento" },
        { jp: "不落の城塞", en: "Guarda Fortress, Zones 8–9 (Combat Sentries)", probable: true, etapa: 3, tipo: "abismo", nota: "La guía en inglés lista Greater Demon + Minotaur en los centinelas de combate; Succubus en casi todos" }
      ]
    },
    {
      id: "espiritu", jp: "精霊", en: "Spirit",
      monstruos: ["イビルアイ"],
      lugares: [
        { jp: "怨嗟の洞窟", etapa: null, tipo: null, nota: "B2F este: 3 espíritus fijos, reaparecen al salir y entrar" },
        { jp: "青銅等級試験", en: "Bronze Exam", etapa: null, tipo: "examen", examen: 2, nota: "Grupos de 2–3 espíritus" },
        { jp: "ル・ビッケンの洞窟", etapa: null, tipo: null, nota: "Se pueden conseguir 4–5" }
      ]
    },
    {
      id: "planta", jp: "植物", en: "Plant",
      monstruos: ["ヒドラプラント"],
      lugares: [
        { jp: "ヴァレオン大草原", en: "Valeon Grasslands", etapa: null, tipo: null, nota: "Símbolo de slime" },
        { jp: "百花の庭", en: "Pixie and the Secret Garden (event)", probable: true, etapa: null, tipo: "evento", nota: "Conviene elegir ［ユリ］ al aceptar" },
        { jp: "", en: "Iron Exam", etapa: null, tipo: "examen", examen: 3, nota: "El jefe es un Hydra Plant (débil al aire); empieza con enemigos extra pero no invoca más" },
        { jp: "", en: "Den of Earth", etapa: 1, tipo: "den", nota: "Jefe final: Hydra Plant (tipo tierra, débil al aire). Mini jefe: Big Slime" }
      ]
    },
    {
      id: "hada", jp: "妖精", en: "Fairy",
      monstruos: ["ピクシー"],
      lugares: [
        { jp: "鉛等級試験", en: "Lead Exam", etapa: null, tipo: "examen", examen: 1, nota: "Apuntar a 6 pixies" },
        { jp: "青銅等級試験", en: "Bronze Exam", etapa: null, tipo: "examen", examen: 2, nota: "3–4 pixies" },
        { jp: "別離の洞窟", etapa: null, tipo: null, nota: "3 pixies" },
        { jp: "白亜の狼穴", en: "Alabaster Hunting (event)", probable: true, etapa: null, tipo: "evento", nota: "3 pixies" }
      ]
    },
    {
      id: "vampiro", jp: "吸血鬼", en: "Vampire",
      monstruos: ["ヴァンパイア"],
      lugares: [
        { jp: "不落の城塞 8区〜10区", en: "Guarda Fortress, Zones 8–10", probable: true, etapa: 3, tipo: "abismo", nota: "Los centinelas de combate de la Fortress 1F/2F llevan Vampires" },
        { jp: "カタコンベ", etapa: null, tipo: null }
      ]
    },
    {
      id: "gigante", jp: "巨人", en: "Giant",
      monstruos: ["ホブゴブリン", "サイクロプス", "騎士を屠るエント", "スケルトンジャイアント"],
      lugares: [
        { jp: "不落の城塞 6区〜10区", en: "Guarda Fortress, Zones 6–10", probable: true, etapa: 3, tipo: "abismo", nota: "Centinelas (símbolo de gigante); Cyclops en los de Fortress 1F/2F" },
        { jp: "豪雪地帯 教会区域", en: "Isberg, Church Grounds", etapa: 4, tipo: "abismo", nota: "Símbolo fijo al sureste" }
      ]
    },
    {
      id: "dragon", jp: "竜", en: "Dragon",
      monstruos: [],
      lugares: []
    },
    {
      id: "volador", jp: "飛行", en: "Flying", subatributo: true,
      monstruos: ["ピクシー", "フォレストホーク", "フライングソード", "ドラゴンフライ"],
      lugares: [],
      aviso: "No es una raza, es un sub-atributo (sin icono; se reconoce por el aspecto). Sirve para Ofelia / el arma «Bird Dropper» (鳥落とし). Los lugares dependen del monstruo: mira hadas (ピクシー) y las demás razas. La lista es aproximada: la fuente no deja claro cómo separa voladores y no voladores."
    }
  ],

  // Dens: mazmorras de un piso, temáticas por elemento. Mapa aleatorio en cada entrada.
  // Fuente: fasterthoughts.io/abyss-guides/dens/
  dens: [
    {
      en: "Den of Earth", elemento: "Tierra", etapa: 1,
      desbloqueo: "Tras vencer al Greater Warped One del Beginning Abyss y hablar con Arna en el gremio de la capital; se entra desde Edge of Town.",
      nota: "Es el primero. Da mena de grado bajo (gris), a veces media (roja). Equipo de tipo tierra, bueno contra enemigos de agua (Abismo 2). Mini jefe: Big Slime. Jefe final: Hydra Plant."
    },
    {
      en: "Den of Fire", elemento: "Fuego", etapa: 2,
      desbloqueo: "Aparece al desbloquear una nueva habilidad de la Right Hand of Reversal en el 4.º nivel del Trade Waterways.",
      nota: "Mayormente mena media (roja). Equipo de fuego, bueno contra enemigos de aire."
    },
    {
      en: "Den of Wind", elemento: "Viento", etapa: 2,
      desbloqueo: "Aparece al completar el Abismo 2 por primera vez.",
      nota: "Tres cuadros del mapa con varias variantes."
    },
    {
      en: "Den of Light", elemento: "Luz", etapa: 3,
      desbloqueo: "Tras detener al chantajista y salvar al duque en el Abismo 3.",
      nota: "Tiene interruptores verde y amarillo; la sala final necesita ambos. Da mena media, alta y fina."
    },
    {
      en: "Den of Water", elemento: "Agua", etapa: 4,
      desbloqueo: "Aparece al completar el Abismo 4 por segunda vez.",
      nota: "Cuatro cuadros con variantes. Equipo de grado plata."
    }
  ]
};
