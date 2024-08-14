export default function createPlayList(){
    let playListDivWrapper = document.createElement('div');
    let playListDiv = document.createElement('div');
    playListDiv.setAttribute('id','playlist')
    let playListWrapper = document.createElement('div');
    playListWrapper.innerHTML=`
        <ul>
        <li class="song">
            <span>Harry 1</span>
            <audio>
                <source src="../public/media/audio.mp3" type="audio/mpeg">
            </audio>
        </li>
        <li class="song">
            <span>Harry 2</span>
            <audio>
                <source src="../public/media/audio.mp3" type="audio/mpeg">
            </audio>
        </li>
        <li class="song">
            <span>Harry 3</span>
            <audio>
                <source src="../public/media/audio.mp3" type="audio/mpeg">
            </audio>
        </li>
        <li class="song">
            <span>Harry 4</span>
            <audio>
                <source src="../public/media/audio.mp3" type="audio/mpeg">
            </audio>
        </li>
        <li class="song">
            <span>Harry 5</span>
            <audio>
                <source src="../public/media/audio.mp3" type="audio/mpeg">
            </audio>
        </li>
        <li class="song">
            <span>Harry 6</span>
            <audio>
                <source src="../public/media/audio.mp3" type="audio/mpeg">
            </audio>
        </li>
        </ul>
    `
    playListDiv.appendChild(playListWrapper)
    playListDivWrapper.appendChild(playListDiv)
    return playListDivWrapper
}