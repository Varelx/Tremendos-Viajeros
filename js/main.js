// FAQ expandible
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    const p = item.querySelector('p');
    p.style.display = p.style.display === 'block' ? 'none' : 'block';
    item.classList.toggle('active');
  });
});

// Partículas cinematográficas en botones
function crearParticulas(btn, cantidad=25) {
  for(let i=0; i<cantidad; i++){
    const span = document.createElement('span');
    btn.appendChild(span);
    const angle = Math.random()*2*Math.PI;
    const radius = Math.random()*(btn.offsetWidth/2);
    const startX = btn.offsetWidth/2 + radius*Math.cos(angle);
    const startY = btn.offsetHeight/2 + radius*Math.sin(angle);
    span.style.left = `${startX}px`;
    span.style.top = `${startY}px`;
    span.style.width = span.style.height = `${Math.random()*6+4}px`;
    span.style.opacity = 1;
    const animX = (Math.random()-0.5)*150;
    const animY = (Math.random()-0.5)*150;
    span.animate([
      { transform:'translate(0,0) scale(1)', opacity:1 },
      { transform:`translate(${animX}px, ${animY}px) scale(0.3)`, opacity:0 }
    ], { duration:900+Math.random()*500, easing:'cubic-bezier(0.4,0,0.2,1)' });
    setTimeout(()=>{ span.remove(); }, 1400);
  }
}
const ctas = document.querySelectorAll('.cta-button, form button, .instagram-block a');
ctas.forEach(btn => {
  btn.addEventListener('mouseenter', () => crearParticulas(btn,25));
});

// Toggle menú móvil
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior: 'smooth' });
      navLinks.classList.remove('active'); // cierra menú móvil
    }
  });
});

