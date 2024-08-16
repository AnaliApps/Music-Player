import icon from './Icon.jpg'
import './style.css'
import createPlayList from './playlist'
export default function createPlayer(){
    let player = document.createElement('div');
    player.setAttribute('class','player');
    let divIcon = document.createElement('div')
    divIcon.setAttribute('id','iconDiv');
    divIcon.innerHTML = `
        <img src=${icon} alt = 'Icon Image' width='100px' height='100px' id='newIcon'/>
        <div id="details">
            <div class="divName">
                <h1>
                    <span class="songName">Name Of Song</span>
                </h1>
            </div>
            <div class="divArtist">
                <p>
                    <span class="artistName">Name Of Artist</span>
                </p>
            </div>
        </div>
    `
    let allControlsDiv = document.createElement('div')
    allControlsDiv.setAttribute('id','allControls')
    allControlsDiv.innerHTML=`
        <div id="currentWrapper">
            <div class="currentPos">
                <span id="content"></span>
            </div>
        </div>
        <div id="progressWrapper">
            <div class="progress_bar">
                <div class="progressed"></div>
            </div>
            <div class="volume_icon">
                <i class="fa fa-volume-up" id="volCtrIcon" aria-hidden="true"></i>
            </div>
            <div class = "volumeOfPlayer">
                <div class="setVolume"></div>
                <div class="showVolume"></div>
            </div>
            
        </div>
        <div id="divBtns">
            <div id="previous"><i class = "fa fa-backward"></i></div>
            <div id="playpause"><i class = "fa fa-play" id="ctrIcon"></i></div>
            <div id="next"><i class = "fa fa-forward"></i></div>
        </div>
    `
    let playerWrapper = document.createElement('div');
    playerWrapper.setAttribute('id','playerWrapper')
    playerWrapper.appendChild(divIcon)
    playerWrapper.appendChild(allControlsDiv)
    player.appendChild(createPlayList())
    player.appendChild(playerWrapper)
    return player
}


