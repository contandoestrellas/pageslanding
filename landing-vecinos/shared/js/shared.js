/**
 * SHARED SCRIPT - Funcionalidades comunes
 * - Formateo de precios CLP
 * - WhatsApp links
 * - Smooth scroll
 * - FAQ toggle
 */

// ============ FORMATEO DE PRECIOS CLP ============
function formatCLP(number) {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(number);
}

// Aplicar formato a todos los precios
document.addEventListener('DOMContentLoaded', function() {
  // Formatear precios con data-price
  document.querySelectorAll('[data-price]').forEach(element => {
    const price = parseFloat(element.dataset.price);
    element.textContent = formatCLP(price);
  });

  // FAQ toggle
  setupFAQ();

  // Smooth scroll links
  setupSmoothScroll();
});

// ============ FAQ TOGGLE ============
function setupFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', function() {
      this.classList.toggle('active');

      // Cerrar otros items
      document.querySelectorAll('.faq-item').forEach(other => {
        if (other !== this) {
          other.classList.remove('active');
        }
      });
    });
  });
}

// ============ SMOOTH SCROLL ============
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ============ WHATSAPP LINK ============
function getWhatsAppURL(phoneNumber, message) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

// ============ NAVBAR COLOR CHANGE ON SCROLL ============
function setupNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  // Check if this is a dark theme navbar (sushi)
  const isDarkTheme = navbar.classList.contains('navbar-sushi');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      if (isDarkTheme) {
        // Keep dark theme for sushi
        navbar.style.backgroundColor = 'rgba(11, 11, 13, 0.95)';
        navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.7)';
      } else {
        // Light theme for other pages
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
      }
    } else {
      if (isDarkTheme) {
        navbar.style.backgroundColor = 'rgba(11, 11, 13, 0.85)';
      } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0)';
      }
      navbar.style.boxShadow = isDarkTheme ? '0 8px 32px rgba(0, 0, 0, 0.5)' : 'none';
    }
  });
}

document.addEventListener('DOMContentLoaded', setupNavbarScroll);
