document.addEventListener('DOMContentLoaded', () => {

  // PRELOADER
  const preloader = document.getElementById('preloader');
  if(preloader) {
    preloader.style.opacity = '0';
    setTimeout(() => preloader.style.display = 'none', 500);
  }

  // FORMULARIO
  const form = document.getElementById('leadForm');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const confirmation = form.querySelector('.confirmation');
      if(confirmation) confirmation.style.display = 'block';
      form.reset();
    });
  }

  // BOTONES CTA
  document.querySelectorAll('.cta-button').forEach(btn => {
    btn.addEventListener('click', () => {
      const formSection = document.getElementById('contacto');
      if(formSection) formSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // FAQ TOGGLE
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      const p = item.querySelector('p');
      if(p) p.style.display = (p.style.display === 'block') ? 'none' : 'block';
    });
  });

  // CONTADORES
  const countdowns = document.querySelectorAll('.countdown');
  countdowns.forEach(cd => {
    const deadline = new Date(cd.dataset.deadline).getTime();
    const timerSpan = cd.querySelector('.timer');
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline - now;
      if(distance < 0){
        clearInterval(interval);
        if(timerSpan) timerSpan.innerHTML = "Inscripciones cerradas";
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
        const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
        const seconds = Math.floor((distance % (1000*60))/1000);
        if(timerSpan) timerSpan.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
    }, 1000);
  });

});
