const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const audioElement = document.getElementById("audio")
const container = document.getElementById("container")

var totalDuration=0

container.addEventListener("click",(e)=>{
    const { clientX } = e
    let { duration, currentTime} = audioElement
    // let duration = Math.floor((e.clientX/1295)*100)-4
    let newVal = ((totalDuration * duration) /(100)) / 60
    let progress = (e.offsetX/e.srcElement.clientWidth)* duration 
    audioElement.currentTime = progress
    console.log(currentTime, duration)
    // cliCkToPlay(newVal)
})

console.log(audioElement)

let col = []

for(let i=0;i<100;i++)
{
    col.push(Math.random()*100)
}

function createColumns(){
        
    ctx.fillStyle ="grey"

        let x=0

        for(let i=0;i<col.length;i++)
        {
            ctx.fillRect(x,250,7, col[i]*-1)
            x +=13
        }
        let y=0
        for(let i=0;i<col.length;i++)
        {
            ctx.fillRect(y,250,7, col[i]*1)
            y +=13
        }

}
ctx.fillStyle ="green"

function songProgress(e){
    
    const { duration, currentTime } = e.srcElement
    let percent = Math.floor((currentTime / duration)*100)
    ctx.fillRect(percent*13,250,7,col[percent]*-1)
    ctx.fillRect(percent*13,250,7,col[percent]*1)
}

audioElement.addEventListener("timeupdate",songProgress)

// function cliCkToPlay(duration){

 
//     console.log("clicked", duration)
// }

// audioElement.addEventListener("loadedmetadata", function (e){
//         console.log(e.target.duration)
//         totalDuration = e.target.duration
// })


// audioElement.addEventListener("play", function (){
//     this.currentTime = 0.12
//     this.play()
// })