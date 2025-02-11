
let offset = 0;
const imageSize = 256;
const sliderLine = document.querySelector(".our-team__slider__line");
let btnNext = document.querySelector(".btn-next");
let btnPrev = document.querySelector(".btn-prev");
const slider = document.querySelector(".our-team__slider");
let slidesOnPage = 0;

btnNext.addEventListener('click', NextSlide);
btnPrev.addEventListener('click', PreviousSlide);
window.addEventListener('resize', getSlidesToShow);
window.addEventListener('resize', reloadCarousel);
window.addEventListener('load', getSlidesToShow);
window.addEventListener("load", positionButtons);
window.addEventListener("resize", positionButtons);

if (document.readyState === "complete") {
    getSlidesToShow();
    positionButtons();
} else {
    document.addEventListener("DOMContentLoaded", positionButtons);
    document.addEventListener("DOMContentLoaded", getSlidesToShow);
}

function NextSlide() {

    if (slidesOnPage === 1 && sliderLine.style.left != "-768px") {
        offset = offset + imageSize;
        sliderLine.style.left = -offset + "px";
    }

    if (slidesOnPage === 2 && sliderLine.style.left != "-512px") {
        offset = offset + imageSize;
        sliderLine.style.left = -offset + "px";
    }

    if (slidesOnPage == 3 && sliderLine.style.left != "-256px") {
        offset = offset + imageSize;
        sliderLine.style.left = -offset + "px";
    }
}

function PreviousSlide() {
    offset = offset - imageSize;
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
        offset = offset - imageSize;
        sliderLine.style.left = "-512px";
    }
    if(slidesOnPage === 3 && leftPosition === "-512px"){
        offset = offset - imageSize;
        sliderLine.style.left = "-256px";
    }
}

function positionButtons() {
    
    if (!slider || !btnPrev || !btnNext) return;

    const sliderHeight = slider.offsetTop;

    btnPrev.style.top = `${sliderHeight + slider.offsetHeight/2}px`;
    
    let paddingRight = parseInt(window.getComputedStyle(document.querySelector('.carousel__image')).getPropertyValue('padding-right'));
    

    let buttonNextOffset = btnNext.clientWidth/2 + paddingRight;
    let buttonPrevOffset = btnNext.clientWidth/2 - paddingRight;

    btnNext.style.top = `${sliderHeight + slider.offsetHeight/2}px`;
    btnNext.style.left = `${slider.offsetWidth + slider.offsetLeft - buttonNextOffset}px`;
    btnPrev.style.left = `${slider.offsetWidth + slider.offsetLeft - imageSize - buttonPrevOffset}px`;
    
    if (window.innerWidth >= 768){
        btnPrev.style.left = `${slider.offsetWidth + slider.offsetLeft - 512 - buttonPrevOffset}px`;
    }
    if (window.innerWidth >= 1024){
        btnPrev.style.left = `${slider.offsetWidth + slider.offsetLeft - 768 - buttonPrevOffset}px`;
    }
}






