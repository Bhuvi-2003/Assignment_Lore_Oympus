document.querySelector('.menu-toggle').addEventListener('click', function () {
    const navLinks = document.querySelector('nav ul');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
});

const carousel = document.querySelector('.carousel');
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
    isDown = false;
});

carousel.addEventListener('mouseup', () => {
    isDown = false;
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; 
    carousel.scrollLeft = scrollLeft - walk;
});

const gridViewBtn = document.querySelector('#grid-view');
const carouselViewBtn = document.querySelector('#carousel-view');
const carouselContainer = document.querySelector('.carousel');

gridViewBtn.addEventListener('click', () => {
    carouselContainer.style.display = 'grid';
    carouselContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
});

carouselViewBtn.addEventListener('click', () => {
    carouselContainer.style.display = 'flex';
});
