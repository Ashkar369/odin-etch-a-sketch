# Etch-a-Sketch – The Odin Project

A browser sketch pad for **The Odin Project Foundations – JavaScript Basics**, built with plain HTML, CSS and JavaScript.

- **Live:** https://ashkar369.github.io/odin-etch-a-sketch/
- **Author:** Ashkar Siyad – Web Technologies, Riga Nordic University

## Features
- Starts with a **16 × 16 grid** of `div`s that JavaScript creates.
- The squares are laid out with **flexbox** (`flex-wrap: wrap`). Each square is `100 / size` percent wide, so the board always stays the same size.
- Moving the mouse over a square colours it.
- The **New grid size** button asks for a size from 1 to **100** and rejects anything else.
- **Extra credit:**
  - **Random colours** mode gives every square a random `rgb()` colour.
  - **Darken** mode adds 10% opacity on each pass, so a square is fully black after 10 passes.
- A **Clear** button and touch support for phones.

## How it works
| Step | Code | Concept |
|---|---|---|
| Build the grid | `createGrid(size)`: a `for` loop runs `size * size` times, and each time `createElement("div")` + `append` | Loops, DOM manipulation |
| Size the squares | `square.style.flexBasis = (100 / size) + "%"` | Flexbox, arithmetic |
| Draw | **One** `mouseover` listener on the board checks `event.target`, which is **event delegation** | DOM events |
| New size | `prompt()` → `Number()` → `Number.isInteger` and the 1–100 range check | Conditionals, validation |
| Darken | Each square stores `data-passes`, and `opacity = passes / 10` | Data attributes, numbers |

Search the code for `BASICS:` to find each concept.
