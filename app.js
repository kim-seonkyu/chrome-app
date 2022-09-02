// Use if/else etc.
// JS Challenge 2

let body = document.querySelector("body");
let h1 = document.querySelector("h1");
h1.style.color = "white";

function handleWindowSize() {
  let width = window.innerWidth;

  if (width > 800) {
    body.style.backgroundColor = "DarkOrange";
  } else if (width <= 800 && width >= 600) {
    body.style.backgroundColor = "DarkOrchid";
  } else {
    body.style.backgroundColor = "DodgerBlue";
  }
}

window.addEventListener("resize", handleWindowSize);
