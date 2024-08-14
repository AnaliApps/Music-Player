export default function createMenu(){
    let menuIcon = document.createElement('div')
    menuIcon.setAttribute('class','container');
    menuIcon.innerHTML = `
    <div class="bar1 bar"></div>
    <div class="bar2 bar"></div>
    <div class="bar3 bar"></div>
    `
    return menuIcon
}