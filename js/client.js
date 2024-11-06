const track = document.querySelector('.testimonial-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const cards = document.querySelectorAll('.testimonial-card');
let currentIndex = 0;

function updateSliderPosition() {
    const cardWidth = track.clientWidth / cards.length; // Get the width of a single card
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateSliderPosition();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
});

// Update slider position on window resize to ensure proper alignment
window.addEventListener('resize', updateSliderPosition);

// Initialize the slider position
updateSliderPosition();