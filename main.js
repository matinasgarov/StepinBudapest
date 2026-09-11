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
      planAltPrice: 'without guardianship',
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
      partnersSub: 'Your child is not handed over to a company. They are met by named people who live in Budapest. Any of them can act as legal guardian, meet a student at the airport and handle what comes after — Firuzə works with the girls.',
      /* ---- PARTNERS ----
         Three real people. They do not have separate jobs: any of them can be
         the legal guardian, meet a student at the airport and handle what
         comes after, which is why every role line says the same thing. The one
         real distinction is that Firuze works with female students.

         Their studies, ages and backgrounds are their own; Aqsin's hobbies are
         invented at the owner's request and should be checked with him. Slot 04
         is empty and therefore does not render. Tracked in CLAUDE.md. */
      pt1name: 'Firuzə Osmanova',
      pt1role: 'Guardian & arrivals — female students',
      pt1line: 'I read International Relations at Azerbaijan University of Languages, and I am now taking my master\'s in Tourism Management at Budapest Metropolitan University. My work has been in tourism and customer service, so the first days — the airport, the flat, learning which tram goes where — are the part I am good at. I work with the girls: I can be their legal guardian, I meet them when they land, and I stay reachable long after.',
      pt2name: 'İbrahim Musayev',
      pt2role: 'Guardian & arrivals',
      pt2line: 'I am in my second year of Business Management and Administration at Corvinus University of Budapest. My family runs a translation agency, so I grew up around paperwork — preparing it, checking it, knowing which step has to come before which. I can act as legal guardian, I meet students at the airport, and a residence permit holds no surprises for me.',
      pt3name: 'Aqşin Sakif',
      pt3role: 'Guardian & arrivals',
      pt3line: 'I am 27 and doing my PhD at the Hungarian University of Agriculture and Life Sciences, which makes me the one who has lived in Budapest longest. I can act as legal guardian, I meet students at the airport, and I am the person to call when something goes wrong at an awkward hour. Outside the university I hike, play football on Sundays, and know where to find a decent Azerbaijani meal in this city.',
      pt4name: '', pt4role: '', pt4line: '',
      faqTitle: 'Questions parents ask',
      faq1q: 'When should I contact you?', faq1a: 'At least 2–4 weeks before your student\'s arrival date so we have time to arrange everything properly.',
      faq2q: 'Will someone be with my child when they land?', faq2a: 'Yes — we personally meet every student at Budapest Airport, no exceptions.',
      faq3q: 'How do I know my child is safe after arrival?', faq3a: 'We are reachable on WhatsApp at any time, and parents can contact us directly — you do not go through your child to reach us.',
      faq4q: 'Do you guarantee accommodation?', faq4a: 'We provide thoroughly vetted options and guide the final choice. We never recommend anything we haven\'t verified.',
      faq5q: 'Can parents contact you directly?', faq5a: 'Yes — we communicate with both students and parents throughout the entire process.',
      contactTitle: 'Ready to start? <span class="mark">Message us today.</span>',
      contactSub: 'WhatsApp is the fastest way to reach us. We typically respond within a few hours.',
      clinkCall: 'Call',
      langLabel: 'Language',
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
      ctaPrimary: 'Əlaqə', ctaSecondary: 'Nə edirik',
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
      planAltPrice: 'qəyyumluq olmadan',
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
      partnersSub: 'Övladınız bir şirkətə deyil, Budapeştdə yaşayan konkret insanlara təhvil verilir. Hər biri qanuni qəyyum ola, tələbəni hava limanında qarşılaya və sonrasını apara bilər — Firuzə qız tələbələrlə işləyir.',
      /* ---- PARTNERS ----
         Three real people. They do not have separate jobs: any of them can be
         the legal guardian, meet a student at the airport and handle what
         comes after, which is why every role line says the same thing. The one
         real distinction is that Firuze works with female students.

         Their studies, ages and backgrounds are their own; Aqsin's hobbies are
         invented at the owner's request and should be checked with him. Slot 04
         is empty and therefore does not render. Tracked in CLAUDE.md. */
      pt1name: 'Firuzə Osmanova',
      pt1role: 'Qəyyum və qarşılama — qız tələbələr',
      pt1line: 'Azərbaycan Dillər Universitetində beynəlxalq münasibətlər oxumuşam, hazırda Budapeşt Metropolitan Universitetində turizm menecmenti üzrə magistr təhsili alıram. İş təcrübəm turizm və müştəri xidmətləri sahəsindədir, ona görə ilk günlər — hava limanı, ev, hansı tramvayın hara getdiyini öyrənmək — mənim güclü tərəfimdir. Mən qız tələbələrlə işləyirəm: onların qanuni qəyyumu ola bilərəm, endikləri gün qarşılayıram və sonra da uzun müddət əlçatan qalıram.',
      pt2name: 'İbrahim Musayev',
      pt2role: 'Qəyyum və qarşılama',
      pt2line: 'Budapeşt Corvinus Universitetində Business Management and Administration ixtisası üzrə ikinci kursda oxuyuram. Ailəm tərcümə mərkəzi işlədir, ona görə sənədlərin hazırlanması və yoxlanılması ilə kiçik yaşlarımdan tanışam — hansı addımın hansından əvvəl gəldiyini bilirəm. Qanuni qəyyum ola bilərəm, tələbələri hava limanında qarşılayıram və yaşayış icazəsi mənim üçün sürpriz deyil.',
      pt3name: 'Aqşin Sakif',
      pt3role: 'Qəyyum və qarşılama',
      pt3line: '27 yaşım var, Hungarian University of Agriculture and Life Sciences-də doktorantura təhsili alıram — yəni Budapeştdə ən uzun yaşayan mənəm. Qanuni qəyyum ola bilərəm, tələbələri hava limanında qarşılayıram və nə vaxtsa işlər tərs gədersə, hətta gec saatda olsa belə, zəng ediləsi adamam. Universitetdən kənarda piyada gəzintiləri edirəm, bazar günləri futbol oynayıram və bu şəhərdə düzgün Azərbaycan yeməyinin harada olduğunu bilirəm.',
      pt4name: '', pt4role: '', pt4line: '',
      faqTitle: 'Valideynlərin soruşduğu suallar',
      faq1q: 'Nə vaxt sizinlə əlaqə saxlamalıyam?', faq1a: 'Tələbənizin gəliş tarixindən ən azı 2–4 həftə əvvəl ki, hər şeyi düzgün hazırlaya bilək.',
      faq2q: 'Uşağım endikdə yanında biri olacaqmı?', faq2a: 'Bəli — hər tələbəni Budapeşt hava limanında şəxsən qarşılayırıq, istisnasız.',
      faq3q: 'Gəlişdən sonra uşağımın təhlükəsiz olduğunu necə biləcəyəm?', faq3a: 'İstənilən vaxt WhatsApp-da əlçatanıq və valideynlər birbaşa bizimlə əlaqə saxlaya bilər — bizə çatmaq üçün övladınızdan keçməyə ehtiyac yoxdur.',
      faq4q: 'Yaşayışa zəmanət verirsiniz?', faq4a: 'Hərtərəfli yoxlanılmış variantlar təqdim edir və son seçimi rəhbərlik edirik. Yoxlamadığımız heç nəyi tövsiyə etmirik.',
      faq5q: 'Valideynlər birbaşa sizinlə əlaqə saxlaya bilər?', faq5a: 'Bəli — bütün proses boyu həm tələbələrlə, həm də valideynlərlə əlaqə saxlayırıq.',
      contactTitle: 'Başlamağa hazırsınız? <span class="mark">Bu gün yazın.</span>',
      contactSub: 'WhatsApp bizimlə əlaqə saxlamağın ən sürətli yoludur. Bir neçə saat içində cavab veririk.',
      clinkCall: 'Zəng',
      langLabel: 'Dil',
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
      planAltPrice: 'без опекунства',
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
      partnersSub: 'Вашего ребёнка встречает не компания, а конкретные люди, которые живут в Будапеште. Каждый из них может быть законным опекуном, встретить студента в аэропорту и вести его дальше — Фируза работает с девушками.',
      /* ---- PARTNERS ----
         Three real people. They do not have separate jobs: any of them can be
         the legal guardian, meet a student at the airport and handle what
         comes after, which is why every role line says the same thing. The one
         real distinction is that Firuze works with female students.

         Their studies, ages and backgrounds are their own; Aqsin's hobbies are
         invented at the owner's request and should be checked with him. Slot 04
         is empty and therefore does not render. Tracked in CLAUDE.md. */
      pt1name: 'Фируза Османова',
      pt1role: 'Опекун и встреча — девушки',
      pt1line: 'Я изучала международные отношения в Бакинском университете языков, сейчас учусь в магистратуре по туристическому менеджменту в Будапештском университете Метрополитен. Мой опыт — туризм и работа с людьми, поэтому первые дни — аэропорт, квартира, какой трамвай куда идёт — это то, что я умею. Я работаю с девушками: могу быть их законным опекуном, встречаю в день прилёта и остаюсь на связи долго после.',
      pt2name: 'Ибрагим Мусаев',
      pt2role: 'Опекун и встреча',
      pt2line: 'Я на втором курсе Университета Корвинуса в Будапеште, направление Business Management and Administration. Моя семья держит бюро переводов, так что с подготовкой и проверкой документов я знаком с детства. Могу быть законным опекуном, встречаю студентов в аэропорту, а вид на жительство не преподносит мне сюрпризов.',
      pt3name: 'Агшин Сакиф',
      pt3role: 'Опекун и встреча',
      pt3line: 'Мне 27, я в докторантуре Hungarian University of Agriculture and Life Sciences — значит, в Будапеште я живу дольше всех. Могу быть законным опекуном, встречаю студентов в аэропорту и я тот, кому звонят, когда что-то пошло не так в неудобный час. Вне университета хожу в походы, по воскресеньям играю в футбол и знаю, где в этом городе нормально кормят по-азербайджански.',
      pt4name: '', pt4role: '', pt4line: '',
      faqTitle: 'Вопросы родителей',
      faq1q: 'Когда мне следует с вами связаться?', faq1a: 'Как минимум за 2–4 недели до даты прибытия, чтобы у нас было время всё правильно организовать.',
      faq2q: 'Будет ли кто-то рядом с моим ребёнком по прилёте?', faq2a: 'Да — мы лично встречаем каждого студента в аэропорту Будапешта, без исключений.',
      faq3q: 'Как я узнаю, что мой ребёнок в безопасности после прибытия?', faq3a: 'Мы доступны в WhatsApp в любое время, и родители могут связаться с нами напрямую — вам не нужно узнавать всё через ребёнка.',
      faq4q: 'Вы гарантируете жильё?', faq4a: 'Мы предоставляем тщательно проверенные варианты и помогаем сделать финальный выбор. Мы никогда не рекомендуем то, чего не проверили.',
      faq5q: 'Могут ли родители напрямую с вами связаться?', faq5a: 'Да — мы общаемся как со студентами, так и с родителями на протяжении всего процесса.',
      contactTitle: 'Готовы начать? <span class="mark">Напишите нам сегодня.</span>',
      contactSub: 'WhatsApp — самый быстрый способ связаться с нами. Обычно мы отвечаем в течение нескольких часов.',
      clinkCall: 'Звонок',
      langLabel: 'Язык',
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
    buildTicker();

    try { localStorage.setItem(STORE_KEY, lang); } catch (e) { /* non-fatal */ }
  }

  /* -------------------------------------------------------
     BUILD YOUR OWN PACKAGE
     The ticks become the first WhatsApp message, so a parent never has to
     compose one. Rebuilt on every tick and on every language switch, so the
     message always matches what is on screen.
  ------------------------------------------------------- */
  var CUSTOM_WA = '36707201512';

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

  /* No measuring and no height animation. This used to set the body's height
     to a measured pixel value and transition it, which meant a full document
     layout on every frame of the open — the same reason services and FAQ gave
     it up. The story is shown or it is not; CSS fades it in.

     Everything that existed only to support the measurement went with it: the
     children-not-scrollHeight helper, the measure-all-then-write-all pass, and
     the stale-height bug where English kept Azerbaijani's spacing because
     scrollHeight returns the larger of a box and its content. A panel with no
     inline height cannot hold a stale one. */
  function openPartner(card) {
    document.querySelectorAll('[data-partner]').forEach(function (other) {
      var head = other.querySelector('[data-partner-toggle]');
      var on = other === card;
      other.classList.toggle('is-open', on);
      if (head) head.setAttribute('aria-expanded', on ? 'true' : 'false');
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
        // The drawer's copy of this control is the whole menu on a phone, so
        // choosing a language there means the reader is done with the drawer.
        if (menu.classList.contains('drawer-lang')) setDrawer(false);
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
     TICKER

     Repeat the authored run until the track is wider than the strip plus one
     run, then hand CSS the width of a single run to slide by. The animation
     ends on a copy identical to the one it started on, so there is no seam
     and no end to the line.

     One clone was not enough: half a track only loops while a single run is
     wider than the viewport, and at 1440px a run is about 1150px, so the end
     of the track came into view and the strip emptied out before repeating.
     An EVEN number of copies fixes that without giving up the -50%, and the
     percentage is what keeps the loop honest -- half of the track is exactly
     one half of the track however wide it turns out to be.

     Measuring a run and shifting by that many pixels does not survive here.
     JetBrains Mono has no "e" with an ogonek and no dotted capital I, so the
     Azerbaijani strip falls back per glyph -- and that fallback lands two
     frames after the text is set. A run measures 1123.7px when it is built
     and 1133.5px once it settles, and a shift that disagrees with the drawn
     width by ten pixels puts a visible jump in the line every cycle.
     (document.fonts.ready has already resolved by then, so waiting on it
     catches nothing.)

     Rebuilt on resize and on every language switch, because a run's width is
     the thing that changes in both cases -- Russian runs noticeably longer
     than English.
  ------------------------------------------------------- */
  var TICKER_SPEED = 34;  /* px per second; a run crossed 1440px in ~34s */
  /* Only the duration is computed from a measured width, and a few pixels of
     error there is half a percent of speed rather than a jump in the line. */

  function buildTicker() {
    var track = document.getElementById('tickerTrack');
    if (!track) return;
    var run = track.querySelector('.ticker-run');
    if (!run) return;

    while (track.children.length > 1) track.removeChild(track.lastChild);
    if (reduceMotion) return;

    var runW = run.getBoundingClientRect().width;
    var strip = track.parentNode.getBoundingClientRect().width;
    if (!runW) return;  /* not laid out yet - nothing to count against */

    /* Half the track has to cover the strip, or its right-hand end is on
       screen at the end of the cycle -- which is the gap this fixes. So each
       half needs enough runs to fill the strip, and the total is twice that.
       The width only decides the COUNT here; it is not used as a distance. */
    var half = Math.max(1, Math.ceil(strip / runW));
    for (var i = 0; i < half * 2 - 1; i++) {
      var copy = run.cloneNode(true);
      /* One reading of the facts is enough. */
      copy.setAttribute('aria-hidden', 'true');
      /* A copy shows the finished number and is not observed again: a count
         animating as it scrolls past mid-strip reads as a glitch. */
      copy.querySelectorAll('.count').forEach(function (el) {
        el.textContent = (el.dataset.countTo || '') + (el.dataset.countSuffix || '');
        el.classList.remove('count');
      });
      track.appendChild(copy);
    }

    track.style.setProperty('--ticker-shift', '50%');
    track.style.setProperty('--ticker-dur', (half * runW / TICKER_SPEED) + 's');
  }

  buildTicker();

  var tickerResize;
  window.addEventListener('resize', function () {
    clearTimeout(tickerResize);
    tickerResize = setTimeout(buildTicker, 200);
  });

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
  /* Services and FAQ are native <details> and nothing here animates them.

     They used to be driven from JS: cancel the native toggle, set `open`, read
     scrollHeight, then transition the panel's height from 0 over 0.34s. It was
     never smooth and could not be made smooth, because animating height in
     normal flow re-lays out every section below the row on every frame.
     Sampling rAF during an open showed the cost plainly — callbacks arriving
     4ms to 37ms apart and the panel lurching 39px in one step — while a
     pricing row, which has no layout animation, held a metronomic 10ms.

     There was also 85-100ms of dead air before anything moved: un-hiding the
     panel, forcing a synchronous layout to measure it, then waiting a frame
     for rAF, then another for the transition to start. A native open pays one
     layout and shows the panel on the next frame.

     What is left is the fade, in CSS, on a panel that is already at its full
     height. Opacity and transform only: nothing per-frame touches layout. */
  document.querySelectorAll('.faq, .svc').forEach(function (item) {
    var summary = item.querySelector('summary');
    if (!summary) return;

    /* A card with nothing to reveal doesn't pretend to open. Tested per click,
       not once at startup: hideEmptySlots() recomputes is-flat on every language
       switch, so a card can be empty in one language and full in the next. */
    summary.addEventListener('click', function (e) {
      if (item.classList.contains('is-flat')) { e.preventDefault(); }
    });
  });

})();
