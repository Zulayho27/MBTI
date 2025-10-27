// quiz.js (v4.1 - Безопасная версия с кнопкой "Назад")

// --- 1. БАЗА ДАННЫХ ВОПРОСОВ ---
// (40 вопросов, как мы и договорились)
const questions = [
    // --- БЛОК 1 ---
    {
        text: "Вы чувствуете прилив сил после активного общения с большой группой людей.",
        dichotomy: 'E/I',
        direction: 1 // +E
    },
    {
        text: "Вы больше доверяете своему практическому опыту, чем теоретическим концепциям.",
        dichotomy: 'S/N',
        direction: 1 // +S
    },
    {
        text: "Принимая решение, вы ставите объективную истину и логику выше чувств других людей.",
        dichotomy: 'T/F',
        direction: 1 // +T
    },
    {
        text: "Вам комфортнее работать по четкому, заранее составленному плану.",
        dichotomy: 'J/P',
        direction: 1 // +J
    },
    
    // --- БЛОК 2 ---
    {
        text: "Вам часто нужно провести время в одиночестве, чтобы 'перезарядиться'.",
        dichotomy: 'E/I',
        direction: -1 // +I
    },
    {
        text: "Вам нравится обсуждать абстрактные идеи, философию и будущие возможности.",
        dichotomy: 'S/N',
        direction: -1 // +N
    },
    {
        text: "Для вас важнее поддерживать гармонию в коллективе, чем доказывать свою правоту.",
        dichotomy: 'T/F',
        direction: -1 // +F
    },
    {
        text: "Вы предпочитаете оставлять дела 'открытыми' и легко адаптируетесь к спонтанным изменениям.",
        dichotomy: 'J/P',
        direction: -1 // +P
    },

    // --- БЛОК 3 ---
    {
        text: "На вечеринках вы склонны сами инициировать знакомства с новыми людьми.",
        dichotomy: 'E/I',
        direction: 1 // +E
    },
    {
        text: "Вы предпочитаете говорить о конкретных, реальных событиях, а не о гипотезах.",
        dichotomy: 'S/N',
        direction: 1 // +S
    },
    {
        text: "Вам легко оставаться объективным и беспристрастным в конфликтной ситуации.",
        dichotomy: 'T/F',
        direction: 1 // +T
    },
    {
        text: "Вы получаете удовольствие от составления списков дел (to-do lists) и их вычеркивания.",
        dichotomy: 'J/P',
        direction: 1 // +J
    },

    // --- БЛОК 4 ---
    {
        text: "Вы предпочитаете общаться с 1-2 близкими друзьями, чем с большой компанией.",
        dichotomy: 'E/I',
        direction: -1 // +I
    },
    {
        text: "Вы часто задумываетесь о скрытых смыслах и 'общей картине', а не о деталях.",
        dichotomy: 'S/N',
        direction: -1 // +N
    },
    {
        text: "Вы часто принимаете решения, основываясь на своих личных ценностях и сочувствии к другим.",
        dichotomy: 'T/F',
        direction: -1 // +F
    },
    {
        text: "Вам нравится, когда в отпуске у вас есть гибкий график, а не строгий маршрут.",
        dichotomy: 'J/P',
        direction: -1 // +P
    },

    // --- БЛОК 5 ---
    {
        text: "Вам легче 'думать вслух', обсуждая идеи, чем обдумывать их про себя.",
        dichotomy: 'E/I',
        direction: 1 // +E
    },
    {
        text: "При чтении инструкций вы предпочитаете следовать им пошагово и досконально.",
        dichotomy: 'S/N',
        direction: 1 // +S
    },
    {
        text: "Вас больше ранит, если вас назовут 'нелогичным', чем если вас назовут 'бесчувственным'.",
        dichotomy: 'T/F',
        direction: 1 // +T
    },
    {
        text: "Ваш рабочий стол, как правило, очень организован и упорядочен.",
        dichotomy: 'J/P',
        direction: 1 // +J
    },

    // --- БЛОК 6 ---
    {
        text: "Вы часто чувствуете себя опустошенным после длительного социального взаимодействия.",
        dichotomy: 'E/I',
        direction: -1 // +I
    },
    {
        text: "Вы склонны доверять своей интуиции, даже если она противоречит фактам.",
        dichotomy: 'S/N',
        direction: -1 // +N
    },
    {
        text: "Вам трудно сказать 'нет', потому что вы боитесь разочаровать людей.",
        dichotomy: 'T/F',
        direction: -1 // +F
    },
    {
        text: "Вы часто откладываете принятие решений, чтобы 'посмотреть, как пойдет'.",
        dichotomy: 'J/P',
        direction: -1 // +P
    },

    // --- БЛОК 7 ---
    {
        text: "Вы предпочитаете быть в центре внимания на мероприятии.",
        dichotomy: 'E/I',
        direction: 1 // +E
    },
    {
        text: "Вы цените реализм и практичность больше, чем воображение и креативность.",
        dichotomy: 'S/N',
        direction: 1 // +S
    },
    {
        text: "Вы считаете, что эффективность важнее, чем сотрудничество.",
        dichotomy: 'T/F',
        direction: 1 // +T
    },
    {
        text: "Вы чувствуете стресс, если у вас нет четкого плана на день.",
        dichotomy: 'J/P',
        direction: 1 // +J
    },

    // --- БЛОК 8 ---
    {
        text: "Вам комфортнее слушать, чем говорить, в групповой беседе.",
        dichotomy: 'E/I',
        direction: -1 // +I
    },
    {
        text: "Вы часто витаете в облаках, думая о будущем.",
        dichotomy: 'S/N',
        direction: -1 // +N
    },
    {
        text: "Вы стремитесь утешить человека, который плачет, прежде чем пытаться решить его проблему.",
        dichotomy: 'T/F',
        direction: -1 // +F
    },
    {
        text: "Вы любите начинать новые проекты, но вам скучно их заканчивать.",
        dichotomy: 'J/P',
        direction: -1 // +P
    },

    // --- БЛОК 9 ---
    {
        text: "Вы легко заводите разговор с незнакомцами.",
        dichotomy: 'E/I',
        direction: 1 // +E
    },
    {
        text: "Вы предпочитаете работать с конкретными данными, а не с абстрактными теориями.",
        dichotomy: 'S/N',
        direction: 1 // +S
    },
    {
        text: "Вы гордитесь своей способностью оставаться логичным в любой ситуации.",
        dichotomy: 'T/F',
        direction: 1 // +T
    },
    {
        text: "Вам нравится, когда все дела решены и 'закрыты' как можно скорее.",
        dichotomy: 'J/P',
        direction: 1 // +J
    },

    // --- БЛОК 10 ---
    {
        text: "Вы обычно держите свое мнение при себе, если оно не совпадает с мнением большинства.",
        dichotomy: 'E/I',
        direction: -1 // +I
    },
    {
        text: "Вас больше интересуют символы и метафоры, чем буквальные значения.",
        dichotomy: 'S/N',
        direction: -1 // +N
    },
    {
        text: "Вы считаете, что при принятии решений важно учитывать чувства каждого.",
        dichotomy: 'T/F',
        direction: -1 // +F
    },
    {
        text: "Вы часто принимаете спонтанные решения 'по настроению'.",
        dichotomy: 'J/P',
        direction: -1 // +P
    }
];


// --- 2. НАСТРОЙКИ КВИЗА ---
const answerLabels = [
    "Полностью не согласен",
    "Не согласен",
    "Нейтрально",
    "Согласен",
    "Полностью согласен"
];
const answerValues = [-2, -1, 0, 1, 2];


// --- 3. ПЕРЕМЕННЫЕ СОСТОЯНИЯ ---
let currentQuestionIndex = 0;
// Создаем "лог" ответов.
const answerHistory = new Array(questions.length).fill(null);


// --- 4. DOM-ЭЛЕМЕНТЫ (Ссылки на HTML) ---
const questionTextEl = document.getElementById('question-text');
const answerOptionsEl = document.getElementById('answer-options');
const questionCounterEl = document.getElementById('question-counter');
const progressBarEl = document.getElementById('progress-bar');
const backBtn = document.getElementById('back-btn'); // Кнопка "Назад"


// --- 5. ОСНОВНЫЕ ФУНКЦИИ ---

/**
 * Функция для отображения текущего вопроса и кнопок
 */
function renderQuestion() {
    // 1. Получаем текущий объект вопроса
    const question = questions[currentQuestionIndex];

    // 2. Плавно "прячем" старый вопрос
    questionTextEl.classList.remove('visible');

    // 3. Ждем окончания анимации (400мс)
    setTimeout(() => {
        // 4. Обновляем текст
        questionTextEl.textContent = question.text;
        
        // 5. Очищаем старые кнопки
        answerOptionsEl.innerHTML = '';

        // 6. Создаем новые кнопки (с учетом истории)
        const storedValue = answerHistory[currentQuestionIndex]; // Получаем сохраненный ответ

        answerLabels.forEach((label, index) => {
            const value = answerValues[index];
            const button = document.createElement('button');
            button.classList.add('answer-btn');
            button.textContent = label;
            button.setAttribute('data-value', value);
            
            // Проверяем, был ли этот ответ выбран ранее
            if (storedValue !== null && storedValue === value) {
                button.classList.add('selected');
            }
            
            // Добавляем обработчик клика
            button.addEventListener('click', (e) => handleAnswerClick(e, value));
            
            answerOptionsEl.appendChild(button);
        });

        // 7. Обновляем HUD (Прогресс-бар считает ОТВЕТЫ)
        questionCounterEl.textContent = `Вопрос ${currentQuestionIndex + 1} из ${questions.length}`;
        const answeredCount = answerHistory.filter(val => val !== null).length;
        const progressPercent = (answeredCount / questions.length) * 100;
        progressBarEl.style.width = `${progressPercent}%`;

        // 8. Плавно "показываем" новый вопрос
        questionTextEl.classList.add('visible');

        // 9. ⭐️ ИСПРАВЛЕНИЕ 1: Добавлена проверка, существует ли backBtn
        if (backBtn) {
            if (currentQuestionIndex === 0) {
                backBtn.disabled = true;
            } else {
                backBtn.disabled = false;
            }
        }

    }, 400); // Эта задержка должна совпадать с 'transition' в CSS
}

/**
 * Функция, которая срабатывает при клике на ответ
 * (Параметр 'question' удален, так как он не использовался)
 */
function handleAnswerClick(e, value) {
    // 1. Записываем ответ в наш "лог"
    answerHistory[currentQuestionIndex] = value;
    
    // 2. Визуально "выделяем" нажатую кнопку
    const buttons = answerOptionsEl.querySelectorAll('.answer-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    e.target.classList.add('selected');

    // 3. Обновляем прогресс-бар немедленно
    const answeredCount = answerHistory.filter(val => val !== null).length;
    const progressPercent = (answeredCount / questions.length) * 100;
    progressBarEl.style.width = `${progressPercent}%`;

    // 4. Авто-переход к следующему вопросу (с задержкой)
    setTimeout(() => {
        currentQuestionIndex++;
        // 5. Проверяем, не закончился ли тест
        if (currentQuestionIndex < questions.length) {
            renderQuestion(); // Показываем следующий вопрос
        } else {
            // Если ответили на последний вопрос, проверяем, все ли отвечено
            if (answeredCount === questions.length) {
                calculateResult();
            } else {
                // Если есть пропуски (из-за кнопки "Назад")
                alert("Вы пропустили один или несколько вопросов. Мы вернем вас к первому пропущенному.");
                currentQuestionIndex = answerHistory.indexOf(null);
                renderQuestion();
            }
        }
    }, 250); // Небольшая задержка, чтобы юзер увидел нажатие
}

/**
 * Новая функция для кнопки "Назад"
 */
function handleBackClick() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

/**
 * Функция для подсчета и переадресации
 */
function calculateResult() {
    // 1. Показываем финальное состояние прогресс-бара и сообщение
    progressBarEl.style.width = `100%`;
    questionTextEl.textContent = 'Анализ завершен. Генерация вашего профиля...';
    answerOptionsEl.innerHTML = ''; // Убираем кнопки
    
    // 2. ⭐️ ИСПРАВЛЕНИЕ 2: Добавлена проверка, существует ли backBtn
    if (backBtn) {
        backBtn.style.display = 'none'; // Прячем кнопку "Назад"
    }

    // 3. Инициализируем объект для финальных очков
    let finalScores = {
        'E/I': 0,
        'S/N': 0,
        'T/F': 0,
        'J/P': 0
    };

    // 4. Проходим по всему "логу" ответов и считаем очки
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        const value = answerHistory[i];

        // Мы уже проверили, что все отвечено, но 'value' может быть 0
        if (value !== null) { 
            const score = value * question.direction;
            finalScores[question.dichotomy] += score;
        }
    }

    // 5. Определяем 4 буквы
    const typeE_I = finalScores['E/I'] >= 0 ? 'E' : 'I'; 
    const typeS_N = finalScores['S/N'] >= 0 ? 'S' : 'N';
    const typeT_F = finalScores['T/F'] >= 0 ? 'T' : 'F';
    const typeJ_P = finalScores['J/P'] >= 0 ? 'J' : 'P'; 
    
    const finalType = `${typeE_I}${typeS_N}${typeT_F}${typeJ_P}`;

    // 6. Переадресация на страницу результатов
    console.log(`Финальный тип: ${finalType}`);
    console.log('Результаты подсчета:', finalScores);

    setTimeout(() => {
        window.location.href = `results.html?type=${finalType}`;
    }, 2000); // Ждем 2 секунды
}


// --- 6. ЗАПУСК КВИЗА ---
// Отображаем первый вопрос, как только страница загрузится
document.addEventListener('DOMContentLoaded', () => {
    // Проверяем, что кнопка "Назад" существует, прежде чем вешать обработчик
    if (backBtn) {
        backBtn.addEventListener('click', handleBackClick);
    }
    renderQuestion();
});