document.addEventListener('DOMContentLoaded', () => {
  
  // ===== PRELOADER =====
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';
  setTimeout(() => preloader.style.display = 'none', 500);
});

// ===== SMOOTH SCROLL AL FORMULARIO =====
document.querySelectorAll('.cta-button').forEach(btn => {
  btn.addEventListener('click', () => {
    const formSection = document.getElementById('contacto');
    formSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== FAQ TOGGLE =====
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    const p = item.querySelector('p');
    p.style.display = (p.style.display === 'block') ? 'none' : 'block';
  });
});

// ===== CONTADORES DE INSCRIPCIONES =====
function initializeCountdown() {
  const countdowns = document.querySelectorAll('.countdown');
  countdowns.forEach(cd => {
    const deadline = new Date(cd.dataset.deadline).getTime();
    const timerSpan = cd.querySelector('.timer');

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline - now;

      if(distance < 0){
        clearInterval(interval);
        timerSpan.innerHTML = "Inscripciones cerradas";
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
        const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
        const seconds = Math.floor((distance % (1000*60))/1000);
        timerSpan.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
    }, 1000);
  });
}
initializeCountdown();

// ===== FORMULARIO DE CONTACTO (SIMPLE CONFIRMACIÓN) =====
const form = document.getElementById('leadForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Aquí se puede integrar Google Sheets o backend de envío
  form.querySelector('.confirmation').style.display = 'block';
  form.reset();
});

// ===== OPCIONAL: Animación de scroll suave para links internos =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth'});
  });
});

// Header cambia al hacer scroll
window.addEventListener("scroll", function() {
  const header = document.getElementById("main-header");
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

});
