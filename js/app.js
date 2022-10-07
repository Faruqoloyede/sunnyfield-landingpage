let menu = document.querySelector('#menu-icon');
let mainMenu = document.querySelector('.mainMenu');


menu.onclick = () => {
    menu.classList.toggle('bx-box');
    mainMenu.classList.toggle('active')
}

