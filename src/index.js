import createPlayer from "./audioPlayer"
import createMenu from "./createMenu"
import './style.css'
(function (){
const allSongs = [
    {
        id:0,
        title:"audio",
        src:"../public/media/audio.mp3"
    },
    {
        id:1,
        title:"audio2",
        src:"../public/media/audio2.mp3"
    },
    {
        id:2,
        title:"audio3",
        src:"../public/media/audio3.mp3"
    },
    {
        id:3,
        title:"audio4",
        src:"../public/media/audio4.mp3"
    },
    {
        id:4,
        title:"audio5",
        src:"../public/media/audio5.mp3"
    },
    {
        id:5,
        title:"audio6",
        src:"../public/media/audio6.mp3"
    },
];
document.body.appendChild(createMenu())
document.body.appendChild(createPlayer())
let audio = new Audio()
audio.src = "../public/media/audio.mp3"
audio.type = 'audio/mpeg'
let divaudio = document.querySelector('.divaudio')
let playpause = document.querySelector("#playpause");
let ctrIcon = document.querySelector("#ctrIcon")
let progress = document.querySelector("#progress")
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
let songs = document.querySelector('#songs');
let nextBtn = document.querySelector("#next");
let previousBtn = document.querySelector("#previous");
let volumeControlIcon = document.querySelector("#volCtrIcon");
let songName = document.querySelector('.songName')
let artistName = document.querySelector('.artistName')

let songLibrary = {
    allLibrarySongs: [...allSongs],
    currentSong:null,
     songCurrentTime:0,
};

allSongs.forEach((song)=>{
    let li = document.createElement('li');
    li.innerHTML=`
        <div class="song">
            <span>${song.id}</span>
            <h4>${song.title}</h4>
            <p>${song.src}</p>
        </div>
    `
    songs.appendChild(li)
})
let displayedSongs = document.querySelectorAll(".song")
console.log(displayedSongs)
displayedSongs.forEach((item)=>{
    item.addEventListener('click',()=>{
        let id = item.querySelector('span').textContent
        let src = item.querySelector('p').textContent
        console.log("id",id,src)
        audio.src=src
        playPause(id)
        closeMenu()
        playlist.style.display='none'
        audio.play()
        if(audio.play()){
             ctrIcon.classList.remove('fa-play')
             ctrIcon.classList.add('fa-pause')
             audio.play()
        }else{
            audio.pause()
            ctrIcon.classList.add('fa-play')
            ctrIcon.classList.remove('fa-pause')
        }
    })
})

function playSong(itemId){
    let selectedSong = songLibrary.allLibrarySongs.find((librarySong)=>{
        return librarySong.id === parseInt(itemId)
    })
    audio.src = selectedSong.src;
    audio.title = selectedSong.title;
    artistName.textContent = audio.title
    songName.textContent = audio.src.split("/")[audio.src.split("/").length-1]
    audio.type = 'audio/mpeg'
    if(songLibrary.currentSong ===null || songLibrary.currentSong.id !== selectedSong.id){
        audio.currentTime=0;
    }else{
        audio.currentTime = songLibrary.songCurrentTime;
    }
    songLibrary.currentSong = selectedSong;
    ctrIcon.classList.remove('fa-play')
    ctrIcon.classList.add('fa-pause')
    console.log(songLibrary.currentSong)
    audio.play()
}

function pauseSong(){
    songLibrary.songCurrentTime = audio.currentTime
    ctrIcon.classList.remove('fa-pause')
    ctrIcon.classList.add('fa-play')
    audio.pause()
}
let getCurrentIndex = ()=>{
   if(songLibrary?.allLibrarySongs.indexOf(songLibrary.currentSong) >= songLibrary?.allLibrarySongs.length-1){
    return songLibrary?.allLibrarySongs.indexOf(songLibrary.allLibrarySongs[0])-1;
   }else{
    return songLibrary?.allLibrarySongs.indexOf(songLibrary.currentSong)
   }
};
function playNextSong(){
    if(songLibrary?.currentSong === null){
        playSong(songLibrary?.allLibrarySongs[0].id);
    }else{
        let currentSongIndex = getCurrentIndex();
        let nextSong = songLibrary?.allLibrarySongs[currentSongIndex+1];
        playSong(nextSong.id);
       
    }
}
function playPreviousSong(){
    if(songLibrary?.currentSong === null){
        return;
    }else{
        let currentSongIndex = getCurrentIndex();
        if(currentSongIndex === 0){
            currentSongIndex = songLibrary.allLibrarySongs.length;
            let previousSong = songLibrary?.allLibrarySongs[currentSongIndex-1];
            playSong(previousSong.id);
        } else{
            let previousSong = songLibrary?.allLibrarySongs[currentSongIndex-1];
            playSong(previousSong.id);
        }     
    }
}
// function shuffle(){
//     songLibrary?.allLibrarySongs.sort(()=>Math.random() * 0.5)
//     songLibrary.currentSong = null;
//     songLibrary.songCurrentTime = 0;
//     console.log(songLibrary.allLibrarySongs)
// }
// shuffle()

nextBtn.addEventListener('click',playNextSong)
previousBtn.addEventListener('click',playPreviousSong)
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
playpause.addEventListener('click',playPause)
function playPause(itemId){
    if(ctrIcon.classList.contains('fa-play')){
        if(songLibrary?.currentSong === null)
        {
            // itemId = songLibrary.allLibrarySongs[0].id
            playSong(songLibrary.allLibrarySongs[0].id)
        }else{
            itemId = songLibrary?.currentSong.id
            console.log(songLibrary?.currentSong)
            console.log("itemId",itemId)
            playSong(itemId)
        }

    }else{
        // let currentAudio = songLibrary.currentSong.src
        pauseSong()
    }
}
// // stopBtn.addEventListener('click',stop)
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
    showVolume.innerHTML = `<span id="percentageVol">${(Math.floor(audio.volume * 100))+"%"}</span>`
})

volumeControlIcon.addEventListener('click',muteOrUnmute)
function muteOrUnmute(){
    if(volumeControlIcon.classList.contains('fa-volume-up')){
        volumeControlIcon.classList.remove('fa-volume-up')
        volumeControlIcon.classList.add('fa-volume-off')
        audio.volume = 0;
        setVolume.style.width=(audio.volume*100)+"%";
    }else{
        volumeControlIcon.classList.add('fa-volume-up')
        volumeControlIcon.classList.remove('fa-volume-off')
        audio.volume = 1;
        setVolume.style.width=(audio.volume*100)+"%";
    }
}
})()



