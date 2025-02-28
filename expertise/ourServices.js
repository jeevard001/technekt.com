// Scroll Animation for Services
const services = document.querySelectorAll('.service');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view'); // Optional: Remove class if not in view
    }
  });
}, { threshold: 0.5 }); // Trigger when 50% of the element is visible

services.forEach(service => {
  observer.observe(service);
});