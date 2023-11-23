window.onload = function() {
    var navMenu = document.querySelector(".navmenu");


    document.getElementById('hamburger').onclick = function() {
        navMenu.classList.toggle("active");
    };
};