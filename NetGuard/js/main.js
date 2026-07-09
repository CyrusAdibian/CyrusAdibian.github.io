(function () {
  'use strict';

  // Switchboard animation (NetGuard 2.0 card)
  const switchboard = document.getElementById('switchboard');
  if (switchboard) {
    const lights = [];
    for (let i = 0; i < 90; i++) {
      const span = document.createElement('span');
      switchboard.appendChild(span);
      lights.push(span);
    }
    function animateLights() {
      lights.forEach(l => l.classList.remove('on'));
      const count = Math.floor(Math.random() * 8) + 3;
      for (let i = 0; i < count; i++) {
        const idx = Math.floor(Math.random() * lights.length);
        lights[idx].classList.add('on');
      }
    }
    animateLights();
    setInterval(animateLights, 400);
  }

  // Streaming tabs
  const tabs = document.querySelectorAll('.streaming__tab');
  const preview = document.getElementById('streaming-preview');
  const cards = document.querySelectorAll('.streaming-card');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      if (preview) {
        const size = tab.dataset.tab;
        preview.dataset.size = size === 'original' ? '' : size;
      }
    });
  });

  // Auto-rotate streaming cards
  let cardIndex = 0;
  setInterval(() => {
    if (cards.length === 0) return;
    cardIndex = (cardIndex + 1) % cards.length;
    cards.forEach((c, i) => c.classList.toggle('active', i === cardIndex));
  }, 5000);

  // Mobile menu
  const menuBtn = document.querySelector('.nav__menu');
  const navLinks = document.querySelector('.nav__links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('nav__links--open');
      const open = navLinks.classList.contains('nav__links--open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    document.addEventListener('click', (e) => {
      if (!navLinks.classList.contains('nav__links--open')) return;
      if (!e.target.closest('.nav')) {
        navLinks.classList.remove('nav__links--open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
