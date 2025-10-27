document.addEventListener('DOMContentLoaded', () => {
    const langButtons = {
        ru: document.getElementById('lang-ru'),
        en: document.getElementById('lang-en'),
        uz: document.getElementById('lang-uz')
    };

    const translatableElements = document.querySelectorAll('[data-key]');
    const htmlTag = document.querySelector('html');

    const renderTranslations = (lang) => {
        if (!translations[lang]) {
            console.error(`Язык '${lang}' не найден в словаре.`);
            return;
        }
        translatableElements.forEach(el => {
            const key = el.dataset.key;
            const translation = translations[lang][key];
            if (translation) {
                el.innerHTML = translation;

                if (key === 'heroTitle') {
                    el.setAttribute('data-text', translation);
                }
            } else {
                console.warn(`Ключ '${key}' не найден для языка '${lang}'.`);
            }
        });

        htmlTag.setAttribute('lang', lang);
        Object.values(langButtons).forEach(btn => {
            if (btn) btn.classList.remove('active');
        });
        if (langButtons[lang]) {
            langButtons[lang].classList.add('active');
        }
    };
    const setLanguage = (lang) => {
        localStorage.setItem('mbti_lang', lang);
        renderTranslations(lang);
    };
    const savedLang = localStorage.getItem('mbti_lang') || 'ru';

    if (langButtons.ru) langButtons.ru.addEventListener('click', () => setLanguage('ru'));
    if (langButtons.en) langButtons.en.addEventListener('click', () => setLanguage('en'));
    if (langButtons.uz) langButtons.uz.addEventListener('click', () => setLanguage('uz'));
    renderTranslations(savedLang);

    VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.5
    });
    const revealElements = document.querySelectorAll('.reveal');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const intersectionCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(intersectionCallback, observerOptions);
    revealElements.forEach(el => {
        observer.observe(el);
    });

    console.log("Кибер-Призма v5.0 (i18n - UZ) инициализирована.");
});