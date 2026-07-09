(function () {
  'use strict';

  const PULSE_CONFIGS = {
    'blue-pulse-1': {
      x1: [83, 400], x2: [83, 350], y1: [320, 83], y2: [415, 133.75],
      duration: 2200, repeatDelay: 1400, delay: 1500,
    },
    'blue-pulse-2': {
      x1: [83, 400], x2: [83, 350], y1: [267.5, 83], y2: [300, 133.75],
      duration: 2000, repeatDelay: 1200, delay: 1000,
    },
    'pink-pulse-1': {
      x1: [412, 400], x2: [412, 350], y1: [264, 83], y2: [304, 133.75],
      duration: 900, repeatDelay: 1900, delay: 1300,
    },
    'pink-pulse-2': {
      x1: [490, 490, 480, 478, 475], x2: [490, 479, 488], y1: [266, 120], y2: [284, 150],
      duration: 2200, repeatDelay: 1800, delay: 1500,
    },
    'orange-pulse-1': {
      x1: [826, 360], x2: [826, 400], y1: [270, 130], y2: [340, 170],
      duration: 2000, repeatDelay: 1800, delay: 1600,
    },
    'orange-pulse-2': {
      x1: [868, 300], x2: [868, 400], y1: [280, 140], y2: [440, 180],
      duration: 2500, repeatDelay: 2000, delay: 1900,
    },
  };

  const pulseLoops = [];

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function sampleKeyframes(values, t) {
    if (values.length === 1) return values[0];
    const pos = t * (values.length - 1);
    const i = Math.min(Math.floor(pos), values.length - 2);
    const f = pos - i;
    return lerp(values[i], values[i + 1], f);
  }

  function easeInOut(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }

  function animateGradient(el, config) {
    const startAt = performance.now() + config.delay;
    let cycleStart = null;

    function frame(now) {
      if (now < startAt) {
        pulseLoops.push(requestAnimationFrame(frame));
        return;
      }

      if (!cycleStart) cycleStart = now;
      const cycleDuration = config.duration + config.repeatDelay;
      const elapsed = (now - cycleStart) % cycleDuration;
      const active = elapsed < config.duration;
      const t = active ? easeInOut(elapsed / config.duration) : 0;

      el.setAttribute('x1', sampleKeyframes(config.x1, t));
      el.setAttribute('x2', sampleKeyframes(config.x2, t));
      el.setAttribute('y1', sampleKeyframes(config.y1, t));
      el.setAttribute('y2', sampleKeyframes(config.y2, t));

      pulseLoops.push(requestAnimationFrame(frame));
    }

    pulseLoops.push(requestAnimationFrame(frame));
  }

  function setupLine(path) {
    const length = path.getTotalLength();
    const reverse = path.dataset.reverse === 'true';
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = reverse ? `-${length}` : `${length}`;
    return { path, length, reverse };
  }

  function drawLine(line, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        line.path.style.transition = 'stroke-dashoffset 1.2s ease';
        line.path.style.strokeDashoffset = '0';
        setTimeout(resolve, 1200);
      }, delay * 1000);
    });
  }

  function revealNodes(svg) {
    setTimeout(() => {
      svg.querySelectorAll('.foundation-node').forEach((node) => {
        node.style.transition = 'opacity 0.5s ease';
        node.style.opacity = '1';
      });
    }, 1000);
  }

  function revealCpu(cpu) {
    setTimeout(() => {
      cpu.classList.add('is-visible');
    }, 900);
  }

  function revealCards(cards) {
    cards.forEach((card, i) => {
      setTimeout(() => card.classList.add('is-visible'), 1100 + i * 120);
    });
  }

  function startPulses(svg) {
    Object.entries(PULSE_CONFIGS).forEach(([id, config]) => {
      const gradient = svg.querySelector(`#${id}`);
      if (gradient) animateGradient(gradient, config);
    });
    svg.querySelectorAll('.foundation-pulse').forEach((path) => {
      path.style.opacity = '1';
    });
  }

  function initFoundation() {
    const svg = document.getElementById('foundation-lines');
    const cpu = document.querySelector('.foundation__cpu');
    const cards = Array.from(document.querySelectorAll('.foundation-card'));
    if (!svg) return;

    const lines = Array.from(svg.querySelectorAll('.foundation-line')).map(setupLine);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      lines.forEach((line) => { line.path.style.strokeDashoffset = '0'; });
      svg.querySelectorAll('.foundation-node').forEach((n) => { n.style.opacity = '1'; });
      svg.querySelectorAll('.foundation-pulse').forEach((p) => { p.style.opacity = '1'; });
      if (cpu) cpu.classList.add('is-visible');
      cards.forEach((c) => c.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.disconnect();

          lines.forEach((line) => {
            const delay = parseFloat(line.path.dataset.delay || '0');
            drawLine(line, delay);
          });

          revealNodes(svg);
          if (cpu) revealCpu(cpu);
          revealCards(cards);
          startPulses(svg);
        });
      },
      { rootMargin: '-35% 0px -35% 0px', threshold: 0 }
    );

    observer.observe(svg);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFoundation);
  } else {
    initFoundation();
  }

  window.addEventListener('pagehide', () => pulseLoops.forEach(cancelAnimationFrame));
})();
