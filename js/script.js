document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animate");
    const expertiseCards = document.querySelectorAll(".expertise-card");
    const aboutContents = document.querySelectorAll(".about-content");
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const form = document.getElementById("connectForm");

    // Scroll animation for all animated elements
    function checkScroll() {
        animatedElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add("show");
            }
        });

        aboutContents.forEach(content => {
            const rect = content.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                content.classList.add("show");
            }
        });

        expertiseCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                card.classList.add("show");
            }
        });
    }

    // Hamburger toggle for mobile menu
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (!e.target.matches(".dropdown *")) {
            const dropdowns = document.querySelectorAll(".dropdown-menu");
            dropdowns.forEach(dropdown => {
                dropdown.style.display = "none";
            });
        }
    });

    // Close the navbar when a link is clicked
    navLinks.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            navLinks.classList.remove('active');
        }
    });

    // Keep dropdown open when hovering
    const dropdown = document.querySelector(".dropdown");
    if (dropdown) {
        dropdown.addEventListener("mouseenter", () => {
            const dropdownMenu = dropdown.querySelector(".dropdown-menu");
            dropdownMenu.style.display = "block";
        });

        dropdown.addEventListener("mouseleave", () => {
            const dropdownMenu = dropdown.querySelector(".dropdown-menu");
            dropdownMenu.style.display = "none";
        });
    }

    // Form submission
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                headers: {
                    Accept: "application/json",
                },
            })
                .then((response) => {
                    if (response.ok) {
                        alert("Thank you! We'll get back to you soon.");
                        form.reset();
                    } else {
                        alert("Oops! Something went wrong. Please try again.");
                    }
                })
                .catch((error) => {
                    alert("Oops! Something went wrong. Please try again.");
                });
        });
    }

    // Initial scroll check and event listener for scroll
    window.addEventListener("scroll", checkScroll);
    checkScroll();
});