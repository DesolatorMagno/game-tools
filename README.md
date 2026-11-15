# game-tools

Herramientas web sencillas para juegos. Cada juego vive en su propia carpeta, con su propio estilo y datos; no hay código compartido entre juegos a propósito.

Son sitios estáticos (HTML, CSS y JS sin build ni dependencias).

## Juegos

- [`wizardry-daphne/`](wizardry-daphne/): Wizardry Variants Daphne (versión global). Dado un tipo de monstruo, o un monstruo concreto, indica dónde cazarlo, filtrando por tu progreso en la historia y por los exámenes de grado aprobados.

## Ver el sitio

```
python3 -m http.server 8000
```

Luego abre `http://localhost:8000/`.

## Wizardry Daphne: datos

- `data.js`: razas, lugares, exámenes de grado y Dens.
- `monstruos.js`: monstruos individuales. Se edita a mano; la base se generó el 2026-11-15 desde Gamerch.
- Los nombres en inglés marcados `probable: true` son deducciones, sin confirmar en el juego.

Fuentes:
- Wikiwiki (JP): https://wikiwiki.jp/wiz_daphne/モンスター
- Gamerch (JP): https://gamerch.com/wizardry-daphne/913125
- Guía comunitaria en inglés: https://wizardry.fasterthoughts.io/abyss-guides/1-beginning-abyss/maps/

## Fuentes y créditos

Todo el origen de los datos está documentado en [`FUENTES.md`](FUENTES.md).
