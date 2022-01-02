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




$(window).resize(function(e){
   if($(window).width() < 790) {
   console.log($(window).width());
    $("#crewimage").each(function() {
      $(this).attr("src", "./img/artist.jpg");
                });
            } else if ($(window).width() >= 790) {
                $("#crewimage").each(function() {
                $(this).attr("src","./img/artist16_9.png");
                });
    }
});
