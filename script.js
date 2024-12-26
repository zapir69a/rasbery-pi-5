document.addEventListener("DOMContentLoaded", function() {
    // Navigation smooth scroll
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Background color change on scroll
    window.addEventListener("scroll", function() {
        const body = document.querySelector("body");
        if (window.scrollY > 100) {
            body.style.backgroundColor = "#e2e2e2";
        } else {
            body.style.backgroundColor = "#f4f4f4";
        }
    });
});
