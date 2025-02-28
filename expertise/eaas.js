// Scroll Animation for Sections
const sections = document.querySelectorAll('.eaas-section, .managed-services-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => {
  observer.observe(section);
});