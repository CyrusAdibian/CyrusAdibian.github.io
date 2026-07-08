document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initModules();
  initNav();
  initCounters();
  initScrollAnimations();
});

function initNav() {
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');

  toggle?.addEventListener('click', () => {
    links?.classList.toggle('open');
    toggle.classList.toggle('open');
  });

  links?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => links.classList.remove('open'));
  });
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      animateCounter(el, target);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el, target) {
  const duration = 1500;
  const start = performance.now();

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

function initScrollAnimations() {
  const elements = document.querySelectorAll(
    '.feature-card, .section-header, .stat, .cta__inner, .modules__layout'
  );

  elements.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}
