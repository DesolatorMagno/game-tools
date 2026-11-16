// Monstruos individuales de Wizardry Variants Daphne -> raza y lugares donde aparecen.
//
// Base generada el 2026-11-15 desde Gamerch (lista de "principales" lugares; cada fila termina en "…など",
// o sea que NO es exhaustiva): https://gamerch.com/wizardry-daphne/913125
// Nombres en inglés: el compendio del propio juego (lista que pasó el usuario, transcrita con OCR de Gemini y
// revisada por él contra las capturas el 2026-11-16) cruzado por número de bestiario con Gamerch; los de monstruos que el usuario aún no ha
// visto salen de la wiki en inglés (wiki.gg) o de la guía de fasterthoughts.io.
// Más adiciones manuales: guía https://wizardry.fasterthoughts.io (exámenes, Dens), Wikiwiki (pixies) y
// lo que el usuario ha visto jugando (esqueletos en el Lead Exam).
//
// Se mantiene A MANO a partir de ahora: para agregar o corregir un monstruo, edita su entrada.
//  jp / en     nombre japonés / global (probable:true = el inglés es una deducción sin confirmar)
//  no          número de bestiario (compendio), si se conoce
//  v           variantes con otro nombre (por elemento o nivel: Red Goblin, Earth Slime...)
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
  ],
  "no": 1,
  "v": [
   "Red Goblin"
  ]
 },
 {
  "jp": "ゴブリンアーチャー",
  "en": "Goblin Archer",
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
  ],
  "no": 3,
  "v": [
   "Red Goblin Archer"
  ]
 },
 {
  "jp": "ゴブリンメイジ",
  "en": "Goblin Mage",
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
  ],
  "no": 4,
  "v": [
   "Red Goblin Mage"
  ]
 },
 {
  "jp": "ゴブリンクレリック",
  "en": "Goblin Cleric",
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
  ],
  "no": 5,
  "v": [
   "Red Goblin Cleric"
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
  ],
  "no": 2,
  "v": [
   "Earth Hobgoblin",
   "Elite Hobgoblin",
   "Red Hobgoblin"
  ]
 },
 {
  "jp": "スケルトン",
  "en": "Skeleton",
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
  ],
  "no": 11
 },
 {
  "jp": "スケルトンアーチャー",
  "en": "Skeleton Archer",
  "raza": "no-muerto",
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo",
    "nota": "Piso/zona: B7F"
   }
  ],
  "no": 12
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
  ],
  "no": 13
 },
 {
  "jp": "スケルトンナイト",
  "en": "Skeleton Knight",
  "raza": "no-muerto",
  "lugares": [
   {
    "jp": "はじまりの奈落",
    "en": "Beginning Abyss",
    "etapa": 1,
    "tipo": "abismo",
    "nota": "Piso/zona: B7F"
   }
  ],
  "no": 14
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
  ],
  "no": 60
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
  ],
  "no": 61
 },
 {
  "jp": "スケルトンジャイアント",
  "en": "Skeleton Giant",
  "raza": "no-muerto",
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   }
  ],
  "no": 62
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
  ],
  "no": 1013
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
  ],
  "no": 7,
  "v": [
   "Earth Slime",
   "Fire Slime",
   "Water Slime"
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
  ],
  "no": 9,
  "v": [
   "Earth Gas Cloud",
   "Fire Cloud"
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
  ],
  "no": 15,
  "en": "Flying Sword"
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
  ],
  "no": 16
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
  ],
  "no": 29,
  "v": [
   "Dark Big Slime",
   "Earth Big Slime"
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
  ],
  "no": 30,
  "en": "Creeping Crud"
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
  ],
  "no": 31,
  "v": [
   "Earth Creeping Coins"
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
  ],
  "no": 52
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
  ],
  "no": 8,
  "v": [
   "Desert Insect",
   "Volcano Insect"
  ]
 },
 {
  "jp": "フライ",
  "en": "Dragon Fly",
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
  ],
  "no": 54,
  "v": [
   "Desert Fly",
   "Flame Fly"
  ]
 },
 {
  "jp": "ヒドラプラント",
  "en": "Hydra Plant",
  "raza": "planta",
  "lugares": [
   {
    "jp": "ヴァレオン大草原",
    "etapa": null,
    "tipo": null,
    "en": "Valeon Grasslands"
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
  ],
  "no": 1011
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
  ],
  "no": 44,
  "v": [
   "Earth Pixie",
   "Fire Pixie"
  ]
 },
 {
  "jp": "精霊",
  "raza": "espiritu",
  "lugares": [
   {
    "jp": "ヴァレオン大草原",
    "etapa": null,
    "tipo": null,
    "en": "Valeon Grasslands"
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
  ],
  "no": 45,
  "en": "Air Entity",
  "v": [
   "Dark Entity",
   "Fire Entity"
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
  ],
  "no": 18,
  "en": "Novice Fighter"
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
  ],
  "no": 19,
  "en": "Novice Beast Thief"
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
  ],
  "no": 20,
  "en": "Novice Dwarf Priest"
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
  ],
  "no": 21,
  "en": "Novice Elf Mage"
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
  ],
  "no": 23,
  "en": "Snippy Adventurer"
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
  ],
  "no": 39,
  "en": "Average Elf Fighter"
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
  ],
  "no": 40,
  "en": "Average Dwarf Fighter"
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
  ],
  "no": 41,
  "en": "Average Thief"
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
  ],
  "no": 42,
  "en": "Average Mage"
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
  ],
  "no": 43,
  "en": "Average Knight"
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
  ],
  "no": 63,
  "en": "Skilled Thief"
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
  ],
  "no": 10143
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
  ],
  "no": 6,
  "en": "Bandit",
  "v": [
   "Zealot Bandit"
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
  ],
  "no": 22,
  "en": "Ruffian"
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
    "jp": "ヴァレオン大草原",
    "etapa": null,
    "tipo": null,
    "en": "Valeon Grasslands"
   }
  ],
  "no": 34,
  "en": "Footpad"
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
  ],
  "no": 37,
  "en": "Pirate Berserker"
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
  ],
  "no": 38,
  "en": "Pirate Deacon"
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
  ],
  "no": 59,
  "en": "Necromancer"
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
  ],
  "no": 111,
  "en": "Ninja",
  "v": [
   "Amber Ninja",
   "Indigo Ninja"
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
  ],
  "no": 1017
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
  ],
  "no": 1002
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
  ],
  "no": 10
 },
 {
  "jp": "ホーク",
  "en": "Forest Hawk",
  "raza": "bestia",
  "lugares": [
   {
    "jp": "ヴァレオン大草原",
    "etapa": null,
    "tipo": null,
    "en": "Valeon Grasslands"
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
  ],
  "no": 46,
  "v": [
   "Volcano Hawk"
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
  ],
  "no": 25,
  "v": [
   "Earth Sahuagin"
  ]
 },
 {
  "jp": "サハギンアーチャー",
  "en": "Sahuagin Archer",
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
  ],
  "no": 26,
  "v": [
   "Earth Sahuagin Archer"
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
  ],
  "no": 27
 },
 {
  "jp": "リザードマン",
  "en": "Lizardman",
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
  ],
  "no": 32
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
  ],
  "no": 33,
  "en": "Lizardman Champion"
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
  ],
  "no": 35
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
  ],
  "no": 57
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
  ],
  "no": 58,
  "en": "Gorgon"
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
  ],
  "no": 1001
 },
 {
  "jp": "大怪鳥",
  "raza": "bestia",
  "especial": true,
  "lugares": [
   {
    "jp": "ヴァレオン大草原",
    "etapa": null,
    "tipo": null,
    "en": "Valeon Grasslands"
   }
  ],
  "no": 1012
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
  ],
  "no": 173
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
  ],
  "no": 174
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
  ],
  "no": 182
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
  ],
  "no": 1023
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
  ],
  "no": 1024
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
  ],
  "no": 17
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
  ],
  "no": 36
 },
 {
  "jp": "レッサーデーモン",
  "en": "Lesser Demon",
  "raza": "demonio",
  "lugares": [
   {
    "jp": "不落の城塞",
    "en": "Guarda Fortress",
    "etapa": 3,
    "tipo": "abismo"
   }
  ],
  "no": 48
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
  ],
  "no": 49
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
  ],
  "no": 53
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
  ],
  "no": 50
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
  ],
  "no": 168
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
  ],
  "no": 24
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
  ],
  "no": 1003
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
  ],
  "no": 1004
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
  ],
  "no": 1006
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
  ],
  "no": 1007
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
  ],
  "no": 1009
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
  ],
  "no": 64
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
  ],
  "no": 176
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
  ],
  "no": 177
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
  ],
  "no": 1005
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
  ],
  "no": 1010
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
  ],
  "no": 1015
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
  ],
  "no": 56
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
  ],
  "no": 117
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
  ],
  "no": 118
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
  ],
  "no": 120
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
  ],
  "no": 125
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
  ],
  "no": 126
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
  ],
  "no": 128
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
  ],
  "no": 130
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
  ],
  "no": 131
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
  ],
  "no": 135
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
  ],
  "no": 136
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
  ],
  "no": 138
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
  ],
  "no": 142
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
  ],
  "no": 143
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
  ],
  "no": 147
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
  ],
  "no": 148
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
  ],
  "no": 150
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
  ],
  "no": 156
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
  ],
  "no": 1008
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
  ],
  "no": 1014
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
  ],
  "no": 1016
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
  ],
  "no": 1018
 }
];
