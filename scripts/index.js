document.addEventListener('DOMContentLoaded', () => {
  // Scroll suave solo para anclas internas
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        // Asegura que el foco/scroll vaya al inicio de la sección
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Opcional: enfocar el elemento por accesibilidad
        if (target.setAttribute) target.setAttribute('tabindex', '-1');
        target.focus?.({ preventScroll: true });
      }
    });
  });

  // Animaciones al hacer scroll
  const elements = document.querySelectorAll('.animate-fade, .animate-slide');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});
