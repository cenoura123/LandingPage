const img1 = document.querySelector('.img-1');
const img2 = document.querySelector('.img-2');


window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    img1.style.transform = "scale(1)";
    img2.style.transform = "scale(1)";
});