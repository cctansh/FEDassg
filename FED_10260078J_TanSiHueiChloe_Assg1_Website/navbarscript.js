window.addEventListener("load", function() {
    // get mobile navigation menu
    var navMenu = document.querySelector(".navmenu");

    // changes display to visible
    document.getElementById('hamburger').onclick = function() {
        navMenu.classList.toggle("active");
    };
})