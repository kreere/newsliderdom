window.onload = function() {

document.querySelector('#menu').onmouseover = showMenu;
document.querySelector('#menu').onmouseout = hideMenu;

document.onkeydown = function(event) {
    console.log(event);
    if(event.code == 'KeyM') {
        showMenu();
    }
    if(event.code == 'Escape') {
        hideMenu();
    }
}

function showMenu() {
    document.querySelector('#menu').style.left = 0;
}
function hideMenu() {
    document.querySelector('#menu').style.left = '-230px';
}

}