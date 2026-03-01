document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       HERO SLIDER
    ========================== */

    const slides = document.querySelectorAll(".hero-slide");
    let current = 0;

    function showSlide(index){
        slides.forEach(slide => {
            slide.classList.remove("active");
        });

        slides[index].classList.add("active");
    }

    function nextSlide(){
        current++;
        if(current >= slides.length){
            current = 0;
        }
        showSlide(current);
    }

    if(slides.length > 0){
        showSlide(current);
        setInterval(nextSlide, 4000);
    }

    /* =========================
       MOBILE MENU
    ========================== */

    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav-links");

    if(toggle){
        toggle.addEventListener("click", function(){
            nav.classList.toggle("active");
        });
    }

    /* =========================
       MOBILE DROPDOWN
    ========================== */

    const dropdown = document.querySelector(".dropdown");

    if(dropdown){
        dropdown.addEventListener("click", function(e){
            if(window.innerWidth <= 900){
                e.preventDefault();
                dropdown.classList.toggle("active");
            }
        });
    }

});