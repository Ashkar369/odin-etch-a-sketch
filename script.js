// =====================================================================
// Etch-a-Sketch – The Odin Project Foundations (JavaScript Basics)
// =====================================================================

const board = document.getElementById("board");
const info = document.getElementById("info");
const MAX_SIZE = 100;
let gridSize = 16;

// BASICS: function – builds a size × size grid of divs
function createGrid(size) {
  // BASICS: DOM manipulation – remove the old squares first
  board.replaceChildren();

  // Each square's width is a percentage, so the board size never changes
  const percent = 100 / size;

  // BASICS: loop – size × size squares
  for (let i = 0; i < size * size; i++) {
    // BASICS: DOM – createElement + append
    const square = document.createElement("div");
    square.className = "square";
    square.style.flexBasis = `${percent}%`;
    square.style.height = `${percent}%`;
    square.dataset.passes = "0";
    board.append(square);
  }
  info.textContent = `${size} × ${size} grid (${size * size} squares)`;
}

// BASICS: function – a random rgb() colour
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// BASICS: object – reads the checked radio button
function getMode() {
  return document.querySelector('input[name="mode"]:checked').value;
}

function paint(square) {
  const mode = getMode();
  // BASICS: Number() + data attribute – how many times the mouse passed here
  const passes = Math.min(Number(square.dataset.passes) + 1, 10);
  square.dataset.passes = String(passes);

  // BASICS: conditionals
  if (mode === "rainbow") {
    square.style.backgroundColor = randomColor();
    square.style.opacity = "1";
  } else if (mode === "darken") {
    // Extra credit: each pass adds 10% darkness, fully black after 10 passes
    square.style.backgroundColor = "black";
    square.style.opacity = String(passes / 10);
  } else {
    square.style.backgroundColor = "black";
    square.style.opacity = "1";
  }
}

// BASICS: DOM event listener – ONE listener on the board (event delegation)
board.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("square")) paint(event.target);
});

// Touch screens: draw while the finger moves
board.addEventListener("touchmove", (event) => {
  event.preventDefault();
  const t = event.touches[0];
  const el = document.elementFromPoint(t.clientX, t.clientY);
  if (el && el.classList.contains("square")) paint(el);
}, { passive: false });

// BASICS: DOM event listener + prompt + input validation
document.getElementById("sizeBtn").addEventListener("click", () => {
  const answer = prompt(`Squares per side? (1–${MAX_SIZE})`, gridSize);
  if (answer === null) return; // user pressed Cancel
  const size = Number(answer);
  // BASICS: logical operators – reject text, decimals and numbers out of range
  if (!Number.isInteger(size) || size < 1 || size > MAX_SIZE) {
    alert(`Please enter a whole number from 1 to ${MAX_SIZE}.`);
    return;
  }
  gridSize = size;
  createGrid(gridSize);
});

document.getElementById("clearBtn").addEventListener("click", () => createGrid(gridSize));

createGrid(gridSize);
