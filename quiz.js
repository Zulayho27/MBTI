// quiz.js

// --- 1. БАЗА ДАННЫХ ВОПРОСОВ ---
// Вы можете легко добавить сюда еще 50+ вопросов,
// просто скопировав и вставив структуру объекта.

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
]

// --- 2. НАСТРОЙКИ КВИЗА ---
const answerLabels = [
    "Полностью не согласен",
    "Не согласен",
    "Нейтрально",
    "Согласен",
    "Полностью согласен"
];

// Значения, которые мы будем ПРИБАВЛЯТЬ к шкале
// "Полностью не согласен" -> -2
// "Полностью согласен" -> +2
const answerValues = [-2, -1, 0, 1, 2];


// --- 3. ПЕРЕМЕННЫЕ СОСТОЯНИЯ ---
let currentQuestionIndex = 0;
let userAnswers = {
    'E/I': 0,
    'S/N': 0,
    'T/F': 0,
    'J/P': 0
};

// --- 4. DOM-ЭЛЕМЕНТЫ (Ссылки на HTML) ---
const questionTextEl = document.getElementById('question-text');
const answerOptionsEl = document.getElementById('answer-options');
const questionCounterEl = document.getElementById('question-counter');
const progressBarEl = document.getElementById('progress-bar');


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

        // 6. Создаем новые кнопки
        answerLabels.forEach((label, index) => {
            const value = answerValues[index];
            const button = document.createElement('button');
            button.classList.add('answer-btn');
            button.textContent = label;
            button.setAttribute('data-value', value);

            // Добавляем обработчик клика
            button.addEventListener('click', () => handleAnswerClick(question, value));

            answerOptionsEl.appendChild(button);
        });

        // 7. Обновляем HUD
        questionCounterEl.textContent = `Вопрос ${currentQuestionIndex + 1} из ${questions.length}`;
        const progressPercent = ((currentQuestionIndex) / questions.length) * 100;
        progressBarEl.style.width = `${progressPercent}%`;

        // 8. Плавно "показываем" новый вопрос
        questionTextEl.classList.add('visible');

    }, 400); // Эта задержка должна совпадать с 'transition' в CSS
}

/**
 * Функция, которая срабатывает при клике на ответ
 */
function handleAnswerClick(question, value) {
    // 1. Рассчитываем балл
    // 'direction' (1 или -1) умножается на 'value' (-2 до 2)
    const score = value * question.direction;

    // 2. Записываем балл в нужную дихотомию
    userAnswers[question.dichotomy] += score;

    // 3. Переходим к следующему вопросу
    currentQuestionIndex++;

    // 4. Проверяем, не закончился ли тест
    if (currentQuestionIndex < questions.length) {
        renderQuestion(); // Показываем следующий вопрос
    } else {
        calculateResult(); // Считаем результат
    }
}

/**
 * Функция для подсчета и переадресации
 */
function calculateResult() {
    // 1. Показываем финальное состояние прогресс-бара
    progressBarEl.style.width = `100%`;
    questionTextEl.textContent = 'Анализ завершен. Генерация вашего профиля...';
    answerOptionsEl.innerHTML = ''; // Убираем кнопки

    // 2. Определяем 4 буквы
    const typeE_I = userAnswers['E/I'] > 0 ? 'E' : 'I';
    const typeS_N = userAnswers['S/N'] > 0 ? 'S' : 'N';
    const typeT_F = userAnswers['T/F'] > 0 ? 'T' : 'F';
    const typeJ_P = userAnswers['J/P'] > 0 ? 'J' : 'P';

    const finalType = `${typeE_I}${typeS_N}${typeT_F}${typeJ_P}`;

    // 3. Переадресация на страницу результатов
    // Мы передаем тип прямо в URL (GET-параметр)
    console.log(`Финальный тип: ${finalType}`);
    console.log('Результаты подсчета:', userAnswers);

    // Устанавливаем задержку, чтобы пользователь успел прочитать "Анализ завершен"
    setTimeout(() => {
        // !!! ВАЖНО: У нас пока нет страницы 'results.html',
        // !!! но мы уже делаем переадресацию на нее.
        window.location.href = `results.html?type=${finalType}`;
    }, 2000); // Ждем 2 секунды
}


// --- 6. ЗАПУСК КВИЗА ---
// Отображаем первый вопрос, как только страница загрузится
document.addEventListener('DOMContentLoaded', renderQuestion);