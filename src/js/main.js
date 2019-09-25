const mainMenu = document.querySelector(".hamburger");
const nav = document.querySelector(".menu-nav__links");
const overlay = document.querySelector(".overlay");
const tour = document.querySelectorAll(".tour");
const template = document.querySelector(".template");
const galleryLib = template.querySelectorAll('.lib__img');
const mainBtn = document.querySelector('.main-btn');
const catalog = document.getElementById('catalog');
const tourCloseBtn = template.querySelector('.tour-close-btn');
function setTop (height) {
    template.style.top = height + "px";
}
mainBtn.addEventListener('click', (e) => {
    e.preventDefault();
    scrollIt(catalog);
})
function scrollIt(element) {
    window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': element.offsetTop
      });
}
mainMenu.addEventListener('click', () => {
    nav.classList.toggle('menu-nav__links--opened');
    overlay.classList.toggle('overlay--opened');
});

overlay.addEventListener('click', () => {
    nav.classList.remove('menu-nav__links--opened');
    overlay.classList.remove('overlay--opened');
    template.classList.remove('template--opened');
});

tourCloseBtn.addEventListener('click', () => {
    overlay.classList.remove('overlay--opened');
    template.classList.remove('template--opened');
});

tour.forEach((singleTour) => {
    singleTour.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.toggle('overlay--opened');
        template.classList.toggle('template--opened');
        setTop(singleTour.offsetTop);
    })
});

galleryLib.forEach((el) => {
    el.addEventListener('click',() => {
        el.classList.toggle('lib__img--main');
        el.style.order -= 1;
    })
});