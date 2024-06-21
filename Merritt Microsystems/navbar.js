document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('nav ul');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});
