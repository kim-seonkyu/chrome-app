// Use if/else etc.
// JS Challenge 2

let body = document.querySelector("body");
let h1 = document.querySelector("h1");
h1.style.color = "white";

function handleWindowSize() {
  let width = window.innerWidth;

  if (width > 800) {
    body.style.backgroundColor = "#EEBC12";
  } else if (width <= 800 && width >= 600) {
    body.style.backgroundColor = "#904FAD";
  } else {
    body.style.backgroundColor = "#2E8CD5";
  }
}

window.addEventListener("resize", handleWindowSize);
