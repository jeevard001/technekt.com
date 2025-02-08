document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animate");
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    // Scroll animation
    function checkScroll() {
        animatedElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add("show");
            }
        });
    }

    // Hamburger toggle
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
    dropdown.addEventListener("mouseenter", () => {
        const dropdownMenu = dropdown.querySelector(".dropdown-menu");
        dropdownMenu.style.display = "block";
    });

    dropdown.addEventListener("mouseleave", () => {
        const dropdownMenu = dropdown.querySelector(".dropdown-menu");
        dropdownMenu.style.display = "none";
    });

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});