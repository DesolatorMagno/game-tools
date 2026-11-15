# Fuentes y créditos

Toda la información de `wizardry-daphne/` viene de las páginas de abajo, consultadas el **2026-11-15**. Los datos están reorganizados y traducidos al español; no se copian textos completos. Las ediciones de cada página pueden haber cambiado desde entonces.

Este proyecto es personal, sin fines de lucro y sin relación con los creadores del juego ni con los sitios citados. *Wizardry Variants Daphne* y sus nombres pertenecen a sus respectivos titulares.

## Páginas consultadas

| Fuente | Qué se tomó | Dónde se usa |
|---|---|---|
| [Wikiwiki: モンスター](https://wikiwiki.jp/wiz_daphne/モンスター) (JP, edición del 2026-10-17) | Tabla "raza → lugares donde cazarla", sus notas (cantidades, rutas, repeticiones) y el sub-atributo "volador" | `wizardry-daphne/data.js` (razas y lugares) |
| [Gamerch: 敵の種族と出現場所一覧](https://gamerch.com/wizardry-daphne/913125) (JP, edición del 2026-10-25) | Lista de unos 106 monstruos con su raza y sus lugares principales (la fuente no es exhaustiva: cada fila cierra con "…など") | `wizardry-daphne/monstruos.js` (base de monstruos) |
| [Guía comunitaria de fasterthoughts.io](https://wizardry.fasterthoughts.io/abyss-guides/1-beginning-abyss/maps/) (EN) | Nombres globales de los abismos y pisos, orden de la historia, exámenes de grado (orden, jefes, mecánicas) y los cinco Dens (condiciones de desbloqueo) | `data.js` (progreso, exámenes, Dens), `monstruos.js` (jefes de examen) |
| [Wizardry Wiki (wiki.gg): Monsters](https://wizardry.wiki.gg/wiki/Wizardry_Variants_Daphne/Monsters) (EN) | Nombres en inglés de unos 25 monstruos | `monstruos.js` (campo `en`) |

Dentro de la guía de fasterthoughts.io se consultaron estas secciones: Beginning Abyss, Port Town / Grand Legion (Trade Waterways), Guarda Fortress, Isberg, Grade Exams, y Den of Earth / Fire / Wind / Light / Water.

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
