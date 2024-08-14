import createPlayer from "./audioPlayer"
import createMenu from "./createMenu"
import './style.css'
(function (){
document.body.appendChild(createMenu())
document.body.appendChild(createPlayer())
let audio = document.querySelector("#audio");
let playpause = document.querySelector("#playpause");
// let stopBtn = document.querySelector("#stop");
let progress_bar = document.querySelector('.progress_bar')
let progressed = document.querySelector('.progressed')
let content = document.querySelector('#content')
let volumeOfPlayer = document.querySelector('.volumeOfPlayer')
let setVolume = document.querySelector('.setVolume')
let showVolume = document.querySelector('.showVolume')
let container = document.querySelector('.container')
let player = document.querySelector('.player')
let bar1 = document.querySelector('.bar1')
let bar2 = document.querySelector('.bar2')
let bar3 = document.querySelector('.bar3')
let playlist = document.querySelector("#playlist")
container.addEventListener('click',(e)=>{
    if(playlist.style.display === 'block'){
        playlist.style.display = 'none'
        closeMenu()
    }else{
        playlist.style.display = 'block'
        openMenu()
    }
})
function openMenu(){
    bar1.style.transform = "translate(0, 11px) rotate(-45deg)";
    bar2.style.opacity = "0";
    bar3.style.transform = "translate(0, -11px) rotate(45deg)";
    player.style.opacity = "0.6";
    playlist.style.opacity = "1";
    
}
function closeMenu(){
    bar1.style.transform = "";
    bar2.style.opacity = "1";
    bar3.style.transform = "";
    player.style.opacity = "1";
}

let count = 0;
function playPause(){
    if(count == 0){
        count = 1;
        audio.play();
        playpause.innerHTML = "&#9208"
    }else{
        count = 0;
        audio.pause();
        playpause.innerHTML = "&#9658"
    }
}
// function stop(){
//     playPause()
//     audio.pause()
//     audio.currentTime = 0;
// }
playpause.addEventListener('click',playPause)
// stopBtn.addEventListener('click',stop)
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
})()



