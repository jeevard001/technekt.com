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