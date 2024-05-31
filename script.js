console.log('Script loaded');

function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


function modalFunction(){
const container = document.querySelector(".details-container-exp");
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const body = document.getElementsByClassName('modal-body')

console.log(body)

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
  for (let i = 0; i < body.length; i++) {
    body[i].classList.add('active');
  }
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
  for (let i = 0; i < body.length; i++) {
    body[i].classList.remove('active');
  }
}
}

function DarkFunction(){
   const modeToggle = document.getElementById("mode-toggle");
   modeToggle.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('body-dark');
    } else {
        document.body.classList.remove('body-dark');
    }
});
}
function DarkFunctionHam(){
  const modeToggleHam = document.getElementById("mode-toggle-hamburger");
  modeToggleHam.addEventListener('change', function() {
   if (this.checked) {
       document.body.classList.add('body-dark');
   } else {
       document.body.classList.remove('body-dark');
   }
});
}