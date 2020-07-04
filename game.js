// Consider one click
// before the click:
// 1. create a random shape
//    1. random color
//    2. random position
//    3. random size
// 2. get the start time

// onclick
// 1. get end time
// 2. get duration = end - start
// 3. display the duration
// 4. make the shape disappear

// let start = new Date().getTime()

// let end = new Date().getTime()
// let duration = (end - start)/1000 // how many secondes in between

// How to get started

// document.querySelector('body').onload =

let start = new Date().getTime();

const shape = document.getElementById("shape");

document.addEventListener("DOCContentLoaded", game());
function game() {
  makeShape();
}

function makeShape() {
  // 1. create a random shape
  //    1. random color
  //    2. random position
  //    3. random size

  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  const t = Math.random() * (windowHeight - 150 - 150);
  const l = Math.random() * (windowWidth - 150);
  shape.style.top = t + "px";
  shape.style.left = l + "px";

  const side = Math.random() * 100 + 50;
  shape.style.height = side + "px";
  shape.style.width = side + "px";

  shape.style.backgroundColor = generateRandomColor();

  if (Math.random() > 0.5) {
    shape.style.borderRadius = "50%";
  } else {
    shape.style.borderRadius = "0";
  }

  shape.style.display = "block";

  // 2. get the start time
  start = new Date().getTime();
  console.log(start);
}

// onclick
shape.onclick = showReaction;

function showReaction() {
  // 1. get end time
  let end = new Date().getTime();
  // 2. get duration = end - start
  let duration = (end - start) / 1000;
  // 3. display the duration
  document.getElementById("timeTaken").innerHTML = duration + "s";
  // 4. make the shape disappear
  shape.style.display = "none";
  // repeat the game!!!
  setTimeout(makeShape, 2000);
}

function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = "RGB(" + r + ", " + g + ", " + b + ")";
  return color;
}