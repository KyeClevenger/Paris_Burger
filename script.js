document.addEventListener('DOMContentLoaded', function () {
    const navCheck = document.getElementById('nav-check');
    const navLinks = document.querySelector('.nav-links');

    navCheck.addEventListener('change', function () {
        navLinks.style.display = this.checked ? 'flex' : 'none';
    });
});

