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

  // Theme (dark default, light optional, persisted)
  const THEME_KEY = 'netguard-theme';
  const themeToggle = document.getElementById('theme-toggle');

  function getTheme() {
    const stored = window.localStorage.getItem(THEME_KEY);
    return stored === 'light' ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.documentElement.classList.toggle('dark-theme', isDark);
    document.documentElement.classList.toggle('light-theme', !isDark);
    if (themeToggle) themeToggle.selected = isDark;
  }

  function initTheme() {
    applyTheme(getTheme());
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const next = document.documentElement.classList.contains('dark-theme') ? 'light' : 'dark';
        window.localStorage.setItem(THEME_KEY, next);
        applyTheme(next);
      });
    }
  }

  // Mobile menu
  const menuBtn = document.querySelector('.app-bar__menu');
  const navLinks = document.querySelector('.app-bar__nav');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('app-bar__nav--open');
      const open = navLinks.classList.contains('app-bar__nav--open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    document.addEventListener('click', (e) => {
      if (!navLinks.classList.contains('app-bar__nav--open')) return;
      if (!e.target.closest('.app-bar')) {
        navLinks.classList.remove('app-bar__nav--open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Scrollspy for documentation sidebar (topics list)
  const spySidebar = document.querySelector('.doc__sidebar');
  const spyLinks = spySidebar
    ? Array.from(spySidebar.querySelectorAll('md-list-item[href^="#"]'))
    : [];
  if (spyLinks.length) {
    const sections = spyLinks
      .map((link) => document.querySelector(link.getAttribute('href')))
      .filter(Boolean);

    function setActive(id) {
      spyLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
      });
    }

    function computeActive() {
      if (!sections.length) return;
      const offset = 96;
      let current = sections[0].id;
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top - offset <= 0) current = section.id;
      });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = sections[sections.length - 1].id;
      }
      setActive(current);
    }

    let spyTicking = false;
    function onSpyScroll() {
      if (spyTicking) return;
      spyTicking = true;
      requestAnimationFrame(() => {
        computeActive();
        spyTicking = false;
      });
    }

    window.addEventListener('scroll', onSpyScroll, { passive: true });
    window.addEventListener('resize', onSpyScroll);
    computeActive();
  }

  function init() {
    initTheme();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
