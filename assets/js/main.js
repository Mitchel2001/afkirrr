const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('.primary-nav');
const yearEl = document.getElementById('current-year');

if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
        const isOpen = primaryNav.classList.toggle('open');
        navToggle.classList.toggle('active', isOpen);
        document.body.classList.toggle('nav-open', isOpen);
        navToggle.setAttribute('aria-expanded', isOpen);
    });

    primaryNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            primaryNav.classList.remove('open');
            document.body.classList.remove('nav-open');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', false);
        });
    });
}

if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}
