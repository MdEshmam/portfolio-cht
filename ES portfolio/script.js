// Smooth Scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Offset for header height
            behavior: 'smooth'
        });
    });
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('input[type="text"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const message = document.querySelector('textarea').value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
    } else {
        alert("Thank you! Your message has been sent.");
        form.reset(); // Clear the form after submission
    }
});
