# Fuentes y créditos

Toda la información de `wizardry-daphne/` y `reverse-1999/` viene de las páginas de abajo, consultadas el **2026-11-15**. Los datos están reorganizados y traducidos al español; no se copian textos completos. Las ediciones de cada página pueden haber cambiado desde entonces.

Este proyecto es personal, sin fines de lucro y sin relación con los creadores del juego ni con los sitios citados. *Wizardry Variants Daphne* y sus nombres pertenecen a sus respectivos titulares.

## Páginas consultadas

| Fuente | Qué se tomó | Dónde se usa |
|---|---|---|
| [Wikiwiki: モンスター](https://wikiwiki.jp/wiz_daphne/モンスター) (JP, edición del 2026-10-17) | Tabla "raza → lugares donde cazarla", sus notas (cantidades, rutas, repeticiones) y el sub-atributo "volador" | `wizardry-daphne/data.js` (razas y lugares) |
| [Gamerch: 敵の種族と出現場所一覧](https://gamerch.com/wizardry-daphne/913125) (JP, edición del 2026-10-25) | Lista de unos 106 monstruos con su raza y sus lugares principales (la fuente no es exhaustiva: cada fila cierra con "…など") | `wizardry-daphne/monstruos.js` (base de monstruos) |
| [Guía comunitaria de fasterthoughts.io](https://wizardry.fasterthoughts.io/abyss-guides/1-beginning-abyss/maps/) (EN) | Nombres globales de los abismos y pisos, orden de la historia, exámenes de grado (orden, jefes, mecánicas) y los cinco Dens (condiciones de desbloqueo) | `data.js` (progreso, exámenes, Dens), `monstruos.js` (jefes de examen) |
| [Wizardry Wiki (wiki.gg): Monsters](https://wizardry.wiki.gg/wiki/Wizardry_Variants_Daphne/Monsters) (EN) | Nombres en inglés de unos 25 monstruos | `monstruos.js` (campo `en`) |

Dentro de la guía de fasterthoughts.io se consultaron estas secciones: Beginning Abyss, Port Town / Grand Legion (Trade Waterways), Guarda Fortress, Isberg, Grade Exams, y Den of Earth / Fire / Wind / Light / Water.

### Reverse: 1999 (`reverse-1999/data.js`)

| Fuente | Qué se tomó |
|---|---|
| [HostedGG: Reverse: 1999 Wiki](https://hostedgg.com/wiki/reverse-1999/) (EN, fichas leídas el 2026-11-15) | Afflatus, tipo de daño y etiquetas de rol de unos 100 personajes de 5★ y 6★ |
| Guías de fans: [allthings.how (Coppélia)](https://allthings.how/how-to-build-coppelia-in-reverse-1999-skills-psychubes-teams/), [Prydwen (Coppélia)](https://prydwen.gg/re1999/characters/coppelia), [allthings.how (The Twins)](https://allthings.how/reverse-1999-how-to-build-the-twins-the-first-dual-afflatus-arcanist/) | Datos de Coppélia y The Twins, que no están en HostedGG |
| [Prydwen: The Twins](https://www.prydwen.gg/re1999/characters/the-twins) (la web bloquea la descarga automática; se consultó por resumen de búsqueda) | Afflatus de The Twins (Mineral; el segundo, Star, viene de allthings.how) |

Se leyeron datos factuales (atributos de personajes); no se copió arte ni textos. Los personajes de las versiones 3.8 y 3.9 (Everecho, Cornerstone, Hedone y Narcissus) no traen tipo de daño en la fuente, y The Twins tiene Afflatus doble (Mineral + Star según Prydwen y allthings.how) por confirmar en el juego. Los cuatro personajes recientes están marcados para completar a mano.

La colección personal (qué personajes tengo y mis equipos) NO está en el repositorio: vive en `reverse-1999/mis-personajes.js`, que está en `.gitignore`.

## Observaciones propias

Algunos datos vienen de la experiencia de juego del autor, no de una página:
- Los exámenes de grado se pueden repetir, y cada personaje debe aprobarlos para subir de nivel.
- En el Lead Exam, el jefe invoca enemigos extra, entre ellos esqueletos.

## Lo que no está confirmado

- Los nombres en inglés marcados `probable: true` en los datos son deducciones, no están confirmados en el juego.
- Una hoja de cálculo comunitaria que apareció en búsquedas ya no existe (error 410) y no se usó.
- Los datos de los sitios japoneses se tradujeron del japonés; puede haber matices perdidos.

## Cómo corregir un dato

Edita la entrada en `wizardry-daphne/data.js` o `wizardry-daphne/monstruos.js` y, si cambia la fuente, actualiza esta tabla.
