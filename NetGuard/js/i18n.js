(function () {
  'use strict';

  const STORAGE_KEY = 'netguard-language';
  const originalText = new WeakMap();
  const originalAttrs = new WeakMap();

  const pageMeta = {
    'index.html': {
      fa: {
        title: 'نت‌گارد — مجموعه امنیتی وردپرس',
        description: 'نت‌گارد یک مجموعه امنیتی ماژولار برای وردپرس است با WAF، اسکنر بدافزار، Zero Trust، SIEM و داشبورد مدیریتی React.'
      },
      en: {
        title: 'NetGuard — WordPress Security Suite',
        description: 'NetGuard is a modular WordPress security suite with WAF, malware scanning, Zero Trust, SIEM, and a React admin dashboard.'
      }
    },
    'installation-guide.html': {
      fa: {
        title: 'راهنمای نصب — نت‌گارد',
        description: 'نت‌گارد را با کپی فایل افزونه و فعال‌سازی از پنل مدیریت وردپرس نصب کنید.'
      },
      en: {
        title: 'Installation Guide — NetGuard',
        description: 'Install NetGuard by copying the plugin files and activating it from the WordPress admin panel.'
      }
    },
    'troubleshooting.html': {
      fa: {
        title: 'عیب‌یابی — نت‌گارد',
        description: 'مدیریت خطای نت‌گارد: محل نمایش خطاها، سطح شدت و راه‌حل مرحله‌به‌مرحله برای مشکلات نصب، یکپارچگی، داشبورد و API.'
      },
      en: {
        title: 'Troubleshooting — NetGuard',
        description: 'NetGuard error management: where errors appear, severity levels, and step-by-step fixes for setup, integrity, dashboard, and API issues.'
      }
    }
  };

  const translations = {
    'رفتن به صفحه اصلی': 'Go to homepage',
    'باز کردن منو': 'Open menu',
    'نت‌گارد': 'NetGuard',
    'نصب': 'Install',
    'عیب‌یابی': 'Troubleshooting',
    'مستندات': 'Docs',
    'خرید': 'Buy',
    'خرید از راست‌چین': 'Buy on Rastchin',
    'شروع کنید': 'Get started',
    'آشنایی با نت‌گارد': 'Explore NetGuard',
    'منابع': 'Resources',
    'بیشتر': 'More',
    'راهنمای نصب': 'Installation Guide',
    'مرور قابلیت‌ها': 'Feature Overview',
    '© ۲۰۲۶ نت‌گارد. مجموعه امنیتی وردپرس.': '© 2026 NetGuard. WordPress security suite.',

    'مجموعه امنیتی وردپرس ': 'WordPress security suite ',
    'برای وب': 'for the web',
    'نت‌گارد یک پلتفرم امنیتی ماژولار برای وردپرس است با ': 'NetGuard is a modular security platform for WordPress with ',
    'داشبورد مدیریتی ری‌اکت': 'a React admin dashboard',
    '، رابط REST API، فایروال WAF، اسکنر بدافزار، زیروتراست و SIEM.': ', REST API, WAF firewall, malware scanner, Zero Trust, and SIEM.',
    'نت‌گارد چه امکاناتی دارد؟': 'What does NetGuard include?',
    'چهارده ماژول مدیریتی، هفت سرویس هسته پلتفرم و یک لایه امنیتی یکپارچه برای وردپرس.': 'Fourteen admin modules, seven platform core services, and one unified security layer for WordPress.',
    'رابط REST API': 'REST API Interface',
    'اندپوینت‌های ': 'Endpoints for ',
    ' برای همه ماژول‌ها؛ ادغام فایروال، اسکن، رویداد، تنظیمات و مانیتورینگ از هر کلاینت یا اتوماسیون.': ' across all modules; integrate firewall, scanning, events, settings, and monitoring from any client or automation.',
    'سیستم رویداد': 'Event System',
    'اتوبوس رویداد داخلی متصل به هوک‌های وردپرس؛ هر ماژول می‌تواند رویداد امنیتی منتشر و دریافت کند.': 'An internal event bus connected to WordPress hooks; every module can publish and receive security events.',
    'مدیریت خطا': 'Error Management',
    'بررسی‌های نصب، رابط خطای تیره با مراحل رفع، و عیب‌یابی هدایت‌شده هنگام پیکربندی نادرست یا کمبود وابستگی‌ها.': 'Setup checks, a dark error UI with fix steps, and guided troubleshooting for misconfiguration or missing dependencies.',
    'یکپارچگی افزونه': 'Plugin Integrity',
    'بررسی SHA-256 بر اساس مانیفست و خط مبنا در زمان اجرا برای تشخیص تغییر فایل‌های افزونه قبل از آسیب به سایت.': 'SHA-256 checks against a manifest and runtime baseline to detect plugin file changes before they can affect the site.',
    'لاگ ساختاریافته و کران': 'Structured Logs and Cron',
    'اسکن بدافزار، بررسی یکپارچگی و پاک‌سازی لاگ‌ها در پس‌زمینه با کران وردپرس؛ لاگ‌های ساختاریافته و قابل جست‌وجو.': 'Malware scans, integrity checks, and log cleanup run in the background with WordPress cron; structured and searchable logs.',
    'لایسنس و به‌روزرسانی': 'License and Updates',
    'پشتیبانی از لایسنس RTL، ionCube Loader و مدیریت به‌روزرسانی؛ آماده برای زمان فعال‌سازی لایسنس.': 'Support for RTL licensing, ionCube Loader, and update management; ready for license activation.',
    'احراز هویت و دسترسی': 'Authentication and Access',
    'محافظت در برابر بروت‌فورس، ردیابی تلاش ورود، قفل IP، احراز هویت دومرحله‌ای TOTP، پایش نشست و اثرانگشت دستگاه.': 'Brute-force protection, login attempt tracking, IP lockouts, TOTP two-factor authentication, session monitoring, and device fingerprinting.',
    'داشبورد و نمای کلی': 'Dashboard and Overview',
    'امتیاز امنیت، شاخص‌های کلیدی، وضعیت ماژول‌ها، رویدادهای زنده و بررسی سلامت سیستم در یک نگاه.': 'Security score, key metrics, module status, live events, and system health at a glance.',
    'فایروال (WAF)': 'Firewall (WAF)',
    'تشخیص SQLi، XSS، RCE و Path Traversal؛ مسدودسازی آپلود مخرب، فیلتر بات بد، محافظت XML-RPC، رتبه‌بندی IP و محدودسازی نرخ.': 'Detect SQLi, XSS, RCE, and Path Traversal; block malicious uploads, bad bots, XML-RPC abuse, risky IPs, and rate-limit attacks.',
    'داشبورد مدیریتی ری‌اکت': 'React Admin Dashboard',
    'رابط Material Design 3 با داده زنده، پشتیبانی چندزبانه (FA/EN)، حالت تیره/روشن و سازگاری کامل RTL.': 'Material Design 3 interface with live data, multilingual support (FA/EN), dark/light mode, and full RTL compatibility.',
    'اسکنر و حفاظت بدافزار': 'Malware Scanner and Protection',
    'هسته امضا و تحلیل رفتاری با اتصال اختیاری VirusTotal؛ اسکن زمان‌بندی‌شده، شروع دستی، مدیریت قرنطینه و تاریخچه اسکن.': 'Signature and behavioral analysis engine with optional VirusTotal integration; scheduled scans, manual runs, quarantine management, and scan history.',
    'سه لایه محافظتی': 'Three Protection Layers',
    'Sandbox · Security · Network': 'Sandbox · Security · Network',
    'مدل‌سازی تهدید': 'Threat Modeling',
    'رجیستری مدل تهدید با به‌روزرسانی خودکار و صفحه اختصاصی تحلیل سطح حمله.': 'Threat model registry with automatic updates and a dedicated attack-surface analysis page.',
    'مدیریت آسیب‌پذیری': 'Vulnerability Management',
    'اسکنر آسیب‌پذیری به‌همراه مدیر CVE و اسکن دوره‌ای برای هسته، افزونه‌ها و پوسته‌ها.': 'Vulnerability scanner with CVE management and recurring scans for core, plugins, and themes.',
    'زیروتراست و لایه امنیتی': 'Zero Trust and Security Layer',
    'امتیازدهی ریسک برای هر درخواست/عملیات با سطح اعتماد بالا، متوسط و پایین بر اساس دستگاه، زمان، تغییر فایل و SSL.': 'Risk scoring for each request or operation with high, medium, and low trust levels based on device, time, file changes, and SSL.',
    'پایش و SIEM': 'Monitoring and SIEM',
    'مانیتورینگ لحظه‌ای فعالیت‌ها، ردیابی تغییرات کاربر/افزونه/پوسته و تحلیل SIEM با نمودار و تایم‌لاین.': 'Real-time activity monitoring, user/plugin/theme change tracking, and SIEM analysis with charts and timelines.',
    'ممیزی و انطباق': 'Audit and Compliance',
    'لاگ ممیزی پایدار با سطح شدت، قابلیت جست‌وجو، فیلتر، خروجی و نگه‌داری قابل تنظیم.': 'Persistent audit logs with severity levels, search, filters, export, and configurable retention.',
    'امنیت و مشاوره هوش مصنوعی': 'AI Security and Advisory',
    'طبقه‌بند تهدید، مشاور امنیتی و صفحه راهنمای مبتنی بر AI با امکان توسعه برای ML/LLM.': 'Threat classifier, security advisor, and AI-powered guidance page with room to extend into ML/LLM workflows.',
    'تنظیمات و مدیریت': 'Settings and Management',
    'تنظیمات مرکزی همه ماژول‌ها، اعلان ایمیلی اختیاری مدیر، پشتیبانی چندزبانه و RTL.': 'Central settings for all modules, optional admin email alerts, multilingual support, and RTL.',
    'معماری ماژولار': 'Modular Architecture',
    'فایروال، احراز هویت، اسکنر، پایش، ممیزی، آسیب‌پذیری، زیروتراست، AI، سندباکس و بیشتر؛ یک افزونه با ۱۴ صفحه مدیریتی.': 'Firewall, authentication, scanner, monitoring, audit, vulnerability, Zero Trust, AI, sandbox, and more; one plugin with 14 admin pages.',
    'ساخته‌شده بر پایه ابزارهای سریع ': 'Built on fast tools ',
    'و آماده محیط واقعی': 'and ready for real environments',
    'محافظت‌شده توسط نت‌گارد': 'Protected by NetGuard',
    'رابط مدیریتی Material Design 3 با داده زنده، امتیاز امنیت، وضعیت ماژول‌ها و سلامت سیستم.': 'Material Design 3 admin interface with live data, security score, module status, and system health.',
    ' برای همه ماژول‌ها جهت ادغام قوانین فایروال، اسکن، رویداد و تنظیمات.': ' for all modules to integrate firewall rules, scans, events, and settings.',
    'اتوبوس رویداد داخلی با هوک‌های وردپرس، لاگ ساختاریافته، بررسی SHA-256 و اجرای کران در پس‌زمینه.': 'Internal event bus with WordPress hooks, structured logs, SHA-256 checks, and background cron execution.',
    'نت‌گارد دفاع وردپرس را در سه سطح پیوسته، از اجرای امن تا کنترل ترافیک، مدیریت می‌کند.': 'NetGuard manages WordPress defense across three connected levels, from safe execution to traffic control.',
    'فایل‌ها، افزونه‌ها و عملیات حساس را پیش از اجرا در محیطی ایزوله تحلیل می‌کند تا ریسک تغییرات مشکوک به سایت منتقل نشود.': 'analyzes files, plugins, and sensitive operations in an isolated environment before execution, so suspicious changes do not reach the site.',
    'لایه اصلی دفاع وردپرس را با فایروال، احراز هویت، اسکن بدافزار و مدیریت آسیب‌پذیری‌ها یکپارچه می‌سازد.': 'unifies the main WordPress defense layer with firewall, authentication, malware scanning, and vulnerability management.',
    'ترافیک ورودی، IPهای پرریسک و درخواست‌های غیرعادی را پایش می‌کند تا فشار حملات پیش از رسیدن به هسته سایت کنترل شود.': 'monitors inbound traffic, high-risk IPs, and abnormal requests to reduce attack pressure before it reaches the site core.',
    'وقتی امنیت مهم است، ': 'When security matters, ',
    'انتخاب اول شما': 'your first choice',
    'تصویر ماژول احراز هویت نت‌گارد': 'NetGuard authentication module screenshot',
    'تصویر داشبورد امنیتی نت‌گارد در موبایل': 'NetGuard security dashboard mobile screenshot',
    'تصویر داشبورد امنیتی نت‌گارد': 'NetGuard security dashboard screenshot',
    'تصویر اسکنر آسیب‌پذیری نت‌گارد': 'NetGuard vulnerability scanner screenshot',
    'تصویر اسکنر بدافزار نت‌گارد در موبایل': 'NetGuard malware scanner mobile screenshot',
    'تصویر احراز هویت دومرحله‌ای نت‌گارد': 'NetGuard two-factor authentication screenshot',
    'تصویر اسکنر بدافزار نت‌گارد': 'NetGuard malware scanner screenshot',
    'تصویر نسخه بومی‌سازی‌شده اسکنر بدافزار نت‌گارد': 'NetGuard localized malware scanner screenshot',
    'برای ': 'For ',
    'محافظت': 'protection',
    '، ': ', ',
    'دیدپذیری': 'visibility',
    ' و ': ' and ',
    'کنترل': 'control',
    '. ': '. ',
    'نت‌گارد امنیت در سطح سازمانی را به وردپرس می‌آورد.': 'NetGuard brings enterprise-grade security to WordPress.',

    'راهنماها': 'Guides',
    'نت‌گارد را مانند هر افزونه وردپرسی نصب کنید؛ فایل‌ها را کپی کنید، افزونه را فعال کنید و کار تمام است.': 'Install NetGuard like any WordPress plugin: copy the files, activate the plugin, and you are done.',
    'پیش‌نیازها': 'Requirements',
    'وردپرس': 'WordPress',
    ' نسخه 6.4 یا بالاتر': ' version 6.4 or higher',
    ' نسخه 8.2 یا بالاتر': ' version 8.2 or higher',
    'مراحل نصب': 'Installation Steps',
    'فایل ': 'The ',
    ' را از خرید راست‌چین دانلود کنید.': ' file should be downloaded from your Rastchin purchase.',
    'فایل ZIP را استخراج کنید تا پوشه ': 'Extract the ZIP file to create the ',
    ' ایجاد شود.': ' folder.',
    'پوشه ': 'Copy the ',
    ' را در مسیر ': ' folder should be copied to ',
    ' روی سرور کپی کنید.': ' on your server.',
    'وارد وردپرس شوید و به بخش ': 'Log in to WordPress and go to ',
    'افزونه‌ها': 'Plugins',
    ' بروید.': '.',
    ' را پیدا کنید و روی ': ' and click ',
    'فعال‌سازی': 'Activate',
    ' کلیک کنید.': '.',
    'در صورت تمایل، به‌جای کپی دستی فایل‌ها، ZIP را از مسیر ': 'If you prefer, instead of copying files manually, upload the ZIP from ',
    'افزونه‌ها ← افزودن ← بارگذاری افزونه': 'Plugins → Add New → Upload Plugin',
    ' آپلود کنید.': '.',
    'پس از فعال‌سازی، از منوی کناری وردپرس وارد ': 'After activation, open ',
    ' شوید تا داشبورد باز شود.': ' from the WordPress sidebar to launch the dashboard.',
    'اگر مشکلی داشتید، ': 'If you run into an issue, see the ',
    ' را ببینید.': '.',

    'نت‌گارد در زمان بارگذاری افزونه، محیط وردپرس را بررسی می‌کند. اگر مشکلی وجود داشته باشد، پیام خطا همراه با راه‌حل مرحله‌به‌مرحله نمایش داده می‌شود.': 'When the plugin loads, NetGuard checks the WordPress environment. If there is a problem, it shows an error message with step-by-step remediation.',
    'محل نمایش خطاها': 'Where Errors Appear',
    'صفحات نت‌گارد': 'NetGuard pages',
    ' — پنل کامل خطا یا هشدار': ' — full error or warning panel',
    'سایر صفحات مدیریت وردپرس': 'Other WordPress admin pages',
    ' — اعلان مدیریتی در بالای صفحه': ' — admin notice at the top of the page',
    'خطاهای نصب': 'Setup Errors',
    'خطاهای یکپارچگی': 'Integrity Errors',
    'داشبورد و رابط API': 'Dashboard and API',
    'نکات عمومی': 'General Tips',
    'خطاهای نصب و پکیج': 'Setup and Package Errors',
    'نسخه PHP پایین است': 'PHP Version Is Too Low',
    'علت': 'Cause',
    'راه‌حل': 'Fix',
    'نسخه PHP سرور شما کمتر از 8.2 است.': 'Your server PHP version is lower than 8.2.',
    'در پنل هاست، نسخه PHP را به 8.2 یا بالاتر تغییر دهید.': 'In your hosting panel, switch PHP to version 8.2 or higher.',
    'در محیط محلی (XAMPP/MAMP) نسخه PHP را به‌روزرسانی کنید.': 'In local environments (XAMPP/MAMP), update PHP.',
    'پنل وردپرس را رفرش کرده و نت‌گارد را دوباره باز کنید.': 'Refresh the WordPress admin panel and open NetGuard again.',
    'نسخه وردپرس پایین است': 'WordPress Version Is Too Low',
    'نسخه وردپرس شما کمتر از 6.4 است.': 'Your WordPress version is lower than 6.4.',
    'از سایت نسخه پشتیبان تهیه کنید.': 'Back up the site.',
    'از مسیر ': 'From ',
    'پیشخوان ← به‌روزرسانی‌ها': 'Dashboard → Updates',
    ' وردپرس را آپدیت کنید.': ', update WordPress.',
    'دوباره نت‌گارد را اجرا کنید.': 'Run NetGuard again.',
    'پکیج افزونه ناقص است (': 'The plugin package is incomplete (',
    ' وجود ندارد)': ' is missing)',
    'پوشه ': 'The ',
    ' در بسته بارگذاری‌شده وجود ندارد.': ' folder is missing from the uploaded package.',
    'بسته کامل افزونه را دوباره دانلود کنید.': 'Download the complete plugin package again.',
    'پوشه فعلی افزونه را حذف و نسخه کامل را در ': 'Delete the current plugin folder and copy the full version into ',
    ' کپی کنید.': '.',
    'افزونه را غیرفعال/فعال کنید.': 'Deactivate and reactivate the plugin.',
    'فایل‌های داشبورد موجود نیستند': 'Dashboard Files Are Missing',
    'فایل‌های آماده داشبورد داخل پوشه افزونه پیدا نشده‌اند.': 'The built dashboard files were not found inside the plugin folder.',
    'پکیج کامل انتشار را جایگزین کنید.': 'Replace it with the complete release package.',
    'از وجود فایل‌های ': 'Make sure ',
    '، ': ', ',
    ' و ': ', and ',
    ' مطمئن شوید.': ' exist.',
    'جداول دیتابیس ساخته نشده‌اند': 'Database Tables Were Not Created',
    'نت‌گارد هنگام فعال‌سازی نتوانسته جداول موردنیاز را ایجاد کند.': 'NetGuard could not create the required tables during activation.',
    'افزونه را یک‌بار غیرفعال و دوباره فعال کنید.': 'Deactivate and reactivate the plugin once.',
    'مجوزهای دیتابیس برای ': 'Check database permissions for ',
    ' را بررسی کنید.': '.',
    'در صورت نیاز، ': 'If needed, enable ',
    ' را فعال و لاگ ': ' and check ',
    ' را بررسی کنید.': '.',
    'نیاز به ionCube Loader': 'ionCube Loader Required',
    'این نسخه نت‌گارد به افزونه PHP با نام ionCube Loader نیاز دارد.': 'This NetGuard build requires the PHP extension named ionCube Loader.',
    'ionCube Loader را مطابق نسخه PHP نصب کنید.': 'Install ionCube Loader for your PHP version.',
    'وب‌سرور/PHP را ری‌استارت کنید.': 'Restart the web server/PHP.',
    'خطاهای یکپارچگی فایل': 'File Integrity Errors',
    'نت‌گارد فایل‌های افزونه را با ': 'NetGuard compares plugin files against ',
    ' و خط مبنای قابل اعتماد مقایسه می‌کند.': ' and a trusted baseline.',
    'مانیفست یکپارچگی پیدا نشد': 'Integrity Manifest Not Found',
    ' در پوشه افزونه وجود ندارد.': ' does not exist in the plugin folder.',
    'نسخه کامل افزونه را جایگزین کنید.': 'Replace it with the complete plugin build.',
    'افزونه را دوباره فعال کنید.': 'Reactivate the plugin.',
    'فایل‌های افزونه تغییر کرده‌اند': 'Plugin Files Have Changed',
    'برخی فایل‌ها با مانیفست انتشار یا خط مبنای معتبر همخوانی ندارند.': 'Some files do not match the release manifest or trusted baseline.',
    'فایل‌های هسته افزونه را ویرایش نکنید.': 'Do not edit core plugin files.',
    'کل پوشه افزونه را با نسخه اصلی جایگزین کنید.': 'Replace the entire plugin folder with the original build.',
    'افزونه را غیرفعال/فعال کنید تا خط مبنا دوباره ساخته شود.': 'Deactivate/reactivate the plugin so the baseline can be rebuilt.',
    'هشدار': 'Warning',
    ' مسیر ذخیره‌سازی اسکن قابل نوشتن نیست': ' scan storage path is not writable',
    'نت‌گارد امکان نوشتن در مسیر ذخیره‌سازی اسکن (معمولاً ': 'NetGuard cannot write to the scan storage path, usually ',
    ') را ندارد.': '.',
    'مجوز نوشتن مسیر ': 'Fix write permissions for the ',
    ' را اصلاح کنید.': ' path.',
    'پس از اصلاح دسترسی، یک اسکن جدید اجرا کنید.': 'After fixing permissions, run a new scan.',
    'خطاهای داشبورد و رابط API': 'Dashboard and API Errors',
    'اگر صفحه باز می‌شود ولی پیام «مشکلی رخ داد» می‌بینید، معمولاً درخواست API ناموفق بوده است.': 'If the page opens but shows "Something went wrong", an API request usually failed.',
    'خطای نشست یا دسترسی (401/403)': 'Session or Permission Error (401/403)',
    'صفحه را رفرش کنید.': 'Refresh the page.',
    'از حساب خارج و دوباره وارد شوید.': 'Log out and sign in again.',
    'سطح دسترسی مدیر را بررسی کنید.': 'Check the administrator permission level.',
    'مسیر REST پیدا نشد (404)': 'REST Route Not Found (404)',
    'به تنظیمات پیوند یکتا بروید و یک‌بار ذخیره کنید.': 'Go to permalink settings and save once.',
    'افزونه را دوباره فعال کرده و صفحه را رفرش کنید.': 'Reactivate the plugin and refresh the page.',
    'خطای سرور (500)': 'Server Error (500)',
    'لاگ ': 'Check ',
    'از نسخه صحیح PHP و وجود پوشه ': 'Make sure the PHP version is correct and the ',
    ' مطمئن شوید.': ' folder exists.',
    'پاسخ API مسدود یا نامعتبر': 'API Response Blocked or Invalid',
    'افزونه‌های امنیتی دیگر را موقتاً غیرفعال کنید.': 'Temporarily disable other security plugins.',
    'اجازه دسترسی مسیر ': 'Check access permission for ',
    ' برای مدیر سایت را بررسی کنید.': ' for the site admin.',
    'خطای شبکه یا اتصال': 'Network or Connection Error',
    'اتصال اینترنت را بررسی کرده و دوباره تلاش کنید.': 'Check the internet connection and try again.',
    'باز بودن سایت وردپرس و دسترسی API را بررسی کنید.': 'Verify the WordPress site is reachable and the API is accessible.',
    'همیشه از سایت نسخه پشتیبان داشته باشید.': 'Always keep a site backup.',
    'پس از هر تغییر مهم، کش مرورگر و کش سایت را پاک کنید.': 'After every important change, clear browser and site caches.',
    'برای مراحل اولیه نصب، ': 'For the initial setup steps, see the '
  };

  const ignoredParents = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'SVG', 'CODE', 'PRE', 'TEXTAREA']);

  function getPageName() {
    return window.location.pathname.split('/').pop() || 'index.html';
  }

  function getStoredLanguage() {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'en' ? 'en' : 'fa';
  }

  function shouldSkip(node) {
    const parent = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
    return !parent || ignoredParents.has(parent.tagName) || Boolean(parent.closest('[data-no-i18n]'));
  }

  function translateValue(value, lang) {
    if (lang === 'fa') return value;
    const key = value.trim();
    const translated = translations[key] || translations[value] || translations[value.trimStart()] || translations[value.trimEnd()];
    if (!key || !translated) return value;
    return value.replace(key, translated);
  }

  function translateText(lang) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return shouldSkip(node) || !node.nodeValue.trim()
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      node.nodeValue = translateValue(originalText.get(node), lang);
    });
  }

  function translateAttributes(lang) {
    const selectors = '[aria-label], img[alt]';
    document.querySelectorAll(selectors).forEach((element) => {
      if (shouldSkip(element)) return;
      const attrs = originalAttrs.get(element) || {};
      ['aria-label', 'alt'].forEach((attr) => {
        if (!element.hasAttribute(attr)) return;
        if (!attrs[attr]) attrs[attr] = element.getAttribute(attr);
        element.setAttribute(attr, translateValue(attrs[attr], lang));
      });
      originalAttrs.set(element, attrs);
    });
  }

  function updateMeta(lang) {
    const page = pageMeta[getPageName()] || pageMeta['index.html'];
    document.title = page[lang].title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', page[lang].description);
  }

  function updateToggle(lang) {
    document.querySelectorAll('[data-lang-toggle]').forEach((button) => {
      button.textContent = lang === 'fa' ? 'EN' : 'FA';
      button.setAttribute('aria-label', lang === 'fa' ? 'Switch to English' : 'Switch to Farsi');
      button.setAttribute('title', lang === 'fa' ? 'Switch to English' : 'Switch to Farsi');
    });
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    translateText(lang);
    translateAttributes(lang);
    updateMeta(lang);
    updateToggle(lang);
  }

  function init() {
    const lang = getStoredLanguage();
    applyLanguage(lang);

    document.querySelectorAll('[data-lang-toggle]').forEach((button) => {
      button.addEventListener('click', () => {
        const next = document.documentElement.lang === 'fa' ? 'en' : 'fa';
        window.localStorage.setItem(STORAGE_KEY, next);
        applyLanguage(next);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
