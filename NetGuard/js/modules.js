const MODULES = [
  { id: 'firewall', image: null },
  { id: 'scanner', image: 'assets/scanner.png' },
  { id: 'threats', image: null },
  { id: 'threatModeling', image: null },
  { id: 'sandbox', image: null },
  { id: 'monitoring', image: 'assets/dashboard-mobile.png' },
  { id: 'siem', image: null },
  { id: 'vulnerability', image: 'assets/vulnerability.png' },
  { id: 'authentication', image: 'assets/auth.png' },
  { id: 'securityLayer', image: null },
  { id: 'advisory', image: null },
  { id: 'auditLogs', image: null },
];

const MODULE_ICONS = {
  firewall: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  scanner: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/></svg>',
  threats: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  threatModeling: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',
  sandbox: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>',
  monitoring: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',
  siem: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>',
  vulnerability: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  authentication: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>',
  securityLayer: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
  advisory: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
  auditLogs: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>',
};

let activeModule = 'firewall';

function renderModules() {
  const nav = document.getElementById('module-nav');
  const panel = document.getElementById('module-panel');
  if (!nav || !panel) return;

  nav.innerHTML = `
    <div class="module-nav__header">NetGuard</div>
    ${MODULES.map(mod => `
      <button class="module-nav__item${mod.id === activeModule ? ' active' : ''}" data-module="${mod.id}" type="button">
        <span data-i18n="modules.${mod.id}.tab"></span>
      </button>
    `).join('')}
  `;

  const mod = MODULES.find(m => m.id === activeModule);
  const items = getTranslation(`modules.${activeModule}.items`);
  const itemsList = Array.isArray(items) ? items : [];

  panel.innerHTML = `
    <h3 class="module-panel__title" data-i18n="modules.${activeModule}.title"></h3>
    <p class="module-panel__desc" data-i18n="modules.${activeModule}.desc"></p>
    ${mod.image
      ? `<div class="module-panel__image"><img src="${mod.image}" alt="${getTranslation(`modules.${activeModule}.title`)}" loading="lazy"></div>`
      : `<div class="module-panel__placeholder">${MODULE_ICONS[activeModule] || ''}<span data-i18n="modules.${activeModule}.title"></span></div>`
    }
    <ul class="module-panel__list">
      ${itemsList.map((_, i) => `<li data-i18n="modules.${activeModule}.items.${i}"></li>`).join('')}
    </ul>
  `;

  document.querySelectorAll('#module-nav [data-i18n], #module-panel [data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = getTranslation(key);
    if (val && typeof val === 'string') el.textContent = val;
  });

  nav.querySelectorAll('.module-nav__item').forEach(btn => {
    btn.addEventListener('click', () => {
      activeModule = btn.dataset.module;
      renderModules();
    });
  });
}

function initModules() {
  renderModules();
}
