const translations = {
  en: {
    meta: {
      title: 'NetGuard — WordPress Security Suite',
      description: 'NetGuard protects your WordPress site with real-time threat detection, malware scanning, vulnerability assessment, and authentication hardening.',
    },
    nav: {
      features: 'Features',
      modules: 'Modules',
      buy: 'Buy',
      buyRastchin: 'Buy from Rastchin',
      toggleMenu: 'Toggle menu',
      switchLang: 'Switch language',
    },
    hero: {
      badge: 'WordPress Security Suite',
      title: 'Protect your site with',
      titleHighlight: 'intelligent security',
      desc: 'NetGuard delivers real-time threat detection, malware scanning, vulnerability assessment, and authentication hardening — all from a single WordPress plugin.',
      ctaPrimary: 'Buy from Rastchin',
      ctaSecondary: 'Explore Modules',
      imageAlt: 'NetGuard Security Dashboard',
      scoreLabel: 'Security Score',
      threatsLabel: 'Threats Blocked',
    },
    stats: {
      threats: 'Threats blocked today',
      files: 'Files scanned',
      modules: 'Security modules',
      uptime: 'Uptime reliability',
    },
    features: {
      title: 'Everything your WordPress site needs',
      subtitle: 'A complete security platform built for modern WordPress deployments.',
      realtime: {
        title: 'Real-time Protection',
        desc: 'Block malicious traffic, brute-force attacks, and suspicious requests before they reach your site.',
      },
      scanner: {
        title: 'File Scanning',
        desc: 'Scan every file in your WordPress installation for malware, backdoors, and suspicious code patterns.',
      },
      vuln: {
        title: 'Vulnerability Assessment',
        desc: 'Detect outdated core, plugins, and themes with severity-ranked findings and remediation guidance.',
      },
      auth: {
        title: 'Auth Hardening',
        desc: 'Two-factor authentication, session tracking, device trust, and login anomaly detection.',
      },
    },
    modules: {
      title: '12 integrated security modules',
      subtitle: 'One unified dashboard for every layer of WordPress protection.',
      firewall: {
        tab: 'Firewall',
        title: 'Web Application Firewall',
        desc: 'Block SQL injection, XSS, and malicious requests at the edge before they reach WordPress.',
        items: ['IP reputation filtering', 'Rate limiting & brute-force protection', 'Custom rule engine', 'Geo-blocking support'],
      },
      scanner: {
        tab: 'Malware Scanner',
        title: 'Malware Scanner',
        desc: 'Real-time antivirus-style scanning of every file in your WordPress installation.',
        items: ['Live file scanning with progress tracking', 'Quarantine infected files automatically', 'Signature and heuristic detection', 'Scheduled deep scans'],
      },
      threats: {
        tab: 'Threat Intelligence',
        title: 'Threat Intelligence',
        desc: 'Stay ahead of emerging threats with continuously updated intelligence feeds.',
        items: ['Global threat feed integration', 'IOC matching and alerting', 'Attack pattern recognition', 'Automated blocklist updates'],
      },
      threatModeling: {
        tab: 'Threat Modeling',
        title: 'Threat Modeling',
        desc: 'Map your attack surface and prioritize risks based on your site configuration.',
        items: ['Attack surface analysis', 'Risk scoring per component', 'Remediation prioritization', 'Compliance mapping'],
      },
      sandbox: {
        tab: 'Sandbox',
        title: 'Sandbox Isolation',
        desc: 'Isolate suspicious files and processes in a safe environment for analysis.',
        items: ['Automatic file isolation', 'Behavioral analysis engine', 'Safe execution environment', 'Threat verdict reporting'],
      },
      monitoring: {
        tab: 'Monitoring',
        title: 'Security Dashboard',
        desc: 'Real-time protection status and threat intelligence for your WordPress site.',
        items: ['Live security score (0–100)', 'Active threat counter', 'Blocked requests today', 'Module health overview'],
      },
      siem: {
        tab: 'SIEM',
        title: 'Security Information & Event Management',
        desc: 'Centralize security events from all modules into a unified log and alert system.',
        items: ['Cross-module event correlation', 'Custom alert rules', 'Export to external SIEM', 'Retention policies'],
      },
      vulnerability: {
        tab: 'Vulnerability Scanner',
        title: 'Vulnerability Scanner',
        desc: 'Core, plugin, and theme vulnerability assessment with severity-ranked findings.',
        items: ['WordPress core version checks', 'Plugin & theme CVE matching', 'Severity classification', 'One-click update guidance'],
      },
      authentication: {
        tab: 'Authentication',
        title: 'Authentication Hardening',
        desc: 'Sessions, trusted devices, and login hardening for administrator accounts.',
        items: ['TOTP two-factor authentication', 'Active session management', 'Device trust scoring', 'Login anomaly alerts'],
      },
      securityLayer: {
        tab: 'Security Layer',
        title: 'Security Layer',
        desc: 'Additional hardening layers for headers, permissions, and file integrity.',
        items: ['Security header enforcement', 'File permission auditing', 'Directory listing prevention', 'wp-config protection'],
      },
      advisory: {
        tab: 'Advisory',
        title: 'Security Advisory',
        desc: 'Actionable security recommendations tailored to your WordPress environment.',
        items: ['Personalized hardening checklist', 'Best practice guidance', 'Priority-ranked actions', 'Progress tracking'],
      },
      auditLogs: {
        tab: 'Audit Logs',
        title: 'Audit Logs',
        desc: 'Complete audit trail of all security events, admin actions, and configuration changes.',
        items: ['Immutable event logging', 'Admin action tracking', 'Search and filter logs', 'Export for compliance'],
      },
    },
    cta: {
      title: 'Ready to secure your WordPress site?',
      subtitle: 'Get NetGuard from Rastchin — Iran\'s trusted source for WordPress plugins and themes.',
      buy: 'Buy from Rastchin',
      note: 'Secure checkout · Free updates after purchase · Official support',
    },
    footer: {
      copy: '© 2026 NetGuard. WordPress Security Suite.',
    },
  },
  fa: {
    meta: {
      title: 'نت‌گارد — مجموعه امنیت وردپرس',
      description: 'نت‌گارد سایت وردپرس شما را با تشخیص تهدید بلادرنگ، اسکن بدافزار، ارزیابی آسیب‌پذیری و تقویت احراز هویت محافظت می‌کند.',
    },
    nav: {
      features: 'ویژگی‌ها',
      modules: 'ماژول‌ها',
      buy: 'خرید',
      buyRastchin: 'خرید از راست‌چین',
      toggleMenu: 'باز و بسته کردن منو',
      switchLang: 'تغییر زبان',
    },
    hero: {
      badge: 'مجموعه امنیت وردپرس',
      title: 'سایت خود را با',
      titleHighlight: 'امنیت هوشمند محافظت کنید',
      desc: 'نت‌گارد تشخیص تهدید بلادرنگ، اسکن بدافزار، ارزیابی آسیب‌پذیری و تقویت احراز هویت را — همه در یک افزونه وردپرس — ارائه می‌دهد.',
      ctaPrimary: 'خرید از راست‌چین',
      ctaSecondary: 'مشاهده ماژول‌ها',
      imageAlt: 'داشبورد امنیتی نت‌گارد',
      scoreLabel: 'امتیاز امنیتی',
      threatsLabel: 'تهدید مسدود شده',
    },
    stats: {
      threats: 'تهدید مسدود شده امروز',
      files: 'فایل اسکن شده',
      modules: 'ماژول امنیتی',
      uptime: 'قابلیت اطمینان آپتایم',
    },
    features: {
      title: 'هر آنچه سایت وردپرس شما نیاز دارد',
      subtitle: 'یک پلتفرم امنیتی کامل برای استقرارهای مدرن وردپرس.',
      realtime: {
        title: 'محافظت بلادرنگ',
        desc: 'ترافیک مخرب، حملات brute-force و درخواست‌های مشکوک را قبل از رسیدن به سایت مسدود کنید.',
      },
      scanner: {
        title: 'اسکن فایل',
        desc: 'هر فایل در نصب وردپرس خود را برای بدافزار، در پشتی و الگوهای کد مشکوک اسکن کنید.',
      },
      vuln: {
        title: 'ارزیابی آسیب‌پذیری',
        desc: 'هسته، افزونه‌ها و قالب‌های قدیمی را با یافته‌های رتبه‌بندی شده شناسایی کنید.',
      },
      auth: {
        title: 'تقویت احراز هویت',
        desc: 'احراز هویت دو مرحله‌ای، ردیابی نشست، اعتماد دستگاه و تشخیص ناهنجاری ورود.',
      },
    },
    modules: {
      title: '۱۲ ماژول امنیتی یکپارچه',
      subtitle: 'یک داشبورد واحد برای هر لایه محافظت وردپرس.',
      firewall: {
        tab: 'فایروال',
        title: 'فایروال برنامه وب',
        desc: 'SQL injection، XSS و درخواست‌های مخرب را در لبه شبکه مسدود کنید.',
        items: ['فیلتر اعتبار IP', 'محدودیت نرخ و محافظت brute-force', 'موتور قوانین سفارشی', 'پشتیبانی Geo-blocking'],
      },
      scanner: {
        tab: 'اسکنر بدافزار',
        title: 'اسکنر بدافزار',
        desc: 'اسکن آنتی‌ویروس بلادرنگ هر فایل در نصب وردپرس شما.',
        items: ['اسکن زنده فایل با پیگیری پیشرفت', 'قرنطینه خودکار فایل‌های آلوده', 'تشخیص امضا و اکتشافی', 'اسکن عمیق زمان‌بندی شده'],
      },
      threats: {
        tab: 'اطلاعات تهدید',
        title: 'اطلاعات تهدید',
        desc: 'با فیدهای اطلاعاتی به‌روز، از تهدیدهای نوظهور جلوتر باشید.',
        items: ['یکپارچه‌سازی فید تهدید جهانی', 'تطبیق IOC و هشدار', 'شناسایی الگوی حمله', 'به‌روزرسانی خودکار لیست مسدود'],
      },
      threatModeling: {
        tab: 'مدل‌سازی تهدید',
        title: 'مدل‌سازی تهدید',
        desc: 'سطح حمله خود را نقشه‌برداری و ریسک‌ها را بر اساس پیکربندی سایت اولویت‌بندی کنید.',
        items: ['تحلیل سطح حمله', 'امتیازدهی ریسک هر جزء', 'اولویت‌بندی رفع مشکل', 'نگاشت انطباق'],
      },
      sandbox: {
        tab: 'سندباکس',
        title: 'ایزولاسیون سندباکس',
        desc: 'فایل‌ها و فرآیندهای مشکوک را در محیط امن برای تحلیل جدا کنید.',
        items: ['ایزولاسیون خودکار فایل', 'موتور تحلیل رفتاری', 'محیط اجرای امن', 'گزارش نتیجه تهدید'],
      },
      monitoring: {
        tab: 'مانیتورینگ',
        title: 'داشبورد امنیتی',
        desc: 'وضعیت محافظت بلادرنگ و اطلاعات تهدید برای سایت وردپرس شما.',
        items: ['امتیاز امنیتی زنده (۰–۱۰۰)', 'شمارنده تهدید فعال', 'درخواست‌های مسدود امروز', 'نمای کلی سلامت ماژول‌ها'],
      },
      siem: {
        tab: 'SIEM',
        title: 'مدیریت اطلاعات و رویداد امنیتی',
        desc: 'رویدادهای امنیتی همه ماژول‌ها را در یک سیستم گزارش و هشدار یکپارچه کنید.',
        items: ['همبستگی رویداد بین ماژول‌ها', 'قوانین هشدار سفارشی', 'خروجی به SIEM خارجی', 'سیاست‌های نگهداری'],
      },
      vulnerability: {
        tab: 'اسکنر آسیب‌پذیری',
        title: 'اسکنر آسیب‌پذیری',
        desc: 'ارزیابی آسیب‌پذیری هسته، افزونه و قالب با یافته‌های رتبه‌بندی شده.',
        items: ['بررسی نسخه هسته وردپرس', 'تطبیق CVE افزونه و قالب', 'طبقه‌بندی شدت', 'راهنمای به‌روزرسانی یک‌کلیکی'],
      },
      authentication: {
        tab: 'احراز هویت',
        title: 'تقویت احراز هویت',
        desc: 'نشست‌ها، دستگاه‌های مورد اعتماد و تقویت ورود برای حساب‌های مدیر.',
        items: ['احراز هویت دو مرحله‌ای TOTP', 'مدیریت نشست فعال', 'امتیازدهی اعتماد دستگاه', 'هشدار ناهنجاری ورود'],
      },
      securityLayer: {
        tab: 'لایه امنیتی',
        title: 'لایه امنیتی',
        desc: 'لایه‌های سخت‌سازی اضافی برای هدرها، مجوزها و یکپارچگی فایل.',
        items: ['اجرای هدرهای امنیتی', 'ممیزی مجوز فایل', 'جلوگیری از لیست دایرکتوری', 'محافظت wp-config'],
      },
      advisory: {
        tab: 'مشاوره امنیتی',
        title: 'مشاوره امنیتی',
        desc: 'توصیه‌های امنیتی عملی متناسب با محیط وردپرس شما.',
        items: ['چک‌لیست سخت‌سازی شخصی', 'راهنمای بهترین روش‌ها', 'اقدامات اولویت‌بندی شده', 'پیگیری پیشرفت'],
      },
      auditLogs: {
        tab: 'گزارش‌های ممیزی',
        title: 'گزارش‌های ممیزی',
        desc: 'رد کامل همه رویدادهای امنیتی، اقدامات مدیر و تغییرات پیکربندی.',
        items: ['ثبت رویداد تغییرناپذیر', 'ردیابی اقدام مدیر', 'جستجو و فیلتر گزارش‌ها', 'خروجی برای انطباق'],
      },
    },
    cta: {
      title: 'آماده امن‌سازی سایت وردپرس خود هستید؟',
      subtitle: 'نت‌گارد را از راست‌چین تهیه کنید — مرجع معتبر افزونه‌ها و قالب‌های وردپرس.',
      buy: 'خرید از راست‌چین',
      note: 'پرداخت امن · به‌روزرسانی رایگان پس از خرید · پشتیبانی رسمی',
    },
    footer: {
      copy: '© ۲۰۲۶ نت‌گارد. مجموعه امنیت وردپرس.',
    },
  },
};

function getNestedValue(obj, path) {
  return path.split('.').reduce((o, k) => o?.[k], obj);
}

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';

  document.title = t.meta.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = t.meta.description;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = getNestedValue(t, key);
    if (val) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = getNestedValue(t, key);
    if (val) el.placeholder = val;
  });

  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-alt');
    const val = getNestedValue(t, key);
    if (val) el.alt = val;
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    const val = getNestedValue(t, key);
    if (val) el.setAttribute('aria-label', val);
  });

  document.querySelectorAll('.lang-switch__btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function initI18n() {
  const saved = localStorage.getItem('netguard-lang');
  const browserFa = navigator.language?.startsWith('fa');
  const lang = saved || (browserFa ? 'fa' : 'en');
  applyTranslations(lang);

  document.querySelectorAll('.lang-switch__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const newLang = btn.dataset.lang;
      localStorage.setItem('netguard-lang', newLang);
      applyTranslations(newLang);
      if (typeof renderModules === 'function') renderModules();
    });
  });
}

function getTranslation(key) {
  const lang = document.documentElement.lang || 'en';
  return getNestedValue(translations[lang], key) || key;
}
