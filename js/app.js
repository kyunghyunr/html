const openMenu = document.querySelector(".openMenu");
const mainMenu = document.querySelector(".mainMenu");

openMenu.addEventListener("click", () => {
  openMenu.classList.toggle("active");
  mainMenu.classList.toggle("active");
})

/*
document.querySelectorAll("").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))
*/
