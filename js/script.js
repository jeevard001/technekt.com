document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animate");
    const expertiseCards = document.querySelectorAll(".expertise-card");
    const aboutContents = document.querySelectorAll(".about-content");
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    // Scroll animation for all animated elements
    function checkScroll() {
        // Animate .animate elements
        animatedElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add("show");
            }
        });

        // Animate .about-content sections
        aboutContents.forEach(content => {
            const rect = content.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                content.classList.add("show");
            }
        });

        // Animate .expertise-card blocks
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

    // Initial scroll check and event listener for scroll
    window.addEventListener("scroll", checkScroll);
    checkScroll();
});



// form mail action js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("connectForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission

        // Submit form using Fetch API
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
                    form.reset(); // Reset the form
                } else {
                    alert("Oops! Something went wrong. Please try again.");
                }
            })
            .catch((error) => {
                alert("Oops! Something went wrong. Please try again.");
            });
    });
});