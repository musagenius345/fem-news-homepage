const menuButton = document.querySelector('.menu_button')
const navList = document.querySelector('.nav-list')

menuButton.addEventListener('click', () => {
  navList.classList.toggle('show')
})