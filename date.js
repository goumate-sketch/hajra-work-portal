// data.js - جميع بيانات الموقع (وظائف + أخبار)

const jobsData = [
  {
    id: 1,
    title: "مطور Frontend - React",
    company: "شركة تقنية عالمية",
    country: "ألمانيا",
    field: "تكنولوجيا المعلومات",
    type: "عن بُعد",
    postedAt: "2026-04-10", // تاريخ النشر (YYYY-MM-DD)
    description: "مطلوب مطور Frontend ماهر في React لبناء واجهات مستخدم تفاعلية. خبرة 3+ سنوات.",
    requirements: "React, HTML5, CSS3, JavaScript, Git.",
    salary: "€50,000 - €70,000",
    logo: "https://via.placeholder.com/60"
  },
  {
    id: 2,
    title: "مهندس مدني - مشاريع كبرى",
    company: "مقاولات الخليج",
    country: "الإمارات",
    field: "الهندسة",
    type: "دوام كامل",
    postedAt: "2026-04-01",
    description: "إدارة مشاريع بنية تحتية ضخمة. خبرة 5+ سنوات.",
    requirements: "AutoCAD, Primavera, إدارة عقود.",
    salary: "15,000 - 20,000 درهم",
    logo: "https://via.placeholder.com/60"
  },
  {
    id: 3,
    title: "مسؤول توظيف (HR)",
    company: "مجموعة موارد",
    country: "السعودية",
    field: "الموارد البشرية",
    type: "دوام كامل",
    postedAt: "2026-04-12",
    description: "استقطاب وتصفية المرشحين للشركات التابعة.",
    requirements: "خبرة 2+ في التوظيف، مهارات مقابلة.",
    salary: "8,000 - 10,000 ريال",
    logo: "https://via.placeholder.com/60"
  },
  {
    id: 4,
    title: "طبيب عام - رعاية أولية",
    company: "وزارة الصحة",
    country: "كندا",
    field: "الطب",
    type: "دوام كامل",
    postedAt: "2026-03-28",
    description: "تقديم الرعاية الصحية للمرضى في مركز صحي.",
    requirements: "ترخيص مهني، خبرة 2 سنة.",
    salary: "$80,000 - $100,000",
    logo: "https://via.placeholder.com/60"
  },
  {
    id: 5,
    title: "مطور Backend (Node.js)",
    company: "ستارت أب أوروبي",
    country: "هولندا",
    field: "تكنولوجيا المعلومات",
    type: "عن بُعد",
    postedAt: "2026-04-14",
    description: "تطوير APIs وأداء قاعدة البيانات.",
    requirements: "Node.js, Express, MongoDB, REST.",
    salary: "€60,000 - €80,000",
    logo: "https://via.placeholder.com/60"
  }
];

const newsData = [
  {
    id: 1,
    title: "ألمانيا تطلق بوابة هجرة جديدة للعمال المهرة",
    summary: "تسهيلات في الحصول على التأشيرة الزرقاء للكفاءات التقنية.",
    date: "2026-04-10",
    content: "أعلنت الحكومة الألمانية عن إطلاق منصة رقمية لتسريع إجراءات الهجرة...",
    link: "#"
  },
  {
    id: 2,
    title: "كندا تطلب 5000 ممرض وممرضة خلال 2026",
    summary: "برنامج هجرة سريع للممرضين مع إمكانية الإقامة الدائمة.",
    date: "2026-04-08",
    content: "تفاصيل البرنامج...",
    link: "#"
  },
  {
    id: 3,
    title: "السعودية: إطلاق تأشيرة العمل الحر للمستقلين",
    summary: "يمكن للمستقلين التقديم للحصول على إقامة عمل حر.",
    date: "2026-04-01",
    content: "وزارة الموارد البشرية تعلن التفاصيل...",
    link: "#"
  }
];

// دالة مساعدة لتحديد إذا كانت الوظيفة جديدة (أقل من 7 أيام)
function isNewJob(postedAt) {
  const posted = new Date(postedAt);
  const today = new Date();
  const diffTime = Math.abs(today - posted);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= 7;
}
