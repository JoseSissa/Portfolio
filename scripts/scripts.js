const buttonMenu = document.getElementById('button-menu');
const menu = document.getElementById('menu');
const menuList = document.getElementById('menu-list');

buttonMenu.addEventListener('click', ()=>{
    menu.classList.toggle('show-menu');
    buttonMenu.classList.toggle('toggle');
});

menuList.addEventListener('click', ()=>{
    console.log('ey you');
    menu.classList.remove('show-menu');
    buttonMenu.classList.remove('toggle');
})