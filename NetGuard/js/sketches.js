/* Wireframe sketch illustrations — Next.js sphere style */
const SKETCHES = {
  api: `<svg viewBox="0 0 268 212" fill="none" xmlns="http://www.w3.org/2000/svg" class="feature-sketch">
    <circle cx="134" cy="106" r="48" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
    <circle cx="134" cy="106" r="32" stroke="currentColor" stroke-width="0.75" opacity="0.25"/>
    <circle cx="134" cy="106" r="16" stroke="currentColor" stroke-width="0.75" opacity="0.2"/>
    <circle cx="60" cy="60" r="10" stroke="currentColor" stroke-width="0.75" opacity="0.4"/>
    <circle cx="208" cy="60" r="10" stroke="currentColor" stroke-width="0.75" opacity="0.4"/>
    <circle cx="60" cy="152" r="10" stroke="currentColor" stroke-width="0.75" opacity="0.4"/>
    <circle cx="208" cy="152" r="10" stroke="currentColor" stroke-width="0.75" opacity="0.4"/>
    <line x1="70" y1="60" x2="118" y2="90" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
    <line x1="198" y1="60" x2="150" y2="90" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
    <line x1="70" y1="152" x2="118" y2="122" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
    <line x1="198" y1="152" x2="150" y2="122" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
    <circle cx="134" cy="106" r="4" fill="currentColor" opacity="0.5"/>
  </svg>`,

  events: `<svg viewBox="0 0 268 212" fill="none" class="feature-sketch">
    <circle cx="134" cy="106" r="70" stroke="currentColor" stroke-width="0.5" opacity="0.15"/>
    <circle cx="134" cy="106" r="50" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <circle cx="134" cy="106" r="30" stroke="currentColor" stroke-width="0.5" opacity="0.25"/>
    <circle cx="134" cy="106" r="10" stroke="currentColor" stroke-width="0.75" opacity="0.4"/>
    <path d="M134 36 L134 76 M134 136 L134 176 M64 106 L104 106 M164 106 L204 106" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <circle cx="134" cy="36" r="5" fill="currentColor" opacity="0.35"/>
    <circle cx="204" cy="106" r="5" fill="currentColor" opacity="0.35"/>
    <circle cx="134" cy="176" r="5" fill="currentColor" opacity="0.35"/>
    <circle cx="64" cy="106" r="5" fill="currentColor" opacity="0.35"/>
  </svg>`,

  error: `<svg viewBox="0 0 268 212" fill="none" class="feature-sketch">
    <path d="M134 40 L220 170 H48 Z" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
    <path d="M134 80 L134 130 M134 145 L134 150" stroke="currentColor" stroke-width="1" opacity="0.4" stroke-linecap="round"/>
    <circle cx="134" cy="68" r="3" fill="currentColor" opacity="0.5"/>
  </svg>`,

  integrity: `<svg viewBox="0 0 268 212" fill="none" class="feature-sketch">
    <rect x="74" y="46" width="120" height="120" rx="8" stroke="currentColor" stroke-width="0.75" opacity="0.3"/>
    <line x1="74" y1="76" x2="194" y2="76" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <line x1="74" y1="106" x2="194" y2="106" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <line x1="74" y1="136" x2="194" y2="136" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <line x1="104" y1="46" x2="104" y2="166" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <line x1="134" y1="46" x2="134" y2="166" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <line x1="164" y1="46" x2="164" y2="166" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <path d="M110 120 L125 135 L158 100" stroke="currentColor" stroke-width="1.2" opacity="0.45" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  cron: `<svg viewBox="0 0 268 212" fill="none" class="feature-sketch">
    <circle cx="134" cy="106" r="56" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
    <circle cx="134" cy="106" r="3" fill="currentColor" opacity="0.5"/>
    <line x1="134" y1="106" x2="134" y2="62" stroke="currentColor" stroke-width="1" opacity="0.4"/>
    <line x1="134" y1="106" x2="168" y2="120" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
    <path d="M134 50 L134 42 M180 72 L186 66 M198 106 L206 106 M180 140 L186 146 M134 162 L134 170 M88 140 L82 146 M70 106 L62 106 M88 72 L82 66" stroke="currentColor" stroke-width="0.5" opacity="0.25"/>
  </svg>`,

  license: `<svg viewBox="0 0 268 212" fill="none" class="feature-sketch">
    <circle cx="110" cy="110" r="40" stroke="currentColor" stroke-width="0.75" opacity="0.3"/>
    <circle cx="110" cy="90" r="20" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
    <path d="M150 110 H210 V170 H150 Z" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
    <line x1="162" y1="130" x2="198" y2="130" stroke="currentColor" stroke-width="0.5" opacity="0.25"/>
    <line x1="162" y1="145" x2="198" y2="145" stroke="currentColor" stroke-width="0.5" opacity="0.25"/>
    <line x1="162" y1="160" x2="185" y2="160" stroke="currentColor" stroke-width="0.5" opacity="0.25"/>
  </svg>`,

  dashboard: `<svg viewBox="0 0 268 212" fill="none" class="feature-sketch">
    <rect x="50" y="40" width="168" height="132" rx="6" stroke="currentColor" stroke-width="0.75" opacity="0.3"/>
    <rect x="62" y="52" width="40" height="108" rx="3" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <rect x="112" y="52" width="94" height="30" rx="3" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <rect x="112" y="92" width="44" height="68" rx="3" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <rect x="162" y="92" width="44" height="68" rx="3" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <circle cx="134" cy="126" r="18" stroke="currentColor" stroke-width="0.75" opacity="0.4"/>
    <text x="134" y="131" text-anchor="middle" fill="currentColor" font-size="12" opacity="0.5" font-family="Geist Mono,monospace">90</text>
  </svg>`,

  firewall: `<svg viewBox="0 0 268 212" fill="none" class="feature-sketch">
    <path d="M134 30 L210 70 V130 C210 170 134 190 134 190 C134 190 58 170 58 130 V70 Z" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
    <path d="M134 55 L185 82 V125 C185 152 134 168 134 168 C134 168 83 152 83 125 V82 Z" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <line x1="90" y1="100" x2="178" y2="100" stroke="currentColor" stroke-width="0.5" opacity="0.25"/>
    <line x1="90" y1="120" x2="178" y2="120" stroke="currentColor" stroke-width="0.5" opacity="0.25"/>
    <line x1="90" y1="140" x2="150" y2="140" stroke="currentColor" stroke-width="0.5" opacity="0.25"/>
  </svg>`,

  react: `<svg viewBox="0 0 268 212" fill="none" class="feature-sketch feature-sketch--lg">
    <ellipse cx="134" cy="106" rx="80" ry="28" stroke="currentColor" stroke-width="0.75" opacity="0.35" transform="rotate(0 134 106)"/>
    <ellipse cx="134" cy="106" rx="80" ry="28" stroke="currentColor" stroke-width="0.75" opacity="0.35" transform="rotate(60 134 106)"/>
    <ellipse cx="134" cy="106" rx="80" ry="28" stroke="currentColor" stroke-width="0.75" opacity="0.35" transform="rotate(120 134 106)"/>
    <circle cx="134" cy="106" r="14" stroke="currentColor" stroke-width="0.75" opacity="0.4"/>
    <circle cx="134" cy="106" r="5" fill="currentColor" opacity="0.45"/>
    <circle cx="60" cy="80" r="8" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
    <circle cx="208" cy="132" r="8" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
    <line x1="68" y1="84" x2="120" y2="100" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
    <line x1="200" y1="128" x2="148" y2="112" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  </svg>`,

  scanner: `<svg viewBox="0 0 268 212" fill="none" class="feature-sketch">
    <circle cx="110" cy="90" r="44" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
    <line x1="142" y1="122" x2="190" y2="170" stroke="currentColor" stroke-width="1.5" opacity="0.4" stroke-linecap="round"/>
    <rect x="170" y="50" width="60" height="72" rx="4" stroke="currentColor" stroke-width="0.5" opacity="0.25"/>
    <line x1="180" y1="70" x2="220" y2="70" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <line x1="180" y1="85" x2="210" y2="85" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <line x1="180" y1="100" x2="215" y2="100" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <path d="M185 58 L185 62 M225 58 L225 62" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
  </svg>`,

  sandbox: `<svg viewBox="0 0 268 212" fill="none" class="feature-sketch">
    <circle cx="134" cy="106" r="76" stroke="currentColor" stroke-width="0.5" opacity="0.14"/>
    <circle cx="134" cy="106" r="56" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>

    <rect x="64" y="62" width="140" height="30" rx="6" stroke="currentColor" stroke-width="0.75" opacity="0.4"/>
    <rect x="74" y="102" width="120" height="30" rx="6" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
    <rect x="84" y="142" width="100" height="30" rx="6" stroke="currentColor" stroke-width="0.75" opacity="0.3"/>

    <line x1="134" y1="92" x2="134" y2="102" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
    <line x1="134" y1="132" x2="134" y2="142" stroke="currentColor" stroke-width="0.5" opacity="0.28"/>

    <text x="134" y="81" text-anchor="middle" fill="currentColor" font-size="9" opacity="0.6" font-family="Geist Mono,monospace">Sandbox</text>
    <text x="134" y="121" text-anchor="middle" fill="currentColor" font-size="9" opacity="0.55" font-family="Geist Mono,monospace">Security</text>
    <text x="134" y="161" text-anchor="middle" fill="currentColor" font-size="9" opacity="0.5" font-family="Geist Mono,monospace">Network</text>
  </svg>`,

  threatmodel: `<svg viewBox="0 0 268 212" fill="none" class="feature-sketch">
    <circle cx="134" cy="50" r="12" stroke="currentColor" stroke-width="0.75" opacity="0.4"/>
    <circle cx="74" cy="130" r="12" stroke="currentColor" stroke-width="0.75" opacity="0.4"/>
    <circle cx="194" cy="130" r="12" stroke="currentColor" stroke-width="0.75" opacity="0.4"/>
    <circle cx="134" cy="170" r="12" stroke="currentColor" stroke-width="0.75" opacity="0.4"/>
    <line x1="134" y1="62" x2="74" y2="118" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
    <line x1="134" y1="62" x2="194" y2="118" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
    <line x1="74" y1="142" x2="134" y2="158" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
    <line x1="194" y1="142" x2="134" y2="158" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
  </svg>`,

  auth: `<svg viewBox="0 0 268 212" fill="none" class="feature-sketch">
    <rect x="100" y="100" width="68" height="56" rx="6" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
    <path d="M134 100 V80 C134 62 118 50 100 50 H88 C70 50 54 62 54 80 V100" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
    <circle cx="134" cy="128" r="6" fill="currentColor" opacity="0.4"/>
    <rect x="178" y="70" width="40" height="40" rx="4" stroke="currentColor" stroke-width="0.5" opacity="0.25"/>
    <line x1="186" y1="82" x2="210" y2="82" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <line x1="186" y1="92" x2="210" y2="92" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <line x1="186" y1="102" x2="200" y2="102" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
  </svg>`,

  zerotrust: `<svg viewBox="0 0 268 212" fill="none" class="feature-sketch">
    <circle cx="134" cy="106" r="70" stroke="currentColor" stroke-width="0.5" opacity="0.15"/>
    <circle cx="134" cy="106" r="50" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <circle cx="134" cy="106" r="30" stroke="currentColor" stroke-width="0.75" opacity="0.3"/>
    <circle cx="134" cy="106" r="10" stroke="currentColor" stroke-width="0.75" opacity="0.45"/>
    <text x="134" y="72" text-anchor="middle" fill="currentColor" font-size="8" opacity="0.35" font-family="Geist Mono,monospace">HIGH</text>
    <text x="178" y="112" fill="currentColor" font-size="7" opacity="0.3" font-family="Geist Mono,monospace">MED</text>
    <text x="90" y="148" fill="currentColor" font-size="7" opacity="0.3" font-family="Geist Mono,monospace">LOW</text>
  </svg>`,

  siem: `<svg viewBox="0 0 268 212" fill="none" class="feature-sketch">
    <line x1="50" y1="170" x2="218" y2="170" stroke="currentColor" stroke-width="0.5" opacity="0.25"/>
    <rect x="60" y="120" width="20" height="50" rx="2" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
    <rect x="100" y="90" width="20" height="80" rx="2" stroke="currentColor" stroke-width="0.5" opacity="0.35"/>
    <rect x="140" y="70" width="20" height="100" rx="2" stroke="currentColor" stroke-width="0.5" opacity="0.4"/>
    <rect x="180" y="100" width="20" height="70" rx="2" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
    <path d="M60 50 H200" stroke="currentColor" stroke-width="0.5" opacity="0.2" stroke-dasharray="3 3"/>
    <circle cx="100" cy="50" r="3" fill="currentColor" opacity="0.35"/>
    <circle cx="150" cy="50" r="3" fill="currentColor" opacity="0.35"/>
    <circle cx="200" cy="50" r="3" fill="currentColor" opacity="0.35"/>
  </svg>`,

  vulnerability: `<svg viewBox="0 0 268 212" fill="none" class="feature-sketch">
    <rect x="80" y="50" width="108" height="120" rx="6" stroke="currentColor" stroke-width="0.75" opacity="0.3"/>
    <text x="134" y="85" text-anchor="middle" fill="currentColor" font-size="14" opacity="0.4" font-family="Geist Mono,monospace" font-weight="600">CVE</text>
    <line x1="96" y1="100" x2="172" y2="100" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <line x1="96" y1="115" x2="160" y2="115" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <line x1="96" y1="130" x2="168" y2="130" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <line x1="96" y1="145" x2="150" y2="145" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <circle cx="172" cy="115" r="8" stroke="currentColor" stroke-width="0.5" opacity="0.35"/>
    <line x1="172" y1="111" x2="172" y2="119" stroke="currentColor" stroke-width="0.75" opacity="0.4"/>
  </svg>`,

  audit: `<svg viewBox="0 0 268 212" fill="none" class="feature-sketch">
    <path d="M90 40 H178 V172 H90 Z" stroke="currentColor" stroke-width="0.75" opacity="0.3"/>
    <path d="M90 40 H120 V60 H90 Z" fill="currentColor" opacity="0.08"/>
    <line x1="106" y1="80" x2="162" y2="80" stroke="currentColor" stroke-width="0.5" opacity="0.25"/>
    <line x1="106" y1="100" x2="162" y2="100" stroke="currentColor" stroke-width="0.5" opacity="0.25"/>
    <line x1="106" y1="120" x2="155" y2="120" stroke="currentColor" stroke-width="0.5" opacity="0.25"/>
    <line x1="106" y1="140" x2="160" y2="140" stroke="currentColor" stroke-width="0.5" opacity="0.25"/>
    <line x1="106" y1="160" x2="148" y2="160" stroke="currentColor" stroke-width="0.5" opacity="0.25"/>
  </svg>`,

  ai: `<svg viewBox="0 0 268 212" fill="none" class="feature-sketch">
    <circle cx="134" cy="60" r="10" stroke="currentColor" stroke-width="0.75" opacity="0.4"/>
    <circle cx="74" cy="110" r="10" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
    <circle cx="194" cy="110" r="10" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
    <circle cx="100" cy="160" r="10" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
    <circle cx="168" cy="160" r="10" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
    <line x1="134" y1="70" x2="74" y2="100" stroke="currentColor" stroke-width="0.5" opacity="0.25"/>
    <line x1="134" y1="70" x2="194" y2="100" stroke="currentColor" stroke-width="0.5" opacity="0.25"/>
    <line x1="74" y1="120" x2="100" y2="150" stroke="currentColor" stroke-width="0.5" opacity="0.25"/>
    <line x1="194" y1="120" x2="168" y2="150" stroke="currentColor" stroke-width="0.5" opacity="0.25"/>
    <line x1="100" y1="160" x2="168" y2="160" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
  </svg>`,

  settings: `<svg viewBox="0 0 268 212" fill="none" class="feature-sketch">
    <circle cx="134" cy="106" r="28" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
    <circle cx="134" cy="106" r="10" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
    <line x1="134" y1="58" x2="134" y2="72" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
    <line x1="134" y1="140" x2="134" y2="154" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
    <line x1="86" y1="106" x2="100" y2="106" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
    <line x1="168" y1="106" x2="182" y2="106" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
    <line x1="100" y1="72" x2="110" y2="82" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
    <line x1="158" y1="130" x2="168" y2="140" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
    <line x1="168" y1="72" x2="158" y2="82" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
    <line x1="110" y1="130" x2="100" y2="140" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
  </svg>`,
};

function injectSketches() {
  document.querySelectorAll('[data-sketch]').forEach((el) => {
    const key = el.dataset.sketch;
    if (!SKETCHES[key]) return;
    el.innerHTML = SKETCHES[key];
    el.querySelectorAll('svg.feature-sketch').forEach((svg) => {
      svg.setAttribute('width', '268');
      svg.setAttribute('height', '212');
      svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    });
    el.querySelectorAll('img.feature-sketch').forEach((img) => {
      img.width = 268;
      img.height = 212;
    });
  });
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectSketches);
  } else {
    injectSketches();
  }
}
