// ========================
// PRELOADER
// ========================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
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
        if(p.style.display === 'block') {
            p.style.display = 'none';
        } else {
            p.style.display = 'block';
        }
    });
});

// ========================
// LAZY LOAD IMAGES
// ========================
const lazyImages = document.querySelectorAll('img');
lazyImages.forEach(img => {
    img.loading = 'lazy';
});

// ========================
// FORM SUBMISSION TO GOOGLE SHEETS
// ========================

const scriptURL = 'https://script.google.com/macros/s/AKfycbxUj3xTxV61RXMXc_96uDoALfcp8ANu9jDoxbq-qZib-EpwhosuthFgbqDs7D6iQFEyTA/exec'; // <-- reemplaza con tu URL del Apps Script
const form = document.getElementById('leadForm');

form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
            form.reset();
            document.querySelector('.confirmation').style.display = 'block';
            setTimeout(() => {
                document.querySelector('.confirmation').style.display = 'none';
            }, 5000);
        })
        .catch(error => console.error('Error!', error.message));
});

// ========================
// GOOGLE MAPS RESEÑAS RESPONSIVE
// ========================
// No se requiere JS adicional si usas iframe de Google Maps
// Puedes usar: <iframe src="https://www.google.com/maps/embed?..."></iframe>

// ========================
// FLOATING BUTTONS ANIMATION
// ========================
const floatingButtons = document.querySelectorAll('.floating-buttons a');
floatingButtons.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.style.transform = 'scale(1.2) rotate(10deg)';
    });
    btn.addEventListener('mouseout', () => {
        btn.style.transform = 'scale(1) rotate(0deg)';
    });
});
