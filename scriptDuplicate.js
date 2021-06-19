const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const audioElement = document.getElementById("audio");
const container = document.getElementById("container");
const playBtn = document.querySelector("#play");
const musicContainer = document.querySelector(".music-container");
var totalDuration = 0;

let col = [];
let obj = {};

for (let i = 0; i < 100; i++) {
  obj[i + 1] = null;
  col.push(Math.random() * 100);
}

container.addEventListener("click", function (e) {
  const { clientX } = e;
  let { duration, currentTime } = audioElement;
  // let duration = Math.floor((e.clientX/1295)*100)-4
  //   let newVal = (totalDuration * duration) / 100 / 60;
  let progress = (e.offsetX / e.srcElement.clientWidth) * duration;
  let percent = Math.floor((progress / duration) * 100);
  audioElement.currentTime = progress;
  createColumns(col, "grey", 100);
  for (let i = 0; i <= percent; i++) {
    createColumns(col, "green", i);
    console.log(i);
  }
});

createColumns(col, "grey", 100);

function createColumns(col, color, len) {
  ctx.fillStyle = color;

  let x = 0;

  for (let i = 0; i < len; i++) {
    ctx.fillRect(x, 250, 7, col[i] * -1);
    x += 13;
  }
  let y = 0;
  for (let i = 0; i < len; i++) {
    ctx.fillRect(y, 250, 7, col[i] * 1);
    y += 13;
  }
}

ctx.fillStyle = "green";
count = 0;

function songProgress(e) {
  const { duration, currentTime } = e.srcElement;
  let percent = Math.floor((currentTime / duration) * 100);
  ctx.fillRect(percent * 13, 250, 7, col[percent] * -1);
  ctx.fillRect(percent * 13, 250, 7, col[percent] * 1);
}
audioElement.addEventListener("timeupdate", songProgress);

function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");

  audio.pause();
}

function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  audio.play();
}

playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// /////////
ctx.beginPath();
ctx.moveTo(150, 250);
ctx.lineTo(150, 100);
ctx.strokeStyle = "green";
ctx.lineWidth = "2";
ctx.stroke();
ctx.fillStyle = "green";
ctx.fillRect(100, 100, 100, 50);
// ctx.fillStyle ="red"
