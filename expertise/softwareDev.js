// Scroll Animation for Sections
const scrollSections = document.querySelectorAll('.scroll-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.5 });

scrollSections.forEach(section => {
  observer.observe(section);
});

// Add hover effect for flipping
const techCards = document.querySelectorAll('.tech-card');

techCards.forEach(card => {
    let isFlipped = false;

    card.addEventListener('mouseenter', () => {
        if (!isFlipped) {
            card.classList.add('flipped');
            isFlipped = true;
        }
    });

    card.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (isFlipped) {
                card.classList.remove('flipped');
                isFlipped = false;
            }
        }, 500); // Delay to make it more practical
    });
});