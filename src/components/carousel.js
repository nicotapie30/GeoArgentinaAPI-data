
let images = [];

fetch('/images.json')
    .then(response => response.json())
    .then(data => {
        images = data;
        loadImages();
        startCarousel();
    });


const loadImages = () => {
    const carousel = document.querySelector('#carousel');
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        carousel.appendChild(imgElement);
    });
};


const startCarousel = () => {
    const carousel = document.querySelector('#carousel');
    let position = 0;

    function showImage() {
        position -= 1;
        if (position <= -carousel.scrollWidth) {
            position = 0;
        }
        carousel.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(showImage);
    };
    showImage()
};


