// Scroll Animation for Sections
const scrollSections = document.querySelectorAll('.scroll-section');
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

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