// Format all prices on the page
document.addEventListener('DOMContentLoaded', function() {
  // Format prices with data-price attribute
  const priceElements = document.querySelectorAll('[data-price]');
  priceElements.forEach(element => {
    const price = parseInt(element.getAttribute('data-price'));
    element.textContent = formatCLP(price);
  });

  // Setup FAQ accordion
  setupFAQ();

  // Setup smooth scroll for anchors
  setupSmoothScroll();

  // Setup navbar scroll effect
  setupNavbarScroll();
});
