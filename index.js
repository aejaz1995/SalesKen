const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const audioElement = document.getElementById("audio");
const container = document.getElementById("canvas-container");
const playBtn = document.querySelector("#play");
const musicContainer = document.querySelector(".music-btn-container");




let col = [];
// there are 100 columns
for (let i = 0; i < 100; i++) {
  col.push(Math.random() * 100);
}

// this function handles whenver user clicks on whichever music column music, continues from that point
container.addEventListener("click", function (e) {
  const { clientX } = e;
  let { duration } = audioElement;
  let progress = (e.offsetX / e.srcElement.clientWidth) * duration;
  let percent = Math.floor((progress / duration) * 100);
  audioElement.currentTime = progress;

  //   reapainting after clicks for columns which have not played giving grey color
  createColumns(col, "grey", 100);
  //   loop painting column with color:#ff6666,which already passed
  for (let i = 0; i <= percent; i++) {
    createColumns(col, "#ff6666", i);
  }
});

createColumns(col, "grey", 100);

// painting of columns
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

function songProgress(e) {
  const { duration, currentTime } = e.srcElement;
  let percent = Math.floor((currentTime / duration) * 100);
  ctx.fillRect(percent * 13, 250, 7, col[percent] * -1);
  ctx.fillRect(percent * 13, 250, 7, col[percent] * 1);

    if(audioElement.currentTime == audioElement.duration)
  {
    playBtn.querySelector("i.fas").classList.add("fa-play");
  }
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

// play and pause of song
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});



// square prototype
CanvasRenderingContext2D.prototype.roundRect = function (
  x,
  y,
  width,
  height,
  radius
) {
  if (width < 2 * radius) radius = width / 2;
  if (height < 2 * radius) radius = height / 2;
  this.beginPath();
  this.moveTo(x + radius, y);
  this.arcTo(x + width, y, x + width, y + height, radius);
  this.arcTo(x + width, y + height, x, y + height, radius);
  this.arcTo(x, y + height, x, y, radius);
  this.arcTo(x, y, x + width, y, radius);
  this.closePath();
  return this;
};

// circle prototype
CanvasRenderingContext2D.prototype.circle = function (
  x,
  y,
  r,
  sAngle,
  eAngle,
  color
) {
  this.beginPath();
  this.arc(x, y, r, sAngle, eAngle);
  this.fillStyle = color;
  this.stroke();
  this.fill();
  return this;
};

// prototype for text inside Rectangle to avoid code chaos
CanvasRenderingContext2D.prototype.textInsideRect = function (
  text,
  x,
  y,
  color
) {
  this.font = "16px Arial";
  this.fillStyle = color;
  this.fillText(text, x, y);
  return this;
};

// prototype for line to avoid code chaos
CanvasRenderingContext2D.prototype.line = function (
  x1,
  y1,
  x2,
  y2,
  width,
  color
) {
  this.beginPath();
  this.moveTo(x1, y1);
  this.lineTo(x2, y2);
  this.lineWidth = "2";
  this.strokeStyle = color;
  this.stroke();
  return this;
};

// first rectagle
ctx.roundRect(100, 100, 100, 20, 4);
ctx.fillStyle = "#00e600";
ctx.fill();
ctx.line(150, 250, 150, 100, 2, "#00e600");
ctx.circle(150, 250, 5, 0, 2 * Math.PI, "#00e600");
ctx.textInsideRect("Introduction", 110, 115, "white");

// second rectangle
ctx.roundRect(300, 60, 100, 20, 4);
ctx.fillStyle = "#00e600";
ctx.fill();
ctx.line(350, 220, 350, 80, 2, "#00e600");
ctx.circle(350, 220, 5, 0, 2 * Math.PI, "#00e600");
ctx.textInsideRect("one_six", 320, 75, "white");

// third
ctx.roundRect(1050, 20, 200, 20, 4);
ctx.fillStyle = "#009900";
ctx.fill();
ctx.line(1070, 40, 1070, 250, 2, "#009900");
ctx.line(1240, 40, 1240, 250, 2, "#009900");
ctx.circle(1070, 250, 5, 0, 2 * Math.PI, "#009900");
ctx.circle(1240, 250, 5, 0, 2 * Math.PI, "#009900");
ctx.textInsideRect("Rapport Building - Energy", 1070, 35, "white");

// fourth
ctx.roundRect(980, 60, 200, 20, 4);
ctx.fillStyle = "#936666";
ctx.fill();
ctx.line(1170, 80, 1170, 250, 2, "#936666");
ctx.circle(1170, 250, 5, 0, 2 * Math.PI, "#936666");
ctx.textInsideRect("Rapport Building - Energy", 990, 75, "white");

// fifth Reactangle
ctx.roundRect(1110, 100, 50, 20, 4);
ctx.fillStyle = "blue";
ctx.fill();
ctx.line(1150, 100, 1150, 200, 2, "blue");
ctx.circle(1150, 200, 5, 0, 2 * Math.PI, "blue");
ctx.textInsideRect("Polite", 1115, 115, "white");

// last fillStyle to override the color with original color
ctx.fillStyle = "#ff6666";



