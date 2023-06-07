
const modal  = document.querySelector('#openModal');
const openModalBtn = document.querySelector('#openModalButton');
const openModalBtnBurger = document.querySelector('#openModalButtonBurger');
const closeModalBtn = document.querySelector('#modalClose');

const openModal = (e) => {
  e.stopPropagation();
  document.body.classList.toggle('menu-opened');
  modal.classList.toggle('visible');
};

const closeModal = () => {
  document.body.classList.toggle('menu-opened');
  modal.classList.toggle('visible');
};

openModalBtn.addEventListener('click',openModal);
openModalBtnBurger.addEventListener('click', (e) => {
  toggleBurgerMenu();
  openModal(e);
});


closeModalBtn.addEventListener('click', closeModal);

document.addEventListener('click', function (e) {
  console.log('body click', e, !e.target.closest('.modal-dialog'));
  if (modal.classList.contains('visible') && !e.target.closest('.modal-dialog')) {
      closeModal();
  }
});