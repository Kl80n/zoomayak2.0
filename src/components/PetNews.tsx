import React, { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, CalendarDays, Heart, Clock, Share2, Check, X, BookOpen, Sparkles, Tag, ShieldCheck } from 'lucide-react';

export interface NewsArticle {
  id: number;
  title: string;
  date: string;
  category: 'Здоровье' | 'Безопасность' | 'Питание' | 'Документы' | 'Уход';
  readTime: string;
  image: string;
  summary: string;
  content: string[];
  tips: string[];
  tags: string[];
}

export const DETAILED_NEWS: NewsArticle[] = [
  {
    id: 1,
    title: 'Как подготовить питомца к осеннему сезону: чек-лист заботы',
    date: '18 августа 2026',
    category: 'Здоровье',
    readTime: '4 мин чтения',
    image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1200&q=80',
    summary: 'Что проверить дома, какие обработки от паразитов не забыть и когда пора записаться на плановый осмотр.',
    content: [
      'С наступлением осени меняется не только погода, но и биоритмы наших питомцев. Начинается период активной сезонной линьки, повышается влажность на улице, а также активизируются клещи перед зимней спячкой.',
      'Многие ошибочно полагают, что с окончанием лета клещи и блохи перестают быть опасными. Однако осенний пик активности иксодовых клещей длится вплоть до первых стабильных заморозков. Обязательно продолжайте регулярную обработку каплями на холку или таблетками.',
      'Обратите внимание на суставы: при похолодании и сырости у пожилых собак и кошек могут обостряться артриты и скованность движений. Не допускайте лежания на холодном полу или сквозняках.'
    ],
    tips: [
      'Проверьте дату последней обработки от клещей и гельминтов в цифровой медкарте ЗооМаяка.',
      'После каждой прогулки под дождем тщательно мойте и насухо вытирайте подушечки лап.',
      'Приобретите защитный воск или легкий дождевик со светоотражающими элементами.',
      'Скорректируйте калорийность рациона, если собака стала меньше гулять из-за непогоды.'
    ],
    tags: ['#здоровье', '#осень', '#клещи', '#уход_за_лапами']
  },
  {
    id: 2,
    title: 'Почему QR-маяк полезен даже домашней кошке или послушной собаке',
    date: '15 августа 2026',
    category: 'Безопасность',
    readTime: '3 мин чтения',
    image: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=1200&q=80',
    summary: 'Цифровой паспорт и QR-жетон возвращают питомца домой в первые 2–4 часа после непредвиденного побега.',
    content: [
      'По статистике, более 75% домашних кошек и собак, которые теряются, выбегают из квартиры через случайно незапертую дверь, выпадают из окна или пугаются неожиданного громкого звука (салют, гроза, резкий сигнал авто).',
      'Обычный жетон с номером телефона часто стирается, звенит или содержит устаревший номер. Умный QR-адресник ЗооМаяка моментально открывает мобильный профиль с контактами нескольких членов семьи, медицинскими особенностями и номером чипа.',
      'Человеку, нашедшему питомца, не нужно везти его в клинику со сканером чипов — достаточно навести камеру любого смартфона на адресник.'
    ],
    tips: [
      'Заполните в профиле 2 запасных телефона доверенных лиц на случай, если вы будете вне зоны доступа.',
      'Укажите аллергии и хронические заболевания (например, необходимость диабетического корма).',
      'Регулярно обновляйте актуальную фотографию мордочки и примет питомца.'
    ],
    tags: ['#qr_маяк', '#безопасность', '#поиск_питомцев', '#sos_радар']
  },
  {
    id: 3,
    title: 'Питание собак и кошек: ключевые правила здорового рациона',
    date: '12 августа 2026',
    category: 'Питание',
    readTime: '5 мин чтения',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80',
    summary: 'Возраст, активность, порода и индивидуальные особенности — разбираем современный научный подход к рациону.',
    content: [
      'Качественное сбалансированное питание — это фундаментальная инвестиция в долголетие животного. Ошибки в подборе корма нередко приводят к скрытым воспалениям ЖКТ, ухудшению качества шерсти и проблемам с мочевыделительной системой.',
      'Главное правило: никогда не смешивайте натуральное сырое кормление с промышленными гранулированными кормами в одно кормление, так как они требуют разного уровня кислотности желудочного сока и разного времени переваривания.',
      'Следите за водным балансом: кошки эволюционно пьют мало воды, поэтому для них крайне рекомендованы питьевые фонтанчики и добавление влажных паучей супер-премиум класса.'
    ],
    tips: [
      'Взвешивайте порции корма на кухонных весах, чтобы избежать скрытого перекорма.',
      'Исключите токсичные для животных продукты: лук, чеснок, шоколад, виноград, изюм и авокадо.',
      'Меняйте рацион плавно в течение 7–10 дней, постепенно замешивая новый корм.'
    ],
    tags: ['#питание', '#диетология', '#корма', '#вода']
  },
  {
    id: 4,
    title: 'Как правильно читать ветеринарный паспорт: гид для владельца',
    date: '9 августа 2026',
    category: 'Документы',
    readTime: '4 мин чтения',
    image: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1200&q=80',
    summary: 'Какие отметки критически важны, что проверять перед поездкой и зачем хранить электронный дубликат.',
    content: [
      'Международный ветеринарный паспорт — главный документ вашего питомца. В нем фиксируются сведения о чипировании, вакцинациях против бешенства и вирусных инфекций, а также дегельминтизации и клинических осмотрах.',
      'Для путешествий по России и за рубеж вакцинация от бешенства должна быть сделана не менее чем за 20–30 дней до поездки и не более 12 месяцев назад. Обязательна подпись врача и круглая печать ветклиники.',
      'Цифровой паспорт ЗооМаяк позволяет хранить фото всех страниц, штрих-код чипа и график будущих ревакцинаций прямо в телефоне, защищая от утери бумажного документа.'
    ],
    tips: [
      'Проверьте совпадение номера чипа в паспорте и свидетельстве о регистрации.',
      'Внесите дату следующей вакцинации в Напоминания ЗооМаяка за 2 недели до срока.',
      'Сделайте сканы страниц с прививками и загрузите их в раздел «Здоровье».'
    ],
    tags: ['#паспорт', '#вакцинация', '#чипирование', '#поездки']
  },
  {
    id: 5,
    title: 'Уход за зубами и полостью рта: профилактика зубного камня',
    date: '5 августа 2026',
    category: 'Уход',
    readTime: '3 мин чтения',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=80',
    summary: 'Почему гигиена зубов продлевает жизнь питомцу на 2–3 года и как приучить к чистке без стресса.',
    content: [
      'Зубной налет у собак и кошек минерализуется в твердый зубной камень всего за 48–72 часа. Бактерии из ротовой полости могут попадать в кровоток и оказывать нагрузку на почки и сердечный клапан.',
      'Приучать к чистке зубов специальной ферментной пастой со вкусом мяса или птицы следует постепенно: сначала давая попробовать пасту с пальца, а затем используя мягкую силиконовую щеточку-напальчник.'
    ],
    tips: [
      'Никогда не используйте человеческую зубную пасту — она содержит токсичный для животных ксилит и фтор.',
      'Используйте дентальные лакомства и игрушки из натурального каучука для механической очистки зубов.',
      'Проводите плановый осмотр ротовой полости у ветеринара не реже одного раза в год.'
    ],
    tags: ['#гигиена', '#зубы', '#стоматология', '#уход']
  }
];

export const PetNews: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedNews, setSelectedNews] = useState<NewsArticle | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Все');
  const [copied, setCopied] = useState(false);

  const categories = ['Все', 'Здоровье', 'Безопасность', 'Питание', 'Документы', 'Уход'];

  const filteredNews = activeCategory === 'Все'
    ? DETAILED_NEWS
    : DETAILED_NEWS.filter(item => item.category === activeCategory);

  const scroll = (direction: 'prev' | 'next') => {
    if (!trackRef.current) return;
    const amount = trackRef.current.clientWidth * 0.75;
    trackRef.current.scrollBy({
      left: direction === 'next' ? amount : -amount,
      behavior: 'smooth',
    });
  };

  const handleShare = (article: NewsArticle) => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${article.title}\n\n${article.summary}\n\nЧитать в ЗооМаяк: ${window.location.href}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const currentIndex = selectedNews ? DETAILED_NEWS.findIndex(n => n.id === selectedNews.id) : -1;
  const prevArticle = currentIndex > 0 ? DETAILED_NEWS[currentIndex - 1] : null;
  const nextArticle = currentIndex >= 0 && currentIndex < DETAILED_NEWS.length - 1 ? DETAILED_NEWS[currentIndex + 1] : null;

  return (
    <section className="pet-news-section relative py-4">
      <div className="home-section-head flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <span className="eyebrow flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-teal-600 dark:text-teal-400">
            <Heart className="w-4 h-4 text-teal-500 fill-teal-500/20" /> БАЗА ЗНАНИЙ И НОВОСТИ ЗООМАЯКА
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1 text-slate-900 dark:text-white">
            Полезное о домашних питомцах
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mt-1">
            Проверенные материалы от ветеринарных врачей, кинологов и экспертов безопасности.
          </p>
        </div>

        {/* Categories / Navigation */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 p-1 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-teal-500 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-700/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="home-carousel-actions flex items-center gap-2">
            <button
              className="carousel-arrow w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-slate-700 transition cursor-pointer shadow-sm"
              onClick={() => scroll('prev')}
              aria-label="Предыдущие новости"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              className="carousel-arrow w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-slate-700 transition cursor-pointer shadow-sm"
              onClick={() => scroll('next')}
              aria-label="Следующие новости"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Track */}
      <div className="home-carousel relative">
        <div
          ref={trackRef}
          className="pet-news-grid pet-news-carousel flex gap-5 overflow-x-auto pb-4 pt-1 snap-x scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredNews.map((n) => (
            <article
              key={n.id}
              onClick={() => setSelectedNews(n)}
              className="pet-news-card flex-none w-[300px] sm:w-[340px] rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:border-teal-500/50 dark:hover:border-teal-500/40 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col group snap-start"
            >
              <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={n.image}
                  alt={n.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[11px] font-extrabold uppercase tracking-wide bg-slate-950/70 backdrop-blur-md text-teal-300 border border-teal-500/30">
                  {n.category}
                </span>
                <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-950/60 backdrop-blur-sm text-slate-300 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-teal-400" /> {n.readTime}
                </span>
              </div>

              <div className="pet-news-body p-5 flex flex-col flex-1 justify-between">
                <div>
                  <div className="pet-news-meta flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <CalendarDays className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    <time>{n.date}</time>
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white leading-snug group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-2">
                    {n.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                    {n.summary}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Читать статью <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400">
                    <BookOpen className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* News Article Modal */}
      {selectedNews && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedNews(null)}
        >
          <div
            className="w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 shadow-2xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-900/90 shrink-0">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-1 rounded-lg text-xs font-black uppercase tracking-wider bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                  {selectedNews.category}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <CalendarDays className="w-3.5 h-3.5" /> {selectedNews.date}
                </span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {selectedNews.readTime}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleShare(selectedNews)}
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition cursor-pointer flex items-center gap-1.5 text-xs font-bold"
                  title="Поделиться статьей"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
                  <span className="hidden sm:inline">{copied ? 'Скопировано!' : 'Поделиться'}</span>
                </button>

                <button
                  onClick={() => setSelectedNews(null)}
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition cursor-pointer"
                  aria-label="Закрыть"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scrollable Article Body */}
            <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
              {/* Hero Image */}
              <div className="relative rounded-2xl overflow-hidden h-60 sm:h-72 w-full border border-slate-200 dark:border-slate-800 shadow-sm">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Lead */}
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                  {selectedNews.title}
                </h1>
                <p className="mt-3 text-base sm:text-lg font-medium text-teal-800 dark:text-teal-200 bg-teal-50/80 dark:bg-teal-950/40 p-4 rounded-2xl border border-teal-500/20 leading-relaxed">
                  {selectedNews.summary}
                </p>
              </div>

              {/* Main Content Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {selectedNews.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Vet Tips Box */}
              {selectedNews.tips.length > 0 && (
                <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500/5 via-teal-500/10 to-cyan-500/5 dark:from-emerald-950/30 dark:via-teal-950/40 dark:to-cyan-950/30 border border-teal-500/30 space-y-3">
                  <div className="flex items-center gap-2 text-teal-700 dark:text-teal-300 font-extrabold text-sm sm:text-base">
                    <ShieldCheck className="w-5 h-5 text-teal-500 shrink-0" />
                    <span>Советы экспертов ЗооМаяка:</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                    {selectedNews.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <Tag className="w-3.5 h-3.5 text-slate-400" />
                {selectedNews.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Bottom Footer */}
            <div className="px-5 sm:px-6 py-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-900/90 flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2">
                {prevArticle && (
                  <button
                    onClick={() => setSelectedNews(prevArticle)}
                    className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Предыдущая</span>
                  </button>
                )}
                {nextArticle && (
                  <button
                    onClick={() => setSelectedNews(nextArticle)}
                    className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <span className="hidden sm:inline">Следующая</span> <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <button
                onClick={() => setSelectedNews(null)}
                className="px-5 py-2 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-extrabold text-xs transition cursor-pointer shadow-sm"
              >
                Понятно, спасибо
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
