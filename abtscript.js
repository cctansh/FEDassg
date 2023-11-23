window.addEventListener("load", function() {
    var mainImg = document.getElementById('main');

    document.getElementById('prev1').onclick = function() {
        mainImg.src = 'imgs/preview1.png';
    };
    document.getElementById('prev2').onclick = function() {
        mainImg.src = 'imgs/preview2.png';
    };
    document.getElementById('prev3').onclick = function() {
        mainImg.src = 'imgs/preview3.png';
    };
    document.getElementById('prev4').onclick = function() {
        mainImg.src = 'imgs/preview4.png';
    };
})