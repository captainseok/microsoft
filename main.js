const toggleBtn = document.querySelector('.navbar__btn');
const menu = document.querySelector('.navbar__left__menus');

toggleBtn.addEventListener('click', ()=> {
    menu.classList.toggle('active');
});
