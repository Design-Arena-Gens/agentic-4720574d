import Link from "next/link";
import {
  BadgeCheck,
  BookOpen,
  Briefcase,
  FileCheck,
  FileText,
  Gavel,
  Layers,
  Lightbulb,
  Lock,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { FAQItem } from "@/components/FAQItem";
import { SectionHeader } from "@/components/SectionHeader";

const impactHighlights = [
  {
    icon: ShieldCheck,
    title: "تحصين القيمة التنافسية",
    description:
      "حماية أصولك المعرفية تمنع المنافسين من استنساخ منتجاتك أو خدماتك بسهولة، مما يحافظ على ميزة السعر والجودة.",
  },
  {
    icon: Target,
    title: "جذب شركاء ومستثمرين",
    description:
      "امتلاك ملف ملكية فكرية منظم يرفع ثقة المستثمر ويُظهر جاهزية المؤسسة للتوسع والشراكات.",
  },
  {
    icon: Users,
    title: "تعزيز ثقافة الابتكار",
    description:
      "سياسة واضحة للملكية الفكرية تزيد التزام الفريق بحفظ المعرفة وتوليد أفكار جديدة قابلة للاستثمار.",
  },
];

const roadmapSteps = [
  {
    step: "01",
    title: "جرد الأصول المعرفية",
    detail:
      "احصر الابتكارات، الخبرات، البرمجيات، التصاميم، وقواعد البيانات داخل المؤسسة. حدّد مالك كل أصل ومدى حساسيته.",
    tip: "استخدم نموذج الجرد المرفق لتقييم مستوى السرية لكل عنصر وتحديد المسؤول.",
  },
  {
    step: "02",
    title: "تقييم مستوى الحماية",
    detail:
      "حدّد ما إذا كان الأصل قابلًا للتسجيل الرسمي (براءة، علامة، حق نشر) أو يحتاج إلى اتفاقيات سرية وإجراءات داخلية.",
    tip: "قارن كلفة الحماية القانونية بالعائد المتوقع لكل أصل لتحديد الأولويات.",
  },
  {
    step: "03",
    title: "بناء سياسة ملكية فكرية",
    detail:
      "ضع سياسة مكتوبة توضّح إجراءات التسجيل، مشاركة المعرفة، التعامل مع المقاولين، وتسوية النزاعات.",
    tip: "شارك مسودة السياسة مع الفريق القانوني أو مستشار خارجي للمراجعة قبل الإطلاق.",
  },
  {
    step: "04",
    title: "تنفيذ آليات المراقبة",
    detail:
      "فعّل تتبعًا دوريًا للتعديات المحتملة، وفعّل تنبيهات للأسواق والمتاجر الإلكترونية، وأنشئ آلية استجابة سريعة.",
    tip: "قم بتدريب فريق خدمة العملاء على اكتشاف العلامات الدالة على الانتهاك وإبلاغ الفريق القانوني.",
  },
];

const ipTypes = [
  {
    icon: Lightbulb,
    title: "براءات الاختراع",
    points: [
      "تحمي الحلول التقنية الجديدة أو طرق التصنيع.",
      "تتطلب وصفًا مفصلًا وادعاءات واضحة للابتكار.",
      "تمنح صاحبها حق المنع لمدة قد تصل إلى 20 عامًا.",
    ],
  },
  {
    icon: Gavel,
    title: "العلامات التجارية",
    points: [
      "تحفظ هوية المنتج أو الخدمة وتميزها في السوق.",
      "تشمل الاسم، الشعار، الشعار الصوتي، أو التغليف المميز.",
      "تُجدّد دوريًا لتحافظ على الحماية طالما يتم استخدامها.",
    ],
  },
  {
    icon: Layers,
    title: "حقوق النشر",
    points: [
      "تشمل المحتوى الإبداعي مثل الوثائق، الصور، البرامج، والدورات التدريبية.",
      "تُكتسب تلقائيًا فور إبداع العمل في أغلب الدول.",
      "يمكن توثيقها لإثبات الملكية في حالات النزاع.",
    ],
  },
  {
    icon: Lock,
    title: "الأسرار التجارية",
    points: [
      "تحمي المعلومات الحساسة (الوصفات، القوائم، الخوارزميات) التي توفر ميزة تنافسية.",
      "تعتمد على إجراءات داخلية صارمة واتفاقيات عدم إفشاء.",
      "تفقد حمايتها إذا أصبحت معروفة للعامة دون جهد معقول للحفاظ على سريتها.",
    ],
  },
];

const checklist = [
  {
    title: "الإطار القانوني",
    icon: FileCheck,
    items: [
      "تحديث عقود الموظفين لتشمل ملكية الابتكارات الناتجة عن العمل.",
      "إلزام جميع الأطراف الخارجية باتفاقيات عدم إفشاء قبل تبادل المعلومات.",
      "تسجيل العلامة التجارية الأساسية للمؤسسة في أهم الأسواق المستهدفة.",
    ],
  },
  {
    title: "الحوكمة والعمليات",
    icon: Briefcase,
    items: [
      "إنشاء لجنة خفيفة الوزن تشرف على قرارات الملكية الفكرية وتحديد الأولويات.",
      "تضمين مراجعة حقوق الملكية الفكرية ضمن إجراءات تطوير المنتج.",
      "تحديث دليل السياسات الداخلية ليوضح مستويات السرية وسلوك مشاركة الملفات.",
    ],
  },
  {
    title: "الوعي والتدريب",
    icon: Sparkles,
    items: [
      "عقد ورشة عمل فصلية لتعريف الفريق بأنواع الانتهاكات الشائعة.",
      "توفير مسار واضح للإبلاغ عن التعديات أو التسريبات المحتملة.",
      "تضمين ثقافة الحفاظ على الملكية الفكرية ضمن تقييم الأداء السنوي.",
    ],
  },
];

const resources = [
  {
    title: "نموذج جرد الأصول المعرفية",
    description:
      "ملف قابل للتعديل يساعدك على تصنيف الأصول بحسب القيمة، مستوى السرية، ومسؤول الحماية.",
    link: "https://docs.google.com/spreadsheets/d/1t2K4example",
    label: "Google Sheets",
  },
  {
    title: "دليل مبسط لتسجيل العلامة التجارية",
    description:
      "خطوات عملية ورسوم تقريبية ونصائح للحد من الأخطاء أثناء تقديم الطلب.",
    link: "https://www.wipo.int/portal/ar/index.html",
    label: "WIPO",
  },
  {
    title: "سياسة ملكية فكرية جاهزة للتخصيص",
    description:
      "وثيقة Word تحتوي على فقرات أساسية يمكنك تخصيصها لاحتياجات مؤسستك.",
    link: "https://www.iprhelpdesk.eu/",
    label: "EU IP Helpdesk",
  },
  {
    title: "أداة مراقبة العلامات عبر الإنترنت",
    description:
      "خدمة مجانية ترسل إشعارات إذا ظهر اسم شركتك في متاجر التطبيقات أو المتاجر الإلكترونية.",
    link: "https://www.google.com/alerts",
    label: "Google Alerts",
  },
];

const faqs = [
  {
    question: "ما الحد الأدنى لحجم الشركة الذي يستحق الاستثمار في حماية الملكية الفكرية؟",
    answer:
      "أي مشروع يملك أصولًا معرفية قابلة للتقليد يحتاج لإستراتيجية حماية. المعيار ليس حجم الشركة بل أهمية الابتكار بالنسبة إلى نموذج العمل. البدء مبكرًا يقلل المخاطر ويمنع التعديات المكلفة لاحقًا.",
  },
  {
    question: "كيف أحدد ما إذا كان الأصل يحتاج إلى تسجيل أم يكفي الاحتفاظ به كسِر تجاري؟",
    answer:
      "اسأل نفسك: هل يمكن اكتشافه أو عكسه بسهولة عند طرح المنتج؟ إذا كان نعم، فالتسجيل الرسمي يوفر حماية أقوى. أما إذا كان سرًا يصعب الوصول إليه ويمكن الحفاظ عليه داخليًا، فالسرية المدعومة باتفاقيات وعدم الإفشاء تكون كافية.",
  },
  {
    question: "ما تكلفة إنشاء سياسة ملكية فكرية متكاملة؟",
    answer:
      "يمكن البدء داخليًا دون تكلفة عالية عبر نماذج جاهزة والاستعانة بمستشار قانوني لساعات محدودة للمراجعة. ترتفع التكاليف كلما توسعت نطاقات الحماية الدولية أو زادت طلبات البراءات.",
  },
  {
    question: "كيف أوازن بين الإفصاح للمستثمرين والحفاظ على السرية؟",
    answer:
      "استخدم اتفاقيات عدم إفشاء قبل مشاركة التفاصيل التقنية، وركّز على إبراز القيمة التجارية بدلاً من المعادلات التفصيلية خلال العروض الأولى. قدّم مستندات مفصّلة فقط بعد توقيع العقود القانونية.",
  },
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 mask-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.2),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(129,140,248,0.18),_transparent_60%)]" />
      </div>

      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-40 max-w-xl bg-cyan-400/20 blur-3xl" />
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
          <div className="flex flex-col items-end gap-6 text-right">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-sm text-cyan-100">
              <BadgeCheck className="h-4 w-4" />
              خارطة طريق عملية للمنشآت الصغيرة والمتوسطة
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold leading-snug text-white md:text-6xl md:leading-[1.2] font-[var(--font-changa)]">
              احمِ ابتكاراتك ونمِّ ثقة شركائك عبر استراتيجية ملكية فكرية متوازنة
            </h1>
            <p className="max-w-2xl text-lg text-slate-300 md:text-xl">
              هذا الدليل العملي يضع بين يديك خطوات واضحة ونماذج جاهزة تساعدك على
              تأمين أصولك المعرفية، تعزيز تنافسيتك، وفتح مجالات التمويل
              والشراكات دون إبطاء عجلة الابتكار.
            </p>
            <div className="flex w-full flex-col items-end justify-end gap-4 sm:flex-row">
              <Link
                href="#roadmap"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-8 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-cyan-400/30 transition hover:bg-cyan-300"
              >
                ابدأ خريطة الطريق
              </Link>
              <Link
                href="#resources"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-3 text-base font-semibold text-white transition hover:border-cyan-200 hover:text-cyan-200"
              >
                حمّل الأدوات الجاهزة
              </Link>
            </div>
          </div>

          <dl className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_60px_rgba(14,165,233,0.08)] backdrop-blur lg:grid-cols-3">
            {[
              {
                label: "نسبة الزيادة في قيمة الشركة",
                value: "30%",
                note: "متوسط الزيادة في تقييم الشركات التي تمتلك ملف ملكية فكرية واضح.",
              },
              {
                label: "زمن الاستجابة للتعديات",
                value: "48 ساعة",
                note: "الهدف المثالي لمعالجة أي شكوى أو رصد مخالفة قبل تصاعد الضرر.",
              },
              {
                label: "نسبة مشاركة الفريق",
                value: "85%",
                note: "المؤسسات التي تدرب فرقها تحقق التزامًا أعلى بالإجراءات والسرية.",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-slate-900/40 p-6 text-right shadow-inner shadow-slate-900/30"
              >
                <dt className="text-sm text-cyan-200">{stat.label}</dt>
                <dd className="mt-2 text-4xl font-semibold text-white">
                  {stat.value}
                </dd>
                <p className="mt-3 text-sm text-slate-400">{stat.note}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="importance" className="relative py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
          <SectionHeader
            eyebrow="لماذا هذا مهم؟"
            title="ركائز النجاح عند حماية حقوق الملكية الفكرية"
            description="تطبيق الحماية ليس رفاهية قانونية، بل جزء أساسي من استراتيجية النمو لأي مؤسسة تعتمد على المعرفة أو التقنية."
          />

          <div className="grid gap-8 md:grid-cols-3">
            {impactHighlights.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.04] p-8 transition duration-300 hover:border-cyan-300/40 hover:bg-white/[0.08]"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:bg-cyan-400/30" />
                <item.icon className="mb-6 h-10 w-10 text-cyan-300" />
                <h3 className="mb-4 text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-base text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="roadmap"
        className="relative py-20 before:absolute before:inset-y-0 before:right-1/2 before:w-px before:bg-gradient-to-b before:from-cyan-200/30 before:via-white/10 before:to-transparent"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
          <SectionHeader
            eyebrow="خطوات عملية"
            title="خريطة طريق لبناء منظومة ملكية فكرية فعّالة"
            description="ابدأ من الواقع الحالي وانتقل تدريجيًا نحو ممارسات متقدمة دون مجازفة بالوقت أو الميزانية."
          />

          <div className="relative">
            <div className="absolute right-1/2 hidden h-full w-px translate-x-1/2 bg-gradient-to-b from-cyan-200/30 via-white/10 to-transparent md:block" />
            <div className="flex flex-col gap-10">
              {roadmapSteps.map((step, index) => (
                <div
                  key={step.step}
                  className="relative flex flex-col gap-5 rounded-3xl border border-white/10 bg-slate-900/40 p-8 backdrop-blur transition hover:border-cyan-200/40 md:flex-row md:items-start md:gap-8"
                >
                  <div className="flex w-full items-center justify-between md:w-52 md:flex-col md:items-end md:justify-start md:gap-4">
                    <span className="flex items-center gap-3 text-sm font-semibold text-cyan-200">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-200/40 bg-cyan-200/10 text-base">
                        {step.step}
                      </span>
                      محطة رئيسية
                    </span>
                    <h3 className="text-2xl font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-4 text-base text-slate-300 md:max-w-2xl">
                    <p>{step.detail}</p>
                    <div className="rounded-2xl border border-cyan-200/20 bg-cyan-200/5 p-4 text-sm text-cyan-100">
                      <strong className="ml-2 text-cyan-200">نصيحة:</strong>
                      {step.tip}
                    </div>
                  </div>
                  <div className="absolute -top-2 right-4 text-6xl font-black text-white/5 md:text-7xl">
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
          <SectionHeader
            eyebrow="أنواع الحماية"
            title="اختر نوع حقوق الملكية الأنسب لكل أصل"
            description="فهم الفروق بين البراءات والعلامات وحقوق النشر والأسرار التجارية يساعدك على الاستثمار في القنوات الأكثر تأثيرًا."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {ipTypes.map((type) => (
              <div
                key={type.title}
                className="group flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:border-cyan-200/40 hover:bg-white/[0.08]"
              >
                <div className="flex items-center justify-between gap-4">
                  <type.icon className="h-10 w-10 text-cyan-300" />
                  <span className="rounded-full border border-white/10 px-4 py-1 text-xs text-slate-300">
                    وثائق ومستندات
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {type.title}
                </h3>
                <ul className="flex flex-col gap-3 text-base text-slate-200">
                  {type.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start justify-end gap-3 leading-relaxed"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
          <SectionHeader
            eyebrow="جاهزية داخلية"
            title="قائمة تحقق تنظيمية تساعدك على التنفيذ السريع"
            description="استخدم البنود التالية لوضع خطة عمل للأشهر الثلاثة القادمة وتوزيع المسؤوليات داخل مؤسستك."
          />

          <div className="grid gap-8 md:grid-cols-3">
            {checklist.map((block) => (
              <div
                key={block.title}
                className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-slate-900/40 p-7 shadow-lg shadow-black/10 transition hover:border-cyan-200/30 hover:bg-slate-900/70"
              >
                <block.icon className="h-10 w-10 text-cyan-200" />
                <h3 className="text-xl font-semibold text-white">
                  {block.title}
                </h3>
                <ul className="flex flex-col gap-4 text-sm text-slate-300">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start justify-end gap-3 leading-relaxed"
                    >
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-cyan-200/40 bg-cyan-200/10 text-[11px] font-semibold text-cyan-100">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="relative py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
          <SectionHeader
            eyebrow="أدوات جاهزة"
            title="موارد تدعم رحلتك من الفكرة إلى الحماية"
            description="اختر الموارد التي تناسب وضعك الحالي، وادمجها ضمن خطة العمل الأسبوعية مع فريقك."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:border-cyan-200/40 hover:bg-white/[0.08]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-cyan-300" />
                    <span className="rounded-full border border-cyan-200/30 px-3 py-1 text-xs text-cyan-100">
                      {resource.label}
                    </span>
                  </div>
                  <Link
                    href={resource.link}
                    target="_blank"
                    className="text-sm font-semibold text-cyan-200 underline-offset-4 hover:text-cyan-100 hover:underline"
                  >
                    استكشف الآن
                  </Link>
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {resource.title}
                </h3>
                <p className="text-base text-slate-300">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6">
          <SectionHeader
            eyebrow="أسئلة متكررة"
            title="إجابات تساعدك على اتخاذ قرارات سريعة"
            description="تأكد من مناقشة هذه النقاط مع فريقك القانوني أو الإداري لتخصيص الحلول لبيئتك التنظيمية."
          />

          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-24 pt-10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-cyan-200/20 bg-gradient-to-br from-cyan-400/30 via-slate-900/80 to-indigo-500/20 p-10 text-center shadow-xl shadow-cyan-400/20">
            <div className="flex flex-col items-center gap-6">
              <BookOpen className="h-10 w-10 text-white" />
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                مستعد للخطوة التالية؟
              </h2>
              <p className="max-w-3xl text-lg text-slate-100">
                خصص ساعة واحدة هذا الأسبوع لمراجعة قائمة التحقق وتحديد أولوية
                ثلاثة أصول معرفية لحمايتها خلال الربع القادم. التزام صغير اليوم
                يعني حماية كبيرة غدًا.
              </p>
              <div className="flex flex-col items-center gap-3 md:flex-row">
                <Link
                  href="#importance"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-200"
                >
                  أعِد تقييم وضعك الحالي
                </Link>
                <Link
                  href="mailto:ip@yourcompany.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-3 text-base font-semibold text-white transition hover:border-white hover:text-cyan-100"
                >
                  اطلب استشارة متخصصة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
