
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

let body = document.body;

const toggleBurgerMenu = () => {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	body.classList.toggle('menu-opened');
};

menuBtn.addEventListener('click', toggleBurgerMenu);

