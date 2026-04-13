/* ═══════════════════════════════════════════════════════
   بوابة الهجرة والعمل — script.js
   Dynamic content, search, filter, dark mode, mobile nav
═══════════════════════════════════════════════════════ */

'use strict';

/* ── DATA ──────────────────────────────────────────── */

const JOBS_DATA = [
  {
    id: 1,
    title: 'مهندس ميكانيكي',
    company: 'BMW Group',
    country: 'ألمانيا',
    city: 'ميونخ',
    flag: '🇩🇪',
    type: 'دوام كامل',
    field: 'هندسة',
    salary: '€4,500',
    period: 'شهرياً',
    tags: [{ label: 'تأشيرة مكفولة', color: 'green' }, { label: 'عقد دائم', color: 'sky' }, { label: 'هندسة', color: '' }],
    featured: true,
    date: '2025-04-13',
  },
  {
    id: 2,
    title: 'عامل موسمي في الزراعة',
    company: 'مزارع بروفانس',
    country: 'فرنسا',
    city: 'بروفانس',
    flag: '🇫🇷',
    type: 'موسمي',
    field: 'زراعة',
    salary: '€1,400',
    period: 'شهرياً',
    tags: [{ label: 'سكن مجاني', color: 'green' }, { label: 'زراعة', color: '' }, { label: 'بدون خبرة', color: '' }],
    featured: false,
    date: '2025-04-11',
  },
  {
    id: 3,
    title: 'مطور برمجيات',
    company: 'Shopify',
    country: 'كندا',
    city: 'تورنتو',
    flag: '🇨🇦',
    type: 'دوام كامل',
    field: 'تقنية',
    salary: 'CA$6,200',
    period: 'شهرياً',
    tags: [{ label: 'PR مدعوم', color: 'green' }, { label: 'Remote Option', color: 'sky' }, { label: 'تقنية', color: '' }],
    featured: true,
    date: '2025-04-10',
  },
  {
    id: 4,
    title: 'موظف استقبال فندقي',
    company: 'NH Hotels',
    country: 'إسبانيا',
    city: 'برشلونة',
    flag: '🇪🇸',
    type: 'دوام كامل',
    field: 'سياحة',
    salary: '€1,800',
    period: 'شهرياً',
    tags: [{ label: 'تأشيرة مكفولة', color: 'green' }, { label: 'سياحة', color: '' }],
    featured: false,
    date: '2025-04-09',
  },
  {
    id: 5,
    title: 'محاسب مالي',
    company: 'مجموعة ماجد الفطيم',
    country: 'الإمارات',
    city: 'دبي',
    flag: '🇦🇪',
    type: 'دوام كامل',
    field: 'مالي',
    salary: 'AED 8,000',
    period: 'شهرياً',
    tags: [{ label: 'إقامة مكفولة', color: 'green' }, { label: 'مالي', color: '' }, { label: 'بدون ضرائب', color: '' }],
    featured: false,
    date: '2025-04-08',
  },
  {
    id: 6,
    title: 'ممرض/ة مؤهل',
    company: 'مستشفى AMC',
    country: 'هولندا',
    city: 'أمستردام',
    flag: '🇳🇱',
    type: 'دوام كامل',
    field: 'طبي',
    salary: '€3,800',
    period: 'شهرياً',
    tags: [{ label: 'تأشيرة مهارات', color: 'green' }, { label: 'تدريب لغوي', color: 'sky' }, { label: 'طبي', color: '' }],
    featured: false,
    date: '2025-04-07',
  },
  {
    id: 7,
    title: 'مدرس لغة عربية',
    company: 'مدارس الملك فهد',
    country: 'ألمانيا',
    city: 'برلين',
    flag: '🇩🇪',
    type: 'دوام كامل',
    field: 'تعليم',
    salary: '€2,800',
    period: 'شهرياً',
    tags: [{ label: 'تأشيرة مكفولة', color: 'green' }, { label: 'تعليم', color: '' }],
    featured: false,
    date: '2025-04-06',
  },
  {
    id: 8,
    title: 'سائق شاحنة دولي',
    company: 'DHL Logistics',
    country: 'بلجيكا',
    city: 'بروكسل',
    flag: '🇧🇪',
    type: 'دوام كامل',
    field: 'نقل',
    salary: '€2,500',
    period: 'شهرياً',
    tags: [{ label: 'سكن مدعوم', color: 'green' }, { label: 'نقل', color: '' }],
    featured: false,
    date: '2025-04-05',
  },
];

const NEWS_DATA = [
  {
    id: 1,
    title: 'كندا تُطلق خطة الهجرة 2025–2027: أكثر من مليون فرصة للمهاجرين الجدد',
    excerpt: 'أعلنت حكومة كندا عن خطتها الطموحة لاستقبال 485,000 مهاجر في 2025 عبر برامج Express Entry وPNP والترشيح الإقليمي.',
    category: 'هجرة',
    catClass: 'cat-immigration',
    icon: '🍁',
    country: 'كندا',
    date: '2025-04-13',
    readTime: '4',
    featured: true,
  },
  {
    id: 2,
    title: 'قانون الهجرة الألماني الجديد: فرص ذهبية للمهنيين العرب',
    excerpt: 'يسمح القانون الجديد للعمال المهرة من خارج الاتحاد الأوروبي بالقدوم إلى ألمانيا دون عرض عمل مسبق بشرط توفر المؤهل والخبرة.',
    category: 'هجرة',
    catClass: 'cat-immigration',
    icon: '🇩🇪',
    country: 'ألمانيا',
    date: '2025-04-10',
    readTime: '5',
    featured: false,
  },
  {
    id: 3,
    title: 'إسبانيا تبحث عن 12,000 عامل موسمي في الزراعة والسياحة',
    excerpt: 'أطلقت إسبانيا برنامجاً للعمال الموسميين يشمل قطاع قطف الفراولة والعنب والعمل الفندقي براتب يبدأ من 1,200 يورو شهرياً.',
    category: 'وظائف',
    catClass: 'cat-jobs',
    icon: '💶',
    country: 'إسبانيا',
    date: '2025-04-08',
    readTime: '3',
    featured: false,
  },
  {
    id: 4,
    title: 'كيف تقدم طلب Express Entry في كندا خطوة بخطوة',
    excerpt: 'دليل مبسط ومفصل لتقديم طلب الهجرة عبر نظام Express Entry الكندي مع شرح نقاط CRS وكيفية رفعها.',
    category: 'هجرة',
    catClass: 'cat-immigration',
    icon: '✈️',
    country: 'كندا',
    date: '2025-04-05',
    readTime: '8',
    featured: false,
  },
  {
    id: 5,
    title: 'صندوق النقد الدولي يرفع توقعاته للنمو العالمي إلى 3.2%',
    excerpt: 'توقع الصندوق تحسن النمو الاقتصادي العالمي مدفوعاً بانخفاض التضخم وتعافي أسواق العمل في الدول المتقدمة.',
    category: 'اقتصاد',
    catClass: 'cat-news',
    icon: '🏦',
    country: 'عالمي',
    date: '2025-04-13',
    readTime: '3',
    featured: false,
  },
  {
    id: 6,
    title: 'الإقامة الذهبية في الإمارات: الشروط والتكاليف والمزايا',
    excerpt: 'كل ما تريد معرفته عن تأشيرة الإقامة الذهبية الإماراتية لمدة 10 سنوات والفئات المؤهلة والوثائق المطلوبة.',
    category: 'هجرة',
    catClass: 'cat-immigration',
    icon: '🏡',
    country: 'الإمارات',
    date: '2025-04-03',
    readTime: '6',
    featured: false,
  },
];

const TICKER_ITEMS = [
  'كندا تفتح بوابات الهجرة لعام 2025 بـ 485 ألف مهاجر',
  'ألمانيا تطلق قانون الهجرة للكفاءات الجديد',
  'إسبانيا تُعلن عن برنامج موسمي لـ 12,000 عامل',
  'الإمارات تستقبل طلبات الإقامة الذهبية',
  'فرنسا تفتح 8,000 فرصة عمل في قطاع الزراعة',
  'هولندا تُسهّل إجراءات تأشيرة المهن الشحيحة',
  'الاتحاد الأوروبي: ارتفاع الطلب على المهندسين والممرضين العرب',
];

const COUNTRIES = [
  { name: 'كندا', flag: '🇨🇦' },
  { name: 'ألمانيا', flag: '🇩🇪' },
  { name: 'فرنسا', flag: '🇫🇷' },
  { name: 'إسبانيا', flag: '🇪🇸' },
  { name: 'بريطانيا', flag: '🇬🇧' },
  { name: 'هولندا', flag: '🇳🇱' },
  { name: 'بلجيكا', flag: '🇧🇪' },
  { name: 'أستراليا', flag: '🇦🇺' },
  { name: 'الإمارات', flag: '🇦🇪' },
  { name: 'قطر', flag: '🇶🇦' },
];

/* ── UTILITIES ─────────────────────────────────────── */

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('ar-MA', { year: 'numeric', month: 'long', day: 'numeric' });
}

function escapeHtml(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

/* ── RENDER: TICKER ────────────────────────────────── */

function renderTicker() {
  const track = document.getElementById('ticker-track');
  if (!track) return;
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  track.innerHTML = doubled.map(item =>
    `<span>${escapeHtml(item)}</span>`
  ).join('');
}

/* ── RENDER: COUNTRIES STRIP ───────────────────────── */

function renderCountries() {
  const strip = document.getElementById('countries-strip');
  if (!strip) return;
  strip.innerHTML = COUNTRIES.map(c => `
    <button class="country-chip" data-country="${escapeHtml(c.name)}" aria-label="تصفية: ${escapeHtml(c.name)}">
      <span class="flag">${c.flag}</span>
      <span class="name">${escapeHtml(c.name)}</span>
    </button>
  `).join('');

  strip.querySelectorAll('.country-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const active = btn.classList.contains('active');
      strip.querySelectorAll('.country-chip').forEach(b => b.classList.remove('active'));
      if (!active) {
        btn.classList.add('active');
        filterJobs(btn.dataset.country, document.getElementById('field-filter')?.value || '');
        filterNews(btn.dataset.country);
      } else {
        filterJobs('', document.getElementById('field-filter')?.value || '');
        filterNews('');
      }
    });
  });
}

/* ── RENDER: NEWS ───────────────────────────────────── */

function renderNews(data = NEWS_DATA) {
  const grid = document.getElementById('news-grid');
  if (!grid) return;

  if (data.length === 0) {
    grid.innerHTML = `<div class="empty-state"><span>🔍</span><p>لا توجد نتائج مطابقة</p></div>`;
    return;
  }

  const [featured, ...rest] = data.filter((_, i) => i === 0 || true);

  grid.innerHTML = data.map((item, idx) => {
    const isBig = idx === 0 && item.featured !== false;
    return `
    <article class="card ${isBig ? 'featured-card' : ''} fade-in" data-id="${item.id}" style="animation-delay:${idx * 0.08}s">
      <div class="card-img-placeholder" role="img" aria-label="${escapeHtml(item.title)}">
        <span>${item.icon}</span>
      </div>
      <div class="card-body">
        <span class="card-category ${escapeHtml(item.catClass)}">${escapeHtml(item.category)}</span>
        <h3 class="card-title">${escapeHtml(item.title)}</h3>
        <p class="card-desc">${escapeHtml(item.excerpt)}</p>
        <div class="card-footer">
          <div class="card-meta">
            <span>📅 ${formatDate(item.date)}</span>
            <span>⏱ ${escapeHtml(item.readTime)} دقائق</span>
          </div>
          <button class="btn-read" onclick="openArticle(${item.id},'news')" aria-label="اقرأ المزيد عن ${escapeHtml(item.title)}">اقرأ المزيد ←</button>
        </div>
      </div>
    </article>`;
  }).join('');
}

/* ── RENDER: JOBS ───────────────────────────────────── */

function renderJobs(data = JOBS_DATA) {
  const grid = document.getElementById('jobs-grid');
  if (!grid) return;

  if (data.length === 0) {
    grid.innerHTML = `<div class="empty-state"><span>🔍</span><p>لا توجد وظائف مطابقة</p></div>`;
    return;
  }

  grid.innerHTML = data.map((job, idx) => `
    <article class="job-card fade-in" data-id="${job.id}" style="animation-delay:${idx * 0.07}s" role="listitem">
      <div class="job-flag" aria-label="${escapeHtml(job.country)}">${job.flag}</div>
      <div class="job-info">
        <div class="job-title">${escapeHtml(job.title)}</div>
        <div class="job-company">${escapeHtml(job.company)} · ${escapeHtml(job.city)}، ${escapeHtml(job.country)}</div>
        <div class="job-tags">
          ${job.tags.map(t => `<span class="job-tag ${escapeHtml(t.color)}">${escapeHtml(t.label)}</span>`).join('')}
        </div>
      </div>
      <div class="job-salary">
        <div class="salary-amount">${escapeHtml(job.salary)}</div>
        <div class="salary-period">${escapeHtml(job.period)}</div>
        <button class="btn-apply" onclick="openArticle(${job.id},'job')" aria-label="تقدم لوظيفة ${escapeHtml(job.title)}">تقدم الآن</button>
      </div>
    </article>
  `).join('');
}

/* ── RENDER: SIDEBAR ─────────────────────────────────  */

function renderSidebar() {
  // Most read
  const mostRead = document.getElementById('most-read-list');
  if (mostRead) {
    const top = [...NEWS_DATA].slice(0, 5);
    mostRead.innerHTML = top.map((item, i) => `
      <li>
        <span class="rank">${i + 1}</span>
        <a href="#" onclick="openArticle(${item.id},'news');return false;">${escapeHtml(item.title)}</a>
      </li>
    `).join('');
  }

  // Tags
  const tags = document.getElementById('tags-list');
  if (tags) {
    const tagData = ['#هجرة_كندا','#وظائف_أوروبا','#تأشيرة_شنغن','#ألمانيا','#العمل_الموسمي','#إقامة_دائمة','#فرنسا','#الإمارات'];
    tags.innerHTML = tagData.map(t => `<a href="#" class="tag-chip">${escapeHtml(t)}</a>`).join('');
  }
}

/* ── FILTER & SEARCH ────────────────────────────────── */

function filterJobs(country = '', field = '', query = '') {
  const filtered = JOBS_DATA.filter(job => {
    const matchCountry = !country || job.country === country;
    const matchField = !field || job.field === field;
    const matchQuery = !query || [job.title, job.company, job.city, job.country].some(
      val => val.toLowerCase().includes(query.toLowerCase())
    );
    return matchCountry && matchField && matchQuery;
  });
  renderJobs(filtered);
}

function filterNews(country = '', query = '') {
  const filtered = NEWS_DATA.filter(item => {
    const matchCountry = !country || item.country === country || country === 'عالمي';
    const matchQuery = !query || [item.title, item.excerpt, item.category].some(
      val => val.toLowerCase().includes(query.toLowerCase())
    );
    return matchCountry && matchQuery;
  });
  renderNews(filtered);
}

/* ── SEARCH BAR ─────────────────────────────────────── */

function initSearch() {
  const searchInput = document.getElementById('global-search');
  const fieldFilter = document.getElementById('field-filter');

  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const q = searchInput.value.trim();
        const country = document.querySelector('.country-chip.active')?.dataset.country || '';
        const field = fieldFilter?.value || '';
        filterJobs(country, field, q);
        filterNews(country, q);
        // scroll to results
        if (q.length > 1) {
          document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    });

    // Clear button
    const clearBtn = document.getElementById('search-clear');
    if (clearBtn) {
      searchInput.addEventListener('input', () => {
        clearBtn.style.display = searchInput.value ? 'flex' : 'none';
      });
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearBtn.style.display = 'none';
        filterJobs('', '');
        filterNews('');
      });
    }
  }

  if (fieldFilter) {
    // Populate field options from data
    const fields = [...new Set(JOBS_DATA.map(j => j.field))];
    fieldFilter.innerHTML = `<option value="">كل المجالات</option>` +
      fields.map(f => `<option value="${escapeHtml(f)}">${escapeHtml(f)}</option>`).join('');

    fieldFilter.addEventListener('change', () => {
      const country = document.querySelector('.country-chip.active')?.dataset.country || '';
      const q = document.getElementById('global-search')?.value.trim() || '';
      filterJobs(country, fieldFilter.value, q);
    });
  }
}

/* ── MOBILE NAV ─────────────────────────────────────── */

function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('nav-overlay');

  function openMenu() {
    mobileMenu.classList.add('open');
    overlay.classList.add('visible');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    overlay.classList.remove('visible');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', () => {
    hamburger.classList.contains('open') ? closeMenu() : openMenu();
  });

  overlay?.addEventListener('click', closeMenu);

  // Close on nav link click
  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });
}

/* ── DARK MODE ─────────────────────────────────────── */

function initDarkMode() {
  const toggle = document.getElementById('dark-mode-toggle');
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Default is dark; light mode is the toggle
  const isLight = stored === 'light';
  if (isLight) document.documentElement.setAttribute('data-theme', 'light');

  updateToggleIcon(toggle, isLight);

  toggle?.addEventListener('click', () => {
    const currently = document.documentElement.getAttribute('data-theme');
    const newTheme = currently === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleIcon(toggle, newTheme === 'light');
  });
}

function updateToggleIcon(btn, isLight) {
  if (!btn) return;
  btn.textContent = isLight ? '🌙' : '☀️';
  btn.setAttribute('aria-label', isLight ? 'التبديل للوضع الليلي' : 'التبديل للوضع الفاتح');
}

/* ── SCROLL ANIMATIONS ──────────────────────────────── */

function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// Re-observe after dynamic renders
function observeNew() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => observer.observe(el));
}

/* ── STICKY NAV SHADOW ──────────────────────────────── */

function initStickyNav() {
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    nav?.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

/* ── SMOOTH SCROLL ──────────────────────────────────── */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ── NEWSLETTER ─────────────────────────────────────── */

function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    const btn = form.querySelector('button[type="submit"]');
    const val = input?.value.trim();
    if (!val || !val.includes('@')) {
      input.classList.add('error');
      input.focus();
      setTimeout(() => input.classList.remove('error'), 1500);
      return;
    }
    btn.textContent = '✓ تم الاشتراك!';
    btn.disabled = true;
    btn.style.background = 'var(--emerald)';
    input.value = '';
    input.disabled = true;
  });
}

/* ── MODAL / ARTICLE VIEWER ─────────────────────────── */

function openArticle(id, type) {
  const data = type === 'job'
    ? JOBS_DATA.find(j => j.id === id)
    : NEWS_DATA.find(n => n.id === id);
  if (!data) return;

  const modal = document.getElementById('article-modal');
  const content = document.getElementById('modal-content');
  if (!modal || !content) return;

  if (type === 'job') {
    content.innerHTML = `
      <div class="modal-header">
        <span class="modal-flag">${data.flag}</span>
        <div>
          <h2>${escapeHtml(data.title)}</h2>
          <p>${escapeHtml(data.company)} · ${escapeHtml(data.city)}، ${escapeHtml(data.country)}</p>
        </div>
      </div>
      <div class="modal-body">
        <div class="modal-salary">${escapeHtml(data.salary)} <small>${escapeHtml(data.period)}</small></div>
        <div class="modal-tags">${data.tags.map(t => `<span class="job-tag ${t.color}">${escapeHtml(t.label)}</span>`).join('')}</div>
        <p class="modal-text">هذه الوظيفة متاحة في ${escapeHtml(data.city)}، ${escapeHtml(data.country)}. نوع العقد: ${escapeHtml(data.type)}. المجال: ${escapeHtml(data.field)}.</p>
        <p class="modal-text">للتقديم على هذه الوظيفة يرجى إرسال سيرتك الذاتية عبر البريد الإلكتروني الرسمي للشركة أو التوجه مباشرة إلى موقعها الإلكتروني.</p>
        <button class="btn-primary modal-action">📤 تقدم الآن</button>
      </div>
    `;
  } else {
    content.innerHTML = `
      <div class="modal-header">
        <span class="modal-flag" style="font-size:2.5rem">${data.icon}</span>
        <div>
          <span class="card-category ${escapeHtml(data.catClass)}">${escapeHtml(data.category)}</span>
          <h2>${escapeHtml(data.title)}</h2>
          <p>📅 ${formatDate(data.date)} · ⏱ ${escapeHtml(data.readTime)} دقائق للقراءة</p>
        </div>
      </div>
      <div class="modal-body">
        <p class="modal-text">${escapeHtml(data.excerpt)}</p>
        <p class="modal-text">تابع موقعنا للحصول على آخر التحديثات حول هذا الموضوع والمواضيع المشابهة. يمكنك أيضاً الاشتراك في نشرتنا البريدية لتصلك الأخبار مباشرة.</p>
        <button class="btn-primary modal-action" onclick="document.getElementById('newsletter').scrollIntoView({behavior:'smooth'});closeModal()">📬 اشترك في النشرة</button>
      </div>
    `;
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal-close')?.focus();
}

function closeModal() {
  const modal = document.getElementById('article-modal');
  modal?.classList.remove('open');
  document.body.style.overflow = '';
}

function initModal() {
  const modal = document.getElementById('article-modal');
  if (!modal) return;

  modal.querySelector('.modal-close')?.addEventListener('click', closeModal);
  modal.querySelector('.modal-backdrop')?.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

/* ── STATS COUNTER ANIMATION ────────────────────────── */

function animateCounters() {
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current.toLocaleString('ar') + suffix;
      if (current >= target) clearInterval(timer);
    }, 20);
  });
}

function initCounters() {
  if (!('IntersectionObserver' in window)) { animateCounters(); return; }
  const statsBar = document.querySelector('.stats-bar');
  if (!statsBar) return;
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { animateCounters(); obs.disconnect(); }
  }, { threshold: 0.3 });
  obs.observe(statsBar);
}

/* ── BACK TO TOP ────────────────────────────────────── */

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── ACTIVE NAV LINK ────────────────────────────────── */

function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(s => observer.observe(s));
}

/* ── INIT ───────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  renderTicker();
  renderCountries();
  renderNews();
  renderJobs();
  renderSidebar();

  initSearch();
  initMobileNav();
  initDarkMode();
  initStickyNav();
  initSmoothScroll();
  initNewsletter();
  initModal();
  initCounters();
  initBackToTop();
  initActiveNav();

  // Run scroll animations after render
  requestAnimationFrame(() => {
    initScrollAnimations();
    observeNew();
  });
});
// =====================
// 1. LOAD ARTICLES
// =====================
async function loadArticles() {
  const res = await fetch('articles.json');
  const articles = await res.json();

  const grid = document.getElementById("news-grid");

  grid.innerHTML = articles.map(article => `
    <article class="card fade-in">
      <img src="${article.image}" alt="${article.title}">
      <div class="card-body">
        <h3>${article.title}</h3>
        <p>${article.content.substring(0, 120)}...</p>
      </div>
    </article>
  `).join("");
}

// =====================
// 2. INIT SITE
// =====================
function initSite() {
  loadArticles();
}

initSite();
