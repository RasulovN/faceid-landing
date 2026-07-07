// FaceID Landing — 4 tilli lug'at. Barcha UI matni shu yerdan olinadi.
// Tillar: uz (lotin), uzc (kirill), ru (rus), en (ingliz).

export const LOCALES = ["uz", "uzc", "ru", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "uz";

export const LOCALE_META: Record<Locale, { label: string; short: string; flag: string; htmlLang: string }> = {
  uz: { label: "O‘zbekcha", short: "UZ", flag: "🇺🇿", htmlLang: "uz" },
  uzc: { label: "Ўзбекча", short: "ЎЗ", flag: "🇺🇿", htmlLang: "uz-Cyrl" },
  ru: { label: "Русский", short: "RU", flag: "🇷🇺", htmlLang: "ru" },
  en: { label: "English", short: "EN", flag: "🇬🇧", htmlLang: "en" },
};

const uz = {
  brand: "FaceID Davomat",
  nav: {
    features: "Imkoniyatlar",
    how: "Qanday ishlaydi",
    tariffs: "Tariflar",
    faq: "Savol-javob",
    contact: "Aloqa",
    quickNav: "Bo‘limlar bo‘ylab tezkor o‘tish",
  },
  actions: {
    login: "Kirish",
    startFree: "Bepul boshlash",
    tryFree: "Bepul sinab ko‘rish",
    demo: "Demo ko‘rish",
    openMenu: "Menyuni ochish",
    closeMenu: "Menyuni yopish",
    toggleTheme: "Mavzuni almashtirish",
    language: "Til",
    scrollTop: "Yuqoriga qaytish",
  },
  cookies: {
    title: "Cookie va analitika",
    message:
      "Saytni yaxshilash uchun anonim analitika ma'lumotlarini yig'amiz: taxminiy hudud (IP bo'yicha), qurilma turi, tashrif vaqti va davomiyligi. Shaxsingizni aniqlovchi ma'lumotlar yig'ilmaydi. Rozimisiz?",
    accept: "Roziman",
    decline: "Rad etish",
  },
  hero: {
    badge: "O‘zbekiston bizneslari uchun davomat tizimi",
    titleA: "Yuz orqali davomat —",
    titleHighlight: "aldab bo‘lmaydigan",
    titleB: "nazorat",
    subtitle:
      "Xodim ishga kelganda planshetga qaraydi — davomat bir soniyada qayd etiladi. Kechikish, jarima va bonuslar avtomatik hisoblanadi, oylik hisob-kitobi esa bir tugma bilan tayyor bo‘ladi.",
    trust1: "14 kun bepul sinov",
    trust2: "Karta shart emas",
    trust3: "5 daqiqada o‘rnatiladi",
    mockUrl: "panel.faceid.uz/davomat",
    mockToday: "Bugungi davomat",
    mockLive: "Jonli lenta",
    mockWeek: "Haftalik davomat",
    statPresent: "Bugun kelgan",
    statLate: "Kechikkan",
    statAbsent: "Kelmagan",
    statVacation: "Ta’tilda",
    statusCame: "Keldi",
    statusLate: "Kechikdi",
    menu: ["Boshqaruv", "Davomat", "Xodimlar", "Oylik", "Hisobotlar"],
    days: ["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"],
  },
  how: {
    eyebrow: "Qanday ishlaydi",
    title: "Uch qadamda ishga tushiring",
    subtitle:
      "Murakkab integratsiya yo‘q — birinchi kunning o‘zida davomat avtomatik yig‘ila boshlaydi.",
    steps: [
      {
        title: "Xodimlarni qo‘shing",
        description:
          "Panelga xodim ma’lumotlarini kiriting va bitta rasm yuklang. Tizim yuz belgilarini o‘zi qayta ishlaydi — qo‘shimcha sozlash talab qilinmaydi.",
      },
      {
        title: "Planshetni o‘rnating",
        description:
          "Oddiy Android planshetni kirish eshigi yoniga mahkamlang, kiosk ilovasini oching va paneldan olingan 6 xonali kod bilan bir marta ulang.",
      },
      {
        title: "Hisobotlarni oling",
        description:
          "Davomat real vaqtda yig‘iladi, kechikish va jarimalar avtomatik hisoblanadi. Oy oxirida oylik hisob-kitobi va Excel hisobotlar tayyor bo‘ladi.",
      },
    ],
  },
  features: {
    eyebrow: "Imkoniyatlar",
    title: "Davomatdan oylikkacha — bitta tizimda",
    subtitle:
      "FaceID Davomat shunchaki davomat emas: nazorat, intizom va hisob-kitobning to‘liq avtomatlashtirilgan zanjiri.",
    items: [
      { title: "FaceID kiosk", description: "Devordagi planshet xodimni bir soniyada taniydi. Kelish va ketish vaqti aniq qayd etiladi — qo‘lda ro‘yxat va kartalar tarixda qoladi." },
      { title: "Mobil geo check-in", description: "Tashqarida ishlaydigan xodimlar telefon orqali belgilanadi. GPS koordinata tekshiriladi — faqat ruxsat etilgan hududdan check-in qabul qilinadi." },
      { title: "Anti-spoofing (liveness)", description: "Tizim jonli yuzni rasmdan va videodan ajratadi. Boshqa xodim o‘rniga telefon ekranini ko‘rsatish urinishi darhol rad etiladi." },
      { title: "Avtomatik oylik hisob-kitobi", description: "Ishlangan soatlar, kechikishlar va qo‘shimcha smenalar asosida oylik avtomatik hisoblanadi. Buxgalteriyaga tayyor raqamlar boradi." },
      { title: "Jarima va bonus qoidalari", description: "Kechikish uchun jarima, o‘z vaqtida kelish uchun bonus — qoidalarni bir marta sozlaysiz, tizim har oyda o‘zi qo‘llaydi." },
      { title: "Real-time monitoring", description: "Kim keldi, kim kechikdi, kim yo‘q — barcha filiallar bo‘yicha jonli ko‘rinish. Muhim hodisalar haqida bildirishnoma olasiz." },
      { title: "Excel hisobotlar", description: "Davomat tabeli, oylik vedomosti va kechikishlar tahlili — istalgan davr uchun bir tugma bilan Excel formatida yuklab olinadi." },
      { title: "Multi-filial", description: "Barcha filiallarni yagona paneldan boshqaring. Har bir filial uchun alohida ish jadvali, qurilmalar va hisobotlar." },
    ],
  },
  showcase: {
    eyebrow: "Bir platforma — barcha rollar",
    title: "Har bir foydalanuvchi uchun alohida ishlangan",
    subtitle: "Administrator, xodim va planshet — hammasi bitta ekotizimda uzviy bog‘langan.",
    cta: "Batafsil ko‘rish",
    items: [
      { tag: "Web panel", title: "Boshqaruv paneli", description: "Xodimlar, filiallar, ish jadvallari, jarima-bonus qoidalari va oylik — barchasi yagona zamonaviy paneldan. Rolga qarab huquqlar.", features: ["Jonli davomat lentasi", "Avtomatik oylik va jarima", "Rolga asoslangan huquqlar"] },
      { tag: "Mobil ilova", title: "Xodim ilovasi", description: "Xodim geolokatsiya va selfie orqali check-in qiladi, davomat tarixini, oylik hisobini va bildirishnomalarini ko‘radi.", features: ["Selfie + GPS check-in", "Oylik va davomat tarixi", "Push bildirishnomalar"] },
      { tag: "Kiosk", title: "Planshet terminali", description: "Devordagi planshet — offline ishlaydigan, yuzni tanuvchi terminal. Internet uzilsa ham navbat saqlanadi.", features: ["1 soniyada yuzni tanish", "Offline navbat saqlash", "Kirish/chiqish yo‘nalishi"] },
    ],
    mock: { greeting: "Salom, Dilnoza", checkedIn: "Ishga keldingiz", office: "Bosh ofis", entry: "Kirish", welcome: "Xush kelibsiz", offlineReady: "Offline tayyor" },
  },
  stats: {
    title: "Raqamlarda samaradorlik",
    subtitle: "Qo‘lda tabel yuritishdan voz keching — tizim o‘zi hisoblaydi.",
    items: [
      { value: "< 1s", label: "Yuzni tanish vaqti" },
      { value: "99.6%", label: "Tanish aniqligi" },
      { value: "100%", label: "Offline ishlash" },
      { value: "5 daq", label: "O‘rnatish vaqti" },
    ],
  },
  tariffs: {
    eyebrow: "Tariflar",
    title: "Biznesingizga mos rejani tanlang",
    subtitle:
      "Barcha tariflar 14 kunlik bepul sinov bilan boshlanadi. Istalgan vaqtda tarifni almashtirish yoki bekor qilish mumkin.",
    popular: "Ommabop",
    perMonth: "so‘m/oy",
    note: "Narxlar QQSsiz ko‘rsatilgan. Yillik to‘lovda 2 oy sovg‘a qilinadi.",
    unlimitedBranches: "Cheksiz filial",
    branches: (n: number) => `${n} ta filial`,
    employees: (n: number) => `${n} ta xodim`,
    devices: (n: number) => `${n} ta qurilma`,
    history: (m: number) => `${m} oy tarix saqlanadi`,
  },
  faq: {
    eyebrow: "Savol-javob",
    title: "Ko‘p beriladigan savollar",
    subtitlePre: "Javob topolmadingizmi?",
    subtitleLink: "Biz bilan bog‘laning",
    subtitlePost: "— bir ish kuni ichida javob beramiz.",
    items: [
      { question: "Internet uzilib qolsa davomat yo‘qoladimi?", answer: "Yo‘q. Kiosk ilova oflayn rejimda ham ishlashda davom etadi: barcha qayd etilgan davomat qurilmaning o‘zida navbatda saqlanadi va internet tiklanishi bilan avtomatik ravishda serverga yuboriladi. Bitta yozuv ham yo‘qolmaydi." },
      { question: "Xodim boshqa odamning rasmini ko‘rsatsa nima bo‘ladi?", answer: "Tizimda anti-spoofing (liveness) himoyasi bor: kamera jonli yuzni qog‘ozdagi rasm, telefon ekrani yoki videodan ajrata oladi. Bunday urinish rad etiladi va xohishga ko‘ra administratorga bildirishnoma yuboriladi." },
      { question: "Qanday qurilma kerak bo‘ladi?", answer: "Maxsus qimmat uskuna shart emas — old kamerali oddiy Android planshet yetarli. Uni devorga mahkamlab, kiosk ilovani o‘rnatasiz va paneldan olingan 6 xonali kod bilan bir marta ulaysiz. O‘rnatish 5 daqiqadan oshmaydi." },
      { question: "Tarifni keyinchalik o‘zgartirsam bo‘ladimi?", answer: "Albatta. Kompaniya o‘ssa yuqoriroq tarifga bir zumda o‘tasiz — farq mutanosib hisoblanadi. Pastroq tarifga o‘tish keyingi to‘lov davridan boshlab kuchga kiradi. Hech qanday jarima yoki yashirin to‘lov yo‘q." },
      { question: "Xodimlarning ma’lumotlari qanchalik xavfsiz?", answer: "Yuz belgilari rasm sifatida emas, shifrlangan matematik vektor ko‘rinishida saqlanadi — undan asl rasmni tiklab bo‘lmaydi. Barcha ma’lumotlar shifrlangan kanal (HTTPS) orqali uzatiladi va faqat sizning kompaniyangiz ichida ko‘rinadi." },
      { question: "Sinov muddati qanday ishlaydi?", answer: "Ro‘yxatdan o‘tgach 14 kun davomida tizimning barcha imkoniyatlaridan bepul foydalanasiz — karta ma’lumotlari so‘ralmaydi. Muddat tugagach o‘zingizga mos tarifni tanlaysiz; to‘lov qilmasangiz ma’lumotlaringiz yana 30 kun saqlanib turadi." },
    ],
  },
  contact: {
    eyebrow: "Aloqa",
    title: "Savolingiz bormi? Yozing",
    subtitle:
      "Tizimni ko‘rsatib beramiz, tarif tanlashda yordam beramiz va barcha savollaringizga javob beramiz.",
    emailLabel: "Email",
    phoneLabel: "Telefon",
    addressLabel: "Manzil",
    hoursLabel: "Ish vaqti",
    addressValue: "Toshkent sh., Mirobod tumani, Amir Temur ko‘chasi 108",
    hoursValue: "Du–Ju: 09:00–18:00, Sh: 10:00–14:00",
  },
  form: {
    name: "Ismingiz",
    email: "Email",
    message: "Xabar",
    namePlaceholder: "Aziz Karimov",
    emailPlaceholder: "aziz@kompaniya.uz",
    messagePlaceholder: "Kompaniyamizda 30 ta xodim bor, qaysi tarif mos keladi?",
    submit: "Xabar yuborish",
    sending: "Yuborilmoqda...",
    successTitle: "Xabaringiz yuborildi!",
    successMessage: "Mutaxassislarimiz tez orada siz bilan bog‘lanadi.",
    errorSummary: "Iltimos, belgilangan maydonlarni to‘g‘rilang.",
    errNameRequired: "Ismingizni kiriting",
    errEmailRequired: "Email manzilingizni kiriting",
    errEmailInvalid: "Email manzil noto‘g‘ri formatda",
    errMessageRequired: "Xabar matnini yozing",
  },
  footer: {
    tagline:
      "Yuzni tanish orqali xodimlar davomati va oylik hisob-kitobini avtomatlashtiruvchi tizim. Aniq nazorat — kuchli intizom.",
    product: "Mahsulot",
    account: "Hisob",
    register: "Ro‘yxatdan o‘tish",
    rights: "© 2026 FaceID Davomat. Barcha huquqlar himoyalangan.",
    city: "Toshkent, O‘zbekiston",
  },
};

export type Dict = typeof uz;

const uzc: Dict = {
  brand: "FaceID Давомат",
  nav: { features: "Имкониятлар", how: "Қандай ишлайди", tariffs: "Тарифлар", faq: "Савол-жавоб", contact: "Алоқа", quickNav: "Бўлимлар бўйлаб тезкор ўтиш" },
  actions: {
    login: "Кириш", startFree: "Бепул бошлаш", tryFree: "Бепул синаб кўриш", demo: "Демо кўриш",
    openMenu: "Менюни очиш", closeMenu: "Менюни ёпиш", toggleTheme: "Мавзуни алмаштириш", language: "Тил",
    scrollTop: "Юқорига қайтиш",
  },
  cookies: {
    title: "Cookie ва аналитика",
    message:
      "Сайтни яхшилаш учун аноним аналитика маълумотларини йиғамиз: тахминий ҳудуд (IP бўйича), қурилма тури, ташриф вақти ва давомийлиги. Шахсингизни аниқловчи маълумотлар йиғилмайди. Розимисиз?",
    accept: "Розиман",
    decline: "Рад этиш",
  },
  hero: {
    badge: "Ўзбекистон бизнеслари учун давомат тизими",
    titleA: "Юз орқали давомат —", titleHighlight: "алдаб бўлмайдиган", titleB: "назорат",
    subtitle:
      "Ходим ишга келганда планшетга қарайди — давомат бир сонияда қайд этилади. Кечикиш, жарима ва бонуслар автоматик ҳисобланади, ойлик ҳисоб-китоби эса бир тугма билан тайёр бўлади.",
    trust1: "14 кун бепул синов", trust2: "Карта шарт эмас", trust3: "5 дақиқада ўрнатилади",
    mockUrl: "panel.faceid.uz/davomat", mockToday: "Бугунги давомат", mockLive: "Жонли лента", mockWeek: "Ҳафталик давомат",
    statPresent: "Бугун келган", statLate: "Кечиккан", statAbsent: "Келмаган", statVacation: "Таътилда",
    statusCame: "Келди", statusLate: "Кечикди",
    menu: ["Бошқарув", "Давомат", "Ходимлар", "Ойлик", "Ҳисоботлар"],
    days: ["Ду", "Се", "Ча", "Па", "Жу", "Ша", "Як"],
  },
  how: {
    eyebrow: "Қандай ишлайди", title: "Уч қадамда ишга туширинг",
    subtitle: "Мураккаб интеграция йўқ — биринчи куннинг ўзида давомат автоматик йиғила бошлайди.",
    steps: [
      { title: "Ходимларни қўшинг", description: "Панелга ходим маълумотларини киритинг ва битта расм юкланг. Тизим юз белгиларини ўзи қайта ишлайди — қўшимча созлаш талаб қилинмайди." },
      { title: "Планшетни ўрнатинг", description: "Оддий Android планшетни кириш эшиги ёнига маҳкамланг, киоск иловасини очинг ва панелдан олинган 6 хонали код билан бир марта уланг." },
      { title: "Ҳисоботларни олинг", description: "Давомат реал вақтда йиғилади, кечикиш ва жарималар автоматик ҳисобланади. Ой охирида ойлик ҳисоб-китоби ва Excel ҳисоботлар тайёр бўлади." },
    ],
  },
  features: {
    eyebrow: "Имкониятлар", title: "Давоматдан ойликкача — битта тизимда",
    subtitle: "FaceID Давомат шунчаки давомат эмас: назорат, интизом ва ҳисоб-китобнинг тўлиқ автоматлаштирилган занжири.",
    items: [
      { title: "FaceID киоск", description: "Девордаги планшет ходимни бир сонияда танийди. Келиш ва кетиш вақти аниқ қайд этилади — қўлда рўйхат ва карталар тарихда қолади." },
      { title: "Мобил гео чек-ин", description: "Ташқарида ишлайдиган ходимлар телефон орқали белгиланади. GPS координата текширилади — фақат рухсат этилган ҳудуддан чек-ин қабул қилинади." },
      { title: "Анти-спуфинг (liveness)", description: "Тизим жонли юзни расмдан ва видеодан ажратади. Бошқа ходим ўрнига телефон экранини кўрсатиш уриниши дарҳол рад этилади." },
      { title: "Автоматик ойлик ҳисоб-китоби", description: "Ишланган соатлар, кечикишлар ва қўшимча сменалар асосида ойлик автоматик ҳисобланади. Бухгалтерияга тайёр рақамлар боради." },
      { title: "Жарима ва бонус қоидалари", description: "Кечикиш учун жарима, ўз вақтида келиш учун бонус — қоидаларни бир марта созлайсиз, тизим ҳар ойда ўзи қўллайди." },
      { title: "Реал вақт мониторинги", description: "Ким келди, ким кечикди, ким йўқ — барча филиаллар бўйича жонли кўриниш. Муҳим ҳодисалар ҳақида билдиришнома оласиз." },
      { title: "Excel ҳисоботлар", description: "Давомат табели, ойлик ведомости ва кечикишлар таҳлили — исталган давр учун бир тугма билан Excel форматида юклаб олинади." },
      { title: "Мульти-филиал", description: "Барча филиалларни ягона панелдан бошқаринг. Ҳар бир филиал учун алоҳида иш жадвали, қурилмалар ва ҳисоботлар." },
    ],
  },
  showcase: {
    eyebrow: "Бир платформа — барча роллар", title: "Ҳар бир фойдаланувчи учун алоҳида ишланган",
    subtitle: "Администратор, ходим ва планшет — ҳаммаси битта экотизимда узвий боғланган.",
    cta: "Батафсил кўриш",
    items: [
      { tag: "Web панел", title: "Бошқарув панели", description: "Ходимлар, филиаллар, иш жадваллари, жарима-бонус қоидалари ва ойлик — барчаси ягона замонавий панелдан. Ролга қараб ҳуқуқлар.", features: ["Жонли давомат лентаси", "Автоматик ойлик ва жарима", "Ролга асосланган ҳуқуқлар"] },
      { tag: "Мобил илова", title: "Ходим иловаси", description: "Ходим геолокация ва селфи орқали чек-ин қилади, давомат тарихини, ойлик ҳисобини ва билдиришномаларини кўради.", features: ["Селфи + GPS чек-ин", "Ойлик ва давомат тарихи", "Пуш билдиришномалар"] },
      { tag: "Киоск", title: "Планшет терминали", description: "Девордаги планшет — offline ишлайдиган, юзни танувчи терминал. Интернет узилса ҳам навбат сақланади.", features: ["1 сонияда юзни таниш", "Offline навбат сақлаш", "Кириш/чиқиш йўналиши"] },
    ],
    mock: { greeting: "Салом, Дилноза", checkedIn: "Ишга келдингиз", office: "Бош офис", entry: "Кириш", welcome: "Хуш келибсиз", offlineReady: "Offline тайёр" },
  },
  stats: {
    title: "Рақамларда самарадорлик", subtitle: "Қўлда табел юритишдан воз кечинг — тизим ўзи ҳисоблайди.",
    items: [
      { value: "< 1s", label: "Юзни таниш вақти" },
      { value: "99.6%", label: "Таниш аниқлиги" },
      { value: "100%", label: "Offline ишлаш" },
      { value: "5 дақ", label: "Ўрнатиш вақти" },
    ],
  },
  tariffs: {
    eyebrow: "Тарифлар", title: "Бизнесингизга мос режани танланг",
    subtitle: "Барча тарифлар 14 кунлик бепул синов билан бошланади. Исталган вақтда тарифни алмаштириш ёки бекор қилиш мумкин.",
    popular: "Оммабоп", perMonth: "сўм/ой",
    note: "Нархлар ҚҚСсиз кўрсатилган. Йиллик тўловда 2 ой совға қилинади.",
    unlimitedBranches: "Чексиз филиал",
    branches: (n: number) => `${n} та филиал`,
    employees: (n: number) => `${n} та ходим`,
    devices: (n: number) => `${n} та қурилма`,
    history: (m: number) => `${m} ой тарих сақланади`,
  },
  faq: {
    eyebrow: "Савол-жавоб", title: "Кўп бериладиган саволлар",
    subtitlePre: "Жавоб тополмадингизми?", subtitleLink: "Биз билан боғланинг", subtitlePost: "— бир иш куни ичида жавоб берамиз.",
    items: [
      { question: "Интернет узилиб қолса давомат йўқоладими?", answer: "Йўқ. Киоск илова офлайн режимда ҳам ишлашда давом этади: барча қайд этилган давомат қурилманинг ўзида навбатда сақланади ва интернет тикланиши билан автоматик равишда серверга юборилади. Битта ёзув ҳам йўқолмайди." },
      { question: "Ходим бошқа одамнинг расмини кўрсатса нима бўлади?", answer: "Тизимда анти-спуфинг (liveness) ҳимояси бор: камера жонли юзни қоғоздаги расм, телефон экрани ёки видеодан ажрата олади. Бундай уриниш рад этилади ва хоҳишга кўра администраторга билдиришнома юборилади." },
      { question: "Қандай қурилма керак бўлади?", answer: "Махсус қиммат ускуна шарт эмас — олд камерали оддий Android планшет етарли. Уни деворга маҳкамлаб, киоск иловани ўрнатасиз ва панелдан олинган 6 хонали код билан бир марта улайсиз. Ўрнатиш 5 дақиқадан ошмайди." },
      { question: "Тарифни кейинчалик ўзгартирсам бўладими?", answer: "Албатта. Компания ўсса юқорироқ тарифга бир зумда ўтасиз — фарқ мутаносиб ҳисобланади. Пастроқ тарифга ўтиш кейинги тўлов давридан бошлаб кучга киради. Ҳеч қандай жарима ёки яширин тўлов йўқ." },
      { question: "Ходимларнинг маълумотлари қанчалик хавфсиз?", answer: "Юз белгилари расм сифатида эмас, шифрланган математик вектор кўринишида сақланади — ундан асл расмни тиклаб бўлмайди. Барча маълумотлар шифрланган канал (HTTPS) орқали узатилади ва фақат сизнинг компаниянгиз ичида кўринади." },
      { question: "Синов муддати қандай ишлайди?", answer: "Рўйхатдан ўтгач 14 кун давомида тизимнинг барча имкониятларидан бепул фойдаланасиз — карта маълумотлари сўралмайди. Муддат тугагач ўзингизга мос тарифни танлайсиз; тўлов қилмасангиз маълумотларингиз яна 30 кун сақланиб туради." },
    ],
  },
  contact: {
    eyebrow: "Алоқа", title: "Саволингиз борми? Ёзинг",
    subtitle: "Тизимни кўрсатиб берамиз, тариф танлашда ёрдам берамиз ва барча саволларингизга жавоб берамиз.",
    emailLabel: "Email", phoneLabel: "Телефон", addressLabel: "Манзил", hoursLabel: "Иш вақти",
    addressValue: "Тошкент ш., Миробод тумани, Амир Темур кўчаси 108",
    hoursValue: "Ду–Жу: 09:00–18:00, Ша: 10:00–14:00",
  },
  form: {
    name: "Исмингиз", email: "Email", message: "Хабар",
    namePlaceholder: "Азиз Каримов", emailPlaceholder: "aziz@kompaniya.uz",
    messagePlaceholder: "Компаниямизда 30 та ходим бор, қайси тариф мос келади?",
    submit: "Хабар юбориш", sending: "Юборилмоқда...",
    successTitle: "Хабарингиз юборилди!", successMessage: "Мутахассисларимиз тез орада сиз билан боғланади.",
    errorSummary: "Илтимос, белгиланган майдонларни тўғриланг.",
    errNameRequired: "Исмингизни киритинг", errEmailRequired: "Email манзилингизни киритинг",
    errEmailInvalid: "Email манзил нотўғри форматда", errMessageRequired: "Хабар матнини ёзинг",
  },
  footer: {
    tagline: "Юзни таниш орқали ходимлар давомати ва ойлик ҳисоб-китобини автоматлаштирувчи тизим. Аниқ назорат — кучли интизом.",
    product: "Маҳсулот", account: "Ҳисоб", register: "Рўйхатдан ўтиш",
    rights: "© 2026 FaceID Давомат. Барча ҳуқуқлар ҳимояланган.", city: "Тошкент, Ўзбекистон",
  },
};

const ru: Dict = {
  brand: "FaceID Учёт",
  nav: { features: "Возможности", how: "Как это работает", tariffs: "Тарифы", faq: "Вопросы", contact: "Контакты", quickNav: "Быстрый переход по разделам" },
  actions: {
    login: "Войти", startFree: "Начать бесплатно", tryFree: "Попробовать бесплатно", demo: "Смотреть демо",
    openMenu: "Открыть меню", closeMenu: "Закрыть меню", toggleTheme: "Сменить тему", language: "Язык",
    scrollTop: "Наверх",
  },
  cookies: {
    title: "Cookie и аналитика",
    message:
      "Мы собираем анонимную аналитику для улучшения сайта: примерный регион (по IP), тип устройства, время и длительность визита. Персональные данные не собираются. Вы согласны?",
    accept: "Согласен",
    decline: "Отклонить",
  },
  hero: {
    badge: "Система учёта посещаемости для бизнеса Узбекистана",
    titleA: "Учёт по лицу —", titleHighlight: "который не обмануть", titleB: "контроль",
    subtitle:
      "Сотрудник смотрит в планшет при приходе — посещаемость фиксируется за секунду. Опоздания, штрафы и бонусы считаются автоматически, а расчёт зарплаты готов в один клик.",
    trust1: "14 дней бесплатно", trust2: "Без карты", trust3: "Установка за 5 минут",
    mockUrl: "panel.faceid.uz/davomat", mockToday: "Посещаемость сегодня", mockLive: "Live-лента", mockWeek: "Посещаемость за неделю",
    statPresent: "Пришли", statLate: "Опоздали", statAbsent: "Отсутствуют", statVacation: "В отпуске",
    statusCame: "Пришёл", statusLate: "Опоздал",
    menu: ["Обзор", "Учёт", "Сотрудники", "Зарплата", "Отчёты"],
    days: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
  },
  how: {
    eyebrow: "Как это работает", title: "Запуск в три шага",
    subtitle: "Никакой сложной интеграции — учёт начинает собираться автоматически в первый же день.",
    steps: [
      { title: "Добавьте сотрудников", description: "Внесите данные сотрудников в панель и загрузите одно фото. Система сама обработает черты лица — дополнительная настройка не нужна." },
      { title: "Установите планшет", description: "Закрепите обычный Android-планшет у входа, откройте приложение-киоск и подключите его один раз по 6-значному коду из панели." },
      { title: "Получайте отчёты", description: "Посещаемость собирается в реальном времени, опоздания и штрафы считаются автоматически. В конце месяца готовы расчёт зарплаты и отчёты в Excel." },
    ],
  },
  features: {
    eyebrow: "Возможности", title: "От посещаемости до зарплаты — в одной системе",
    subtitle: "FaceID Учёт — это не просто отметки: полностью автоматизированная цепочка контроля, дисциплины и расчётов.",
    items: [
      { title: "FaceID киоск", description: "Настенный планшет узнаёт сотрудника за секунду. Время прихода и ухода фиксируется точно — бумажные журналы и карты в прошлом." },
      { title: "Мобильный гео чек-ин", description: "Сотрудники на выезде отмечаются через телефон. GPS-координаты проверяются — чек-ин принимается только из разрешённой зоны." },
      { title: "Анти-спуфинг (liveness)", description: "Система отличает живое лицо от фото и видео. Попытка показать экран телефона вместо другого сотрудника сразу отклоняется." },
      { title: "Автоматический расчёт зарплаты", description: "Зарплата считается автоматически по отработанным часам, опозданиям и доп. сменам. В бухгалтерию идут готовые цифры." },
      { title: "Правила штрафов и бонусов", description: "Штраф за опоздание, бонус за пунктуальность — настраиваете правила один раз, система применяет их каждый месяц." },
      { title: "Мониторинг в реальном времени", description: "Кто пришёл, кто опоздал, кого нет — живая картина по всем филиалам. Уведомления о важных событиях." },
      { title: "Отчёты в Excel", description: "Табель, ведомость по зарплате и анализ опозданий — за любой период в один клик в формате Excel." },
      { title: "Мульти-филиал", description: "Управляйте всеми филиалами из одной панели. Для каждого — свой график, устройства и отчёты." },
    ],
  },
  showcase: {
    eyebrow: "Одна платформа — все роли", title: "Продумано для каждого пользователя",
    subtitle: "Администратор, сотрудник и планшет — всё связано в единой экосистеме.",
    cta: "Подробнее",
    items: [
      { tag: "Web-панель", title: "Панель управления", description: "Сотрудники, филиалы, графики, правила штрафов-бонусов и зарплата — всё в одной современной панели. Права по ролям.", features: ["Лента посещений в реальном времени", "Автоматическая зарплата и штрафы", "Права на основе ролей"] },
      { tag: "Моб. приложение", title: "Приложение сотрудника", description: "Сотрудник отмечается по геолокации и селфи, видит историю посещений, расчёт зарплаты и уведомления.", features: ["Чек-ин по селфи и GPS", "История зарплаты и посещений", "Push-уведомления"] },
      { tag: "Киоск", title: "Планшет-терминал", description: "Настенный планшет — терминал распознавания лиц, работающий офлайн. Даже при обрыве интернета очередь сохраняется.", features: ["Распознавание лица за 1с", "Офлайн-очередь", "Направление вход/выход"] },
    ],
    mock: { greeting: "Привет, Дилноза", checkedIn: "Вы отметились", office: "Главный офис", entry: "Вход", welcome: "Добро пожаловать", offlineReady: "Офлайн готов" },
  },
  stats: {
    title: "Эффективность в цифрах", subtitle: "Откажитесь от ручного табеля — система считает сама.",
    items: [
      { value: "< 1с", label: "Время распознавания" },
      { value: "99.6%", label: "Точность распознавания" },
      { value: "100%", label: "Работа офлайн" },
      { value: "5 мин", label: "Время установки" },
    ],
  },
  tariffs: {
    eyebrow: "Тарифы", title: "Выберите план под ваш бизнес",
    subtitle: "Все тарифы начинаются с 14-дневного бесплатного периода. Сменить или отменить тариф можно в любой момент.",
    popular: "Популярный", perMonth: "сум/мес",
    note: "Цены указаны без НДС. При годовой оплате 2 месяца в подарок.",
    unlimitedBranches: "Безлимит филиалов",
    branches: (n: number) => `${n} филиала(ов)`,
    employees: (n: number) => `${n} сотрудников`,
    devices: (n: number) => `${n} устройства(в)`,
    history: (m: number) => `Хранение истории ${m} мес.`,
  },
  faq: {
    eyebrow: "Вопросы", title: "Частые вопросы",
    subtitlePre: "Не нашли ответ?", subtitleLink: "Свяжитесь с нами", subtitlePost: "— ответим в течение рабочего дня.",
    items: [
      { question: "Пропадёт ли учёт при обрыве интернета?", answer: "Нет. Приложение-киоск продолжает работать офлайн: все отметки хранятся в очереди на самом устройстве и автоматически отправляются на сервер при восстановлении связи. Ни одна запись не теряется." },
      { question: "Что если сотрудник покажет чужое фото?", answer: "В системе есть защита анти-спуфинг (liveness): камера отличает живое лицо от бумажного фото, экрана телефона или видео. Такая попытка отклоняется, а администратору при желании приходит уведомление." },
      { question: "Какое устройство понадобится?", answer: "Дорогое спецоборудование не нужно — достаточно обычного Android-планшета с фронтальной камерой. Закрепляете на стене, ставите приложение-киоск и подключаете один раз по 6-значному коду. Установка не более 5 минут." },
      { question: "Можно ли поменять тариф позже?", answer: "Конечно. При росте компании мгновенно переходите на тариф выше — разница считается пропорционально. Переход на тариф ниже вступает в силу со следующего платёжного периода. Никаких штрафов и скрытых платежей." },
      { question: "Насколько защищены данные сотрудников?", answer: "Черты лица хранятся не как фото, а как зашифрованный математический вектор — восстановить исходное изображение из него нельзя. Все данные передаются по защищённому каналу (HTTPS) и видны только внутри вашей компании." },
      { question: "Как работает пробный период?", answer: "После регистрации 14 дней вы пользуетесь всеми возможностями бесплатно — данные карты не запрашиваются. По окончании выбираете подходящий тариф; если не оплатите, данные хранятся ещё 30 дней." },
    ],
  },
  contact: {
    eyebrow: "Контакты", title: "Есть вопрос? Напишите",
    subtitle: "Покажем систему, поможем выбрать тариф и ответим на все ваши вопросы.",
    emailLabel: "Email", phoneLabel: "Телефон", addressLabel: "Адрес", hoursLabel: "Часы работы",
    addressValue: "г. Ташкент, Мирабадский р-н, ул. Амира Темура 108",
    hoursValue: "Пн–Пт: 09:00–18:00, Сб: 10:00–14:00",
  },
  form: {
    name: "Ваше имя", email: "Email", message: "Сообщение",
    namePlaceholder: "Азиз Каримов", emailPlaceholder: "aziz@kompaniya.uz",
    messagePlaceholder: "У нас 30 сотрудников, какой тариф подойдёт?",
    submit: "Отправить сообщение", sending: "Отправка...",
    successTitle: "Сообщение отправлено!", successMessage: "Наши специалисты скоро свяжутся с вами.",
    errorSummary: "Пожалуйста, исправьте отмеченные поля.",
    errNameRequired: "Введите ваше имя", errEmailRequired: "Введите email",
    errEmailInvalid: "Неверный формат email", errMessageRequired: "Напишите текст сообщения",
  },
  footer: {
    tagline: "Система автоматизации учёта посещаемости и расчёта зарплаты по распознаванию лиц. Точный контроль — крепкая дисциплина.",
    product: "Продукт", account: "Аккаунт", register: "Регистрация",
    rights: "© 2026 FaceID Учёт. Все права защищены.", city: "Ташкент, Узбекистан",
  },
};

const en: Dict = {
  brand: "FaceID Attendance",
  nav: { features: "Features", how: "How it works", tariffs: "Pricing", faq: "FAQ", contact: "Contact", quickNav: "Quick section navigation" },
  actions: {
    login: "Log in", startFree: "Start free", tryFree: "Try for free", demo: "Watch demo",
    openMenu: "Open menu", closeMenu: "Close menu", toggleTheme: "Toggle theme", language: "Language",
    scrollTop: "Back to top",
  },
  cookies: {
    title: "Cookies & analytics",
    message:
      "We collect anonymous analytics to improve the site: approximate region (by IP), device type, visit time and duration. No personally identifying data is collected. Do you agree?",
    accept: "Accept",
    decline: "Decline",
  },
  hero: {
    badge: "Attendance system for businesses in Uzbekistan",
    titleA: "Face-based attendance —", titleHighlight: "impossible to fake", titleB: "control",
    subtitle:
      "Employees look at the tablet on arrival — attendance is logged in a second. Lateness, penalties and bonuses are calculated automatically, and payroll is ready in one click.",
    trust1: "14-day free trial", trust2: "No card required", trust3: "Set up in 5 minutes",
    mockUrl: "panel.faceid.uz/attendance", mockToday: "Today’s attendance", mockLive: "Live feed", mockWeek: "Weekly attendance",
    statPresent: "Present", statLate: "Late", statAbsent: "Absent", statVacation: "On leave",
    statusCame: "In", statusLate: "Late",
    menu: ["Overview", "Attendance", "Employees", "Payroll", "Reports"],
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  how: {
    eyebrow: "How it works", title: "Go live in three steps",
    subtitle: "No complex integration — attendance starts collecting automatically on day one.",
    steps: [
      { title: "Add employees", description: "Enter employee details in the panel and upload one photo. The system processes facial features on its own — no extra setup needed." },
      { title: "Set up the tablet", description: "Mount a regular Android tablet by the entrance, open the kiosk app and pair it once with the 6-digit code from the panel." },
      { title: "Get reports", description: "Attendance is collected in real time, lateness and penalties are calculated automatically. At month-end, payroll and Excel reports are ready." },
    ],
  },
  features: {
    eyebrow: "Features", title: "From attendance to payroll — in one system",
    subtitle: "FaceID Attendance is more than check-ins: a fully automated chain of control, discipline and calculations.",
    items: [
      { title: "FaceID kiosk", description: "The wall-mounted tablet recognizes an employee in a second. Arrival and departure are logged precisely — paper logs and cards are history." },
      { title: "Mobile geo check-in", description: "Field employees check in via phone. GPS coordinates are verified — check-in is accepted only from the allowed area." },
      { title: "Anti-spoofing (liveness)", description: "The system tells a live face from a photo or video. Showing a phone screen instead of another employee is rejected instantly." },
      { title: "Automatic payroll", description: "Payroll is calculated automatically from hours worked, lateness and extra shifts. Accounting gets ready-to-use figures." },
      { title: "Penalty & bonus rules", description: "Penalty for lateness, bonus for punctuality — set the rules once and the system applies them every month." },
      { title: "Real-time monitoring", description: "Who arrived, who was late, who’s absent — a live view across all branches. Get notified of important events." },
      { title: "Excel reports", description: "Timesheet, payroll sheet and lateness analysis — for any period in one click, in Excel format." },
      { title: "Multi-branch", description: "Manage all branches from a single panel. Separate schedule, devices and reports for each branch." },
    ],
  },
  showcase: {
    eyebrow: "One platform — every role", title: "Crafted for every kind of user",
    subtitle: "Admin, employee and tablet — all connected in a single ecosystem.",
    cta: "Explore more",
    items: [
      { tag: "Web panel", title: "Admin dashboard", description: "Employees, branches, schedules, penalty-bonus rules and payroll — all from one modern panel. Role-based permissions.", features: ["Real-time attendance feed", "Automatic payroll & penalties", "Role-based permissions"] },
      { tag: "Mobile app", title: "Employee app", description: "Employees check in via geolocation and selfie, and see attendance history, payroll and notifications.", features: ["Selfie + GPS check-in", "Payroll & attendance history", "Push notifications"] },
      { tag: "Kiosk", title: "Tablet terminal", description: "A wall-mounted tablet — an offline-capable face-recognition terminal. The queue is kept even if the internet drops.", features: ["1-second face recognition", "Offline queue buffering", "Entry/exit direction"] },
    ],
    mock: { greeting: "Hi, Dilnoza", checkedIn: "You're checked in", office: "Head office", entry: "Entry", welcome: "Welcome", offlineReady: "Offline ready" },
  },
  stats: {
    title: "Efficiency in numbers", subtitle: "Drop the manual timesheet — the system does the math.",
    items: [
      { value: "< 1s", label: "Recognition time" },
      { value: "99.6%", label: "Recognition accuracy" },
      { value: "100%", label: "Works offline" },
      { value: "5 min", label: "Setup time" },
    ],
  },
  tariffs: {
    eyebrow: "Pricing", title: "Pick the plan for your business",
    subtitle: "Every plan starts with a 14-day free trial. Change or cancel your plan anytime.",
    popular: "Popular", perMonth: "UZS/mo",
    note: "Prices shown excl. VAT. Pay yearly and get 2 months free.",
    unlimitedBranches: "Unlimited branches",
    branches: (n: number) => `${n} branch${n === 1 ? "" : "es"}`,
    employees: (n: number) => `${n} employees`,
    devices: (n: number) => `${n} device${n === 1 ? "" : "s"}`,
    history: (m: number) => `${m} months history retention`,
  },
  faq: {
    eyebrow: "FAQ", title: "Frequently asked questions",
    subtitlePre: "Didn’t find an answer?", subtitleLink: "Contact us", subtitlePost: "— we reply within one business day.",
    items: [
      { question: "Will attendance be lost if the internet drops?", answer: "No. The kiosk app keeps working offline: every logged entry is queued on the device itself and sent to the server automatically once the connection is back. Not a single record is lost." },
      { question: "What if an employee shows someone else’s photo?", answer: "The system has anti-spoofing (liveness) protection: the camera tells a live face from a paper photo, phone screen or video. Such attempts are rejected, and the admin can be notified if desired." },
      { question: "What device do I need?", answer: "No expensive special hardware — a regular Android tablet with a front camera is enough. Mount it on the wall, install the kiosk app and pair it once with a 6-digit code. Setup takes under 5 minutes." },
      { question: "Can I change my plan later?", answer: "Absolutely. As your company grows you upgrade instantly — the difference is prorated. Downgrades take effect from the next billing period. No penalties or hidden fees." },
      { question: "How secure is employee data?", answer: "Facial features are stored not as photos but as an encrypted mathematical vector — the original image can’t be reconstructed from it. All data travels over an encrypted channel (HTTPS) and is visible only within your company." },
      { question: "How does the trial work?", answer: "After signing up you use all features free for 14 days — no card details required. When it ends you pick a suitable plan; if you don’t pay, your data is kept for another 30 days." },
    ],
  },
  contact: {
    eyebrow: "Contact", title: "Have a question? Write to us",
    subtitle: "We’ll demo the system, help you choose a plan and answer all your questions.",
    emailLabel: "Email", phoneLabel: "Phone", addressLabel: "Address", hoursLabel: "Working hours",
    addressValue: "108 Amir Temur St., Mirobod district, Tashkent",
    hoursValue: "Mon–Fri: 09:00–18:00, Sat: 10:00–14:00",
  },
  form: {
    name: "Your name", email: "Email", message: "Message",
    namePlaceholder: "Aziz Karimov", emailPlaceholder: "aziz@company.uz",
    messagePlaceholder: "We have 30 employees, which plan fits us?",
    submit: "Send message", sending: "Sending...",
    successTitle: "Message sent!", successMessage: "Our specialists will get in touch with you shortly.",
    errorSummary: "Please fix the highlighted fields.",
    errNameRequired: "Enter your name", errEmailRequired: "Enter your email",
    errEmailInvalid: "Invalid email format", errMessageRequired: "Write your message",
  },
  footer: {
    tagline: "A system that automates employee attendance and payroll through face recognition. Precise control — strong discipline.",
    product: "Product", account: "Account", register: "Sign up",
    rights: "© 2026 FaceID Attendance. All rights reserved.", city: "Tashkent, Uzbekistan",
  },
};

export const dictionaries: Record<Locale, Dict> = { uz, uzc, ru, en };
