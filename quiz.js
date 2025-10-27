// quiz.js

// --- 1. БАЗА ДАННЫХ ВОПРОСОВ ---
// Вы можете легко добавить сюда еще 50+ вопросов,
// просто скопировав и вставив структуру объекта.

const questions = [
    // --- E (Экстраверсия) vs I (Интроверсия) ---
    {
        text: "Вы чувствуете прилив сил после активного общения с большой группой людей.",
        dichotomy: 'E/I',
        // 'direction: 1' означает: "Согласен" -> + к E, "Не согласен" -> + к I
        direction: 1 
    },
    {
        text: "Вам часто нужно провести время в одиночестве, чтобы 'перезарядиться'.",
        dichotomy: 'E/I',
        // 'direction: -1' означает: "Согласен" -> + к I, "Не согласен" -> + к E
        direction: -1 
    },

    // --- S (Сенсорика) vs N (Интуиция) ---
    {
        text: "Вы больше доверяете своему практическому опыту, чем теоретическим концепциям.",
        dichotomy: 'S/N',
        direction: 1 // "Согласен" -> + к S
    },
    {
        text: "Вам нравится обсуждать абстрактные идеи и будущие возможности.",
        dichotomy: 'S/N',
        direction: -1 // "Согласен" -> + к N
    },

    // --- T (Логика) vs F (Этика) ---
    {
        text: "Принимая решение, вы ставите объективную истину выше чувств других людей.",
        dichotomy: 'T/F',
        direction: 1 // "Согласен" -> + к T
    },
    {
        text: "Для вас важнее поддерживать гармонию в коллективе, чем доказывать свою правоту.",
        dichotomy: 'T/F',
        direction: -1 // "Согласен" -> + к F
    },

    // --- J (Суждение) vs P (Восприятие) ---
    {
        text: "Вам комфортнее работать по четкому, заранее составленному плану.",
        dichotomy: 'J/P',
        direction: 1 // "Согласен" -> + к J
    },
    {
        text: "Вы предпочитаете оставлять дела 'открытыми' и легко адаптируетесь к изменениям.",
        dichotomy: 'J/P',
        direction: -1 // "Согласен" -> + к P
    }
    // ... ДОБАВЬТЕ БОЛЬШЕ ВОПРОСОВ ЗДЕСЬ ...
];


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