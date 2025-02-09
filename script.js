let offset = 0;
const sliderLine = document.querySelector(".our-team__slider__line");
let btnNext = document.querySelector(".btn-next");
let btnPrev = document.querySelector(".btn-prev");
let slidesOnPage = 0;

btnNext.addEventListener('click', NextSlide);
btnPrev.addEventListener('click', PreviousSlide);
window.addEventListener('resize', getSlidesToShow);
window.addEventListener('resize', reloadCarousel);
window.addEventListener('load', getSlidesToShow);

function NextSlide() {

    if (slidesOnPage === 1 && sliderLine.style.left != "-768px") {
        offset = offset + 256;
        sliderLine.style.left = -offset + "px";
    }

    if (slidesOnPage === 2 && sliderLine.style.left != "-512px") {
        offset = offset + 256;
        sliderLine.style.left = -offset + "px";
    }

    if (slidesOnPage == 3 && sliderLine.style.left != "-256px") {
        offset = offset + 256;
        sliderLine.style.left = -offset + "px";
    }
}

function PreviousSlide() {
    offset = offset - 256;
    if (offset < 0) {
        offset = 0;
    }
    sliderLine.style.left = -offset + "px";
}

function getSlidesToShow() {
    if (window.innerWidth >= 768)
        slidesOnPage = 2;
    if (window.innerWidth >= 1024)
        slidesOnPage = 3;
    if (window.innerWidth < 768)
        slidesOnPage = 1;
}

function reloadCarousel() {

    let leftPosition = sliderLine.style.left;
    if(slidesOnPage === 2 && leftPosition === "-768px"){
        offset = offset - 256;
        sliderLine.style.left = "-512px";
    }
    if(slidesOnPage === 3 && leftPosition === "-512px"){
        offset = offset - 256;
        sliderLine.style.left = "-256px";
    }

}
