const audioElement = document.querySelector("audio");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let col = [];

for (let i = 0; i < 100; i++) {
  col.push(Math.random() * 200);
}

// console.log(col)
count = 0;
count1 = 0;
let sum = 10;
let sum1 = 10;
var random;
ctx.fillStyle = "gray";
for (let i = 0; i < 100; i++) {
  // random = Math.random()*(-200)
  // ctx.fillRect((0+count),200,5, col[i])
  ctx.fillRect(0 + count + 13, 200, 5, col[i] * -1);
  count += 13;
  sum += count;
}

console.log(ctx);

ctx.fillStyle = "green";

function songProgess(progress) {
  for (let i = 0; i < progress; i++) {
    // random = Math.random()*(-200)
    // ctx.fillRect((0+count1),200,5, col[i])
    ctx.fillRect(0 + count1+13 , 200, 5, col[i] * -1);
    count1 += 13;
    sum1 += count1;
  }
}
songProgess(100);
// songProgess(0);
// songProgess(20)

// ctx.fillStyle = "red"
// ctx.fillRect((10+count1),200,5, col[50])
// ctx.fillRect((10+count1),200,5, col[50]*1)

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  let percent = (currentTime / duration) * 100;
  percent = Math.floor(percent);
  console.log(percent);
  console.log("duration", currentTime);

  // songProgess(percent)
}

audioElement.addEventListener("timeupdate", updateProgress);
