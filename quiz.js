
document.addEventListener('DOMContentLoaded', () => {
    const currentLang = localStorage.getItem('mbti_lang') || 'ru';
    const langData = translations[currentLang];
    const questions = langData.quizQuestions;
    const answerLabels = langData.quizLabels;
    const backButtonText = langData.backButton;
    const quizLoadingText = langData.quizLoading;
    const quizAlertText = langData.quizAlert;
    const quizTitleTemplate = langData.quizTitle;
    let currentQuestionIndex = 0;
    const answerHistory = new Array(questions.length).fill(null);

    const questionTextEl = document.getElementById('question-text');
    const answerOptionsEl = document.getElementById('answer-options');
    const questionCounterEl = document.getElementById('question-counter');
    const progressBarEl = document.getElementById('progress-bar');
    const backBtn = document.getElementById('back-btn');


    function renderQuestion() {
     
        const question = questions[currentQuestionIndex];
        questionTextEl.classList.remove('visible');
        setTimeout(() => {
            questionTextEl.textContent = question.text;
            answerOptionsEl.innerHTML = '';
            const storedValue = answerHistory[currentQuestionIndex];

            answerLabels.forEach((label, index) => {
                const value = answerValues[index];
                const button = document.createElement('button');
                button.classList.add('answer-btn');
                button.textContent = label;
                button.setAttribute('data-value', value);
                
                if (storedValue !== null && storedValue === value) {
                    button.classList.add('selected');
                }
                
                button.addEventListener('click', (e) => handleAnswerClick(e, value));
                answerOptionsEl.appendChild(button);
            });

            const title = quizTitleTemplate
                .replace('{current}', currentQuestionIndex + 1)
                .replace('{total}', questions.length);
            questionCounterEl.textContent = title;

            const answeredCount = answerHistory.filter(val => val !== null).length;
            const progressPercent = (answeredCount / questions.length) * 100;
            progressBarEl.style.width = `${progressPercent}%`;

       
            questionTextEl.classList.add('visible');


            if (backBtn) {
                backBtn.textContent = backButtonText;
                backBtn.disabled = (currentQuestionIndex === 0);
            }

        }, 400); 
    }

    function handleAnswerClick(e, value) {
        answerHistory[currentQuestionIndex] = value;
        
        const buttons = answerOptionsEl.querySelectorAll('.answer-btn');
        buttons.forEach(btn => btn.classList.remove('selected'));
        e.target.classList.add('selected');

        const answeredCount = answerHistory.filter(val => val !== null).length;
        const progressPercent = (answeredCount / questions.length) * 100;
        progressBarEl.style.width = `${progressPercent}%`;

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                renderQuestion(); 
            } else {
                if (answeredCount === questions.length) {
                    calculateResult();
                } else {
                    alert(quizAlertText);
                    currentQuestionIndex = answerHistory.indexOf(null);
                    renderQuestion();
                }
            }
        }, 250); 
    }
    function handleBackClick() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            renderQuestion();
        }
    }
    function calculateResult() {
        progressBarEl.style.width = `100%`;
        questionTextEl.textContent = quizLoadingText;
        answerOptionsEl.innerHTML = '';
        
        if (backBtn) {
            backBtn.style.display = 'none'; 
        }

        let finalScores = { 'E/I': 0, 'S/N': 0, 'T/F': 0, 'J/P': 0 };

        for (let i = 0; i < questions.length; i++) {
            const question = questions[i];
            const value = answerHistory[i];
            if (value !== null) { 
                const score = value * question.direction;
                finalScores[question.dichotomy] += score;
            }
        }

        const typeE_I = finalScores['E/I'] >= 0 ? 'E' : 'I'; 
        const typeS_N = finalScores['S/N'] >= 0 ? 'S' : 'N';
        const typeT_F = finalScores['T/F'] >= 0 ? 'T' : 'F';
        const typeJ_P = finalScores['J/P'] >= 0 ? 'J' : 'P'; 
        
        const finalType = `${typeE_I}${typeS_N}${typeT_F}${typeJ_P}`;

        console.log(`Финальный тип: ${finalType}`);
        console.log('Результаты подсчета:', finalScores);

        setTimeout(() => {
            window.location.href = `results.html?type=${finalType}`;
        }, 2000);
    }


    
    const answerValues = [-2, -1, 0, 1, 2];

    if (backBtn) {
        backBtn.addEventListener('click', handleBackClick);
    }
    renderQuestion();

});