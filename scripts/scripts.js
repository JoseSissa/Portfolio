const buttonMenu = document.getElementById('button-menu');
const menu = document.getElementById('menu');
const menuList = document.getElementById('menu-list');

const list  = document.getElementById('menu-list')

const home = document.getElementById('home')
const about = document.getElementById('about')
const skills = document.getElementById('skills')
const projects = document.getElementById('projects')
const contact = document.getElementById('contact')
const boxes = [home, about, skills, contact]

buttonMenu.addEventListener('click', ()=>{
    menu.classList.toggle('show-menu');
    buttonMenu.classList.toggle('toggle');
});

menuList.addEventListener('click', ()=>{
    menu.classList.remove('show-menu');
    buttonMenu.classList.remove('toggle');
})

// const selectItem = (numItem) => {
//     for (let i = 0; i < 5; i++) {
//         list.children[i].children[0].classList.remove('item-selected')
//     }
//     list.children[numItem].children[0].classList.add('item-selected')
// }

// const callback = (entries) => {
//     console.log(entries);
//     console.log(entries[entries.length-1].target);
//     if(entries[entries.length-1].target.id === "home") {
//         selectItem(0)
//     }
//     if(entries[entries.length-1].target.id === "about") {
//         selectItem(1)
//     }
//     if(entries[entries.length-1].target.id === "skills") {
//         selectItem(2)
//     }
//     if(entries[entries.length-1].target.id === "projects") {
//         selectItem(3)
//     }
//     if(entries[entries.length-1].target.id === "contact") {
//         selectItem(4)
//     }
// }
// const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.3
// }

// const observer = new IntersectionObserver(callback, options)
// const observerProjects = new IntersectionObserver(callback, {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.5
// })
// boxes.forEach(elem => observer.observe(elem))
// observerProjects.observe(projects)

// list.addEventListener('click', (e) => {
//     if (e.target.href.includes('home')) {
//         selectItem(0)
//     }
//     if (e.target.href.includes('about')) {
//         selectItem(1)
//     }
//     if (e.target.href.includes('skills')) {
//         selectItem(2)
//     }
//     if (e.target.href.includes('projects')) {
//         selectItem(3)
//     }
//     if (e.target.href.includes('contact')) {
//         selectItem(4)
//     }
// })