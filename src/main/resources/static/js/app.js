document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('show');
        menuToggle.classList.toggle('active');
        nav.classList.add('animate__animated', 'animate__fadeInDown');
    });

    const elementsToAnimate = document.querySelectorAll('.feature-item, .team-member, .hero-section, .about-us-section, .cta-btn, .features-section h2');
    elementsToAnimate.forEach(element => {
        element.classList.add('animate__animated', 'animate__fadeIn');
    });

    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member, index) => {
        member.style.animationDelay = `${index * 0.2}s`;
        member.classList.add('animate__animated', 'animate__zoomIn');
    });

    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
        item.classList.add('animate__animated', 'animate__fadeInUp');
    });
});
