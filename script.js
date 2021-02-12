const navLinks = document.querySelector(".nav-links")
const burger = document.querySelector('.burger')
const bars = document.querySelector('.fa-bars')
burger.addEventListener("click",()=>{
  navLinks.classList.toggle('show')
  bars.classList.toggle('fa-times')
  
})
