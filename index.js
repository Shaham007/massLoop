// NAVBAR

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const upperSection = document.querySelector("#upper-section");

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    upperSection.classList.toggle("opacity");
})

document.querySelectorAll(".nav-links"),forEach(
    n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        upperSection.classList.remove("opacity");
    }))



  