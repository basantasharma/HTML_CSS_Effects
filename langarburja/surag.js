let tiles = document.querySelectorAll(".tile");
let startBtn = document.querySelector("#start-btn");
let playBtn = document.querySelector("#gholni-btn");
let result = document.querySelector("#result");
let output = document.querySelector("#output");
let choice = document.querySelector("#choice");
let data = null;
let arr = ["Hukum", "Burja", "Paan", "Chidi", "Jhandi", "Etta"];

let newGame = function () {
  data = null;
  result.innerText = "";
  output.innerText = "";
  choice.innerText = "";
  tiles.forEach(function (tile, index) {
    tile.style.cursor = "pointer";
    tile.style.backgroundColor = "darkgray";
    tile.addEventListener("click", function () {
      data = index;
      playBtn.disabled = false;
      choice.innerHTML = arr[data];
      tile.style.backgroundColor = "orange";
    });
  });
};

let randNum = function () {
  return Math.floor(Math.random() * 6);
};

let gholni = function () {
  playBtn.disabled = true;
  n = randNum();
  output.innerText = arr[n];
  if (data == n) {
    result.innerHTML = "Won!";
  } else {
    result.innerHTML = "Lost!";
    tiles[data].style.backgroundColor = "red";
  }
  tiles[n].style.backgroundColor = "lime";
  for (let tile of tiles) {
    tile.style.cursor = "auto";
  }
};

startBtn.addEventListener("click", newGame);
playBtn.addEventListener("click", gholni);
