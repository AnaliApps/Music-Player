import icon from './Icon.jpg'
import './style.css'
import createPlayList from './playlist'
export default function createPlayer(){
    let player = document.createElement('div');
    player.setAttribute('class','player');
    let divIcon = document.createElement('div')
    divIcon.setAttribute('id','iconDiv');
    let newIcon = new Image()
    newIcon.src = icon;
    newIcon.alt = 'Icon Image'
    newIcon.setAttribute('width','100px')
    newIcon.setAttribute('height','100px')
    newIcon.setAttribute('id','newIcon')
    let songName  = document.createElement('div')
    songName.innerHTML = `<h1><span class="songName">Name Of Song</span></h1>`
    let artistName = document.createElement('div');
    artistName.innerHTML = `<p><span class="artistName">Name Of Artist</span></p>`
    divIcon.appendChild(newIcon)
    divIcon.appendChild(songName)
    divIcon.appendChild(artistName)
    let audioSrc = document.createElement('audio');
    audioSrc.setAttribute('id','audio');
    let fileSrc = document.createElement('source')
    fileSrc.src = '../public/media/audio.mp3'
    fileSrc.setAttribute('type','audio/mpeg')
    audioSrc.appendChild(fileSrc)

    let divBtns = document.createElement('div');
    divBtns.setAttribute('id','divBtns')
    let btnPlayPause = document.createElement('button')
    btnPlayPause.setAttribute('id','playpause')
    btnPlayPause.innerHTML = `&#9658;`
    let nextBtn = document.createElement('button')
    nextBtn.setAttribute('id','next')
    nextBtn.textContent='N'
   
    let previousBtn = document.createElement('button')
    previousBtn.setAttribute('id','previous')
    previousBtn.textContent = 'Pr'

    // btnStop.setAttribute('id','stop')
    // btnStop.innerHTML = `&#9611;`
    divBtns.appendChild(previousBtn)
    divBtns.appendChild(btnPlayPause)
    divBtns.appendChild(nextBtn)
    // divBtns.appendChild(btnStop)

    let currentDiv = document.createElement('div')
    currentDiv.setAttribute('class','currentPos');
    let contentSpan = document.createElement('span')
    contentSpan.setAttribute('id','content')
    currentDiv.appendChild(contentSpan);

    let progressDiv = document.createElement('div');
    progressDiv.setAttribute('class','progress_bar')
    progressDiv.setAttribute('class','progress_bar')
    let progressedDiv = document.createElement('div');
    progressedDiv.setAttribute('class','progressed')
    progressDiv.appendChild(progressedDiv)

    let volumeDiv = document.createElement('div')
    volumeDiv.setAttribute('class','volumeOfPlayer')
    let setDiv = document.createElement('div')
    setDiv.setAttribute('class','setVolume')
    let volIconDiv = document.createElement('div')
    volIconDiv.setAttribute('class','volume_icon')
    let showVolDiv = document.createElement('div')
    showVolDiv.setAttribute('class','showVolume')
    volumeDiv.appendChild(setDiv)
    volumeDiv.appendChild(volIconDiv)
    volumeDiv.appendChild(showVolDiv)
    let allControlsDiv = document.createElement('div')
    allControlsDiv.setAttribute('id','allControls')
    let currentWrapper = document.createElement('div')
    currentWrapper.setAttribute('id','currentWrapper')
    let progressWrapper = document.createElement('div');
    progressWrapper.setAttribute('id','progressWrapper')
    currentWrapper.appendChild(currentDiv)
    progressWrapper.appendChild(progressDiv)
    progressWrapper.appendChild(volumeDiv)
    allControlsDiv.appendChild(currentWrapper)
    allControlsDiv.appendChild(progressWrapper)
    allControlsDiv.appendChild(divBtns)
    let playerWrapper = document.createElement('div');
    playerWrapper.setAttribute('id','playerWrapper')

    playerWrapper.appendChild(divIcon)
    playerWrapper.appendChild(audioSrc)
    playerWrapper.appendChild(allControlsDiv)
    player.appendChild(createPlayList())
    player.appendChild(playerWrapper)
    return player
}


