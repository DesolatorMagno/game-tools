// Monstruos individuales de Wizardry Variants Daphne -> raza y lugares donde aparecen.
//
// Base generada el 2026-11-15 desde Gamerch (lista de "principales" lugares; cada fila termina en "…など",
// o sea que NO es exhaustiva): https://gamerch.com/wizardry-daphne/913125
// Más adiciones manuales: guía https://wizardry.fasterthoughts.io (exámenes, Dens), Wikiwiki (pixies) y
// lo que el usuario ha visto jugando (esqueletos en el Lead Exam).
//
// Se mantiene A MANO a partir de ahora: para agregar o corregir un monstruo, edita su entrada.
//  jp / en     nombre japonés / global (probable:true = el inglés es una deducción sin confirmar)
//  raza        id de una raza de data.js (null = la fuente no la indica)
//  especial    true = monstruo importante (jefe, etc.), no un enemigo común
//  lugares     misma forma que en data.js (jp, en, etapa, tipo, examen, nota)
window.MONSTRUOS = [
 {
  "jp": "ゴブリン",
  "en": "Goblin",
  "raza": "subhumano",
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo",
    "nota": "Piso/zona: B3F, Goblin Den"
   },
   {
    "jp": "魔窟",
    "en": "Dens (varios elementos)",
    "etapa": 1,
    "tipo": "den"
   },
   {
    "jp": "豪雪地帯",
    "en": "Isberg",
    "etapa": 4,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "ゴブリンアーチャー",
  "en": "Goblin Archer",
  "probable": true,
  "raza": "subhumano",
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo",
    "nota": "Piso/zona: B3F, Goblin Den"
   },
   {
    "jp": "魔窟",
    "en": "Dens (varios elementos)",
    "etapa": 1,
    "tipo": "den"
   },
   {
    "jp": "豪雪地帯",
    "en": "Isberg",
    "etapa": 4,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "ゴブリンメイジ",
  "en": "Goblin Mage",
  "probable": true,
  "raza": "subhumano",
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo",
    "nota": "Piso/zona: B3F, Goblin Den"
   },
   {
    "jp": "魔窟",
    "en": "Dens (varios elementos)",
    "etapa": 1,
    "tipo": "den"
   },
   {
    "jp": "豪雪地帯",
    "en": "Isberg",
    "etapa": 4,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "ゴブリンクレリック",
  "en": "Goblin Cleric",
  "probable": true,
  "raza": "subhumano",
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo",
    "nota": "Piso/zona: B3F, Goblin Den"
   },
   {
    "jp": "魔窟",
    "en": "Dens (varios elementos)",
    "etapa": 1,
    "tipo": "den"
   },
   {
    "jp": "豪雪地帯",
    "en": "Isberg",
    "etapa": 4,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "ホブゴブリン",
  "en": "Hobgoblin",
  "raza": "subhumano",
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo",
    "nota": "Piso/zona: B3F, Goblin Den"
   },
   {
    "jp": "魔術師の試練",
    "en": "Mage Trials (evento)",
    "etapa": null,
    "tipo": "evento"
   },
   {
    "jp": "魔窟",
    "en": "Dens (varios elementos)",
    "etapa": 1,
    "tipo": "den"
   },
   {
    "jp": "豪雪地帯",
    "en": "Isberg",
    "etapa": 4,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "スケルトン",
  "en": "Skeleton",
  "probable": true,
  "raza": "no-muerto",
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo",
    "nota": "Piso/zona: B7F"
   },
   {
    "jp": "鉛等級試験",
    "en": "Lead Exam",
    "etapa": null,
    "tipo": "examen",
    "examen": 1,
    "nota": "El jefe es un no-muerto y cada pocas rondas invoca enemigos extra, entre ellos esqueletos (según tu experiencia)"
   }
  ]
 },
 {
  "jp": "スケルトンアーチャー",
  "en": "Skeleton Archer",
  "probable": true,
  "raza": "no-muerto",
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo",
    "nota": "Piso/zona: B7F"
   }
  ]
 },
 {
  "jp": "スケルトンメイジ",
  "en": "Skeleton Mage",
  "raza": "no-muerto",
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo",
    "nota": "Piso/zona: B7F"
   }
  ]
 },
 {
  "jp": "スケルトンナイト",
  "en": "Skeleton Knight",
  "probable": true,
  "raza": "no-muerto",
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo",
    "nota": "Piso/zona: B7F"
   }
  ]
 },
 {
  "jp": "ポルターガイスト",
  "en": "Poltergeist",
  "raza": "no-muerto",
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "ワイト",
  "en": "Wight",
  "raza": "no-muerto",
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "スケルトンジャイアント",
  "en": "Skeleton Giant",
  "probable": true,
  "raza": "no-muerto",
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "ネクロコア",
  "en": "Necrocore",
  "raza": "no-muerto",
  "especial": true,
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   },
   {
    "jp": "",
    "en": "Copper Exam",
    "etapa": null,
    "tipo": "examen",
    "examen": 5,
    "nota": "Es el jefe (sala norte-central)"
   }
  ]
 },
 {
  "jp": "スライム",
  "en": "Slime",
  "raza": "magico",
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo"
   },
   {
    "jp": "交易水路",
    "en": "Trade Waterways",
    "etapa": 2,
    "tipo": "abismo"
   },
   {
    "jp": "魔窟",
    "en": "Dens (varios elementos)",
    "etapa": 1,
    "tipo": "den"
   },
   {
    "jp": "カタコンベ",
    "etapa": null,
    "tipo": null
   },
   {
    "jp": "豪雪地帯",
    "en": "Isberg",
    "etapa": 4,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "ガスクラウド",
  "en": "Gas Cloud",
  "raza": "magico",
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo"
   },
   {
    "jp": "古城跡",
    "en": "Old Castle Ruins (evento por temporadas)",
    "etapa": null,
    "tipo": "evento"
   },
   {
    "jp": "魔窟",
    "en": "Dens (varios elementos)",
    "etapa": 1,
    "tipo": "den"
   },
   {
    "jp": "豪雪地帯",
    "en": "Isberg",
    "etapa": 4,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "フライングソード",
  "raza": "magico",
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo",
    "nota": "Piso/zona: B7F"
   },
   {
    "jp": "魔窟",
    "en": "Dens (varios elementos)",
    "etapa": 1,
    "tipo": "den"
   },
   {
    "jp": "豪雪地帯",
    "en": "Isberg",
    "etapa": 4,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "ミミック",
  "en": "Mimic",
  "raza": "magico",
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo",
    "nota": "Piso/zona: B5F, B6F y B8F"
   },
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo",
    "nota": "Piso/zona: Zona 1"
   },
   {
    "jp": "試練の洞窟",
    "en": "Iron Exam",
    "probable": true,
    "etapa": null,
    "tipo": "examen",
    "examen": 3,
    "nota": "Piso/zona: grado hierro"
   },
   {
    "jp": "豪雪地帯",
    "en": "Isberg",
    "etapa": 4,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "ビッグスライム",
  "en": "Big Slime",
  "raza": "magico",
  "lugares": [
   {
    "jp": "交易水路",
    "en": "Trade Waterways",
    "etapa": 2,
    "tipo": "abismo"
   },
   {
    "jp": "古城跡",
    "en": "Old Castle Ruins (evento por temporadas)",
    "etapa": null,
    "tipo": "evento"
   },
   {
    "jp": "魔窟",
    "en": "Dens (varios elementos)",
    "etapa": 1,
    "tipo": "den"
   },
   {
    "jp": "カタコンベ",
    "etapa": null,
    "tipo": null
   },
   {
    "jp": "豪雪地帯",
    "en": "Isberg",
    "etapa": 4,
    "tipo": "abismo"
   },
   {
    "jp": "",
    "en": "Den of Earth",
    "etapa": 1,
    "tipo": "den",
    "nota": "Mini jefe junto al portal"
   }
  ]
 },
 {
  "jp": "クリーピングクラッド",
  "raza": "magico",
  "lugares": [
   {
    "jp": "交易水路",
    "en": "Trade Waterways",
    "etapa": 2,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "クリーピングコイン",
  "en": "Creeping Coin",
  "raza": "magico",
  "lugares": [
   {
    "jp": "交易水路",
    "en": "Trade Waterways",
    "etapa": 2,
    "tipo": "abismo"
   },
   {
    "jp": "古城跡",
    "en": "Old Castle Ruins (evento por temporadas)",
    "etapa": null,
    "tipo": "evento"
   },
   {
    "jp": "魔窟",
    "en": "Dens (varios elementos)",
    "etapa": 1,
    "tipo": "den"
   }
  ]
 },
 {
  "jp": "イビルアイ",
  "en": "Evil Eye",
  "raza": "magico",
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "奈落蟲",
  "en": "Abyssal Insect",
  "raza": "insecto",
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo"
   },
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   },
   {
    "jp": "魔窟",
    "en": "Dens (varios elementos)",
    "etapa": 1,
    "tipo": "den"
   }
  ]
 },
 {
  "jp": "フライ",
  "en": "Fly",
  "probable": true,
  "raza": "insecto",
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   },
   {
    "jp": "魔窟",
    "en": "Dens (varios elementos)",
    "etapa": 1,
    "tipo": "den"
   }
  ]
 },
 {
  "jp": "ヒドラプラント",
  "en": "Hydra Plant",
  "raza": "planta",
  "lugares": [
   {
    "jp": "草原",
    "etapa": null,
    "tipo": null
   },
   {
    "jp": "",
    "en": "Iron Exam",
    "etapa": null,
    "tipo": "examen",
    "examen": 3,
    "nota": "Es el jefe; débil al aire"
   },
   {
    "jp": "",
    "en": "Den of Earth",
    "etapa": 1,
    "tipo": "den",
    "nota": "Jefe final del den"
   }
  ]
 },
 {
  "jp": "ピクシー",
  "en": "Pixie",
  "raza": "hada",
  "lugares": [
   {
    "jp": "交易水路",
    "en": "Trade Waterways",
    "etapa": 2,
    "tipo": "abismo"
   },
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   },
   {
    "jp": "魔術師の試練",
    "en": "Mage Trials (evento)",
    "etapa": null,
    "tipo": "evento"
   },
   {
    "jp": "魔窟",
    "en": "Dens (varios elementos)",
    "etapa": 1,
    "tipo": "den"
   },
   {
    "jp": "カタコンベ",
    "etapa": null,
    "tipo": null
   },
   {
    "jp": "鉛等級試験",
    "en": "Lead Exam",
    "etapa": null,
    "tipo": "examen",
    "examen": 1,
    "nota": "Apuntar a 6 pixies"
   },
   {
    "jp": "青銅等級試験",
    "en": "Bronze Exam",
    "etapa": null,
    "tipo": "examen",
    "examen": 2,
    "nota": "3–4 pixies"
   },
   {
    "jp": "別離の洞窟",
    "etapa": null,
    "tipo": null,
    "nota": "3 pixies"
   },
   {
    "jp": "白亜の狼穴",
    "en": "Alabaster Hunting (evento)",
    "probable": true,
    "etapa": null,
    "tipo": "evento",
    "nota": "3 pixies"
   }
  ]
 },
 {
  "jp": "精霊",
  "raza": "espiritu",
  "lugares": [
   {
    "jp": "草原",
    "etapa": null,
    "tipo": null
   },
   {
    "jp": "魔術師の試練",
    "en": "Mage Trials (evento)",
    "etapa": null,
    "tipo": "evento"
   },
   {
    "jp": "魔窟",
    "en": "Dens (varios elementos)",
    "etapa": 1,
    "tipo": "den"
   },
   {
    "jp": "カタコンベ",
    "etapa": null,
    "tipo": null
   }
  ]
 },
 {
  "jp": "戦士",
  "raza": "aventurero",
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "獣人盗賊",
  "raza": "aventurero",
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "ドワーフ僧侶",
  "raza": "aventurero",
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "エルフ魔術師",
  "raza": "aventurero",
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "不機嫌な冒険者",
  "raza": "aventurero",
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "エルフ戦士",
  "raza": "aventurero",
  "lugares": [
   {
    "jp": "交易水路",
    "en": "Trade Waterways",
    "etapa": 2,
    "tipo": "abismo"
   },
   {
    "jp": "戦士の試練",
    "en": "Fighter Trials (evento)",
    "etapa": null,
    "tipo": "evento"
   },
   {
    "jp": "魔窟",
    "en": "Dens (varios elementos)",
    "etapa": 1,
    "tipo": "den"
   }
  ]
 },
 {
  "jp": "ドワーフ戦士",
  "raza": "aventurero",
  "lugares": [
   {
    "jp": "交易水路",
    "en": "Trade Waterways",
    "etapa": 2,
    "tipo": "abismo"
   },
   {
    "jp": "戦士の試練",
    "en": "Fighter Trials (evento)",
    "etapa": null,
    "tipo": "evento"
   }
  ]
 },
 {
  "jp": "盗賊",
  "raza": "aventurero",
  "lugares": [
   {
    "jp": "交易水路",
    "en": "Trade Waterways",
    "etapa": 2,
    "tipo": "abismo"
   },
   {
    "jp": "魔窟",
    "en": "Dens (varios elementos)",
    "etapa": 1,
    "tipo": "den"
   }
  ]
 },
 {
  "jp": "魔術師",
  "raza": "aventurero",
  "lugares": [
   {
    "jp": "交易水路",
    "en": "Trade Waterways",
    "etapa": 2,
    "tipo": "abismo"
   },
   {
    "jp": "魔窟",
    "en": "Dens (varios elementos)",
    "etapa": 1,
    "tipo": "den"
   }
  ]
 },
 {
  "jp": "騎士",
  "raza": "aventurero",
  "lugares": [
   {
    "jp": "交易水路",
    "en": "Trade Waterways",
    "etapa": 2,
    "tipo": "abismo"
   },
   {
    "jp": "魔窟",
    "en": "Dens (varios elementos)",
    "etapa": 1,
    "tipo": "den"
   }
  ]
 },
 {
  "jp": "手練れの盗賊",
  "raza": "aventurero",
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "僧侶",
  "raza": "aventurero",
  "lugares": [
   {
    "jp": "魔窟",
    "en": "Dens (varios elementos)",
    "etapa": 1,
    "tipo": "den"
   }
  ]
 },
 {
  "jp": "バンデット",
  "raza": "humano",
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo"
   },
   {
    "jp": "魔窟",
    "en": "Dens (varios elementos)",
    "etapa": 1,
    "tipo": "den"
   }
  ]
 },
 {
  "jp": "荒くれ者",
  "raza": "humano",
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "フットパッド",
  "raza": "humano",
  "lugares": [
   {
    "jp": "交易水路",
    "en": "Trade Waterways",
    "etapa": 2,
    "tipo": "abismo"
   },
   {
    "jp": "大草原",
    "etapa": null,
    "tipo": null
   }
  ]
 },
 {
  "jp": "パイレートバーサーカー",
  "raza": "humano",
  "lugares": [
   {
    "jp": "交易水路",
    "en": "Trade Waterways",
    "etapa": 2,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "パイレートディーコン",
  "raza": "humano",
  "lugares": [
   {
    "jp": "交易水路",
    "en": "Trade Waterways",
    "etapa": 2,
    "tipo": "abismo"
   },
   {
    "jp": "魔窟",
    "en": "Dens (varios elementos)",
    "etapa": 1,
    "tipo": "den"
   }
  ]
 },
 {
  "jp": "ネクロマンサー",
  "raza": "humano",
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "忍者",
  "raza": "humano",
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo",
    "nota": "Piso/zona: del B3F hacia abajo"
   },
   {
    "jp": "砂影の洞窟",
    "en": "Plot of the Sand Shadow (evento)",
    "probable": true,
    "etapa": null,
    "tipo": "evento"
   }
  ]
 },
 {
  "jp": "陽炎の忍",
  "raza": "humano",
  "especial": true,
  "lugares": [
   {
    "jp": "陽炎の試練",
    "etapa": null,
    "tipo": "evento"
   }
  ]
 },
 {
  "jp": "荒くれ者ボス",
  "raza": "humano",
  "especial": true,
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "ボーパルバニー",
  "en": "Vorpal Bunny",
  "raza": "bestia",
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo",
    "nota": "Piso/zona: del B4F hacia abajo"
   },
   {
    "jp": "魔窟",
    "en": "Dens (varios elementos)",
    "etapa": 1,
    "tipo": "den"
   },
   {
    "jp": "豪雪地帯",
    "en": "Isberg",
    "etapa": 4,
    "tipo": "abismo"
   },
   {
    "jp": "鉛等級試験",
    "en": "Lead Exam",
    "etapa": null,
    "tipo": "examen",
    "examen": 1,
    "nota": "Salen entre los enemigos extra con los que empieza el jefe; huir reinicia el grupo y se pueden repetir hasta que salgan solo conejos (mueren muy rápido)"
   }
  ]
 },
 {
  "jp": "ホーク",
  "en": "Hawk",
  "probable": true,
  "raza": "bestia",
  "lugares": [
   {
    "jp": "草原",
    "etapa": null,
    "tipo": null
   },
   {
    "jp": "魔窟",
    "en": "Dens (varios elementos)",
    "etapa": 1,
    "tipo": "den"
   },
   {
    "jp": "豪雪地帯",
    "en": "Isberg",
    "etapa": 4,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "サハギン",
  "en": "Sahuagin",
  "raza": "bestia",
  "lugares": [
   {
    "jp": "交易水路",
    "en": "Trade Waterways",
    "etapa": 2,
    "tipo": "abismo"
   },
   {
    "jp": "古城跡",
    "en": "Old Castle Ruins (evento por temporadas)",
    "etapa": null,
    "tipo": "evento"
   }
  ]
 },
 {
  "jp": "サハギンアーチャー",
  "en": "Sahuagin Archer",
  "probable": true,
  "raza": "bestia",
  "lugares": [
   {
    "jp": "交易水路",
    "en": "Trade Waterways",
    "etapa": 2,
    "tipo": "abismo"
   },
   {
    "jp": "古城跡",
    "en": "Old Castle Ruins (evento por temporadas)",
    "etapa": null,
    "tipo": "evento"
   }
  ]
 },
 {
  "jp": "サハギンメイジ",
  "en": "Sahuagin Mage",
  "raza": "bestia",
  "lugares": [
   {
    "jp": "交易水路",
    "en": "Trade Waterways",
    "etapa": 2,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "リザードマン",
  "en": "Lizardman",
  "probable": true,
  "raza": "bestia",
  "lugares": [
   {
    "jp": "交易水路",
    "en": "Trade Waterways",
    "etapa": 2,
    "tipo": "abismo"
   },
   {
    "jp": "魔窟",
    "en": "Dens (varios elementos)",
    "etapa": 1,
    "tipo": "den"
   }
  ]
 },
 {
  "jp": "リザードマンチャンピオン",
  "raza": "bestia",
  "lugares": [
   {
    "jp": "交易水路",
    "en": "Trade Waterways",
    "etapa": 2,
    "tipo": "abismo"
   },
   {
    "jp": "魔窟",
    "en": "Dens (varios elementos)",
    "etapa": 1,
    "tipo": "den"
   }
  ]
 },
 {
  "jp": "ミノタウロス",
  "en": "Minotaur",
  "raza": "bestia",
  "lugares": [
   {
    "jp": "交易水路",
    "en": "Trade Waterways",
    "etapa": 2,
    "tipo": "abismo"
   },
   {
    "jp": "戦士の試練",
    "en": "Fighter Trials (evento)",
    "etapa": null,
    "tipo": "evento"
   },
   {
    "jp": "",
    "en": "Steel Exam",
    "etapa": null,
    "tipo": "examen",
    "examen": 4,
    "nota": "Jefe junto a una Succubus"
   }
  ]
 },
 {
  "jp": "キメラ",
  "raza": "bestia",
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   },
   {
    "jp": "魔術師の試練",
    "en": "Mage Trials (evento)",
    "etapa": null,
    "tipo": "evento"
   },
   {
    "jp": "魔窟",
    "en": "Dens (varios elementos)",
    "etapa": 1,
    "tipo": "den"
   }
  ]
 },
 {
  "jp": "ゴーゴン",
  "raza": "bestia",
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "サソリ女",
  "en": "Scorpion Woman",
  "raza": "bestia",
  "especial": true,
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo",
    "nota": "Piso/zona: B5F"
   },
   {
    "jp": "魔術師の試練",
    "en": "Mage Trials (evento)",
    "etapa": null,
    "tipo": "evento"
   }
  ]
 },
 {
  "jp": "大怪鳥",
  "raza": "bestia",
  "especial": true,
  "lugares": [
   {
    "jp": "草原",
    "etapa": null,
    "tipo": null
   }
  ]
 },
 {
  "jp": "ビッグスノーホーク",
  "raza": "bestia",
  "lugares": [
   {
    "jp": "豪雪地帯",
    "en": "Isberg",
    "etapa": 4,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "ビッグフットチルドレン",
  "raza": "bestia",
  "lugares": [
   {
    "jp": "豪雪地帯",
    "en": "Isberg",
    "etapa": 4,
    "tipo": "abismo",
    "nota": "Piso/zona: Bigfoot Cave"
   }
  ]
 },
 {
  "jp": "スノーウルフ",
  "raza": "bestia",
  "lugares": [
   {
    "jp": "豪雪地帯",
    "en": "Isberg",
    "etapa": 4,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "ビッグフット",
  "raza": "bestia",
  "lugares": [
   {
    "jp": "豪雪地帯",
    "en": "Isberg",
    "etapa": 4,
    "tipo": "abismo",
    "nota": "Piso/zona: Bigfoot Cave"
   }
  ]
 },
 {
  "jp": "スノーウルフリーダー",
  "raza": "bestia",
  "lugares": [
   {
    "jp": "豪雪地帯",
    "en": "Isberg",
    "etapa": 4,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "呪いの藁人形",
  "en": "Cursed Sack Doll",
  "raza": "demonio",
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "サキュバス",
  "en": "Succubus",
  "raza": "demonio",
  "lugares": [
   {
    "jp": "交易水路",
    "en": "Trade Waterways",
    "etapa": 2,
    "tipo": "abismo"
   },
   {
    "jp": "魔窟",
    "en": "Dens (varios elementos)",
    "etapa": 1,
    "tipo": "den"
   },
   {
    "jp": "カタコンベ",
    "etapa": null,
    "tipo": null
   },
   {
    "jp": "",
    "en": "Steel Exam",
    "etapa": null,
    "tipo": "examen",
    "examen": 4,
    "nota": "Jefe junto a un Minotaur"
   }
  ]
 },
 {
  "jp": "レッサーデーモン",
  "en": "Lesser Demon",
  "probable": true,
  "raza": "demonio",
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "グレーターデーモン",
  "en": "Greater Demon",
  "raza": "demonio",
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   },
   {
    "jp": "別離の洞窟",
    "etapa": null,
    "tipo": null
   }
  ]
 },
 {
  "jp": "ヴァンパイア",
  "en": "Vampire",
  "raza": "vampiro",
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   },
   {
    "jp": "戦士の試練",
    "en": "Fighter Trials (evento)",
    "etapa": null,
    "tipo": "evento"
   },
   {
    "jp": "別離の洞窟",
    "etapa": null,
    "tipo": null
   }
  ]
 },
 {
  "jp": "サイクロプス",
  "en": "Cyclops",
  "raza": "gigante",
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "雪山サイクロプス",
  "raza": "gigante",
  "lugares": [
   {
    "jp": "豪雪地帯",
    "en": "Isberg",
    "etapa": 4,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "火竜",
  "raza": "dragon",
  "especial": true,
  "lugares": [
   {
    "jp": "サハギンの洞窟",
    "etapa": null,
    "tipo": null
   }
  ]
 },
 {
  "jp": "赤き紡ぐ女",
  "en": "Red Spinner Woman",
  "raza": "aberrante",
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "むさぼる大口",
  "raza": "aberrante",
  "especial": true,
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "エント",
  "raza": "aberrante",
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo",
    "nota": "Piso/zona: del B3F hacia abajo"
   }
  ]
 },
 {
  "jp": "死病のクルー",
  "raza": "aberrante",
  "especial": true,
  "lugares": [
   {
    "jp": "交易水路",
    "en": "Trade Waterways",
    "etapa": 2,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "オールコレクター",
  "raza": "aberrante",
  "especial": true,
  "lugares": [
   {
    "jp": "交易水路",
    "en": "Trade Waterways",
    "etapa": 2,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "メルジーナ",
  "raza": "aberrante",
  "especial": true,
  "lugares": [
   {
    "jp": "交易水路",
    "en": "Trade Waterways",
    "etapa": 2,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "砂の影",
  "raza": "aberrante",
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "石人",
  "raza": "aberrante",
  "lugares": [
   {
    "jp": "豪雪地帯",
    "en": "Isberg",
    "etapa": 4,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "嘆きの石人",
  "raza": "aberrante",
  "lugares": [
   {
    "jp": "豪雪地帯",
    "en": "Isberg",
    "etapa": 4,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "ヘルムート",
  "en": "Helmut",
  "probable": true,
  "raza": "aberrante",
  "especial": true,
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "オクトナラス",
  "raza": "aberrante",
  "especial": true,
  "lugares": [
   {
    "jp": "交易水路",
    "en": "Trade Waterways",
    "etapa": 2,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "ボルダオン",
  "raza": "aberrante",
  "especial": true,
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "ゴーレム",
  "en": "Golem",
  "probable": true,
  "raza": null,
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   },
   {
    "jp": "カタコンベ",
    "etapa": null,
    "tipo": null
   }
  ]
 },
 {
  "jp": "賭場の見張りB",
  "raza": null,
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "賭博のサイコロ師",
  "raza": null,
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "軽薄な賭博師",
  "raza": null,
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "用心棒",
  "raza": null,
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "元締めサッチャー",
  "raza": null,
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "コロージョンアイ",
  "raza": null,
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "防御型ゴーレム",
  "raza": null,
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "攻撃型ゴーレム",
  "raza": null,
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "文無しの冒険者B",
  "raza": null,
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "顔色の悪い冒険者",
  "raza": null,
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "排魔の邪教戦士",
  "raza": null,
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "文無しの冒険者A",
  "raza": null,
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "闘技場の挑戦者狩り",
  "raza": null,
  "lugares": [
   {
    "jp": "交易水路",
    "en": "Trade Waterways",
    "etapa": 2,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "落ちぶれた騎士",
  "raza": null,
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "雇われの騎士",
  "raza": null,
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "魔術師の執念",
  "raza": null,
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "フゴ",
  "raza": null,
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "歌姫マリン",
  "raza": null,
  "especial": true,
  "lugares": [
   {
    "jp": "交易水路",
    "en": "Trade Waterways",
    "etapa": 2,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "私達の栄華",
  "en": "Our Heirlooms",
  "raza": null,
  "especial": true,
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   }
  ]
 },
 {
  "jp": "死の神モルグス",
  "en": "Morgus, God of Death",
  "raza": null,
  "especial": true,
  "lugares": [
   {
    "jp": "カタコンベ",
    "etapa": null,
    "tipo": null
   }
  ]
 },
 {
  "jp": "悪魔アグナ",
  "raza": null,
  "especial": true,
  "lugares": [
   {
    "jp": "悪魔の住処",
    "etapa": null,
    "tipo": null
   }
  ]
 }
];
