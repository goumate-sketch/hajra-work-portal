# بوابة الهجرة والعمل 🌐

موقع إخباري احترافي مخصص لفرص العمل والهجرة والأخبار الدولية للمجتمع العربي.

## 📁 هيكل المشروع

```
bawabat-alhijra/
├── index.html       ← الصفحة الرئيسية (HTML semantic + SEO)
├── style.css        ← كل أنماط التصميم (dark/light mode, RTL, responsive)
├── script.js        ← البيانات الديناميكية + كل التفاعلات
└── README.md        ← هذا الملف
```

## ✨ المميزات

- **RTL كامل** — دعم كامل للعربية من اليمين لليسار
- **Responsive** — يعمل على الهاتف والتابلت والحاسوب
- **Dark / Light Mode** — زر تبديل مع حفظ التفضيل في localStorage
- **Mobile Menu** — hamburger يعمل فعلياً مع overlay وإغلاق بالـ Escape
- **بحث ديناميكي** — بحث فوري في الوظائف والأخبار مع debounce
- **فلترة** — تصفية الوظائف حسب الدولة والمجال
- **Modal** — نافذة تفاصيل المقال/الوظيفة
- **Scroll Animations** — IntersectionObserver خفيف
- **Counter Animation** — أرقام متحركة عند الوصول لها
- **SEO جاهز** — meta tags، Open Graph، JSON-LD، semantic HTML
- **AdSense جاهز** — مساحات إعلانية محددة

## 🚀 النشر على GitHub Pages

1. أنشئ repository جديداً باسم `bawabat-alhijra`
2. ارفع الملفات الثلاثة: `index.html`, `style.css`, `script.js`
3. في Settings → Pages → Source: اختر `main` branch و `/root`
4. سيكون الموقع متاحاً على: `https://USERNAME.github.io/bawabat-alhijra/`

## 📝 إضافة محتوى جديد

كل المحتوى في `script.js` في أعلى الملف:

```js
// إضافة وظيفة جديدة:
const JOBS_DATA = [
  {
    id: 9,  // رقم فريد
    title: 'عنوان الوظيفة',
    company: 'اسم الشركة',
    country: 'الدولة',
    city: 'المدينة',
    flag: '🇩🇪',
    type: 'دوام كامل',
    field: 'تقنية',
    salary: '€3,000',
    period: 'شهرياً',
    tags: [{ label: 'تأشيرة مكفولة', color: 'green' }],
    date: '2025-04-13',
  },
  // ...
];
```

## 🎨 تخصيص الألوان

كل الألوان في بداية `style.css`:

```css
:root {
  --gold:    #f0a500;   /* اللون الذهبي الرئيسي */
  --emerald: #00c896;   /* أزرار القراءة */
  --sky:     #38bdf8;   /* التصنيفات */
  --navy:    #0a1628;   /* الخلفية */
}
```

## 💰 ربط Google AdSense

استبدل عناصر `.ad-banner` بكود AdSense الخاص بك:

```html
<!-- قبل -->
<div class="ad-banner">إعلان Google AdSense — 728×90</div>

<!-- بعد -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
     data-ad-slot="XXXXXXXXXX"
     data-ad-format="auto">
</ins>
```

---
صُنع بـ ❤️ للمغتربين العرب
