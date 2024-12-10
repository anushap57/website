document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = 'yellow';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = 'white';
        });
    });
});
document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) {
        alert('Please fill out all fields before submitting.');
        event.preventDefault();
    }
});