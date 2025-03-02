// Scroll Animation for Services
const services = document.querySelectorAll('.service');
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

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

// Hamburger toggle for mobile menu
hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  navLinks.classList.toggle("active");
});

// Close navbar when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".navbar")) {
    navLinks.classList.remove("active");
  }
});

// Close navbar when a link is clicked
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("active");
  }
});