export default function createPlayList(){
    let playListDivWrapper = document.createElement('div');
    let playListDiv = document.createElement('div');
    playListDiv.setAttribute('id','playlist')
    let playListWrapper = document.createElement('div');
    playListWrapper.setAttribute('class','playListWrapper')
    playListWrapper.innerHTML=`
        <ul id="songs">
        
        </ul>
    `
    playListDiv.appendChild(playListWrapper)
    playListDivWrapper.appendChild(playListDiv)
    return playListDivWrapper
}