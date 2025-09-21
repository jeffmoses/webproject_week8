document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu');
    const navBar = document.getElementById('navbar');

    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', () => {
        navBar.classList.toggle('active');
    });

    // Close menu when a link is clicked (optional, for better UX)
    const navLinks = navBar.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navBar.classList.contains('active')) {
                navBar.classList.remove('active');
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Basic form submission handling (you'd typically send this to a server)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        alert('Message sent! (This is a simulated submission. In a real application, you would send this data to a server.)');
        contactForm.reset(); // Reset the form after simulated submission
    });

    // Optional: Add subtle animations on scroll
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null, // relative to document viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionally, you can observe specific elements within sections
                // For example, to animate project items individually:
                // entry.target.querySelectorAll('.project-item').forEach(item => {
                //     item.classList.add('visible');
                // });
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Add a CSS class for elements that should animate when they become visible
    // For example, add to .hero-content, .about-image, .about-text, .project-item, etc.
    // Then, in CSS, define the .visible class with your animations:
    //
    // .about-image, .about-text, .project-item {
    //     opacity: 0;
    //     transform: translateY(20px);
    //     transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    // }
    // .visible {
    //     opacity: 1;
    //     transform: translateY(0);
    // }
});