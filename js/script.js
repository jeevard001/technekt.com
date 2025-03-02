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
hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    navLinks.classList.toggle("active");
});

// Toggle dropdown menu on click
const dropdown = document.querySelector(".dropdown");
if (dropdown) {
    const dropdownLink = dropdown.querySelector("a");
    const dropdownMenu = dropdown.querySelector(".dropdown-menu");

    dropdownLink.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default link behavior
        e.stopPropagation(); // Prevent event from bubbling up
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });
}

// Close dropdown and navbar when clicking outside
document.addEventListener("click", (e) => {
    // Close dropdown if clicking outside
    if (!e.target.closest(".dropdown")) {
        const dropdowns = document.querySelectorAll(".dropdown-menu");
        dropdowns.forEach(dropdown => {
            dropdown.style.display = "none";
        });
    }

    // Close navbar if clicking outside (for mobile)
    if (!e.target.closest(".navbar")) {
        navLinks.classList.remove("active");
    }
});

// Close navbar when a non-dropdown link is clicked
navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A" && !e.target.closest(".dropdown")) {
        navLinks.classList.remove("active"); // Close navbar on link click
    }
});

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