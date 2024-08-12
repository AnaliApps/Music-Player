export default function createPlayer(){
    let player = document.createElement('div');
    player.setAttribute('class','player');
    let audioSrc = document.createElement('audio');
    audioSrc.setAttribute('id','audio');
    let fileSrc = document.createElement('source')
    fileSrc.src = '../public/media/audio.mp3'
    fileSrc.setAttribute('type','audio/mpeg')
    audioSrc.appendChild(fileSrc)
    player.appendChild(audioSrc)

    let divBtns = document.createElement('div');
    let btnPlayPause = document.createElement('button')
    btnPlayPause.setAttribute('id','playpause')
    btnPlayPause.innerHTML = `&#9658;`
    let btnStop =document.createElement('button')
    btnStop.setAttribute('id','stop')
    btnStop.innerHTML = `&#9611;`
    divBtns.appendChild(btnPlayPause)
    divBtns.appendChild(btnStop)
    player.appendChild(divBtns)

    let currentDiv = document.createElement('div')
    currentDiv.setAttribute('class','currentPos');
    let contentSpan = document.createElement('span')
    contentSpan.setAttribute('id','content')
    currentDiv.appendChild(contentSpan);
    player.appendChild(currentDiv)

    let progressDiv = document.createElement('div');
    progressDiv.setAttribute('class','progress_bar')
    progressDiv.setAttribute('class','progress_bar')
    let progressedDiv = document.createElement('div');
    progressedDiv.setAttribute('class','progressed')
    progressDiv.appendChild(progressedDiv)
    player.appendChild(progressDiv)

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
    player.appendChild(volumeDiv)
    return player
}


