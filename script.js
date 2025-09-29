// ========================
// PRELOADER
// ========================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => { preloader.style.display = 'none'; }, 500);
});

// ========================
// CTA SMOOTH SCROLL
// ========================
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
        const form = document.getElementById('leadForm');
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// ========================
// FAQ TOGGLE
// ========================
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const p = item.querySelector('p');
        p.style.display = (p.style.display === 'block') ? 'none' : 'block';
    });
});

// ========================
// LAZY LOAD IMAGES
// ========================
const lazyImages = document.querySelectorAll('img');
lazyImages.forEach(img => img.loading = 'lazy');

// ========================
// FORM SUBMISSION TO GOOGLE SHEETS
// ========================
const scriptURL = 'TU_URL_DE_GOOGLE_APPS_SCRIPT'; // reemplaza con tu Apps Script
const form = document.getElementById('leadForm');

form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(() => {
            form.reset();
            document.querySelector('.confirmation').style.display = 'block';
            setTimeout(() => {
                document.querySelector('.confirmation').style.display = 'none';
            }, 5000);
        })
        .catch(error => console.error('Error!', error.message));
});
