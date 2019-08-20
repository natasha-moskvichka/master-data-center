let slideLeftButton = document.querySelector('#slide-left');

let slideRightButton = document.querySelector('#slide-right');

let totalElements = document.querySelectorAll('.section-seventh-general');

let idx = 0;

slideLeftButton.addEventListener('click', moveSlideRight);

slideRightButton.addEventListener('click', moveSlideLeft);

hideSlides(totalElements);

function hideSlides(slides) {
    slides.forEach(function (slide, i) {
        if(i !== idx) {
            slide.style.display = 'none';
        }
    });
    hideArrow();
}

function hideArrow() {
    let lastIndex = totalElements.length - 1;
    switch (idx) {
        case 0: slideLeftButton.style.display = 'none';
        break;
        case lastIndex: slideRightButton.style.display = 'none';
        break;
    }
}
function moveSlideLeft() {
    slideLeftButton.style.display = 'flex';
    totalElements[idx].style.display = 'none';
    totalElements[++idx].style.display = 'flex';
    if (idx === totalElements.length - 1) {
        slideRightButton.style.display = 'none';
    }
}
function moveSlideRight() {
    slideRightButton.style.display = 'flex';
    totalElements[idx].style.display = 'none';
    totalElements[--idx].style.display = 'flex';
    if (idx === 0) {
        slideLeftButton.style.display = 'none';
    }
}


