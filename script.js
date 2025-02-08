let offset = 0;
const sliderLine = document.querySelector(".our-team__slider__line");
let btnNext = document.querySelector(".btn-next");
let btnPrev = document.querySelector(".btn-prev");

btnNext.addEventListener('click', NextSlide);
btnPrev.addEventListener('click', PreviousSlide);

function NextSlide(){
    offset = offset + 256;
    if(offset > 768){
        offset = 768;
    }
    sliderLine.style.left = -offset + "px";
}

function PreviousSlide(){
    offset = offset - 256;
    if(offset < 0){
        offset = 0;
    }
    sliderLine.style.left = -offset + "px";
}