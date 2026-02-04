// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form submission
const form = document.querySelector('.contacto-form form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
    form.reset();
  });
}

// Hacer Pedido button
document.querySelector('.btn-primary').addEventListener('click', function() {
  const whatsappBtn = document.querySelector('.whatsapp-btn');
  whatsappBtn.click();
});
