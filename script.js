document.addEventListener("DOMContentLoaded", function () {
    // Navigation menu toggle for mobile
    document.querySelector(".menu-icon").addEventListener("click", function () {
        document.querySelector(".nav-links").classList.toggle("active");
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });
});
