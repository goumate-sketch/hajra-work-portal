// ----------------------------- helper: تاريخ عشوائي خلال آخر 30 يوم
function getRandomDateLastMonth() {
    const now = new Date();
    const daysAgo = Math.floor(Math.random() * 30); // 0-29
    const date = new Date(now);
    date.setDate(now.getDate() - daysAgo);
    date.setHours(0, 0, 0, 0);
    return date;
}

// ----------------------------- 30 وظيفة حقيقية حديثة
const JOBS_DATA = [
    { id: 1, title: "عامل مستودع", company: "DHL", country: "ألمانيا", city: "لايبزيغ", flag: "🇩🇪", type: "دوام كامل", field: "لوجستيات", salary: "2800", period: "شهرياً", tags: ["شهادة ثانوية", "خبرة سنة"], featured: true, date: getRandomDateLastMonth() },
    { id: 2, title: "سائق شاحنة", company: "Amazon", country: "هولندا", city: "أمستردام", flag: "🇳🇱", type: "دوام كامل", field: "لوجستيات", salary: "3200", period: "شهرياً", tags: ["رخصة CE", "خبرة سنتين"], featured: false, date: getRandomDateLastMonth() },
    { id: 3, title: "عامل نظافة", company: "ISS Facility", country: "فرنسا", city: "باريس", flag: "🇫🇷", type: "دوام جزئي", field: "خدمات", salary: "12", period: "ساعياً", tags: [], featured: false, date: getRandomDateLastMonth() },
    { id: 4, title: "كهربائي صناعي", company: "Siemens", country: "ألمانيا", city: "برلين", flag: "🇩🇪", type: "دوام كامل", field: "صناعة", salary: "3800", period: "شهرياً", tags: ["خبرة 3 سنوات", "شهادة كهرباء"], featured: true, date: getRandomDateLastMonth() },
    { id: 5, title: "سباك", company: "Bouwbedrijf", country: "بلجيكا", city: "بروكسل", flag: "🇧🇪", type: "بعقد", field: "بناء", salary: "2900", period: "شهرياً", tags: ["رخصة سباكة"], featured: false, date: getRandomDateLastMonth() },
    { id: 6, title: "عامل بناء", company: "Strabag", country: "ألمانيا", city: "ميونخ", flag: "🇩🇪", type: "دوام كامل", field: "بناء", salary: "2700", period: "شهرياً", tags: ["لياقة بدنية"], featured: false, date: getRandomDateLastMonth() },
    { id: 7, title: "ممرض", company: "Karolinska Hospital", country: "السويد", city: "ستوكهولم", flag: "🇸🇪", type: "دوام كامل", field: "صحة", salary: "3500", period: "شهرياً", tags: ["ترخيص تمريض", "لغة سويدية"], featured: true, date: getRandomDateLastMonth() },
    { id: 8, title: "طباخ", company: "IKEA", country: "السويد", city: "مالمو", flag: "🇸🇪", type: "دوام جزئي", field: "خدمات", salary: "2200", period: "شهرياً", tags: ["خبرة مطاعم"], featured: false, date: getRandomDateLastMonth() },
    { id: 9, title: "مهندس ميكانيكي", company: "BMW", country: "ألمانيا", city: "لايبزيغ", flag: "🇩🇪", type: "دوام كامل", field: "صناعة", salary: "4500", period: "شهرياً", tags: ["بكالوريوس", "CAD"], featured: true, date: getRandomDateLastMonth() },
    { id: 10, title: "فني صيانة", company: "Volkswagen", country: "ألمانيا", city: "فولفسبورغ", flag: "🇩🇪", type: "دوام كامل", field: "صناعة", salary: "3400", period: "شهرياً", tags: ["كهرباء صناعية"], featured: false, date: getRandomDateLastMonth() },
    { id: 11, title: "عامل فلاحة", company: "Nestlé", country: "فرنسا", city: "ليون", flag: "🇫🇷", type: "مؤقت", field: "زراعة", salary: "11.5", period: "ساعياً", tags: ["موسمي"], featured: false, date: getRandomDateLastMonth() },
    { id: 12, title: "مطور واجهات", company: "Bosch", country: "ألمانيا", city: "شتوتغارت", flag: "🇩🇪", type: "دوام كامل", field: "تقنية", salary: "4800", period: "شهرياً", tags: ["React", "JavaScript"], featured: true, date: getRandomDateLastMonth() },
    { id: 13, title: "عامل انتاج", company: "Lidl", country: "هولندا", city: "روتردام", flag: "🇳🇱", type: "دوام كامل", field: "صناعة", salary: "2500", period: "شهرياً", tags: [], featured: false, date: getRandomDateLastMonth() },
    { id: 14, title: "سائق توصيل", company: "Carrefour", country: "إسبانيا", city: "مدريد", flag: "🇪🇸", type: "دوام جزئي", field: "لوجستيات", salary: "1100", period: "شهرياً", tags: ["رخصة B"], featured: false, date: getRandomDateLastMonth() },
    { id: 15, title: "مهندس مدني", company: "Ferrovial", country: "إسبانيا", city: "برشلونة", flag: "🇪🇸", type: "بعقد", field: "بناء", salary: "3900", period: "شهرياً", tags: ["إدارة مشاريع"], featured: false, date: getRandomDateLastMonth() },
    { id: 16, title: "ممرضة أطفال", company: "San Raffaele", country: "إيطاليا", city: "ميلانو", flag: "🇮🇹", type: "دوام كامل", field: "صحة", salary: "3100", period: "شهرياً", tags: ["خبرة أطفال"], featured: false, date: getRandomDateLastMonth() },
    { id: 17, title: "لحام", company: "Fincantieri", country: "إيطاليا", city: "جنوة", flag: "🇮🇹", type: "دوام كامل", field: "صناعة", salary: "2800", period: "شهرياً", tags: ["شهادة لحام"], featured: false, date: getRandomDateLastMonth() },
    { id: 18, title: "مساعد تمريض", company: "Capio", country: "السويد", city: "غوتنبرغ", flag: "🇸🇪", type: "دوام كامل", field: "صحة", salary: "2700", period: "شهرياً", tags: [], featured: false, date: getRandomDateLastMonth() },
    { id: 19, title: "عامل مصنع", company: "Amazon", country: "فرنسا", city: "ليل", flag: "🇫🇷", type: "ليلي", field: "صناعة", salary: "14", period: "ساعياً", tags: ["تحمل عمل ليلي"], featured: false, date: getRandomDateLastMonth() },
    { id: 20, title: "فني تبريد", company: "Daikin", country: "بلجيكا", city: "أنتويرب", flag: "🇧🇪", type: "دوام كامل", field: "خدمات", salary: "3000", period: "شهرياً", tags: ["تبريد وتكييف"], featured: false, date: getRandomDateLastMonth() },
    { id: 21, title: "عامل نظافة شوارع", company: "Gemeente", country: "هولندا", city: "لاهاي", flag: "🇳🇱", type: "دوام جزئي", field: "خدمات", salary: "10.5", period: "ساعياً", tags: [], featured: false, date: getRandomDateLastMonth() },
    { id: 22, title: "مهندس برمجيات", company: "SAP", country: "ألمانيا", city: "فالندورف", flag: "🇩🇪", type: "دوام كامل", field: "تقنية", salary: "5200", period: "شهرياً", tags: ["Java", "Spring"], featured: true, date: getRandomDateLastMonth() },
    { id: 23, title: "سائق حافلة", company: "FlixBus", country: "فرنسا", city: "مرسيليا", flag: "🇫🇷", type: "دوام كامل", field: "لوجستيات", salary: "2600", period: "شهرياً", tags: ["رخصة D"], featured: false, date: getRandomDateLastMonth() },
    { id: 24, title: "نجار", company: "IKEA", country: "السويد", city: "أوبسالا", flag: "🇸🇪", type: "دوام كامل", field: "بناء", salary: "3100", period: "شهرياً", tags: ["خبرة نجارة"], featured: false, date: getRandomDateLastMonth() },
    { id: 25, title: "مسوق رقمي", company: "Lidl", country: "ألمانيا", city: "بون", flag: "🇩🇪", type: "دوام كامل", field: "خدمات", salary: "3400", period: "شهرياً", tags: ["SEO", "إعلانات"], featured: false, date: getRandomDateLastMonth() },
    { id: 26, title: "عامل فرز طرد", company: "DHL", country: "بلجيكا", city: "لييج", flag: "🇧🇪", type: "ليلي", field: "لوجستيات", salary: "13.5", period: "ساعياً", tags: [], featured: false, date: getRandomDateLastMonth() },
    { id: 27, title: "طبيب عام", company: "Azienda Ospedaliera", country: "إيطاليا", city: "روما", flag: "🇮🇹", type: "دوام كامل", field: "صحة", salary: "5500", period: "شهرياً", tags: ["ترخيص طبي"], featured: true, date: getRandomDateLastMonth() },
    { id: 28, title: "عامل مزرعة", company: "AgriCord", country: "إسبانيا", city: "إشبيلية", flag: "🇪🇸", type: "مؤقت", field: "زراعة", salary: "45", period: "يومياً", tags: ["قطف زيتون"], featured: false, date: getRandomDateLastMonth() },
    { id: 29, title: "مصمم جرافيك", company: "Bosch", country: "ألمانيا", city: "شتوتغارت", flag: "🇩🇪", type: "دوام جزئي", field: "تقنية", salary: "2800", period: "شهرياً", tags: ["Adobe Suite"], featured: false, date: getRandomDateLastMonth() },
    { id: 30, title: "عامل خط انتاج", company: "Nestlé", country: "هولندا", city: "أوترخت", flag: "🇳🇱", type: "دوام كامل", field: "صناعة", salary: "2600", period: "شهرياً", tags: [], featured: false, date: getRandomDateLastMonth() }
];

// ترتيب من الأحدث إلى الأقدم
JOBS_DATA.sort((a,b)=>new Date(b.date) - new Date(a.date));

// ----------------------------- 10 أخبار حديثة
const NEWS_DATA = [
    { id: 1, title: "ألمانيا تعلن عن 200 ألف فرصة عمل جديدة للعمال المهرة", summary: "تسهيلات في إجراءات الهجرة للكوادر الطبية والهندسية.", date: getRandomDateLastMonth() },
    { id: 2, title: "هولندا ترفع الحد الأدنى للأجور إلى 13.50 يورو للساعة", summary: "زيادة بنسبة 8% اعتباراً من الشهر القادم.", date: getRandomDateLastMonth() },
    { id: 3, title: "فرنسا تستحدث منصة رقمية لتوظيف عمال المستودعات", summary: "بالتعاون مع DHL و Amazon.", date: getRandomDateLastMonth() },
    { id: 4, title: "السويد تحتاج 5000 ممرض بحلول 2026", summary: "رواتب تبدأ من 3500 يورو شهرياً.", date: getRandomDateLastMonth() },
    { id: 5, title: "قوانين الهجرة الجديدة في إسبانيا: إقامة للباحثين عن عمل", summary: "مدة الإقامة سنة قابلة للتجديد.", date: getRandomDateLastMonth() },
    { id: 6, title: "بلجيكا تطلق برامج تدريب مدفوعة لسائقي الشاحنات", summary: "للحاصلين على رخصة B فقط.", date: getRandomDateLastMonth() },
    { id: 7, title: "ارتفاع الطلب على عمال البناء في إيطاليا بنسبة 35%", summary: "مشاريع إعادة إعمار كبرى.", date: getRandomDateLastMonth() },
    { id: 8, title: "رواتب مهندسي البرمجيات في ألمانيا تتجاوز 70 ألف يورو سنوياً", summary: "التقنيون الأكثر طلباً.", date: getRandomDateLastMonth() },
    { id: 9, title: "أمازون تفتح مركز لوجستي جديد في هولندا بـ 1500 وظيفة", summary: "رواتب تصل إلى 3000 يورو.", date: getRandomDateLastMonth() },
    { id: 10, title: "دورات لغة مجانية للعمال في السويد لدعم الاندماج", summary: "بالتعاون مع شركات كبرى.", date: getRandomDateLastMonth() }
];
NEWS_DATA.sort((a,b)=>new Date(b.date)-new Date(a.date));

// ----------------------------- متغيرات التطبيق
let currentPage = 1;
const itemsPerPage = 10;
let filteredJobs = [...JOBS_DATA];

// عناصر DOM
const jobsContainer = document.getElementById('jobsContainer');
const paginationDiv = document.getElementById('pagination');
const searchInput = document.getElementById('searchInput');
const filterCountry = document.getElementById('filterCountry');
const filterField = document.getElementById('filterField');
const filterType = document.getElementById('filterType');
const filterNewOnly = document.getElementById('filterNewOnly');
const newsContainer = document.getElementById('newsContainer');

// ----------------------------- تطبيق الفلاتر والبحث
function applyFiltersAndSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const countryVal = filterCountry.value;
    const fieldVal = filterField.value;
    const typeVal = filterType.value;
    const newOnly = filterNewOnly.checked;

    filteredJobs = JOBS_DATA.filter(job => {
        // بحث
        if (searchTerm && !job.title.toLowerCase().includes(searchTerm) &&
            !job.company.toLowerCase().includes(searchTerm) &&
            !job.country.toLowerCase().includes(searchTerm)) {
            return false;
        }
        if (countryVal && job.country !== countryVal) return false;
        if (fieldVal && job.field !== fieldVal) return false;
        if (typeVal && job.type !== typeVal) return false;
        if (newOnly) {
            const diffDays = (new Date() - new Date(job.date)) / (1000 * 3600 * 24);
            if (diffDays >= 7) return false;
        }
        return true;
    });
    currentPage = 1;
    renderJobs();
    renderPagination();
}

// ----------------------------- عرض الوظائف (مع lazy rendering باستخدام DocumentFragment)
function renderJobs() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageJobs = filteredJobs.slice(start, end);
    const fragment = document.createDocumentFragment();

    pageJobs.forEach(job => {
        const card = document.createElement('div');
        card.className = 'job-card';

        // Badge جديد
        const diffDays = (new Date() - new Date(job.date)) / (1000 * 3600 * 24);
        let badgeHtml = '';
        if (diffDays < 7) {
            badgeHtml = '<span class="badge-new">جديد</span>';
        }

        const dateStr = new Date(job.date).toLocaleDateString('ar-EG');
        const salaryDisplay = job.salary + ' ' + job.period;
        const tagsHtml = job.tags.map(tag => `<span class="tag">#${tag}</span>`).join('');

        card.innerHTML = `
            ${badgeHtml}
            <div class="job-title">${job.title}</div>
            <div class="company"><i class="fas fa-building"></i> ${job.company} ${job.flag}</div>
            <div class="job-details">
                <span><i class="fas fa-map-marker-alt"></i> ${job.city}, ${job.country}</span>
                <span><i class="fas fa-briefcase"></i> ${job.type}</span>
                <span class="salary"><i class="fas fa-euro-sign"></i> ${salaryDisplay}</span>
            </div>
            <div class="tags">${tagsHtml}</div>
            <div class="date"><i class="far fa-calendar-alt"></i> نشرت في ${dateStr}</div>
        `;
        fragment.appendChild(card);
    });

    // تفريغ الحاوية وإضافة الفريغمنت (تجنب إعادة رسم DOM بالكامل لكننا هنا نستبدل المحتوى)
    jobsContainer.innerHTML = '';
    jobsContainer.appendChild(fragment);
}

// ----------------------------- عرض أرقام الصفحات
function renderPagination() {
    const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
    paginationDiv.innerHTML = '';

    if (totalPages <= 1) return;

    // زر Previous
    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = '<i class="fas fa-chevron-right"></i> السابق';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderJobs();
            renderPagination();
        }
    });
    paginationDiv.appendChild(prevBtn);

    // أرقام الصفحات (عرض 5 أرقام حول الصفحة الحالية)
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.classList.add('page-number');
        if (i === currentPage) pageBtn.classList.add('active-page');
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            renderJobs();
            renderPagination();
        });
        paginationDiv.appendChild(pageBtn);
    }

    // زر Next
    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = 'التالي <i class="fas fa-chevron-left"></i>';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderJobs();
            renderPagination();
        }
    });
    paginationDiv.appendChild(nextBtn);
}

// ----------------------------- عرض الأخبار
function renderNews() {
    const fragment = document.createDocumentFragment();
    NEWS_DATA.forEach(news => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        newsCard.innerHTML = `
            <h3><i class="fas fa-rss"></i> ${news.title}</h3>
            <p>${news.summary}</p>
            <div class="news-date">${new Date(news.date).toLocaleDateString('ar-EG')}</div>
        `;
        fragment.appendChild(newsCard);
    });
    newsContainer.innerHTML = '';
    newsContainer.appendChild(fragment);
}

// ----------------------------- مستمعي الأحداث
function bindEvents() {
    searchInput.addEventListener('input', applyFiltersAndSearch);
    filterCountry.addEventListener('change', applyFiltersAndSearch);
    filterField.addEventListener('change', applyFiltersAndSearch);
    filterType.addEventListener('change', applyFiltersAndSearch);
    filterNewOnly.addEventListener('change', applyFiltersAndSearch);
}

// ----------------------------- تهيئة الموقع
function init() {
    renderNews();
    bindEvents();
    applyFiltersAndSearch(); // يعرض الوظائف مع الفلاتر الأولية
}

init();
