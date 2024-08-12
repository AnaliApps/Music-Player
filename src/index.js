import createPlayer from "./audioPlayer"
import './style.css'
document.body.appendChild(createPlayer())
let audio = document.querySelector("#audio");
let playpause = document.querySelector("#playpause");
let stopBtn = document.querySelector("#stop");
let progress_bar = document.querySelector('.progress_bar')
let progressed = document.querySelector('.progressed')
let content = document.querySelector('#content')
let volumeOfPlayer = document.querySelector('.volumeOfPlayer')
let setVolume = document.querySelector('.setVolume')
let showVolume = document.querySelector('.showVolume')
let count = 0;
// let audioFile = new Audio('../media/audio.mp3')
function playPause(){
    if(count == 0){
        count = 1;
        audio.play();
        playpause.innerHTML = "Pause &#9208"
    }else{
        count = 0;
        audio.pause();
        playpause.innerHTML = "Play &#9658"
    }
}
function stop(){
    playPause()
    audio.pause()
    audio.currentTime = 0;
}
playpause.addEventListener('click',playPause)
stopBtn.addEventListener('click',stop)
content.textContent = '0:00 / 0.00'
audio.ontimeupdate = function(){
    let seconds = audio.currentTime.toFixed(0);
    let minutes = 0;
    let totalMinutes = Math.floor(audio.duration / 60);
    let totalSeconds = Math.floor(audio.duration - (60*totalMinutes));
    while(seconds > 59){
        seconds = seconds - 60
        minutes += 1
    } 
    if(seconds < 10){
        content.innerHTML = `${minutes}:0${seconds} / ${totalMinutes}:${totalSeconds}`;
    }else{
        content.innerHTML = `${minutes}:${seconds} / ${totalMinutes}:${totalSeconds}`;
    }
    progressed.style.width = Math.floor((audio.currentTime/audio.duration)*100)+"%"
}
progress_bar.addEventListener('click',(e)=>{
   audio.currentTime = (e.offsetX/progress_bar.offsetWidth)*audio.duration
})

volumeOfPlayer.addEventListener('click',(e)=>{
    audio.volume = (e.offsetX/volumeOfPlayer.offsetWidth);
    setVolume.style.width = (audio.volume * 100)+"%";
    showVolume.innerHTML = `<span>${(Math.floor(audio.volume * 100))+"%"}</span>`
})
