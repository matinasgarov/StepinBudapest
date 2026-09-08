/* =========================================================
   StepIn Budapest — translations and interaction
   No dependencies. All motion respects prefers-reduced-motion.
   ========================================================= */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* -------------------------------------------------------
     TRANSLATIONS
     To add a string: add the key to en, az and ru below,
     then put data-i18n="key" on the element.
  ------------------------------------------------------- */
  var translations = {
    en: {
      skipLink: 'Skip to content',
      waFloat: 'WhatsApp',
      brandTagline: 'Student Relocation Partner',
      navServices: 'Services', navProcess: 'Process', navPricing: 'Pricing',
      navFaq: 'FAQ', navContact: 'Contact', navCta: 'WhatsApp Us',
      navPartners: 'Partners',
      heroTitle: 'Zero stress for them.<br>Total peace of mind <span class="mark">for you.</span>',
      heroSub: 'We meet your child at the airport, hand over the keys to a safe flat, and sort out every piece of paperwork for their new life abroad.',
      ctaPrimary: 'Message us on WhatsApp', ctaSecondary: 'What we do',
      heroNote: 'Write in Azerbaijani, Russian or English. We usually answer the same day.',
      trust1Label: 'Students helped',
      trust2: 'Azerbaijani-Speaking Team',
      trust3: 'WhatsApp Support', trust4: 'Verified Housing Options',
      servicesTitle: 'What we <span class="mark">take care of</span>',
      servicesSub: 'From the moment your student books their flight to the first week of classes.',
      s1title: 'Airport Pickup', s1text: 'We personally meet your student at Budapest Airport and take them safely to their accommodation.',
      s2title: 'Accommodation', s2text: 'Safe, verified housing — dorm or apartment. We vet every option so you never worry about scams.',
      s3title: 'Documentation', s3text: 'Residence permit, apostille, and university registration — we guide every step of the paperwork.',
      s4title: 'Settling In', s4text: 'SIM card, bank account, transport card — we handle the practical setup so your student can focus on starting.',
      svcIncluded: 'Included', svcNotIncluded: 'Not included', svcWhen: 'When',
      s1inc1: 'We meet them in person in the arrivals hall — they are never left to find their own way through an unfamiliar airport',
      s1inc2: 'We travel with them straight to their accommodation and make sure they get inside safely',
      s1inc3: '', s1inc4: '', s1not1: '', s1not2: '', s1when: '',
      s2inc1: 'A choice between a dormitory room or a private apartment, matched to your budget',
      s2inc2: 'Every listing is visited and checked by our own team before we ever show it to you',
      s2inc3: '', s2inc4: '',
      s2not1: 'Rent and deposit — paid by you directly to the landlord',
      s2not2: 'Any landlord or agency fee — paid by you directly', s2when: '',
      s3inc1: 'Residence permit application, prepared and submitted on their behalf',
      s3inc2: 'Legal representation and guardianship (Guardian) service',
      s3inc3: 'University registration, completed before the semester starts',
      s3inc4: 'Apostille coordination for their academic and personal documents', 
      s3not1: 'Government fees for the residence permit — paid by you directly',
      s3not2: 'Apostille, translation and university fees — paid by you directly', s3when: '',
      s4inc1: 'A local SIM card, so they can call, text, and use data right away',
      s4inc2: 'A Hungarian bank account, opened in their name',
      s4inc3: 'A student transport card for the metro, tram, and bus',
      s4inc4: '',
      s4not1: 'SIM plan charges, bank minimums and transport fares — paid by you directly',
      s4not2: '', s4when: '',
      howTitle: 'Simple from start to finish',
      how1title: 'Contact Us', how1text: 'When are you arriving? What kind of support do you need? Message us and we will reply on WhatsApp quickly.',
      how2title: 'We Prepare Everything', how2text: 'Your home, your documents, and the pickup plan — everything is fully ready before your child boards the plane.',
      how3title: 'Arrive at Ease', how3text: 'We will be waiting at the airport. Do not worry — we are with them at every step. They will never be alone in Budapest.',
      pricingTitle: 'Choose the right <span class="mark">level of support</span>',
      pricingSub: 'All prices are per student, paid once. Government, university and rent costs are paid by you directly — never through us.',
      plan1name: 'Basic',
      plan1scope: 'From landing to their front door',
      plan1f1: 'Met in person in the arrivals hall by a member of our team, who stays with them through passport control and baggage',
      plan1f2: 'Taken to the address they have rented and walked to the door — we do not leave until they are inside',
      plan1f3: 'A first walk around the neighbourhood: the nearest shop and pharmacy, where to buy school supplies, and the everyday things they will need in week one',
      plan1cta: 'Choose Basic',
      planBadge: 'Most Popular',
      plan2name: 'Standard', 
      plan2scope: 'From before the flight to fully registered',
      plan2f1: 'Everything in Basic — the airport meeting, the transfer, and the first orientation',
      plan2f2: 'Legal guardianship arranged, for students who arrive under 18',
      plan2f3: 'University orientation, registration completed before term starts, and their student card issued',
      plan2cta: 'Choose Standard',
      plan4name: 'Build your own',
      planIncludes: 'What is included',
      plan4scope: 'Pick only what you need and we will price it', plan4price: 'You choose', plan4legend: 'What do you need?',
      planAltPrice: '235 USD without guardianship',
      plan5scope: 'The flat found and checked before they fly',
      plan5name: 'Before Arrival',
      plan5f4: 'The landlord dealt with on your behalf, from the first message to the keys',
      plan5f3: 'Help reading and signing the contract, so nothing is agreed that you have not understood',
      plan5f2: 'Video of the flat filmed on site and sent to you before any money changes hands — the single best protection against a rental scam',
      plan5f1: 'A housing search run for you — dormitory or private flat, matched to your budget',
      plan5cta: 'Choose this package',
      plan3f5: 'WhatsApp support around the clock, for them and for you',
      plan3f4: 'Medical support — help finding a doctor and being seen, with someone who speaks Hungarian',
      plan2f5: 'Bank account, SIM card, transport card and insurance — all opened in their name',
      plan2f4: 'Residence permit prepared and filed, plus address card, tax number and apostille coordination for their documents',
      pick6: 'Insurance and medical support',
      pick1: 'Airport pickup and move-in', pick2: 'Housing search before arrival', pick3: 'Residence permit and documents',
      pick4: 'Legal guardianship', pick5: 'Bank, SIM and transport card',
      plan4cta: 'Send my choices',
      waPick: 'Hello! I would like a package with:',
      waPickNone: 'Hello! I would like to put together my own package.',
      plan3name: 'Premium', 
      plan3scope: 'Everything, and a year of it',
      plan3f1: 'Everything in Standard — arrival, registration, residence permit, guardianship and the practical setup',
      plan3f2: 'Before Arrival included: the flat found, filmed and checked before they board',
      plan3f3: 'A full year of support, not only the first week',
      plan3cta: 'Choose Premium',
      partnersTitle: 'The people who <span class="mark">will be there</span>',
      partnersSub: 'Your child is not handed over to a company. They are met by named people who live in Budapest, and each one answers for their part of the move.',
      /* ---- PLACEHOLDER PEOPLE -- REPLACE BEFORE LAUNCH ----
         These three are invented. They are here so the section renders
         while the real partners are being confirmed. Shipping them to a
         parent would be claiming a named human will meet their child at
         Budapest airport and act as legal guardian to a minor. Blank the
         name out and the card disappears on its own; blank all three and
         so does the section. Tracked in CLAUDE.md under Known placeholders. */
      pt1name: 'Aysel Məmmədova',
      pt1role: 'Airport & arrivals',
      pt1line: 'Meets every student at the gate and does not leave until they are inside their new flat.',
      pt2name: 'Márton Kovács',
      pt2role: 'Housing',
      pt2line: 'Inspects every flat in person before a student is ever shown it.',
      pt3name: 'Nigar Əliyeva',
      pt3role: 'Legal guardian',
      pt3line: 'The named guardian on file for students who arrive under 18.',
      pt4name: 'Elvin Hüseynov',
      pt4role: 'Documents & registration',
      pt4line: 'Handles the residence permit, address card and bank paperwork end to end.',
      faqTitle: 'Questions parents ask',
      faq1q: 'When should I contact you?', faq1a: 'At least 2–4 weeks before your student\'s arrival date so we have time to arrange everything properly.',
      faq2q: 'Will someone be with my child when they land?', faq2a: 'Yes — we personally meet every student at Budapest Airport, no exceptions.',
      faq3q: 'How do I know my child is safe after arrival?', faq3a: 'We are reachable on WhatsApp at any time, and parents can contact us directly — you do not go through your child to reach us.',
      faq4q: 'Do you guarantee accommodation?', faq4a: 'We provide thoroughly vetted options and guide the final choice. We never recommend anything we haven\'t verified.',
      faq5q: 'Can parents contact you directly?', faq5a: 'Yes — we communicate with both students and parents throughout the entire process.',
      contactTitle: 'Ready to start? <span class="mark">Message us today.</span>',
      contactSub: 'WhatsApp is the fastest way to reach us. We typically respond within a few hours.',
      footerCopy: '© 2026 StepIn Budapest. All rights reserved.'
    },
    az: {
      skipLink: 'Məzmuna keç',
      waFloat: 'WhatsApp',
      brandTagline: 'Tələbə Köç Tərəfdaşı',
      navServices: 'Xidmətlər', navProcess: 'Proses', navPricing: 'Qiymətlər',
      navFaq: 'FAQ', navContact: 'Əlaqə', navCta: 'WhatsApp',
      navPartners: 'Partnyorlar',
      heroTitle: 'Onlar üçün sıfır stress.<br>Sizin üçün <span class="mark">tam rahatlıq.</span>',
      heroSub: 'Övladınızı hava limanında qarşılayır, təhlükəsiz mənzilin açarlarını təhvil verir və xaricdəki yeni həyatı üçün bütün sənədləri həll edirik.',
      ctaPrimary: 'WhatsApp-da yazın', ctaSecondary: 'Nə edirik',
      heroNote: 'Azərbaycanca, rusca və ya ingiliscə yazın. Adətən elə həmin gün cavab veririk.',
      trust1Label: 'Tələbəyə kömək edildi',
      trust2: 'Azərbaycanca Danışan Komanda',
      trust3: 'WhatsApp Dəstəyi', trust4: 'Yoxlanılmış Yaşayış Seçimləri',
      servicesTitle: 'Bizim <span class="mark">öhdəmizdəkilər</span>',
      servicesSub: 'Tələbəniz bilet aldığı andan fəaliyyətimiz başlayır.',
      s1title: 'Hava Limanı Qarşılaması', s1text: 'Tələbənizi Budapeşt hava limanında şəxsən qarşılayır və təhlükəsiz şəkildə yaşayış yerinə aparırıq.',
      s2title: 'Yaşama', s2text: 'Təhlükəsiz, yoxlanılmış yaşayış — yataqxana və ya mənzil. Hər variantı yoxlayırıq ki, fırıldaqçılıqdan narahat olmayasınız.',
      s3title: 'Sənədlər', s3text: 'Oturum icazəsi, apostil və universitet qeydiyyatı — bütün sənəd işlərini addım-addım rəhbərlik edirik.',
      s4title: 'Yerləşmə', s4text: 'SIM kart, bank hesabı, nəqliyyat kartı — praktik qurulumu biz edirik ki, tələbəniz başlamağa fokuslanabilsin.',
      svcIncluded: 'Daxildir', svcNotIncluded: 'Daxil deyil', svcWhen: 'Nə vaxt',
      s1inc1: 'Tələbəni Budapeşt hava limanının gəliş zalında şəxsən qarşılayırıq — o, tanış olmayan hava limanında tək qalmır',
      s1inc2: 'Yaşayış yerinə qədər onunla birlikdə gedir və təhlükəsiz daxil olduğuna əmin oluruq',
      s1inc3: '', s1inc4: '', s1not1: '', s1not2: '', s1when: '',
      s2inc1: 'Büdcənizə uyğun yataqxana otağı və ya ayrıca mənzil seçimi',
      s2inc2: 'Sizə göstərməzdən əvvəl hər mənzili öz komandamız şəxsən yoxlayır',
      s2inc3: '', s2inc4: '',
      s2not1: 'Kirayə və depozit — birbaşa ev sahibinə siz ödəyirsiniz',
      s2not2: 'Ev sahibi və ya agentlik haqqı — birbaşa siz ödəyirsiniz', s2when: '',
      s3inc1: 'Oturum icazəsi üçün müraciətin hazırlanması və təqdim edilməsi',
      s3inc2: 'Hüquqi nümayəndəlik və qəyyumluq (Guardian) xidməti',
      s3inc3: 'Semestr başlamazdan əvvəl tamamlanan universitet qeydiyyatı',
      s3inc4: 'Akademik və şəxsi sənədlər üçün apostil koordinasiyası',
      s3not1: 'Oturum icazəsi üçün dövlət rüsumları — birbaşa siz ödəyirsiniz',
      s3not2: 'Apostil, tərcümə və universitet ödənişləri — birbaşa siz ödəyirsiniz', s3when: '',
      s4inc1: 'Yerli SIM kart — zəng, mesaj və internetdən dərhal istifadə üçün',
      s4inc2: 'Onun adına açılan macar bank hesabı',
      s4inc3: 'Metro, tramvay və avtobus üçün tələbə nəqliyyat kartı',
      s4inc4: '',
      s4not1: 'SIM tarifi, bank minimumları və nəqliyyat haqları — birbaşa siz ödəyirsiniz',
      s4not2: '', s4when: '',
      howTitle: 'Başdan sona sadədir',
      how1title: 'Bizimlə Əlaqə', how1text: 'Nə vaxt gəlirsiniz? Necə bir dəstəyə ehtiyacınız var? Yazın, WhatsApp-da tez bir zamanda cavab verək.',
      how2title: 'Hər Şeyi Hazırlayırıq', how2text: 'Eviniz, sənədləriniz və qarşılama planı — hər şey övladınız təyyarəyə minməmişdən qabaq tam hazır olur.',
      how3title: 'Tam Arxayın olun', how3text: 'Hava limanından - universitetə, hər addımda yanınızdayıq',
      pricingTitle: 'Uyğun <span class="mark">dəstək səviyyəsini</span> seçin',
      pricingSub: 'Bütün qiymətlər bir tələbə üçün və birdəfəlikdir. Dövlət, universitet və kirayə xərcləri birbaşa sizin tərəfinizdən ödənilir — heç vaxt bizim üzərimizdən.',
      plan1name: 'Basic',
      plan1scope: 'Enişdən evinin qapısına qədər',
      plan1f1: 'Komandamızın üzvü onları gəlişlər zalında şəxsən qarşılayır və pasport nəzarəti ilə baqaj boyunca yanlarında qalır',
      plan1f2: 'Kirayə götürdükləri ünvana çatdırılır və qapıya qədər ötürülür — içəri girənə qədər ayrılmırıq',
      plan1f3: 'Ətrafla ilk tanışlıq: ən yaxın mağaza və aptek, məktəb ləvazimatlarını haradan almaq və ilk həftə lazım olacaq gündəlik şeylər',
      plan1cta: 'Basic seçin',
      planBadge: 'Ən Populyar',
      plan2name: 'Standard', 
      plan2scope: 'Uçuşdan əvvəldən tam qeydiyyata qədər',
      plan2f1: 'Basic-də olan hər şey — hava limanında qarşılama, çatdırılma və ilk tanışlıq',
      plan2f2: '18 yaşdan kiçik gələn tələbələr üçün qanuni qəyyumluğun rəsmiləşdirilməsi',
      plan2f3: 'Universitet oriyentasiyası, semestr başlamazdan əvvəl qeydiyyat və tələbə kartı',
      plan2cta: 'Standard seçin',
      plan4name: 'Öz paketini hazırla',
      planIncludes: 'Nələr daxildir',
      plan4scope: 'Yalnız ehtiyacınız olanı seçin, qiyməti biz deyək', plan4price: 'Siz seçin', plan4legend: 'Nəyə ehtiyacınız var?',
      planAltPrice: 'Qəyyumluq olmadan 235 USD',
      plan5scope: 'Ev tapılır və uçuşdan əvvəl yoxlanılır',
      plan5name: 'Gəlişdən əvvəl',
      plan5f4: 'Ev sahibi ilə bütün əlaqə sizin adınızdan aparılır — ilk mesajdan açarlara qədər',
      plan5f3: 'Müqavilənin oxunması və imzalanmasında kömək, başa düşmədiyiniz heç nə razılaşdırılmasın deyə',
      plan5f2: 'Mənzilin videosu yerində çəkilir və hər hansı ödəniş edilməzdən əvvəl sizə göndərilir — kirayə fırıldağına qarşı ən yaxşı qoruma',
      plan5f1: 'Sizin üçün ev axtarışı — yataqxana və ya şəxsi mənzil, büdcənizə uyğun',
      plan5cta: 'Bu paketi seçin',
      plan3f5: 'Gecə-gündüz WhatsApp dəstəyi — həm onlar, həm siz üçün',
      plan3f4: 'Tibbi dəstək — həkim tapmaq və qəbula düşmək üçün macar dilində danışan biri ilə kömək',
      plan2f5: 'Bank hesabı, SIM kart, nəqliyyat kartı və sığorta — hamısı onların adına açılır',
      plan2f4: 'Yaşayış icazəsi hazırlanır və təqdim olunur, üstəlik ünvan kartı, vergi nömrəsi və sənədlər üçün apostil koordinasiyası',
      pick6: 'Sığorta və tibbi dəstək',
      pick1: 'Hava limanında qarşılama və evə yerləşdirmə', pick2: 'Gəlişdən əvvəl ev axtarışı', pick3: 'Yaşayış icazəsi və sənədlər',
      pick4: 'Qanuni qəyyumluq', pick5: 'Bank, SIM və nəqliyyat kartı',
      plan4cta: 'Seçimlərimi göndər',
      waPick: 'Salam! Aşağıdakıları əhatə edən paket istəyirəm:',
      waPickNone: 'Salam! Öz paketimi hazırlamaq istəyirəm.',
      plan3name: 'Premium', 
      plan3scope: 'Hər şey və bir il boyunca',
      plan3f1: 'Standard-da olan hər şey — gəliş, qeydiyyat, yaşayış icazəsi, qəyyumluq və praktiki quraşdırma',
      plan3f2: '«Gəlişdən əvvəl» paketi daxildir: ev tapılır, videosu çəkilir və uçuşdan əvvəl yoxlanılır',
      plan3f3: 'Yalnız ilk həftə deyil, tam bir il dəstək',
      plan3cta: 'Premium seçin',
      partnersTitle: '<span class="mark">Orada olacaq</span> insanlar',
      partnersSub: 'Övladınız bir şirkətə deyil, Budapeştdə yaşayan konkret insanlara təhvil verilir. Hər biri köçün öz hissəsinə cavabdehdir.',
      /* ---- PLACEHOLDER PEOPLE -- REPLACE BEFORE LAUNCH ----
         These three are invented. They are here so the section renders
         while the real partners are being confirmed. Shipping them to a
         parent would be claiming a named human will meet their child at
         Budapest airport and act as legal guardian to a minor. Blank the
         name out and the card disappears on its own; blank all three and
         so does the section. Tracked in CLAUDE.md under Known placeholders. */
      pt1name: 'Aysel Məmmədova',
      pt1role: 'Hava limanı və qarşılama',
      pt1line: 'Hər tələbəni çıxışda qarşılayır və onlar yeni evlərinə girənə qədər yanlarından ayrılmır.',
      pt2name: 'Márton Kovács',
      pt2role: 'Yaşayış',
      pt2line: 'Hər mənzili tələbəyə göstərilməzdən əvvəl şəxsən yoxlayır.',
      pt3name: 'Nigar Əliyeva',
      pt3role: 'Qanuni qəyyum',
      pt3line: '18 yaşdan kiçik gələn tələbələr üçün rəsmi qeydiyyatda olan qəyyum.',
      pt4name: 'Elvin Hüseynov',
      pt4role: 'Sənədlər və qeydiyyat',
      pt4line: 'Yaşayış icazəsi, ünvan kartı və bank sənədlərini əvvəldən sona qədər aparır.',
      faqTitle: 'Valideynlərin soruşduğu suallar',
      faq1q: 'Nə vaxt sizinlə əlaqə saxlamalıyam?', faq1a: 'Tələbənizin gəliş tarixindən ən azı 2–4 həftə əvvəl ki, hər şeyi düzgün hazırlaya bilək.',
      faq2q: 'Uşağım endikdə yanında biri olacaqmı?', faq2a: 'Bəli — hər tələbəni Budapeşt hava limanında şəxsən qarşılayırıq, istisnasız.',
      faq3q: 'Gəlişdən sonra uşağımın təhlükəsiz olduğunu necə biləcəyəm?', faq3a: 'İstənilən vaxt WhatsApp-da əlçatanıq və valideynlər birbaşa bizimlə əlaqə saxlaya bilər — bizə çatmaq üçün övladınızdan keçməyə ehtiyac yoxdur.',
      faq4q: 'Yaşayışa zəmanət verirsiniz?', faq4a: 'Hərtərəfli yoxlanılmış variantlar təqdim edir və son seçimi rəhbərlik edirik. Yoxlamadığımız heç nəyi tövsiyə etmirik.',
      faq5q: 'Valideynlər birbaşa sizinlə əlaqə saxlaya bilər?', faq5a: 'Bəli — bütün proses boyu həm tələbələrlə, həm də valideynlərlə əlaqə saxlayırıq.',
      contactTitle: 'Başlamağa hazırsınız? <span class="mark">Bu gün yazın.</span>',
      contactSub: 'WhatsApp bizimlə əlaqə saxlamağın ən sürətli yoludur. Bir neçə saat içində cavab veririk.',
      footerCopy: '© 2026 StepIn Budapest. Bütün hüquqlar qorunur.'
    },
    ru: {
      skipLink: 'Перейти к содержанию',
      waFloat: 'WhatsApp',
      brandTagline: 'Партнёр по переезду студентов',
      navServices: 'Услуги', navProcess: 'Процесс', navPricing: 'Цены',
      navFaq: 'FAQ', navContact: 'Контакты', navCta: 'WhatsApp',
      navPartners: 'Партнёры',
      heroTitle: 'Ноль стресса для него.<br>Полное спокойствие <span class="mark">для вас.</span>',
      heroSub: 'Встречаем вашего ребёнка в аэропорту, передаём ключи от безопасной квартиры и оформляем все документы для его новой жизни за границей.',
      ctaPrimary: 'Написать в WhatsApp', ctaSecondary: 'Что мы делаем',
      heroNote: 'Пишите по-азербайджански, по-русски или по-английски. Обычно отвечаем в тот же день.',
      trust1Label: 'студентам помогли',
      trust2: 'Команда говорит по-азербайджански',
      trust3: 'Поддержка в WhatsApp', trust4: 'Проверенные варианты жилья',
      servicesTitle: 'Что мы <span class="mark">берём на себя</span>',
      servicesSub: 'С момента покупки билета до первой недели занятий.',
      s1title: 'Трансфер из аэропорта', s1text: 'Мы лично встречаем вашего студента в аэропорту Будапешта и безопасно доставляем до жилья.',
      s2title: 'Жильё', s2text: 'Безопасное, проверенное жильё — общежитие или квартира. Мы проверяем каждый вариант, чтобы вы не беспокоились о мошенничестве.',
      s3title: 'Документы', s3text: 'Вид на жительство, апостиль и регистрация в университете — мы сопровождаем каждый шаг оформления.',
      s4title: 'Обустройство', s4text: 'SIM-карта, банковский счёт, транспортная карта — мы берём на себя практическую сторону, чтобы студент мог сосредоточиться на учёбе.',
      svcIncluded: 'Входит', svcNotIncluded: 'Не входит', svcWhen: 'Когда',
      s1inc1: 'Встречаем лично в зале прилёта — он не остаётся один в незнакомом аэропорту',
      s1inc2: 'Едем вместе с ним до жилья и убеждаемся, что он благополучно заселился',
      s1inc3: '', s1inc4: '', s1not1: '', s1not2: '', s1when: '',
      s2inc1: 'Комната в общежитии или отдельная квартира — по вашему бюджету',
      s2inc2: 'Каждый вариант жилья наша команда осматривает лично, прежде чем показать вам',
      s2inc3: '', s2inc4: '',
      s2not1: 'Аренда и депозит — вы оплачиваете напрямую владельцу жилья',
      s2not2: 'Комиссия владельца или агентства — вы оплачиваете напрямую', s2when: '',
      s3inc1: 'Подготовка и подача заявления на вид на жительство',
      s3inc2: 'Юридическое представительство и услуга опекунства (Guardian)',
      s3inc3: 'Регистрация в университете — до начала семестра',
      s3inc4: 'Оформление апостиля на учебные и личные документы',
      s3not1: 'Государственные пошлины за вид на жительство — вы оплачиваете напрямую',
      s3not2: 'Апостиль, перевод и университетские сборы — вы оплачиваете напрямую', s3when: '',
      s4inc1: 'Местная SIM-карта — звонки, сообщения и интернет с первого дня',
      s4inc2: 'Банковский счёт в венгерском банке, открытый на его имя',
      s4inc3: 'Студенческий проездной на метро, трамвай и автобус',
      s4inc4: '',
      s4not1: 'Тариф SIM-карты, минимальный остаток в банке и проезд — вы оплачиваете напрямую',
      s4not2: '', s4when: '',
      howTitle: 'Просто от начала до конца',
      how1title: 'Свяжитесь с нами', how1text: 'Когда вы прилетаете? Какая поддержка вам нужна? Напишите нам — мы быстро ответим в WhatsApp.',
      how2title: 'Готовим всё', how2text: 'Жильё, документы и план встречи — всё полностью готово до того, как ваш ребёнок сядет в самолёт.',
      how3title: 'Прилетайте спокойно', how3text: 'Мы будем ждать в аэропорту. Не волнуйтесь — мы рядом на каждом шаге. Он никогда не останется один в Будапеште.',
      pricingTitle: 'Выберите нужный <span class="mark">уровень поддержки</span>',
      pricingSub: 'Все цены указаны за одного студента и оплачиваются один раз. Государственные, университетские и арендные расходы вы оплачиваете напрямую — никогда через нас.',
      plan1name: 'Basic',
      plan1scope: 'От посадки до двери его дома',
      plan1f1: 'Сотрудник нашей команды лично встречает в зале прилёта и остаётся рядом на паспортном контроле и выдаче багажа',
      plan1f2: 'Довозим до снятого адреса и провожаем до двери — не уезжаем, пока он не войдёт внутрь',
      plan1f3: 'Первое знакомство с районом: ближайший магазин и аптека, где купить школьные принадлежности и всё нужное на первую неделю',
      plan1cta: 'Выбрать Basic',
      planBadge: 'Популярный выбор',
      plan2name: 'Standard', 
      plan2scope: 'От подготовки к вылету до полной регистрации',
      plan2f1: 'Всё, что входит в Basic — встреча в аэропорту, трансфер и первое знакомство с районом',
      plan2f2: 'Оформление законного опекунства для студентов, приезжающих до 18 лет',
      plan2f3: 'Ориентация в университете, регистрация до начала семестра и студенческий билет',
      plan2cta: 'Выбрать Standard',
      plan4name: 'Соберите свой пакет',
      planIncludes: 'Что входит',
      plan4scope: 'Выберите только нужное, а цену назовём мы', plan4price: 'Вы выбираете', plan4legend: 'Что вам нужно?',
      planAltPrice: '235 USD без опекунства',
      plan5scope: 'Квартира найдена и проверена до вылета',
      plan5name: 'До приезда',
      plan5f4: 'Всё общение с арендодателем ведём мы — от первого сообщения до ключей',
      plan5f3: 'Помощь с чтением и подписанием договора, чтобы вы не согласились на то, чего не поняли',
      plan5f2: 'Видео квартиры снимается на месте и отправляется вам до любой оплаты — лучшая защита от мошенничества с арендой',
      plan5f1: 'Поиск жилья для вас — общежитие или частная квартира под ваш бюджет',
      plan5cta: 'Выбрать этот пакет',
      plan3f5: 'Поддержка в WhatsApp круглосуточно — и для него, и для вас',
      plan3f4: 'Медицинская поддержка — помощь найти врача и попасть на приём, с человеком, говорящим по-венгерски',
      plan2f5: 'Банковский счёт, SIM-карта, транспортная карта и страховка — всё оформлено на его имя',
      plan2f4: 'Вид на жительство подготовлен и подан, плюс адресная карта, налоговый номер и координация апостиля для документов',
      pick6: 'Страховка и медицинская поддержка',
      pick1: 'Встреча в аэропорту и заселение', pick2: 'Поиск жилья до приезда', pick3: 'ВНЖ и документы',
      pick4: 'Законное опекунство', pick5: 'Банк, SIM и транспортная карта',
      plan4cta: 'Отправить мой выбор',
      waPick: 'Здравствуйте! Хочу пакет со следующим:',
      waPickNone: 'Здравствуйте! Хочу собрать свой пакет.',
      plan3name: 'Premium', 
      plan3scope: 'Всё и на целый год',
      plan3f1: 'Всё, что входит в Standard — приезд, регистрация, ВНЖ, опекунство и бытовое обустройство',
      plan3f2: 'Пакет «До приезда» включён: квартира найдена, снята на видео и проверена до вылета',
      plan3f3: 'Поддержка целый год, а не только первую неделю',
      plan3cta: 'Выбрать Premium',
      partnersTitle: 'Люди, которые <span class="mark">будут рядом</span>',
      partnersSub: 'Вашего ребёнка встречает не компания, а конкретные люди, которые живут в Будапеште и отвечают за свою часть переезда.',
      /* ---- PLACEHOLDER PEOPLE -- REPLACE BEFORE LAUNCH ----
         These three are invented. They are here so the section renders
         while the real partners are being confirmed. Shipping them to a
         parent would be claiming a named human will meet their child at
         Budapest airport and act as legal guardian to a minor. Blank the
         name out and the card disappears on its own; blank all three and
         so does the section. Tracked in CLAUDE.md under Known placeholders. */
      pt1name: 'Айсель Мамедова',
      pt1role: 'Аэропорт и встреча',
      pt1line: 'Встречает каждого студента на выходе и не уезжает, пока он не окажется в своей новой квартире.',
      pt2name: 'Мартон Ковач',
      pt2role: 'Жильё',
      pt2line: 'Лично осматривает каждую квартиру, прежде чем её покажут студенту.',
      pt3name: 'Нигяр Алиева',
      pt3role: 'Законный опекун',
      pt3line: 'Официально оформленный опекун для студентов, приезжающих до 18 лет.',
      pt4name: 'Эльвин Гусейнов',
      pt4role: 'Документы и регистрация',
      pt4line: 'Ведёт вид на жительство, адресную карту и банковские документы от начала до конца.',
      faqTitle: 'Вопросы родителей',
      faq1q: 'Когда мне следует с вами связаться?', faq1a: 'Как минимум за 2–4 недели до даты прибытия, чтобы у нас было время всё правильно организовать.',
      faq2q: 'Будет ли кто-то рядом с моим ребёнком по прилёте?', faq2a: 'Да — мы лично встречаем каждого студента в аэропорту Будапешта, без исключений.',
      faq3q: 'Как я узнаю, что мой ребёнок в безопасности после прибытия?', faq3a: 'Мы доступны в WhatsApp в любое время, и родители могут связаться с нами напрямую — вам не нужно узнавать всё через ребёнка.',
      faq4q: 'Вы гарантируете жильё?', faq4a: 'Мы предоставляем тщательно проверенные варианты и помогаем сделать финальный выбор. Мы никогда не рекомендуем то, чего не проверили.',
      faq5q: 'Могут ли родители напрямую с вами связаться?', faq5a: 'Да — мы общаемся как со студентами, так и с родителями на протяжении всего процесса.',
      contactTitle: 'Готовы начать? <span class="mark">Напишите нам сегодня.</span>',
      contactSub: 'WhatsApp — самый быстрый способ связаться с нами. Обычно мы отвечаем в течение нескольких часов.',
      footerCopy: '© 2026 StepIn Budapest. Все права защищены.'
    }
  };

  var SUPPORTED = ['en', 'az', 'ru'];
  var STORE_KEY = 'stepin-lang';
  // Keys whose value is allowed to contain markup. Keep this list minimal.
  /* Applied with innerHTML rather than textContent, because the marked
     phrase is part of the sentence and differs per language. Every value is
     a literal written in this file — nothing here comes from a user or a
     URL — so this list carries no injection surface. Keep it that way: if a
     string ever starts coming from outside, it does not belong here. */
  var RICH_KEYS = ['heroTitle', 'servicesTitle', 'pricingTitle',
                   'partnersTitle', 'contactTitle'];

  /* -------------------------------------------------------
     LANGUAGE
  ------------------------------------------------------- */
  function readStoredLang() {
    try {
      var saved = localStorage.getItem(STORE_KEY);
      if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (e) { /* private mode — fall through to detection */ }

    var nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(nav) !== -1 ? nav : 'en';
  }

  function applyLanguage(lang) {
    var dict = translations[lang] || translations.en;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.dataset.i18n;
      var val = dict[key];
      if (val === undefined) return;
      // Only heroTitle carries markup (<br>, <em>). Everything else is set as
      // plain text, so a stray '<' in a translation can never become an element.
      if (RICH_KEYS.indexOf(key) !== -1) el.innerHTML = val;
      else el.textContent = val;
    });

    document.querySelectorAll('.lang-opt').forEach(function (opt) {
      opt.classList.toggle('is-active', opt.dataset.lang === lang);
    });
    document.querySelectorAll('[data-lang-code]').forEach(function (el) {
      el.textContent = lang.toUpperCase();
    });

    hideEmptySlots();
    hidePartnerSlots();
    updateCustomLink();

    try { localStorage.setItem(STORE_KEY, lang); } catch (e) { /* non-fatal */ }
  }

  /* -------------------------------------------------------
     BUILD YOUR OWN PACKAGE
     The ticks become the first WhatsApp message, so a parent never has to
     compose one. Rebuilt on every tick and on every language switch, so the
     message always matches what is on screen.
  ------------------------------------------------------- */
  var CUSTOM_WA = '994000000000';

  function updateCustomLink() {
    var cta = document.getElementById('customCta');
    if (!cta) return;

    var dict = translations[document.documentElement.lang] || translations.en;
    var chosen = [];
    document.querySelectorAll('[data-pick]').forEach(function (box) {
      if (!box.checked) return;
      var label = box.parentNode.querySelector('span');
      if (label) chosen.push(label.textContent.trim());
    });

    var NL = String.fromCharCode(10);
    var text = chosen.length
      ? dict.waPick + NL + chosen.map(function (c) { return '- ' + c; }).join(NL)
      : dict.waPickNone;

    cta.href = 'https://wa.me/' + CUSTOM_WA + '?text=' + encodeURIComponent(text);
  }

  document.querySelectorAll('[data-pick]').forEach(function (box) {
    box.addEventListener('change', updateCustomLink);
  });

  /* A slot with an empty translation hides itself, and a block with no
     visible slots hides too. This is what lets the service detail ship
     before every fact is confirmed — unwritten content simply isn't there. */
  /* Partners follow the same principle as the service slots, for a stronger
     reason: a card with no name is a person we have not confirmed, so it does
     not render at all. If none are filled in, the section and its nav links go
     with them — the page never shows an invented person, and never links to an
     empty chapter.

     The monogram is derived from whichever name is on screen, so a Cyrillic
     transliteration follows for free and there is no second key to forget.
     Once a real photograph has a src it replaces the monogram in the same
     grid cell, which is why adding one changes no layout. */
  /* The portrait belongs to whichever row is open, so the monogram and the
     photograph are read from that row rather than from a per-card slot.
     Derived from the name on screen, so a Cyrillic transliteration follows
     for free and there is no second key to keep in sync. */
  function showPartner(card) {
    var stagePhoto = document.querySelector('[data-partner-photo]');
    var stageMono = document.querySelector('[data-partner-monogram]');
    if (!card || !stageMono) return;

    var holder = card.querySelector('[data-partner-name] [data-i18n]');
    var name = holder ? holder.textContent.trim() : '';
    var src = card.getAttribute('data-photo');

    if (stagePhoto) {
      if (src) stagePhoto.src = src;
      stagePhoto.hidden = !src;
      stagePhoto.alt = src ? name : '';
    }
    stageMono.hidden = !!src;
    stageMono.textContent = name.charAt(0).toUpperCase();
  }

  function openPartner(card) {
    document.querySelectorAll('[data-partner]').forEach(function (other) {
      var body = other.querySelector('.partner-body');
      var head = other.querySelector('[data-partner-toggle]');
      var on = other === card;

      other.classList.toggle('is-open', on);
      if (head) head.setAttribute('aria-expanded', on ? 'true' : 'false');
      /* Height animates from a measured value; auto is not animatable. It is
         set to the content height rather than left on auto so a language
         switch, which changes the text length, re-measures instead of
         keeping a stale number. */
      if (body) body.style.height = on ? body.scrollHeight + 'px' : '0px';
    });
    showPartner(card);
  }

  document.querySelectorAll('[data-partner-toggle]').forEach(function (head) {
    head.addEventListener('click', function () {
      var card = head.closest('[data-partner]');
      /* Clicking the open row closes nothing: with one shared portrait, a
         state where no row is open leaves a face belonging to no name. */
      if (card && !card.classList.contains('is-open')) openPartner(card);
    });
  });

  /* Nothing about a real person renders until it is confirmed. A row with no
     name is a person we have not confirmed, so it does not render at all; if
     none of them are filled in, the section and its nav links go too. */
  function hidePartnerSlots() {
    var shown = null;

    document.querySelectorAll('[data-partner]').forEach(function (card) {
      var holder = card.querySelector('[data-partner-name] [data-i18n]');
      var name = holder ? holder.textContent.trim() : '';
      card.hidden = name === '';
      if (!card.hidden && !shown) shown = card;
    });

    var section = document.querySelector('[data-partners-section]');
    if (section) section.hidden = !shown;
    document.querySelectorAll('[data-partners-nav]').forEach(function (li) {
      li.hidden = !shown;
    });

    /* Re-open the first surviving row. Doing this on every language switch
       re-measures the body, whose height changes with the translation. */
    if (shown) openPartner(shown);
  }

  function hideEmptySlots() {
    document.querySelectorAll('[data-svc-item]').forEach(function (item) {
      var holder = item.querySelector('[data-i18n]') || item;
      item.hidden = holder.textContent.trim() === '';
    });
    document.querySelectorAll('[data-svc-block]').forEach(function (block) {
      var items = block.querySelectorAll('[data-svc-item]');
      var shown = 0;
      items.forEach(function (i) { if (!i.hidden) shown++; });
      block.hidden = shown === 0;
    });
    document.querySelectorAll('.svc').forEach(function (card) {
      var blocks = card.querySelectorAll('[data-svc-block]');
      var shown = 0;
      blocks.forEach(function (b) { if (!b.hidden) shown++; });
      // Nothing to reveal? Don't pretend the card opens.
      card.classList.toggle('is-flat', shown === 0);
    });
  }

  /* Language menu: hover opens it via CSS. Click/tap and keyboard are
     handled here so it also works without a pointer. */
  document.querySelectorAll('[data-lang-menu]').forEach(function (menu) {
    var trigger = menu.querySelector('.lang-current');

    function close() {
      menu.removeAttribute('data-open');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    }

    if (trigger) {
      trigger.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = menu.hasAttribute('data-open');
        if (open) { close(); return; }
        menu.setAttribute('data-open', '');
        trigger.setAttribute('aria-expanded', 'true');
      });
    }

    menu.querySelectorAll('.lang-opt').forEach(function (opt) {
      opt.addEventListener('click', function () {
        applyLanguage(opt.dataset.lang);
        close();
        if (trigger) trigger.blur();
      });
    });

    document.addEventListener('click', function (e) {
      if (!menu.contains(e.target)) close();
    });
    menu.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { close(); if (trigger) trigger.focus(); }
    });
  });

  applyLanguage(readStoredLang());

  /* -------------------------------------------------------
     MOBILE DRAWER
  ------------------------------------------------------- */
  var toggle = document.getElementById('navToggle');
  var drawer = document.getElementById('mobileDrawer');

  function setDrawer(open) {
    if (!toggle || !drawer) return;
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
      drawer.hidden = false;
      requestAnimationFrame(function () { drawer.classList.add('is-open'); });
      document.body.style.overflow = 'hidden';
    } else {
      drawer.classList.remove('is-open');
      document.body.style.overflow = '';
      window.setTimeout(function () {
        if (toggle.getAttribute('aria-expanded') === 'false') drawer.hidden = true;
      }, reduceMotion ? 0 : 320);
    }
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      setDrawer(toggle.getAttribute('aria-expanded') !== 'true');
    });
  }
  if (drawer) {
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setDrawer(false); });
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setDrawer(false);
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) setDrawer(false);
  });

  /* -------------------------------------------------------
     SCROLL RAIL + HEADER STATE
  ------------------------------------------------------- */
  var rail = document.getElementById('scrollRail');
  var header = document.getElementById('siteHeader');

  /* Scroll events can fire many times per frame. This used to run the whole
     handler on each one, and it interleaved reads and writes — scrollHeight,
     then a style write, then getBoundingClientRect — so the browser was forced
     to re-lay-out mid-handler, repeatedly, while scrolling. Now it runs once
     per frame, and reads everything before it writes anything. */
  function onScroll() {
    // --- read ---
    var y = window.scrollY;
    var vh = window.innerHeight;
    var max = document.documentElement.scrollHeight - vh;
    var procRect = (processScroll && window.innerWidth > 900)
      ? processScroll.getBoundingClientRect()
      : null;

    // --- write ---
    var pct = max > 0 ? (y / max) * 100 : 0;
    if (rail) rail.style.width = pct + '%';
    if (header) header.classList.toggle('is-scrolled', y > 20);
    updateProcess(procRect, vh);
  }

  var scrollQueued = false;
  function queueScroll() {
    if (scrollQueued) return;
    scrollQueued = true;
    window.requestAnimationFrame(function () {
      scrollQueued = false;
      onScroll();
    });
  }

  /* -------------------------------------------------------
     PINNED PROCESS SEQUENCE
     A tall scroll container drives a sticky stage: the spine
     fills and each step lights as it comes into range.
  ------------------------------------------------------- */
  var processScroll = document.getElementById('processScroll');
  var spine = document.getElementById('processSpine');
  var counter = document.getElementById('processCounter');
  var steps = Array.prototype.slice.call(document.querySelectorAll('.process-step'));
  var nodes = Array.prototype.slice.call(document.querySelectorAll('.process-node'));

  /* The rect and viewport height are measured once by onScroll, alongside every
     other read, and handed in — so this never triggers a second layout pass. */
  function updateProcess(rect, vh) {
    if (!rect || !steps.length) return;

    var travel = rect.height - vh;
    if (travel <= 0) return;

    var progress = Math.min(Math.max(-rect.top / travel, 0), 1);
    var index = Math.min(Math.floor(progress * steps.length), steps.length - 1);

    if (spine) spine.style.height = (progress * 100) + '%';

    steps.forEach(function (step, i) { step.classList.toggle('is-active', i === index); });
    nodes.forEach(function (node, i) { node.classList.toggle('is-on', i <= index); });

    if (counter) counter.textContent = '0' + (index + 1);
  }

  window.addEventListener('scroll', queueScroll, { passive: true });
  window.addEventListener('resize', queueScroll);
  onScroll();

  /* -------------------------------------------------------
     REVEAL ON SCROLL
  ------------------------------------------------------- */
  var revealTargets = document.querySelectorAll('.reveal');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    // Stagger siblings inside each group so rows cascade.
    document.querySelectorAll('.services, .plans, .partners, .faq-list, .contact-inner')
      .forEach(function (group) {
        group.querySelectorAll(':scope > .reveal').forEach(function (el, i) {
          el.style.transitionDelay = (i * 0.09) + 's';
        });
      });

    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealTargets.forEach(function (el) { revealObserver.observe(el); });
  }

  /* -------------------------------------------------------
     TICKER — duplicate the run so the marquee loops seamlessly
  ------------------------------------------------------- */
  var tickerTrack = document.getElementById('tickerTrack');
  if (tickerTrack && !reduceMotion) {
    var run = tickerTrack.querySelector('.ticker-run');
    if (run) tickerTrack.appendChild(run.cloneNode(true));
  }

  /* -------------------------------------------------------
     COUNT UP
  ------------------------------------------------------- */
  function countUp(el) {
    var target = parseInt(el.dataset.countTo, 10) || 0;
    var suffix = el.dataset.countSuffix || '';
    var duration = 1400;
    var start = null;

    function frame(now) {
      if (start === null) start = now;
      var p = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  var counters = document.querySelectorAll('.count');
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        countUp(entry.target);
        countObserver.unobserve(entry.target);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { countObserver.observe(el); });
  }

  /* -------------------------------------------------------
     FAQ — animate open/close height
  ------------------------------------------------------- */
  document.querySelectorAll('.faq, .svc').forEach(function (item) {
    var body = item.querySelector('.faq-body, .svc-detail');
    if (!body) return;

    var summary = item.querySelector('summary');
    if (!summary) return;

    /* A card with nothing to reveal doesn't pretend to open. Tested per click,
       not once at startup: hideEmptySlots() recomputes is-flat on every language
       switch, so a card can be empty in one language and full in the next. */
    summary.addEventListener('click', function (e) {
      if (item.classList.contains('is-flat')) { e.preventDefault(); }
    });

    /* Reduced motion: hand <details> back to the browser and collapse nothing.
       The height/overflow pair below is what drives the open/close animation —
       setting it without the animation to undo it leaves an opened panel clipped
       to zero height, i.e. every FAQ answer silently invisible. */
    if (reduceMotion) return;

    body.style.overflow = 'hidden';
    if (!item.open) body.style.height = '0px';

    summary.addEventListener('click', function (e) {
      if (item.classList.contains('is-flat')) return;
      e.preventDefault();

      if (item.open) {
        body.style.height = body.scrollHeight + 'px';
        requestAnimationFrame(function () {
          body.style.transition = 'height 0.34s cubic-bezier(0.4,0,0.2,1)';
          body.style.height = '0px';
        });
        window.setTimeout(function () { item.open = false; }, 340);
      } else {
        item.open = true;
        body.style.height = '0px';
        requestAnimationFrame(function () {
          body.style.transition = 'height 0.34s cubic-bezier(0.4,0,0.2,1)';
          body.style.height = body.scrollHeight + 'px';
        });
        window.setTimeout(function () { body.style.height = 'auto'; }, 340);
      }
    });
  });

})();
