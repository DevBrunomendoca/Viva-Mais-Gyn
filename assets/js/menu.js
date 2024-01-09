let show =  true;


const menuSection = document.querySelector('.menu-section')
const menuHamburguer = document.querySelector('.menu-hamburguer')

menuHamburguer.addEventListener("click", () => {
  menuSection.classList.toggle("on", show)

  show = !show;
})