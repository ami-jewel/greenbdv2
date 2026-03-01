document.addEventListener("DOMContentLoaded", function(){

    var toggle = document.getElementById("menu-toggle");
    var nav = document.getElementById("nav-links");

    if(toggle){
        toggle.onclick = function(){
            nav.classList.toggle("active");
        };
    }

});
