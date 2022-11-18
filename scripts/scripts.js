const buttonMenu = document.getElementById('button-menu');
const menu = document.getElementById('menu');
const menuList = document.getElementById('menu-list');

const boxes = document.querySelectorAll('.box')
const list  = document.getElementById('menu-list')

buttonMenu.addEventListener('click', ()=>{
    menu.classList.toggle('show-menu');
    buttonMenu.classList.toggle('toggle');
});

menuList.addEventListener('click', ()=>{
    menu.classList.remove('show-menu');
    buttonMenu.classList.remove('toggle');
})

const selectItem = (numItem) => {
    for (let i = 0; i < 5; i++) {
        list.children[i].children[0].classList.remove('item-selected')
    }
    list.children[numItem].children[0].classList.add('item-selected')
}

const callback = (entries) => {
    if(entries[0].target.id === "home") {
        selectItem(0)
    }
    if(entries[0].target.id === "about") {
        selectItem(1)
    }
    if(entries[0].target.id === "skills") {
        selectItem(2)
    }
    if(entries[0].target.id === "projects") {
        selectItem(3)
    }
    if(entries[0].target.id === "contact") {
        selectItem(4)
    }
}
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.8
}

const observer = new IntersectionObserver(callback, options)
boxes.forEach(elem => observer.observe(elem))
list.addEventListener('click', (e) => {
    console.log(e.target.href);
})