document.addEventListener('DOMContentLoaded', () => {
    const currentLang = localStorage.getItem('mbti_lang') || 'ru';
    if (!translations[currentLang]) {
        console.error(`Язык '${currentLang}' не найден! Загружаем 'ru'.`);
        currentLang = 'ru';
    }
    const langData = translations[currentLang];
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (langData[key]) {
            el.innerHTML = langData[key];
        }
    });
    document.querySelector('html').setAttribute('lang', currentLang);
    const personalityDatabase = langData.profileDatabase;
    const params = new URLSearchParams(window.location.search);
    let type = params.get('type'); 
    let profile;
    if (type && personalityDatabase[type]) {
        profile = personalityDatabase[type];
    } else {
        type = "ERROR";
        profile = {
            title: langData.errorTitle,
            group: langData.errorGroup,
            overview: langData.errorOverview,
            strengths: "<p>N/A</p>",
            relations: "<p>N/A</p>",
            career: "<p>N/A</p>"
        };
    }
    displayProfile(profile, type);
    setupTabs();
});

function displayProfile(profile, type) {
    const typeCodeEl = document.getElementById('type-code');
    typeCodeEl.textContent = type;
    typeCodeEl.setAttribute('data-text', type);
    
    document.getElementById('type-title').textContent = profile.title;
    document.getElementById('type-group').textContent = `[ Группа: ${profile.group} ]`;
    document.getElementById('overview').innerHTML = `<p>${profile.overview}</p>`;
    document.getElementById('strengths').innerHTML = profile.strengths;
    document.getElementById('relations').innerHTML = `<p>${profile.relations}</p>`;
    document.getElementById('career').innerHTML = `<p>${profile.career}</p>`;
}


function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            button.classList.add('active');
            const activePane = document.getElementById(tabId);
            if (activePane) {
                activePane.classList.add('active');
            }
        });
    });
}