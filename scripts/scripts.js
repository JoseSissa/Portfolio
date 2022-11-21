const showMenuButton = document.getElementById('button-menu');
const languageBox = document.getElementById('language-box');
const changeLanguage = document.getElementById('language');
const menu = document.getElementById('menu');
const menuList = document.getElementById('menu-list')

const boxes = document.querySelectorAll('.box')

showMenuButton.addEventListener('click', ()=>{
    menu.classList.toggle('show-menu');
    showMenuButton.classList.toggle('toggle');
    languageBox.classList.toggle('show-menu')
});

menuList.addEventListener('click', ()=>{
    menu.classList.remove('show-menu');
    showMenuButton.classList.remove('toggle');
    languageBox.classList.toggle('show-menu')
})

const selectedItem = (numItem) => {
    for (let i = 0; i < 5; i++) {
        menuList.children[i].children[0].classList.remove('item-selected')
    }
    menuList.children[numItem].children[0].classList.add('item-selected')
}

const callback = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            if(entry.target.innerText === "Jose Rafael Sissa Mendoza") { selectedItem(0) }
            if(entry.target.innerText === "About me") { selectedItem(1) }
            if(entry.target.innerText === "Skills") { selectedItem(2) }
            if(entry.target.innerText === "Projects") { selectedItem(3) }
            if(entry.target.innerText === "Contact") { selectedItem(4) }
        }
    })
}
if(window.screen.width < 2000) {
    const options = {
        root: null,
        rootMargin: "0px 0px -200px 0px",
        threshold: 1
    }
    
    const observer = new IntersectionObserver(callback, options)
    boxes.forEach(elem => observer.observe(elem))

    menuList.addEventListener('click', (e) => {
        if (e.target.href.includes('home')) { selectedItem(0) }
        if (e.target.href.includes('about')) { selectedItem(1) }
        if (e.target.href.includes('skills')) { selectedItem(2) }
        if (e.target.href.includes('projects')) { selectedItem(3) }
        if (e.target.href.includes('contact')) { selectedItem(4) }
    })
}

changeLanguage.addEventListener('click', (e) => {    
    if(e.view.location.pathname.includes('es')) {
        location.href = e.target.checked ? "../index.html" : "../es/index.html"
    }else {
        location.href = e.target.checked ? "../es/index.html" : "../index.html"
    }
})

