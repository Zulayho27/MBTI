const translations = {
    "en": {
        // Hero Секция
        "heroTitle": "Decode Your Mind",
        "heroSubtitle": "MBTI isn't just a test. It's the key to understanding your inner 'code' and operating system.",

        // Intro Секция
        "introTitle": "<span class='neon-highlight'>What is MBTI?</span>", // 👈 ИСПРАВЛЕНО
        "introP1": "The Myers-Briggs Type Indicator (MBTI) is a widely known psychological model based on the work of Carl Gustav Jung. Developed by Isabel Myers and Katharine Briggs, this system does not 'diagnose' or measure 'skills'.",
        "introP2": "Its main goal is to identify your innate **preferences**. Just as you are naturally right- or left-handed, your brain preferscertain ways of gathering information and making decisions.",
        "introP3": "Key takeaway: <strong>There are no 'better' or 'worse' types.</strong> Each of the 16 personality 'architectures' has unique strengths and potential 'blind spots'. Understanding your type is a tool for self-development and improving communication.",

        // Карточки Дихотомий
        "card1Title": "<span class='type-e'>Extraversion (E)</span> / <span class='type-i'>Introversion (I)</span>", // 👈 ИСПРАВЛЕНО
        "card1Label": "Key Question: Source of Energy",
        "card1TextE": "<b>(E) Extroverts</b> draw energy from the outer world. They 'recharge' through social interaction, activity, and discussion. They often 'think out loud'.",
        "card1TextI": "<b>(I) Introverts</b> replenish energy from within. They 'recharge' in solitude, through reflection and deep thought. They prefer to think first, then speak.",

        "card2Title": "<span class='type-s'>Sensing (S)</span> / <span class='type-n'>Intuition (N)</span>", // 👈 ИСПРАВЛЕНО
        "card2Label": "Key Question: Gathering Information",
        "card2TextS": "<b>(S) Sensors</b> trust what they can see, hear, and touch. They are focused on facts, details, practical experience, and the present moment.",
        "card2TextN": "<b>(N) Intuitives</b> trust their 'sixth sense' and the big picture. They are focused on patterns, possibilities, future implications, and hidden meanings.",

        "card3Title": "<span class='type-t'>Thinking (T)</span> / <span class='type-f'>Feeling (F)</span>", // 👈 ИСПРАВЛЕНО
        "card3Label": "Key Question: Making Decisions",
        "card3TextT": "<b>(T) Thinkers</b> make decisions based on objective analysis, fairness, and logical consequences. They value truth over tact.",
        "card3TextF": "<b>(F) Feelers</b> base their choices on personal values, empathy, and how the decision will affect people. They value harmony and tact.",

        "card4Title": "<span class='type-j'>Judging (J)</span> / <span class='type-p'>Perceiving (P)</span>", // 👈 ИСПРАВЛЕНО
        "card4Label": "Key Question: Lifestyle",
        "card4TextJ": "<b>(J) Judgers</b> prefer a structured and planned world. They like order, predictability, and enjoy 'closing' tasks.",
        "card4TextP": "<b>(P) Perceivers</b> prefer a flexible and spontaneous approach. They enjoy adapting to new circumstances, exploring options, and keeping tasks 'open'.",

        // CTA Секция
        "ctaTitle": "Ready for analysis?",
        "ctaText": "Find out your 4-letter type and get a full report.",
        "ctaButton": "Start Scanning",

        "quizTitle": "Question {current} of {total}",
        "backButton": "← Back",
        "quizLoading": "Analysis complete. Generating your profile...",
        "quizAlert": "You missed one or more questions. We will return you to the first missed question.",

        "quizLabels": [
            "Strongly Disagree",
            "Disagree",
            "Neutral",
            "Agree",
            "Strongly Agree"
        ],
        "quizQuestions": [
            // БЛОК 1
            { text: "You feel energized after active social interaction with a large group.", dichotomy: 'E/I', direction: 1 },
            { text: "You trust your practical experience more than theoretical concepts.", dichotomy: 'S/N', direction: 1 },
            { text: "When making a decision, you prioritize objective truth and logic over people's feelings.", dichotomy: 'T/F', direction: 1 },
            { text: "You feel more comfortable working with a clear, pre-defined plan.", dichotomy: 'J/P', direction: 1 },
            // БЛОК 2
            { text: "You often need to spend time alone to 'recharge'.", dichotomy: 'E/I', direction: -1 },
            { text: "You enjoy discussing abstract ideas, philosophy, and future possibilities.", dichotomy: 'S/N', direction: -1 },
            { text: "It's more important for you to maintain harmony in a group than to prove you're right.", dichotomy: 'T/F', direction: -1 },
            { text: "You prefer to keep your options open and easily adapt to spontaneous changes.", dichotomy: 'J/P', direction: -1 },
            // БЛОК 3
            { text: "At parties, you tend to initiate conversations with new people.", dichotomy: 'E/I', direction: 1 },
            { text: "You prefer to talk about concrete, real-life events rather than hypotheticals.", dichotomy: 'S/N', direction: 1 },
            { text: "You find it easy to stay objective and impartial in a conflict situation.", dichotomy: 'T/F', direction: 1 },
            { text: "You get satisfaction from making to-do lists and checking items off.", dichotomy: 'J/P', direction: 1 },
            // БЛОК 4
            { text: "You prefer interacting with 1-2 close friends over a large company.", dichotomy: 'E/I', direction: -1 },
            { text: "You often think about hidden meanings and the 'big picture' rather than details.", dichotomy: 'S/N', direction: -1 },
            { text: "You often make decisions based on your personal values and empathy for others.", dichotomy: 'T/F', direction: -1 },
            { text: "On vacation, you prefer having a flexible schedule rather than a strict itinerary.", dichotomy: 'J/P', direction: -1 },
            // БЛОК 5
            { text: "You find it easier to 'think out loud' than to process ideas internally.", dichotomy: 'E/I', direction: 1 },
            { text: "When following instructions, you prefer to follow them step-by-step precisely.", dichotomy: 'S/N', direction: 1 },
            { text: "It would hurt you more to be called 'illogical' than to be called 'insensitive'.", dichotomy: 'T/F', direction: 1 },
            { text: "Your workspace is typically very organized and tidy.", dichotomy: 'J/P', direction: 1 },
            // БЛОК 6
            { text: "You often feel drained after prolonged social interaction.", dichotomy: 'E/I', direction: -1 },
            { text: "You tend to trust your intuition, even if it contradicts the facts.", dichotomy: 'S/N', direction: -1 },
            { text: "You find it difficult to say 'no' because you are afraid of disappointing people.", dichotomy: 'T/F', direction: -1 },
            { text: "You often delay making decisions just to 'see what happens'.", dichotomy: 'J/P', direction: -1 },
            // БЛОК 7
            { text: "You prefer to be the center of attention at an event.", dichotomy: 'E/I', direction: 1 },
            { text: "You value realism and practicality more than imagination and creativity.", dichotomy: 'S/N', direction: 1 },
            { text: "You believe that efficiency is more important than cooperation.", dichotomy: 'T/F', direction: 1 },
            { text: "You feel stressed if you don't have a clear plan for the day.", dichotomy: 'J/P', direction: 1 },
            // БЛОК 8
            { text: "You are more comfortable listening than talking in a group conversation.", dichotomy: 'E/I', direction: -1 },
            { text: "You often find yourself daydreaming about the future.", dichotomy: 'S/N', direction: -1 },
            { text: "You first try to comfort someone who is upset before trying to solve their problem.", dichotomy: 'T/F', direction: -1 },
            { text: "You love starting new projects but get bored finishing them.", dichotomy: 'J/P', direction: -1 },
            // БЛОК 9
            { text: "You easily strike up conversations with strangers.", dichotomy: 'E/I', direction: 1 },
            { text: "You prefer working with concrete data rather than abstract theories.", dichotomy: 'S/N', direction: 1 },
            { text: "You pride yourself on your ability to stay logical in any situation.", dichotomy: 'T/F', direction: 1 },
            { text: "You like to have tasks resolved and 'closed' as soon as possible.", dichotomy: 'J/P', direction: 1 },
            // БЛОК 10
            { text: "You usually keep your opinions to yourself if they don't align with the majority.", dichotomy: 'E/I', direction: -1 },
            { text: "You are more interested in symbols and metaphors than literal meanings.", dichotomy: 'S/N', direction: -1 },
            { text: "You believe it's important to consider everyone's feelings when making a decision.", dichotomy: 'T/F', direction: -1 },
            { text: "You often make spontaneous decisions 'on a whim'.", dichotomy: 'J/P', direction: -1 }
        ],
        // === НОВЫЙ БЛОК: СТРАНИЦА РЕЗУЛЬТАТОВ (АНГЛИЙСКИЙ) ===
        "resultsTab1": "Overview",
        "resultsTab2": "Strengths & Weaknesses",
        "resultsTab3": "Relationships",
        "resultsTab4": "Career Paths",
        "resultsRetryButton": "Take the Scan Again",
        "errorTitle": "Type Not Found",
        "errorGroup": "System Error",
        "errorOverview": "An error occurred while reading your profile. You may have accessed this page directly without taking the test. Please go back and complete the scan.",

        // --- АНГЛИЙСКАЯ БАЗА ДАННЫХ ПРОФИЛЕЙ ---
        "profileDatabase": {
            "INTJ": {
                "title": "The Architect", "group": "Analysts",
                "overview": "INTJ, 'The Architect', is an analytical problem-solver. You live in a world of deep ideas and strategic planning. You value intelligence, competence, and independence above all. For you, any challenge is a chess game to be analyzed and won. You may seem detached or cold, but it's only because your mind is constantly working, analyzing everything around you for patterns.",
                "strengths": "<h3>Strengths:</h3><ul><li>Rationality and logic</li><li>Strategic, 10-step-ahead vision</li><li>Decisiveness and self-confidence</li><li>High independence and autonomy</li><li>Insatiable thirst for knowledge</li></ul><h3>Weaknesses:</h3><ul><li>Overly critical (of self and others)</li><li>Difficulty understanding and expressing emotions</li><li>Tendency towards arrogance</li><li>Impatient with inefficiency and irrationality</li><li>Stubbornness</li></ul>",
                "relations": "In relationships, INTJs seek an intellectual 'soulmate'. They aren't masters of compliments or romantic gestures, but express love through loyalty and actively solving their partner's problems. They need a lot of personal space and value honesty and directness. They need a partner who respects their independence and is ready for deep, meaningful conversations about the future.",
                "career": "You thrive in careers that demand innovation, strategic planning, and system analysis. Routine is your enemy. Seek roles where you can work autonomously and solve complex, non-trivial problems. <br><br><b>Ideal Paths:</b> Scientist, software architect, systems analyst, lawyer, university professor, financial strategist, engineer."
            },
            "INTP": {
                "title": "The Logician", "group": "Analysts",
                "overview": "INTP, 'The Logician', is an inventive thinker with an unquenchable thirst for knowledge. Your mind is a 'factory' of ideas and theories. You analyze systems, look for logical inconsistencies, and love complex problems. You seem quiet and pensive because you spend most of your time in your own 'mind palace', exploring new concepts.",
                "strengths": "<h3>Strengths:</h3><ul><li>Outstanding analytical mind</li><li>Objectivity and precision</li><li>Rich imagination and creativity</li><li>Open-minded to new ideas</li><li>Honesty</li></ul><h3>Weaknesses:</h3><ul><li>Absent-minded and 'in the clouds'</li><li>Tendency towards self-isolation</li><li>Intolerant of rules and bureaucracy</li><li>Difficulty with routine tasks</li><li>Insensitive to others' emotions</li></ul>",
                "relations": "INTPs seek intellectual connection above all. They may find it hard to express emotions but are deeply loyal. They need a partner who respects their need for solitude to think and is willing to discuss the strangest and most abstract theories. They value directness and dislike emotional 'drama'.",
                "career": "You need a job that challenges your intellect and gives you freedom to explore. You hate rigid structures and micromanagement. You are made to take systems apart, understand them, and improve them.<br><br><b>Ideal Paths:</b> Philosopher, professor, software developer, systems analyst, research scientist, mathematician, economist."
            },
            "ENTJ": {
                "title": "The Commander", "group": "Analysts",
                "overview": "ENTJ, 'The Commander', is a natural-born leader. You possess charisma, determination, and willpower. You see inefficiency as a challenge to be immediately overcome. You view the world as a system to be optimized. You always think strategically and are not afraid to take responsibility for making tough decisions.",
                "strengths": "<h3>Strengths:</h3><ul><li>Natural efficiency and organization</li><li>Unshakable willpower</li><li>Charisma and self-confidence</li><li>Strategic thinking</li><li>Ability to inspire others</li></ul><h3>Weaknesses:</h3><ul><li>Intolerant of mistakes (their own and others')</li><li>Stubbornness and dominance</li><li>Can seem emotionally cold</li><li>Difficulty relaxing</li><li>Tendency to 'steamroll' others</li></ul>",
                "relations": "ENTJs take the lead in relationships. They seek growth and development with a partner and value competence and intelligence. They don't like 'beating around the bush' and prefer to solve problems directly. They need a partner who is as ambitious as they are, or at least fully supports their ambitions.",
                "career": "You are built for leadership. You need a role where you can build strategies, manage teams, and achieve measurable, ambitious goals. You are not afraid of power and responsibility.<br><br><b>Ideal Paths:</b> C-Level Executive, entrepreneur, lawyer, management consultant, politician, military officer."
            },
            "ENTP": {
                "title": "The Debater", "group": "Analysts",
                "overview": "ENTP, 'The Debater', is a charming and quick-witted provocateur. Your mind loves intellectual challenges and 'juggling' ideas. You can't resist an argument, seeing it not as conflict, but as a fun game and a way to find the truth. You grasp complex concepts quickly and see the world as a web of interconnected ideas.",
                "strengths": "<h3>Strengths:</h3><ul><li>Lightning-fast wit</li><li>Originality and ingenuity</li><li>Charisma and energy</li><li>Excellent at brainstorming</li><li>Ability to see a problem from 10 different angles</li></ul><h3>Weaknesses:</h3><ul><li>Extreme intolerance for routine</li><li>Prone to arguing 'for the sake of it'</li><li>Poor follow-through (starts 10 things, finishes 0)</li><li>Insensitive to others' feelings in a debate</li><li>Easily distracted</li></ul>",
                "relations": "ENTPs are charming, witty, and enthusiastic. They get bored easily, so they need a partner who is ready for intellectual games and adventures. They value wit and dislike being controlled. A relationship with them is always an adventure, full of ideas and debates.",
                "career": "You need a dynamic job where no two days are the same. You thrive in roles requiring constant problem-solving and idea generation. You are not built for monotonous 'by the book' work.<br><br><b>Ideal Paths:</b> Entrepreneur, lawyer, psychologist, political analyst, actor, creative director, venture capitalist."
            },
            "INFJ": {
                "title": "The Advocate", "group": "Diplomats",
                "overview": "INFJ, 'The Advocate', is the rarest personality type. You are a quiet yet very determined idealist. You have a deep sense of empathy and an intuitive understanding of people and situations. You strive not just to live, but to have a mission, to make the world better. You possess a unique combination of dreaminess and determination.",
                "strengths": "<h3>Strengths:</h3><ul><li>Deep insight and intuition</li><li>True altruism and empathy</li><li>Decisiveness and passion for ideals</li><li>Creativity and an inspiring nature</li></ul><h3>Weaknesses:</h3><ul><li>Highly sensitive to criticism and conflict</li><li>Perfectionism</li><li>Prone to rapid burnout</li><li>Hard to truly get to know (very private)</li><li>Unrealistic expectations</li></ul>",
                "relations": "INFJs seek a deep, almost spiritual connection. They crave a 'soulmate'. They are very loyal and supportive partners, but are hard to truly know. They need a partner who values their ideals, is open to deep emotional conversations, and respects their periodic need for solitude to 'recharge'.",
                "career": "You need a career that has meaning and aligns with your values. Just 'making money' is not enough for you. You want to help people and change the world for the better.<br><br><b>Ideal Paths:</b> Psychologist, counselor, writer, social worker, designer, NGO worker, teacher."
            },
            "INFP": {
                "title": "The Mediator", "group": "Diplomats",
                "overview": "INFP, 'The Mediator', is a poetic, kind, and altruistic idealist. You live in a world of your values and emotions. You see the best in people and genuinely want to help. You have a rich inner world, full of imagination and fantasy. You seek harmony and meaning in everything you do.",
                "strengths": "<h3>Strengths:</h3><ul><li>Deep empathy and caring</li><li>Generosity and altruism</li><li>High creativity and imagination</li><li>Loyal to their values and ideals</li></ul><h3>Weaknesses:</h3><ul><li>Unrealistic idealism</li><li>Extremely sensitive to criticism</li><li>Impractical, difficulty with routine</li><li>Tend to 'withdraw' and avoid conflict</li><li>Find it hard to make tough decisions</li></ul>",
                "relations": "INFPs are hopeless romantics. They search for a 'soulmate' and strive for idealized, deep relationships. They are very sensitive and supportive partners but can be easily hurt. They need a partner who shares their values, appreciates their creativity, and treats their feelings with tenderness.",
                "career": "You seek work that allows you to express yourself and help others, while staying true to your values. You do not thrive in rigid corporate environments. You need flexibility and creative freedom.<br><br><b>Ideal Paths:</b> Writer, artist, psychologist, physical therapist, editor, librarian, social worker."
            },
            "ENFJ": {
                "title": "The Protagonist", "group": "Diplomats",
                "overview": "ENFJ, 'The Protagonist', is a charismatic and inspiring leader. You have a natural ability to understand people, motivate them, and lead them. You are full of passion and empathy, and your main desire is to help others reach their potential. You are the social center of any group, radiating warmth and confidence.",
                "strengths": "<h3>Strengths:</h3><ul><li>Outstanding empathy and responsiveness</li><li>Natural leadership and charisma</li><li>Altruism and a desire to help</li><li>Excellent communication skills</li><li>Organized</li></ul><h3>Weaknesses:</h3><ul><li>Overly idealistic</li><li>Can be too intrusive in their desire to 'help'</li><li>Low self-esteem if not validated</li><li>Difficulty making 'hard' decisions</li><li>Prone to manipulation (sometimes unconsciously)</li></ul>",
                "relations": "ENFJs are very caring, warm, and supportive partners. They put relationships first and are willing to work hard for harmony. Sometimes they can be too overbearing in their care. They need a partner who appreciates their support but also reminds them to take care of themselves.",
                "career": "You are made to work with people. You need to see how your work directly impacts others for the better. You are an excellent motivator and organizer.<br><br><b>Ideal Paths:</b> Teacher, politician, PR manager, event manager, development coach, HR director, diplomat."
            },
            "ENFP": {
                "title": "The Campaigner", "group": "Diplomats",
                "overview": "ENFP, 'The Campaigner', is a creative, outgoing, and free-spirited soul. You are full of enthusiasm and see life as one big adventure full of possibilities. You easily connect with people and love generating new ideas. You live in the future and are always looking for a reason to smile.",
                "strengths": "<h3>Strengths:</h3><ul><li>Boundless curiosity and enthusiasm</li><li>High creativity</li><li>Excellent communicators and 'life of the party'</li><li>Empathetic and insightful</li></ul><h3>Weaknesses:</h3><ul><li>Poorly organized and dislike details</li><li>Easily stressed by routine</li><li>Overly emotional and inconsistent</li><li>Difficulty following through on projects</li><li>Overly accommodating</li></ul>",
                "relations": "ENFPs fall in love easily, quickly, and passionately. In relationships, they seek fun, deep emotional connection, and a partner ready to explore the world with them. They get bored quickly, so routine is their main enemy. They need a partner who values their spontaneity and is ready for adventure.",
                "career": "You need a job that offers variety, creativity, and social interaction. You hate rigid schedules and monotonous tasks. You are an idea generator who needs someone else to handle the implementation.<br><br><b>Ideal Paths:</b> Journalist, actor, PR specialist, travel agent, creative director, consultant, event manager."
            },
            "ISTJ": {
                "title": "The Logistician", "group": "Sentinels",
                "overview": "ISTJ, 'The Logistician', is the living embodiment of honesty, hard work, and responsibility. You are practical and fact-oriented. You believe in facts, order, and tradition. You are the person whose word can always be trusted. You don't build castles in the sky; you prefer to build real houses of brick and mortar.",
                "strengths": "<h3>Strengths:</h3><ul><li>Absolute honesty and directness</li><li>Incredible responsibility and reliability</li><li>Calm, practical, and methodical</li><li>Attention to detail</li><li>Strong willpower</li></ul><h3>Weaknesses:</h3><ul><li>Stubbornness and inflexibility</li><li>Insensitive to emotions (their own and others')</li><li>Tend to blame themselves for everything</li><li>Rigidly follow rules, even if outdated</li></ul>",
                "relations": "ISTJs are very loyal and dedicated. They may not be the most romantic partners, but they express love through actions: care, stability, and reliability. They value tradition and seek a partner who shares their outlook on life. They are the 'rock' you can always lean on.",
                "career": "You thrive in environments where order, precision, and adherence to procedures are valued. You like when everything is 'in its place'. You are the foundation of any organization.<br><br><b>Ideal Paths:</b> Accountant, logistician, military officer, lawyer, inspector, auditor, backend developer, database administrator."
            },
            "ISFJ": {
                "title": "The Defender", "group": "Sentinels",
                "overview": "ISFJ, 'The Defender', is a very dedicated, warm, and reliable person. You are a unique blend of sensitivity and analytics. You have an excellent memory for details, especially about people. Your main mission is to protect and care for those you love. You are a quiet but hardworking altruist.",
                "strengths": "<h3>Strengths:</h3><ul><li>Supportive and caring</li><li>Phenomenal reliability and diligence</li><li>Attention to detail and practicality</li><li>Developed empathy and patience</li></ul><h3>Weaknesses:</h3><ul><li>Shyness and modesty</li><li>Take things too personally</li><li>Tend to overwork themselves</li><li>Reluctant to change and fear conflict</li><li>Overly protective</li></ul>",
                "relations": "ISFJs are some of the most caring and devoted partners. They put their partner's needs above their own, which can sometimes lead to burnout. They value harmony and stability at home. They need a partner who will appreciate their care, notice their efforts, and encourage them to care for themselves too.",
                "career": "You need a job where you can use your empathy and attention to detail to help specific people. You excel in supportive roles.<br><br><b>Ideal Paths:</b> Nurse, elementary school teacher, social worker, HR manager, interior designer, administrator."
            },
            "ESTJ": {
                "title": "The Executive", "group": "Sentinels",
                "overview": "ESTJ, 'The Executive', is an excellent administrator who loves to bring order. You live by the principles of honesty, hard work, and tradition. You are a natural organizer who knows how and loves to manage people and processes. You value facts and dislike empty talk. You get things done.",
                "strengths": "<h3>Strengths:</h3><ul><li>Outstanding organizational skills</li><li>Willpower and decisiveness</li><li>Honesty and directness</li><li>Reliability and loyalty</li><li>Ability to create order from chaos</li></ul><h3>Weaknesses:</h3><ul><li>Inflexibility and stubbornness</li><li>Difficulty expressing emotions</li><li>Desire to always be right</li><li>Judgmental of those who live 'by different rules'</li><li>Intolerant of laziness</li></ul>",
                "relations": "ESTJs value stability, loyalty, and tradition. They are the reliable 'captain' of the relationship who always keeps their word and ensures order. They may seem bossy, but this is their way of showing care. They need a partner who values their reliability and is ready to build a strong, stable family.",
                "career": "You are a born manager and administrator. You need a job with a clear structure, rules, and hierarchy. You love taking responsibility and seeing projects through to completion.<br><br><b>Ideal Paths:</b> Manager (any level), judge, CFO, military officer, police officer, school principal."
            },
            "ESFJ": {
                "title": "The Consul", "group": "Sentinels",
                "overview": "ESFJ, 'The Consul', is an extremely caring, social, and popular person. You are the 'life of the party'. You get energy from interacting with people and genuinely enjoy taking care of others. You are very sensitive to the needs of others and are always ready to help. Group harmony is your highest value.",
                "strengths": "<h3>Strengths:</h3><ul><li>Strong practical skills</li><li>High sense of duty and responsibility</li><li>Incredibly sociable and friendly</li><li>Empathetic and caring</li><li>Ability to create harmony</li></ul><h3>Weaknesses:</h3><ul><li>High dependence on social status</li><li>Inflexible and dislikes criticism</li><li>Excessive need for appreciation</li><li>Difficulty making tough, unpopular decisions</li></ul>",
                "relations": "ESFJs are wonderful partners who will do anything for harmony and happiness at home. They take their commitments very seriously. They need a partner who will openly express gratitude, value their care, and actively participate in social life with them.",
                "career": "You need a job that involves active communication and helping people. You are an excellent organizer and team player. You flourish in a warm, friendly atmosphere.<br><br><b>Ideal Paths:</b> Teacher, event manager, PR specialist, administrator, customer relations manager, nurse."
            },
            "ISTP": {
                "title": "The Virtuoso", "group": "Explorers",
                "overview": "ISTP, 'The Virtuoso', is a bold and practical experimenter. You love taking things apart to see how they work. You live in a world of tools and mechanics. You are calm, but in a crisis, you act with lightning speed. You are a master of all trades who learns by doing, not by reading.",
                "strengths": "<h3>Strengths:</h3><ul><li>Optimism and energy</li><li>Creativity and practicality</li><li>Excellent in crisis situations</li><li>Logical and common-sensical</li><li>Fast learner (through practice)</li></ul><h3>Weaknesses:</h3><ul><li>Stubborn and private</li><li>Prone to unnecessary risk</li><li>Dislike long-term commitments</li><li>Easily bored</li><li>Insensitive to emotions</li></ul>",
                "relations": "ISTPs are very independent and love their personal space. They prefer to 'live in the moment' and dislike making long-term plans. They express love through practical actions (e.g., fixing something). They need a partner who values their independence, shares their hobbies, and doesn't pressure them.",
                "career": "You need a job where you can work with your hands and see the immediate result of your labor. You hate theory and office routine. You are built for action.<br><br><b>Ideal Paths:</b> Mechanic, engineer, pilot, firefighter, developer, surgeon, systems administrator, detective."
            },
            "ISFP": {
                "title": "The Adventurer", "group": "Explorers",
                "overview": "ISFP, 'The Adventurer', is a flexible and charming artist. You live in a world of the five senses and appreciate beauty in all its forms. You are spontaneous, artistic, and always ready to explore something new. You are a quiet but passionate person who expresses yourself through actions and aesthetics, not words.",
                "strengths": "<h3>Strengths:</h3><ul><li>Natural charm and friendliness</li><li>Sensitivity to beauty and aesthetics</li><li>Passionate and curious</li><li>Flexible and adaptable</li><li>Practical</li></ul><h3>Weaknesses:</h3><ul><li>Unpredictable</li><li>Easily stressed by criticism or conflict</li><li>Fiercely independent (hard to know)</li><li>Poor long-term planning</li><li>Low self-esteem</li></ul>",
                "relations": "ISFPs are spontaneous, warm, and sensual partners. They value freedom and seek a partner who shares their passion for life and beauty. They dislike conflict and may 'withdraw' under pressure. They need a partner who gives them freedom for self-expression and values their unique view of the world.",
                "career": "You need a career that allows you to express your sense of beauty and work on a flexible schedule. You are not made for a rigid corporate hierarchy. You want to enjoy the process of your work.<br><br><b>Ideal Paths:</b> Artist, designer (graphic, fashion), musician, florist, chef, veterinarian, photographer."
            },
            "ESTP": {
                "title": "The Entrepreneur", "group": "Explorers",
                "overview": "ESTP, 'The Entrepreneur', is an intelligent, energetic, and highly perceptive person. You live 'on the edge' and love risk. You are the center of any party, charming and witty. You read people and situations excellently, making you a great negotiator. You live 'here and now' and dislike theorizing.",
                "strengths": "<h3>Strengths:</h3><ul><li>Boldness and love of risk</li><li>Originality and practicality</li><li>Excellent social and 'people-reading' skills</li><li>Energetic and perceptive</li><li>Ability to make quick decisions</li></ul><h3>Weaknesses:</h3><ul><li>Impatience and impulsivity</li><li>Prone to risky behavior</li><li>Unstructured and dislikes plans</li><li>Can be insensitive to others' feelings</li><li>Easily bored</li></ul>",
                "relations": "ESTPs are the 'stars' of any party. In relationships, they seek fun, passion, and a 'partner in crime'. They get bored quickly with routine. They need a partner who is just as energetic, loves spontaneity, and won't try to 'tame' them.",
                "career": "You need a job full of adrenaline, social interaction, and quick decisions. You were born to 'do' things and persuade people. Office routine and long-term planning are not for you.<br><br><b>Ideal Paths:</b> Entrepreneur, sales specialist, detective, stunt performer, marketer, investor, sports agent."
            },
            "ESFP": {
                "title": "The Entertainer", "group": "Explorers",
                "overview": "ESFP, 'The Entertainer', is a spontaneous, energetic, and enthusiastic person. You are a natural performer, and life is never boring around you. You love being in the spotlight and bringing joy to people. You live by your senses, appreciate beauty, and enjoy every moment.",
                "strengths": "<h3>Strengths:</h3><ul><li>Natural showmanship and boldness</li><li>Aesthetic sense</li><li>Practicality and resourcefulness</li><li>Excellent social skills</li><li>Optimism and love for life</li></ul><h3>Weaknesses:</h3><ul><li>Highly sensitive to criticism</li><li>Poor long-term planning</li><li>Easily distracted and dislikes routine</li><li>Impulsive</li><li>Dislikes complex theory and abstract concepts</li></ul>",
                "relations": "ESFPs are generous, fun, and very attentive partners. They love to give and receive attention, compliments, and gifts. They live 'here and now'. They need a partner who will share their love for fun, appreciate their spontaneity, and not 'overwhelm' them with serious plans for the future.",
                "career": "You need a job where you can be in the spotlight, interact with people, and create a festive atmosphere. Aesthetics and a good team environment are important to you.<br><br><b>Ideal Paths:</b> Actor, performer, tour guide, event manager, fashion consultant, cosmetologist, event host, sales specialist."
            }
        }
    },
    "ru": {
        // Hero Секция
        "heroTitle": "Декодируй Свой Разум",
        "heroSubtitle": "MBTI — это не просто тест. Это ключ к пониманию твоего внутреннего 'кода' и операционной системы.",

        // Intro Секция
        "introTitle": "<span class='neon-highlight'>Что такое MBTI?</span>", 
        "introP1": "Индикатор типов Майерс-Бриггс (MBTI) — это широко известная психологическая модель, основанная на работах Карла Густава Юнга. Разработанная Изабель Майерс и Катариной Бриггс, эта система не 'ставит диагноз' и не измеряет 'навыки'.",
        "introP2": "Ее главная цель — определить ваши врожденные **предпочтения**. Точно так же, как вы от рождения предпочитаете писать правой или левой рукой, ваш мозг предпочитает определенные способы сбора информации и принятия решений.",
        "introP3": "Ключевой момент: <strong>Нет 'лучших' или 'худших' типов.</strong> Каждый из 16 'архитектур' личности обладает уникальными сильными сторонами и потенциальными 'слепыми зонами'. Понимание своего типа — это инструмент для саморазвития, улучшения коммуникации и построения более гармоничных отношений.",

        // Карточки Дихотомий
        "card1Title": "<span class='type-e'>Экстраверсия (E)</span> / <span class='type-i'>Интроверсия (I)</span>", 
        "card1Label": "Ключевой вопрос: Источник Энергии",
        "card1TextE": "<b>(E) Экстраверты</b> черпают энергию из внешнего мира. Они 'заряжаются' от социального взаимодействия, активной деятельности и обсуждений. Они часто 'думают вслух'.",
        "card1TextI": "<b>(I) Интроверты</b> восполняют энергию изнутри. Они 'заряжаются' в одиночестве, через размышления и глубокое погружение в свои мысли. Они предпочитают сначала подумать, потом сказать.",

        "card2Title": "<span class='type-s'>Сенсорика (S)</span> / <span class='type-n'>Интуиция (N)</span>",
        "card2Label": "Ключевой вопрос: Сбор Информации",
        "card2TextS": "<b>(S) Сенсорики</b> доверяют тому, что можно увидеть, услышать и потрогать. Они сфокусированы на фактах, деталях, практическом опыте и настоящем моменте.",
        "card2TextN": "<b>(N) Интуиты</b> доверяют 'шестому чувству' и общей картине. Они сфокусированы на паттернах, возможностях, будущих последствиях и скрытых смыслах.",

        "card3Title": "<span class='type-t'>Логика (T)</span> / <span class='type-f'>Эмоции (F)</span>", 
        "card3Label": "Ключевой вопрос: Принятие Решений",
        "card3TextT": "<b>(T) Логики</b> (Мышление) принимают решения на основе объективного анализа, справедливости и логических последствий. Они ценят истину выше тактичности.",
        "card3TextF": "<b>(F) Этики</b> (Чувство) принимают решения, основываясь на личных ценностях, эмпатии и том, как выбор повлияет на людей. Они ценят гармонию и тактичность.",

        "card4Title": "<span class='type-j'>Суждение (J)</span> / <span class='type-p'>Восприятие (P)</span>", 
        "card4Label": "Ключевой вопрос: Образ Жизни",
        "card4TextJ": "<b>(J) Судящие</b> предпочитают структурированный и спланированный мир. Им нравится порядок, предсказуемость, и они получают удовольствие от 'закрытия' задач.",
        "card4TextP": "<b>(P) Воспринимающие</b> предпочитают гибкий и спонтанный подход. Им нравится адаптироваться к новым обстоятельствам, исследовать варианты и оставлять задачи 'открытыми'.",

        // CTA Секция
        "ctaTitle": "Готов к анализу?",
        "ctaText": "Узнай свой 4-буквенный тип и получи полный отчет.",
        "ctaButton": "Начать Сканирование",

        "quizTitle": "Вопрос {current} из {total}",
        "backButton": "← Назад",
        "quizLoading": "Анализ завершен. Генерация вашего профиля...",
        "quizAlert": "Вы пропустили один или несколько вопросов. Мы вернем вас к первому пропущенному.",

        "quizLabels": [
            "Полностью не согласен",
            "Не согласен",
            "Нейтрально",
            "Согласен",
            "Полностью согласен"
        ],
        "quizQuestions": [
            // (Все 40 вопросов на русском)
            // БЛОК 1
            { text: "Вы чувствуете прилив сил после активного общения с большой группой людей.", dichotomy: 'E/I', direction: 1 },
            { text: "Вы больше доверяете своему практическому опыту, чем теоретическим концепциям.", dichotomy: 'S/N', direction: 1 },
            { text: "Принимая решение, вы ставите объективную истину и логику выше чувств других людей.", dichotomy: 'T/F', direction: 1 },
            { text: "Вам комфортнее работать по четкому, заранее составленному плану.", dichotomy: 'J/P', direction: 1 },
            // БЛОК 2
            { text: "Вам часто нужно провести время в одиночестве, чтобы 'перезарядиться'.", dichotomy: 'E/I', direction: -1 },
            { text: "Вам нравится обсуждать абстрактные идеи, философию и будущие возможности.", dichotomy: 'S/N', direction: -1 },
            { text: "Для вас важнее поддерживать гармонию в коллективе, чем доказывать свою правоту.", dichotomy: 'T/F', direction: -1 },
            { text: "Вы предпочитаете оставлять дела 'открытыми' и легко адаптируетесь к спонтанным изменениям.", dichotomy: 'J/P', direction: -1 },
            // БЛОК 3
            { text: "На вечеринках вы склонны сами инициировать знакомства с новыми людьми.", dichotomy: 'E/I', direction: 1 },
            { text: "Вы предпочитаете говорить о конкретных, реальных событиях, а не о гипотезах.", dichotomy: 'S/N', direction: 1 },
            { text: "Вам легко оставаться объективным и беспристрастным в конфликтной ситуации.", dichotomy: 'T/F', direction: 1 },
            { text: "Вы получаете удовольствие от составления списков дел (to-do lists) и их вычеркивания.", dichotomy: 'J/P', direction: 1 },
            // БЛОК 4
            { text: "Вы предпочитаете общаться с 1-2 близкими друзьями, чем с большой компанией.", dichotomy: 'E/I', direction: -1 },
            { text: "Вы часто задумываетесь о скрытых смыслах и 'общей картине', а не о деталях.", dichotomy: 'S/N', direction: -1 },
            { text: "Вы часто принимаете решения, основываясь на своих личных ценностях и сочувствии к другим.", dichotomy: 'T/F', direction: -1 },
            { text: "Вам нравится, когда в отпуске у вас есть гибкий график, а не строгий маршрут.", dichotomy: 'J/P', direction: -1 },
            // БЛОК 5
            { text: "Вам легче 'думать вслух', обсуждая идеи, чем обдумывать их про себя.", dichotomy: 'E/I', direction: 1 },
            { text: "При чтении инструкций вы предпочитаете следовать им пошагово и досконально.", dichotomy: 'S/N', direction: 1 },
            { text: "Вас больше ранит, если вас назовут 'нелогичным', чем если вас назовут 'бесчувственным'.", dichotomy: 'T/F', direction: 1 },
            { text: "Ваш рабочий стол, как правило, очень организован и упорядочен.", dichotomy: 'J/P', direction: 1 },
            // БЛОК 6
            { text: "Вы часто чувствуете себя опустошенным после длительного социального взаимодействия.", dichotomy: 'E/I', direction: -1 },
            { text: "Вы склонны доверять своей интуиции, даже если она противоречит фактам.", dichotomy: 'S/N', direction: -1 },
            { text: "Вам трудно сказать 'нет', потому что вы боитесь разочаровать людей.", dichotomy: 'T/F', direction: -1 },
            { text: "Вы часто откладываете принятие решений, чтобы 'посмотреть, как пойдет'.", dichotomy: 'J/P', direction: -1 },
            // БЛОК 7
            { text: "Вы предпочитаете быть в центре внимания на мероприятии.", dichotomy: 'E/I', direction: 1 },
            { text: "Вы цените реализм и практичность больше, чем воображение и креативность.", dichotomy: 'S/N', direction: 1 },
            { text: "Вы считаете, что эффективность важнее, чем сотрудничество.", dichotomy: 'T/F', direction: 1 },
            { text: "Вы чувствуете стресс, если у вас нет четкого плана на день.", dichotomy: 'J/P', direction: 1 },
            // БЛОК 8
            { text: "Вам комфортнее слушать, чем говорить, в групповой беседе.", dichotomy: 'E/I', direction: -1 },
            { text: "Вы часто витаете в облаках, думая о будущем.", dichotomy: 'S/N', direction: -1 },
            { text: "Вы стремитесь утешить человека, который плачет, прежде чем пытаться решить его проблему.", dichotomy: 'T/F', direction: -1 },
            { text: "Вы любите начинать новые проекты, но вам скучно их заканчивать.", dichotomy: 'J/P', direction: -1 },
            // БЛОК 9
            { text: "Вы легко заводите разговор с незнакомцами.", dichotomy: 'E/I', direction: 1 },
            { text: "Вы предпочитаете работать с конкретными данными, а не с абстрактными теориями.", dichotomy: 'S/N', direction: 1 },
            { text: "Вы гордитесь своей способностью оставаться логичным в любой ситуации.", dichotomy: 'T/F', direction: 1 },
            { text: "Вам нравится, когда все дела решены и 'закрыты' как можно скорее.", dichotomy: 'J/P', direction: 1 },
            // БЛОК 10
            { text: "Вы обычно держите свое мнение при себе, если оно не совпадает с мнением большинства.", dichotomy: 'E/I', direction: -1 },
            { text: "Вас больше интересуют символы и метафоры, чем буквальные значения.", dichotomy: 'S/N', direction: -1 },
            { text: "Вы считаете, что при принятии решений важно учитывать чувства каждого.", dichotomy: 'T/F', direction: -1 },
            { text: "Вы часто принимаете спонтанные решения 'по настроению'.", dichotomy: 'J/P', direction: -1 }
        ],
        "resultsTab1": "Обзор",
        "resultsTab2": "Сильные & Слабые стороны",
        "resultsTab3": "Отношения",
        "resultsTab4": "Карьера",
        "resultsRetryButton": "Пройти сканирование заново",
        "errorTitle": "Тип не найден",
        "errorGroup": "Системная Ошибка",
        "errorOverview": "Произошла ошибка при чтении вашего профиля. Возможно, вы попали на эту страницу напрямую, не пройдя тест. Пожалуйста, вернитесь и пройдите сканирование заново.",

        "profileDatabase": {
            "INTJ": {
                "title": "Стратег (The Architect)", "group": "Аналитики",
                "overview": "INTJ, 'Стратег', — это аналитический решатель проблем. Вы живете в мире глубоких идей и стратегического планирования. Вы цените интеллект, компетентность и независимость превыше всего. Для вас любой вызов — это шахматная партия, которую нужно проанализировать и выиграть. Вы можете казаться отстраненным или холодным, но это лишь потому, что ваш разум постоянно работает, анализируя все вокруг в поиске паттернов.",
                "strengths": "<h3>Сильные стороны:</h3><ul><li>Рациональность и логика</li><li>Стратегическое видение на 10 шагов вперед</li><li>Решительность и уверенность в своих выводах</li><li>Высокая независимость и автономность</li><li>Ненасытная жажда знаний</li></ul><h3>Слабые стороны:</h3><ul><li>Излишняя критичность (к себе и другим)</li><li>Трудности в понимании и выражении эмоций</li><li>Склонность к высокомерию</li><li>Нетерпение к неэффективности и иррациональности</li><li>Упрямство</li></ul>",
                "relations": "В отношениях INTJ ищут интеллектуальную 'родственную душу'. Они не мастера пустых комплиментов или романтических жестов, но выражают любовь через преданность и активное решение проблем партнера. Им нужно много личного пространства, и они ценят честность и прямоту. Им нужен партнер, который уважает их потребность в независимости и готов к глубоким, осмысленным беседам о будущем.",
                "career": "Вы преуспеваете в карьере, которая требует инноваций, стратегического планирования и системного анализа. Рутина — ваш враг. Ищите роли, где вы можете работать автономно и решать сложные, нетривиальные задачи. <br><br><b>Идеальные пути:</b> Научный исследователь, архитектор ПО, системный аналитик, юрист, профессор университета, финансовый стратег, инженер."
            },
            "INTP": {
                "title": "Ученый (The Logician)", "group": "Аналитики",
                "overview": "INTP, 'Ученый', — это изобретательный мыслитель с ненасытной жаждой знаний. Ваш разум — это 'фабрика' идей и теорий. Вы анализируете системы, ищете логические несостыковки и обожаете сложные проблемы. Вы кажетесь тихим и задумчивым, потому что большую часть времени проводите в своем собственном 'дворце разума', исследуя новые концепции.",
                "strengths": "<h3>Сильные стороны:</h3><ul><li>Выдающийся аналитический склад ума</li><li>Объективность и точность</li><li>Богатое воображение и креативность</li><li>Открытость к новым идеям</li><li>Честность</li></ul><h3>Слабые стороны:</h3><ul><li>Склонность к рассеянности и 'витанию в облаках'</li><li>Склонность к самоизоляции</li><li>Нетерпимость к правилам и бюрократии</li><li>Трудности в выполнении рутинных задач</li><li>Нечувствительность к эмоциям других</li></ul>",
                "relations": "INTP ищут, прежде всего, интеллектуальную связь. Им может быть трудно выражать эмоции, но они очень преданны в глубине души. Им нужен партнер, который уважает их потребность в одиночестве для размышлений и готов обсуждать самые странные и абстрактные теории. Они ценят прямоту и не любят эмоциональные 'драмы'.",
                "career": "Вам нужна работа, которая бросает вызов вашему интеллекту и дает свободу для исследований. Вы ненавидите жесткие рамки и микроменеджмент. Вы созданы для того, чтобы разбирать системы на части, понимать их и улучшать.<br><br><b>Идеальные пути:</b> Философ, профессор, разработчик ПО, системный аналитик, ученый-исследователь, математик, экономист."
            },
            "ENTJ": {
                "title": "Командир (The Commander)", "group": "Аналитики",
                "overview": "ENTJ, 'Командир', — это прирожденный лидер. Вы обладаете харизмой, решительностью и волей. Вы видите неэффективность как вызов, который нужно немедленно устранить. Вы смотрите на мир как на систему, которую можно и нужно оптимизировать. Вы всегда мыслите стратегически и не боитесь брать на себя ответственность за принятие сложных решений.",
                "strengths": "<h3>Сильные стороны:</h3><ul><li>Врожденная эффективность и организованность</li><li>Непоколебимая сила воли</li><li>Харизма и уверенность в себе</li><li>Стратегическое мышление</li><li>Способность вдохновлять других</li></ul><h3>Слабые стороны:</h3><ul><li>Нетерпимость к ошибкам (своим и чужим)</li><li>Упрямство и доминантность</li><li>Могут казаться эмоционально холодными</li><li>Трудности с расслаблением</li><li>Склонность 'идти по головам'</li></ul>",
                "relations": "ENTJ берут на себя инициативу в отношениях. Они ищут рост и развитие вместе с партнером и ценят компетентность и интеллект. Они не любят 'ходить вокруг да около' и предпочитают решать проблемы прямо. Им нужен партнер, который так же амбициозен, как они, или, по крайней мере, полностью поддерживает их амбиции.",
                "career": "Вы созданы для лидерства. Вам нужна роль, где вы можете строить стратегии, управлять командами и достигать измеримых, амбициозных целей. Вы не боитесь власти и ответственности.<br><br><b>Идеальные пути:</b> Руководитель высшего звена, предприниматель, юрист, консультант по управлению, политик, военный офицер."
            },
            "ENTP": {
                "title": "Полемист (The Debater)", "group": "Аналитики",
                "overview": "ENTP, 'Полемист', — это обаятельный и умный провокатор. Ваш разум обожает интеллектуальные вызовы и 'жонглирование' идеями. Вы не можете удержаться от спора, видя его не как конфликт, а как увлекательную игру и способ докопаться до истины. Вы быстро схватываете сложные концепции и видите мир как паутину взаимосвязанных идей.",
                "strengths": "<h3>Сильные стороны:</h3><ul><li>Молниеносная быстрота ума</li><li>Оригинальность и изобретательность</li><li>Харизма и энергичность</li><li>Отличный 'мозговой штурм'</li><li>Способность видеть проблему с 10 разных сторон</li></ul><h3>Слабые стороны:</h3><ul><li>Крайняя нетерпимость к рутине</li><li>Склонность к спорам 'ради спора'</li><li>Плохая исполнительность (начинают 10 дел, не заканчивают ни одного)</li><li>Нечувствительность к чувствам других в споре</li><li>Легко отвлекаются</li></ul>",
                "relations": "ENTP очаровательны, остроумны и полны энтузиазма. Им быстро становится скучно, поэтому им нужен партнер, готовый к интеллектуальным играм и приключениям. Они ценят остроумие и не любят, когда их пытаются контролировать. Отношения с ними — это всегда приключение, полное идей и дебатов.",
                "career": "Вам нужна динамичная работа, где нет двух одинаковых дней. Вы преуспеваете в ролях, требующих постоянного решения новых проблем и генерации идей. Вы не созданы для монотонной работы 'по инструкции'.<br><br><b>Идеальные пути:</b> Предприниматель, адвокат, психолог, политический аналитик, актер, креативный директор, венчурный капиталист."
            },
            "INFJ": {
                "title": "Активист (The Advocate)", "group": "Дипломаты",
                "overview": "INFJ, 'Активист', — самый редкий тип личности. Вы тихий, но очень решительный идеалист. У вас есть глубокое чувство эмпатии и интуитивное понимание людей и ситуаций. Вы стремитесь не просто жить, а иметь миссию, делать мир лучше. Вы обладаете уникальным сочетанием мечтательности и решительности.",
                "strengths": "<h3>Сильные стороны:</h3><ul><li>Глубокая проницательность и интуиция</li><li>Истинный альтруизм и эмпатия</li><li>Решительность и страстность в следовании идеалам</li><li>Креативность и вдохновляющая натура</li></ul><h3>Слабые стороны:</h3><ul><li>Высокая чувствительность к критике и конфликтам</li><li>Перфекционизм</li><li>Склонность к быстрому выгоранию</li><li>Трудно узнать по-настоящему (очень закрытые)</li><li>Нереалистичные ожидания</li></ul>",
                "relations": "INFJ ищут глубокую, почти духовную связь. Они жаждут 'родственной души'. Они очень преданны и поддерживают партнера, но их трудно узнать по-настоящему. Им нужен партнер, который ценит их идеалы, готов к глубоким эмоциональным разговорам и уважает их периодическую потребность в уединении для 'перезарядки'.",
                "career": "Вам нужна карьера, которая имеет смысл и соответствует вашим ценностям. Просто 'зарабатывать деньги' вам недостаточно. Вы хотите помогать людям и менять мир к лучшему.<br><br><b>Идеальные пути:</b> Психолог, консультант, писатель, социальный работник, дизайнер, работник НКО, учитель."
            },
            "INFP": {
                "title": "Посредник (The Mediator)", "group": "Дипломаты",
                "overview": "INFP, 'Посредник', — это поэтичный, добрый и альтруистичный идеалист. Вы живете в мире своих ценностей и эмоций. Вы видите в людях лучшее и искренне хотите помочь. У вас богатый внутренний мир, полный воображения и фантазий. Вы ищете гармонию и смысл во всем, что делаете.",
                "strengths": "<h3>Сильные стороны:</h3><ul><li>Глубокая эмпатия и заботливость</li><li>Щедрость и альтруизм</li><li>Высокая креативность и воображение</li><li>Верность своим идеалам и ценностям</li></ul><h3>Слабые стороны:</h3><ul><li>Нереалистичный идеализм</li><li>Крайняя чувствительность к критике</li><li>Непрактичность, трудности с рутиной</li><li>Склонность 'уходить в себя' и избегать конфликтов</li><li>Трудно принимают жесткие решения</li></ul>",
                "relations": "INFP — безнадежные романтики. Они ищут 'родственную душу' и стремятся к идеализированным, глубоким отношениям. Они очень чуткие и поддерживающие партнеры, но могут быть ранимы. Им нужен партнер, который разделяет их ценности, ценит их креативность и относится к их чувствам с нежностью.",
                "career": "Вы ищете работу, которая позволяет вам выражать себя и помогать другим, оставаясь верным своим ценностям. Вы не преуспеваете в жесткой корпоративной среде. Вам нужна гибкость и творческая свобода.<br><br><b>Идеальные пути:</b> Писатель, художник, психолог, физиотерапевт, редактор, библиотекарь, социальный работник."
            },
            "ENFJ": {
                "title": "Тренер (The Protagonist)", "group": "Дипломаты",
                "overview": "ENFJ, 'Тренер', — это харизматичный и вдохновляющий лидер. Вы обладаете природной способностью понимать людей, мотивировать их и вести за собой. Вы полны страсти и эмпатии, и ваше главное желание — помочь другим раскрыть свой потенциал. Вы — социальный центр любой группы, излучающий тепло и уверенность.",
                "strengths": "<h3>Сильные стороны:</h3><ul><li>Выдающаяся эмпатия и отзывчивость</li><li>Прирожденное лидерство и харизма</li><li>Альтруизм и желание помогать</li><li>Отличные коммуникативные навыки</li><li>Организованность</li></ul><h3>Слабые стороны:</h3><ul><li>Излишняя идеалистичность</li><li>Могут быть слишком навязчивыми в своем желании 'помочь'</li><li>Низкая самооценка, если не получают одобрения</li><li>Трудности в принятии 'жестких' решений</li><li>Склонность к манипулированию (иногда неосознанно)</li></ul>",
                "relations": "ENFJ — очень заботливые, теплые и поддерживающие партнеры. Они ставят отношения на первое место и готовы много работать для их гармонии. Иногда они могут быть слишком навязчивыми в своей заботе. Им нужен партнер, который ценит их поддержку, но также напоминает им о необходимости заботиться и о себе.",
                "career": "Вы созданы для работы с людьми. Вам нужно видеть, как ваша работа напрямую влияет на жизнь других к лучшему. Вы превосходный мотиватор и организатор.<br><br><b>Идеальные пути:</b> Учитель, политик, PR-менеджер, event-менеджер, коуч по развитию, HR-директор, дипломат."
            },
            "ENFP": {
                "title": "Борец (The Campaigner)", "group": "Дипломаты",
                "overview": "ENFP, 'Борец', — это творческий, общительный и свободолюбивый дух. Вы полны энтузиазма и видите жизнь как одно большое приключение, полное возможностей. Вы легко находите общий язык с людьми и обожаете генерировать новые идеи. Вы живете будущим и всегда ищете причину для улыбки.",
                "strengths": "<h3>Сильные стороны:</h3><ul><li>Безграничное любопытство и энтузиазм</li><li>Высокая креативность</li><li>Отличные коммуникаторы и 'душа компании'</li><li>Эмпатия и проницательность</li></ul><h3>Слабые стороны:</h3><ul><li>Плохая организованность и нелюбовь к деталям</li><li>Легко впадают в стресс от рутины</li><li>Слишком эмоциональны и непостоянны</li><li>Трудности с доведением дел до конца</li><li>Излишняя потребность в одобрении</li></ul>",
                "relations": "ENFP влюбляются легко, быстро и страстно. В отношениях они ищут веселье, глубокую эмоциональную связь и партнера, готового исследовать мир вместе с ними. Им быстро становится скучно, поэтому рутина — их главный враг. Им нужен партнер, который ценит их спонтанность и готов к приключениям.",
                "career": "Вам нужна работа, которая предлагает разнообразие, творчество и общение. Вы ненавидите жесткие графики и монотонные задачи. Вы — генератор идей, которому нужен кто-то другой для их реализации.<br><br><b>Идеальные пути:</b> Журналист, актер, PR-специалист, турагент, креативный директор, консультант, event-менеджер."
            },
            "ISTJ": {
                "title": "Администратор (The Logistician)", "group": "Стражи",
                "overview": "ISTJ, 'Администратор', — это живое воплощение честности, трудолюбия и ответственности. Вы практичны и фактологичны. Вы верите в факты, порядок и традиции. Вы — тот человек, на чье слово всегда можно положиться. Вы не строите воздушных замков, а предпочитаете строить реальные дома из кирпича и цемента.",
                "strengths": "<h3>Сильные стороны:</h3><ul><li>Абсолютная честность и прямота</li><li>Невероятная ответственность и надежность</li><li>Спокойствие, практичность и методичность</li><li>Внимание к деталям</li><li>Сила воли</li></ul><h3>Слабые стороны:</h3><ul><li>Упрямство и негибкость</li><li>Нечувствительность к эмоциям (своим и чужим)</li><li>Склонность винить себя во всем</li><li>Жесткое следование правилам, даже если они устарели</li></ul>",
                "relations": "ISTJ очень лояльны и преданны. Они могут быть не самыми романтичными партнерами в мире, но они выражают любовь через поступки: заботу, стабильность и надежность. Они ценят традиции и ищут партнера, который разделяет их взгляды на жизнь. Они — 'скала', на которую всегда можно опереться.",
                "career": "Вы преуспеваете в среде, где ценятся порядок, точность и соблюдение процедур. Вам нравится, когда все 'на своих местах'. Вы — основа любой организации.<br><br><b>Идеальные пути:</b> Бухгалтер, логист, военный, юрист, инспектор, аудитор, программист (backend), администратор баз данных."
            },
            "ISFJ": {
                "title": "Защитник (The Defender)", "group": "Стражи",
                "overview": "ISFJ, 'Защитник', — это очень преданный, теплый и надежный человек. Вы уникальное сочетание чувствительности и аналитики. Вы обладаете прекрасной памятью на детали, особенно касающиеся людей. Ваша главная миссия — защищать и заботиться о тех, кого вы любите. Вы тихий, но очень трудолюбивый альтруизм.",
                "strengths": "<h3>Сильные стороны:</h3><ul><li>Поддержка и забота</li><li>Феноменальная надежность и трудолюбие</li><li>Внимание к деталям и практичность</li><li>Развитая эмпатия и терпение</li></ul><h3>Слабые стороны:</h3><ul><li>Скромность и застенчивость</li><li>Принимают все слишком близко к сердцу</li><li>Склонность перегружать себя работой</li><li>Нежелание меняться и боязнь конфликтов</li><li>'Защищают' даже то, что не нужно</li></ul>",
                "relations": "ISFJ — одни из самых заботливых и преданных партнеров. Они ставят нужды партнера выше своих, что иногда приводит к выгоранию. Они ценят гармонию и стабильность в доме. Им нужен партнер, который будет ценить их заботу, замечать их усилия и побуждать их также заботиться о себе.",
                "career": "Вам нужна работа, где вы можете использовать свою эмпатию и внимание к деталям для помощи конкретным людям. Вы преуспеваете в поддерживающих ролях.<br><br><b>Идеальные пути:</b> Медсестра/Медбрат, учитель начальных классов, социальный работник, менеджер по персоналу, дизайнер интерьеров, администратор."
            },
            "ESTJ": {
                "title": "Менеджер (The Executive)", "group": "Стражи",
                "overview": "ESTJ, 'Менеджер', — это превосходный администратор, который обожает наводить порядок. Вы живете по принципам честности, трудолюбия и традиций. Вы прирожденный организатор, который умеет и любит управлять людьми и процессами. Вы цените факты и не любите пустые разговоры. Вы 'делаете' дела.",
                "strengths": "<h3>Сильные стороны:</h3><ul><li>Выдающиеся навыки организации</li><li>Сила воли и решительность</li><li>Честность и прямота</li><li>Надежность и преданность</li><li>Способность создавать порядок из хаоса</li></ul><h3>Слабые стороны:</h3><ul><li>Негибкость и упрямство</li><li>Трудности с выражением эмоций</li><li>Желание всегда быть правым</li><li>Склонность к осуждению тех, кто живет 'не по правилам'</li><li>Нетерпимость к безделью</li></ul>",
                "relations": "ESTJ ценят стабильность, лояльность и традиции. Они — надежный 'капитан' в отношениях, который всегда держит слово и обеспечивает порядок. Они могут казаться властными, но это лишь их способ проявления заботы. Им нужен партнер, который ценит их надежность и готов строить крепкую, стабильную семью.",
                "career": "Вы — прирожденный менеджер и администратор. Вам нужна работа с четкой структурой, правилами и иерархией. Вы любите брать на себя ответственность и доводить проекты до конца.<br><br><b>Идеальные пути:</b> Менеджер (любого уровня), судья, финансовый директор, военный офицер, полицейский, школьный директор."
            },
            "ESFJ": {
                "title": "Консул (The Consul)", "group": "Стражи",
                "overview": "ESFJ, 'Консул', — это чрезвычайно заботливый, социальный и популярный человек. Вы — 'душа компании'. Вы получаете энергию от общения и искренне наслаждаетесь заботой о других. Вы очень чувствительны к потребностям окружающих и всегда готовы помочь. Гармония в коллективе — ваша главная ценность.",
                "strengths": "<h3>Сильные стороны:</h3><ul><li>Сильные практические навыки</li><li>Высокое чувство долга и ответственности</li><li>Невероятная общительность и дружелюбие</li><li>Эмпатия и заботливость</li><li>Умение создавать гармонию</li></ul><h3>Слабые стороны:</h3><ul><li>Высокая зависимость от мнения окружающих</li><li>Негибкость и нелюбовь к критике</li><li>Излишняя потребность в признании и благодарности</li><li>Трудности в принятии сложных, непопулярных решений</li></ul>",
                "relations": "ESFJ — прекрасный партнер, который сделает все для гармонии и счастья в доме. Они очень серьезно относятся к своим обязательствам. Им нужен партнер, который будет открыто выражать свою благодарность, ценить их заботу и активно участвовать в социальной жизни.",
                "career": "Вам нужна работа, которая связана с активным общением и помощью людям. Вы превосходный организатор и командный игрок. Вы расцветаете в теплой, дружелюбной атмосфере.<br><br><b>Идеальные пути:</b> Учитель, event-менеджер, PR-специалист, администратор, менеджер по работе с клиентами, медсестра/медбрат."
            },
            "ISTP": {
                "title": "Виртуоз (The Virtuoso)", "group": "Искатели",
                "overview": "ISTP, 'Виртуоз', — это смелый и практичный экспериментатор. Вы обожаете разбирать вещи на части, чтобы понять, как они работают. Вы живете в мире инструментов и механики. Вы спокойны, но в кризисной ситуации действуете молниеносно. Вы мастер на все руки, который учится на практике, а не по книгам.",
                "strengths": "<h3>Сильные стороны:</h3><ul><li>Оптимизм и энергичность</li><li>Креативность и практичность</li><li>Превосходные навыки в кризисных ситуациях</li><li>Логика и здравый смысл</li><li>Быстрая обучаемость (через практику)</li></ul><h3>Слабые стороны:</h3><ul><li>Упрямство и закрытость</li><li>Склонность к неоправданному риску</li><li>Нелюбовь к долгосрочным обязательствам</li><li>Легко впадают в скуку</li><li>Нечувствительность к эмоциям</li></ul>",
                "relations": "ISTP очень независимы и любят личное пространство. Они предпочитают 'жить моментом' и не любят строить долгосрочных планов. Они выражают любовь через практические дела (например, что-то починить). Им нужен партнер, который ценит их независимость, разделяет их увлечения и не давит на них.",
                "career": "Вам нужна работа, где вы можете работать 'руками' и видеть немедленный результат своего труда. Вы ненавидите теорию и офисную рутину. Вы созданы для действия.<br><br><b>Идеальные пути:</b> Механик, инженер, пилот, пожарный, разработчик, хирург, системный администратор, детектив."
            },
            "ISFP": {
                "title": "Артист (The Adventurer)", "group": "Искатели",
                "overview": "ISFP, 'Артист', — это гибкий и очаровательный художник. Вы живете в мире пяти чувств и цените красоту во всех ее проявлениях. Вы спонтанны, артистичны и всегда готовы исследовать что-то новое. Вы тихий, но страстный человек, который выражает себя через дела и эстетику, а не через слова.",
                "strengths": "<h3>Сильные стороны:</h3><ul><li>Природное очарование и дружелюбие</li><li>Чувствительность к прекрасному и эстетика</li><li>Страстность и любопытство</li><li>Гибкость и адаптивность</li><li>Практичность</li></ul><h3>Слабые стороны:</h3><ul><li>Непредсказуемость</li><li>Легко впадают в стресс от критики или конфликтов</li><li>Излишняя независимость (трудно узнать)</li><li>Плохое долгосрочное планирование</li><li>Низкая самооценка</li></ul>",
                "relations": "ISFP — спонтанные, теплые и чувственные партнеры. Они ценят свободу и ищут партнера, который разделит их страсть к жизни и красоте. Они не любят конфликты и могут 'уйти в себя' при давлении. Им нужен партнер, который даст им свободу для самовыражения и будет ценить их уникальный взгляд на мир.",
                "career": "Вам нужна карьера, которая позволяет вам выражать свое чувство прекрасного и работать в гибком графике. Вы не созданы для жесткой корпоративной иерархии. Вы хотите получать удовольствие от процесса работы.<br><br><b>Идеальные пути:</b> Художник, дизайнер (графический, модный), музыкант, флорист, шеф-повар, ветеринар, фотограф."
            },
            "ESTP": {
                "title": "Делец (The Entrepreneur)", "group": "Искатели",
                "overview": "ESTP, 'Делец', — это умный, энергичный и очень проницательный человек. Вы живете 'на краю' и обожаете риск. Вы — центр любой вечеринки, обаятельный и остроумный. Вы превосходно считываете людей и ситуации, что делает вас отличным переговорщиком. Вы живете 'здесь и сейчас' и не любите теоретизировать.",
                "strengths": "<h3>Сильные стороны:</h3><ul><li>Смелость и любовь к риску</li><li>Оригинальность и практичность</li><li>Отличные навыки общения и 'чтения' людей</li><li>Энергичность и проницательность</li><li>Способность быстро принимать решения</li></ul><h3>Слабые стороны:</h3><ul><li>Нетерпеливость и импульсивность</li><li>Склонность к рискованному поведению</li><li>Неструктурированность и нелюбовь к планам</li><li>Могут быть нечувствительными к чувствам других</li><li>Легко впадают в скуку</li></ul>",
                "relations": "ESTP — 'звезды' любой вечеринки. В отношениях они ищут веселья, страсти и партнера 'по преступлению'. Им быстро становится скучно в рутине. Им нужен партнер, который так же энергичен, любит спонтанность и не будет пытаться их 'приручить'.",
                "career": "Вам нужна работа, полная адреналина, общения и быстрых решений. Вы рождены, чтобы 'делать' дела и убеждать людей. Офисная рутина и долгосрочное планирование — не для вас.<br><br><b>Идеальные пути:</b> Предприниматель, специалист по продажам, детектив, каскадер, маркетолог, инвестор, спортивный агент."
            },
            "ESFP": {
                "title": "Развлекатель (The Entertainer)", "group": "Искатели",
                "overview": "ESFP, 'Развлекатель', — это спонтанный, энергичный и полный энтузиазма человек. Вы — прирожденный артист, и жизнь никогда не бывает скучной рядом с вами. Вы обожаете быть в центре внимания и дарить людям радость. Вы живете чувствами, цените красоту и получаете удовольствие от каждого момента.",
                "strengths": "<h3>Сильные стороны:</h3><ul><li>Природный артистизм и смелость</li><li>Эстетическое чутье</li><li>Практичность и находчивость</li><li>Отличные навыки общения</li><li>Оптимизм и жизнелюбие</li></ul><h3>Слабые стороны:</h3><ul><li>Крайняя чувствительность к критике</li><li>Плохое долгосрочное планирование</li><li>Легко отвлекаются и не любят рутину</li><li>Импульсивность</li><li>Нелюбовь к теории и сложным концепциям</li></ul>",
                "relations": "ESFP — щедрые, веселые и очень внимательные партнеры. Они обожают дарить и получать внимание, комплименты и подарки. Они живут 'здесь и сейчас'. Им нужен партнер, который будет разделять их любовь к веселью, ценить их спонтанность и не будет слишком сильно 'грузить' их серьезными планами на будущее.",
                "career": "Вам нужна работа, где вы можете быть в центре внимания, общаться и дарить людям праздник. Вам важна эстетика и хорошая атмосфера в коллективе.<br><br><b>Идеальные пути:</b> Актер, артист, гид, event-менеджер, консультант по моде, косметолог, ведущий мероприятий, специалист по продажам."
            }
        }
    },
    "uz": {
        // --- Главная страница ---
        "heroTitle": "O'z ongingizni oching",
        "heroSubtitle": "MBTI shunchaki sinov emas. Bu sizning ichki 'kodingiz' va operatsion tizimingizni tushunish uchun kalitdir.",
        "introTitle": "<span class'neon-highlight'>MBTI nima?</span>",
        "introP1": "Myers-Briggs Tip Indikatori (MBTI) — bu Karl Gustav Yungning asarlariga asoslangan keng ma'lum psixologik modeldir. Izabel Myers va Katarina Briggs tomonidan ishlab chiqilgan ushbu tizim 'tashxis' qo'ymaydi yoki 'ko'nikmalarni' o'lchamaydi.",
        "introP2": "Uning asosiy maqsadi — sizning tug'ma **afzalliklaringizni** aniqlashdir. Xuddi siz tug'ma o'ng yoki chap qo'lda yozishni afzal ko'rganingiz kabi, sizning miyangiz ham ma'lumot to'plash va qaror qabul qilishning ma'lum usullarini afzal ko'radi.",
        "introP3": "Asosiy qoida: <strong>'Yaxshi' yoki 'yomon' tiplar yo'q.</strong> 16 ta shaxsiyat 'arxitektura'sining har biri o'ziga xos kuchli tomonlarga va potentsial 'ko'r nuqtalarga' ega. O'z tipingizni tushunish — bu o'z-o'zini rivojlantirish, muloqotni yaxshilash va yanada uyg'un munosabatlar qurish uchun vositadir.",
        
        "card1Title": "<span class='type-e'>Ekstraversiya (E)</span> / <span class='type-i'>Introvertlik (I)</span>",
        "card1Label": "Asosiy savol: Energiya manbai",
        "card1TextE": "<b>(E) Ekstravertlar</b> energiyani tashqi dunyodan oladilar. Ular ijtimoiy muloqot, faol harakat va muhokamalar orqali 'quvvatlanadilar'. Ular ko'pincha 'ovoz chiqarib o'ylaydilar'.",
        "card1TextI": "<b>(I) Introvertlar</b> energiyani ichki dunyodan to'ldiradilar. Ular yolg'izlikda, fikr yuritish va chuqur o'ylar orqali 'quvvatlanadilar'. Ular avval o'ylashni, keyin gapirishni afzal ko'radilar.",
        
        "card2Title": "<span class='type-s'>Sensorika (S)</span> / <span class='type-n'>Intuitsiya (N)</span>",
        "card2Label": "Asosiy savol: Axborot yig'ish",
        "card2TextS": "<b>(S) Sensoriklar</b> ko'rish, eshitish va ushlash mumkin bo'lgan narsalarga ishonadilar. Ular faktlarga, tafsilotlarga, amaliy tajribaga va hozirgi onga e'tibor qaratadilar.",
        "card2TextN": "<b>(N) Intuitlar</b> 'oltinchi his'ga va umumiy manzaraga ishonadilar. Ular naqshlarga, imkoniyatlarga, kelajakdagi oqibatlarga va yashirin ma'nolarga e'tibor qaratadilar.",
        
        "card3Title": "<span class='type-t'>Mantiq (T)</span> / <span class='type-f'>Hissiyot (F)</span>",
        "card3Label": "Asosiy savol: Qaror qabul qilish",
        "card3TextT": "<b>(T) Mantiqiylar</b> (Fikrlash) qarorlarni obyektiv tahlil, adolat va mantiqiy oqibatlar asosida qabul qiladilar. Ular haqiqatni xushmuomalalikdan ustun qo'yadilar.",
        "card3TextF": "<b>(F) Hissiyotchilar</b> (His-tuyg'u) o'z tanlovlarini shaxsiy qadriyatlar, hamdardlik va bu tanlovning odamlarga qanday ta'sir qilishiga asoslanib amalga oshiradilar. Ular uyg'unlik va xushmuomalalikni qadrlaydilar.",
        
        "card4Title": "<span class='type-j'>Mulohaza (J)</span> / <span class='type-p'>Idrok (P)</span>",
        "card4Label": "Asosiy savol: Hayot tarzi",
        "card4TextJ": "<b>(J) Mulohazalilar</b> tartibli va rejalashtirilgan dunyoni afzal ko'radilar. Ular tartibni, oldindan aytib bo'ladiganlikni yaxshi ko'radilar va vazifalarni 'yopish'dan zavqlanadilar.",
        "card4TextP": "<b>(P) Idrokchilar</b> moslashuvchanlik, kutilmaganlik va yangi tajribalarga ochiqlikni afzal ko'radilar. Ular yangi vaziyatlarga moslashishni, variantlarni o'rganishni va vazifalarni 'ochiq' qoldirishni yaxshi ko'radilar.",
        
        "ctaTitle": "Tahlilga tayyormisiz?",
        "ctaText": "O'z 4 harfli tilingizni bilib oling va to'liq hisobotga ega bo'ling.",
        "ctaButton": "Skanerlashni Boshlash",

        // --- Страница Квиза ---
        "quizTitle": "Savol {current} / {total}",
        "backButton": "← Ortga",
        "quizLoading": "Tahlil tugallandi. Sizning profilingiz yaratilmoqda...",
        "quizAlert": "Siz bir yoki bir nechta savolni o'tkazib yubordingiz. Biz sizni birinchi o'tkazib yuborilgan savolga qaytaramiz.",
        "quizLabels": [
            "Qat'iyan qo'shilmayman",
            "Qo'shilmayman",
            "Neytral",
            "Qo'shilaman",
            "To'liq qo'shilaman"
        ],
        "quizQuestions": [
            { "text": "Katta guruh bilan faol muloqotdan so'ng kuch to'lqinini his qilasiz.", "dichotomy": "E/I", "direction": 1 },
            { "text": "Nazariy tushunchalardan ko'ra amaliy tajribangizga ko'proq ishonasiz.", "dichotomy": "S/N", "direction": 1 },
            { "text": "Qaror qabul qilishda, odamlarning hissiyotlaridan ko'ra obyektiv haqiqat va mantiqni birinchi o'ringa qo'yasiz.", "dichotomy": "T/F", "direction": 1 },
            { "text": "Oldindan tuzilgan aniq reja asosida ishlash siz uchun qulayroq.", "dichotomy": "J/P", "direction": 1 },
            { "text": "Tez-tez 'qayta quvvat olish' uchun yolg'iz vaqt o'tkazishingiz kerak.", "dichotomy": "E/I", "direction": -1 },
            { "text": "Siz mavhum g'oyalar, falsafa va kelajak imkoniyatlarini muhokama qilishni yoqtirasiz.", "dichotomy": "S/N", "direction": -1 },
            { "text": "Siz uchun o'z haqligingizni isbotlashdan ko'ra, jamoada uyg'unlikni saqlash muhimroq.", "dichotomy": "T/F", "direction": -1 },
            { "text": "Siz ishlarni 'ochiq' qoldirishni va kutilmagan o'zgarishlarga osongina moslashishni afzal ko'rasiz.", "dichotomy": "J/P", "direction": -1 },
            { "text": "Bazmlarda siz notanish odamlar bilan birinchi bo'lib tanishishga moyilsiz.", "dichotomy": "E/I", "direction": 1 },
            { "text": "Siz gipotezalar haqida emas, balki aniq, real voqealar haqida gapirishni afzal ko'rasiz.", "dichotomy": "S/N", "direction": 1 },
            { "text": "Ziddiyatli vaziyatda obyektiv va xolis bo'lish siz uchun oson.", "dichotomy": "T/F", "direction": 1 },
            { "text": "Siz bajariladigan ishlar ro'yxatini (to-do lists) tuzishdan va ularni o'chirishdan zavqlanasiz.", "dichotomy": "J/P", "direction": 1 },
            { "text": "Siz katta kompaniyadan ko'ra 1-2 yaqin do'stingiz bilan muloqot qilishni afzal ko'rasiz.", "dichotomy": "E/I", "direction": -1 },
            { "text": "Siz ko'pincha tafsilotlardan ko'ra yashirin ma'nolar va 'umumiy manzara' haqida o'ylaysiz.", "dichotomy": "S/N", "direction": -1 },
            { "text": "Siz ko'pincha shaxsiy qadriyatlaringiz va boshqalarga hamdardlik asosida qaror qabul qilasiz.", "dichotomy": "T/F", "direction": -1 },
            { "text": "Ta'tilda qat'iy marshrut o'rniga moslashuvchan jadvalga ega bo'lishni yoqtirasiz.", "dichotomy": "J/P", "direction": -1 },
            { "text": "Sizga g'oyalarni ichingizda o'ylagandan ko'ra, ularni muhokama qilib, 'ovoz chiqarib o'ylash' osonroq.", "dichotomy": "E/I", "direction": 1 },
            { "text": "Ko'rsatmalarni o'qiyotganda, ularga qadamma-qadam va sinchkovlik bilan amal qilishni afzal ko'rasiz.", "dichotomy": "S/N", "direction": 1 },
            { "text": "Sizni 'hissiyotsiz' deb atashlaridan ko'ra, 'mantiqsiz' deb atashlari ko'proq xafa qiladi.", "dichotomy": "T/F", "direction": 1 },
            { "text": "Sizning ish stolingiz, odatda, juda tartibli va sarishtali.", "dichotomy": "J/P", "direction": 1 },
            { "text": "Uzoq davom etgan ijtimoiy muloqotdan keyin o'zingizni ko'pincha holsiz his qilasiz.", "dichotomy": "E/I", "direction": -1 },
            { "text": "Siz o'z intuitsiyangizga, hatto u faktlarga zid bo'lsa ham, ishonishga moyilsiz.", "dichotomy": "S/N", "direction": -1 },
            { "text": "Odamlarning hafsalasini pir qilishdan qo'rqqaningiz uchun 'yo'q' deyishga qiynalasiz.", "dichotomy": "T/F", "direction": -1 },
            { "text": "'Nima bo'lishini ko'rish' uchun qaror qabul qilishni ko'pincha kechiktirasiz.", "dichotomy": "J/P", "direction": -1 },
            { "text": "Tadbirda diqqat markazida bo'lishni afzal ko'rasiz.", "dichotomy": "E/I", "direction": 1 },
            { "text": "Siz tasavvur va ijodkorlikdan ko'ra realizm va amaliylikni qadrlaysiz.", "dichotomy": "S/N", "direction": 1 },
            { "text": "Sizningcha, samaradorlik hamkorlikdan muhimroq.", "dichotomy": "T/F", "direction": 1 },
            { "text": "Agar kuningiz uchun aniq rejangiz bo'lmasa, stressni his qilasiz.", "dichotomy": "J/P", "direction": 1 },
            { "text": "Guruh suhbatida gapirishdan ko'ra tinglash siz uchun qulayroq.", "dichotomy": "E/I", "direction": -1 },
            { "text": "Siz ko'pincha kelajak haqida xayol surib o'tirasiz.", "dichotomy": "S/N", "direction": -1 },
            { "text": "Yig'layotgan odamning muammosini hal qilishga urinishdan oldin unga tasalli berishga harakat qilasiz.", "dichotomy": "T/F", "direction": -1 },
            { "text": "Siz yangi loyihalarni boshlashni yoqtirasiz, lekin ularni tugatish sizga zerikarli tuyuladi.", "dichotomy": "J/P", "direction": -1 },
            { "text": "Siz notanish odamlar bilan osongina suhbat boshlaysiz.", "dichotomy": "E/I", "direction": 1 },
            { "text": "Siz mavhum nazariyalardan ko'ra aniq ma'lumotlar bilan ishlashni afzal ko'rasiz.", "dichotomy": "S/N", "direction": 1 },
            { "text": "Har qanday vaziyatda mantiqiy bo'lib qolish qobiliyatingiz bilan faxrlanasiz.", "dichotomy": "T/F", "direction": 1 },
            { "text": "Sizga barcha ishlar hal qilingan va iloji boricha tezroq 'yopilgan' bo'lishi yoqadi.", "dichotomy": "J/P", "direction": 1 },
            { "text": "Sizning fikringiz ko'pchiliknikiga to'g'ri kelmasa, odatda uni o'zingizda saqlaysiz.", "dichotomy": "E/I", "direction": -1 },
            { "text": "Sizni tom ma'nodagi ma'nolardan ko'ra ramzlar va metaforalar ko'proq qiziqtiradi.", "dichotomy": "S/N", "direction": -1 },
            { "text": "Sizningcha, qaror qabul qilishda har bir insonning his-tuyg'ularini hisobga olish muhim.", "dichotomy": "T/F", "direction": -1 },
            { "text": "Siz ko'pincha 'kayfiyatga qarab' kutilmagan qarorlar qabul qilasiz.", "dichotomy": "J/P", "direction": -1 }
        ],

        // --- Страница Результатов (Узбекский) ---
        "resultsTab1": "Umumiy ko'rinish",
        "resultsTab2": "Kuchli va Zaif tomonlar",
        "resultsTab3": "Munosabatlar",
        "resultsTab4": "Karyera yo'llari",
        "resultsRetryButton": "Skanerlashni qayta boshlash",
        "errorTitle": "Tip topilmadi",
        "errorGroup": "Tizim xatosi",
        "errorOverview": "Profilingizni o'qishda xatolik yuz berdi. Ehtimol, siz testdan o'tmasdan to'g'ridan-to'g'ri ushbu sahifaga kirgansiz. Iltimos, orqaga qaytib, skanerlashni yakunlang.",

        // --- УЗБЕКСКАЯ БАЗА ДАННЫХ ПРОФИЛЕЙ ---
        "profileDatabase": {
            "INTJ": {
                "title": "Strateg (The Architect)", "group": "Tahlilchilar",
                "overview": "INTJ, 'Strateg' — bu analitik muammo hal qiluvchi. Siz chuqur g'oyalar va strategik rejalashtirish dunyosida yashaysiz. Siz aql, vakolat va mustaqillikni hammadan ustun qo'yasiz. Siz uchun har qanday qiyinchilik tahlil qilinishi va yutib chiqilishi kerak bo'lgan shaxmat o'yinidir. Siz befarq yoki sovuqqon bo'lib tuyulishingiz mumkin, lekin bu faqat sizning ongingiz doimo naqshlarni izlab, atrofdagi hamma narsani tahlil qilib ishlashi uchundir.",
                "strengths": "<h3>Kuchli tomonlari:</h3><ul><li>Ratsionallik va mantiq</li><li>10 qadam oldinni ko'ra bilish strategiyasi</li><li>Qat'iyatlilik va o'z xulosalariga ishonch</li><li>Yuqori mustaqillik va avtonomlik</li><li>Bilmga chanqoqlik</li></ul><h3>Zaif tomonlari:</h3><ul><li>Haddan tashqari tanqidchilik (o'ziga va boshqalarga)</li><li>Hissiyotlarni tushunish va ifodalashda qiyinchilik</li><li>Kibrga moyillik</li><li>Samarasizlik va mantiqsizlikka nisbatan sabrsizlik</li><li>Qaysarlik</li></ul>",
                "relations": "Munosabatlarda INTJ intellektual 'hamroh' qidiradi. Ular bo'sh maqtovlar yoki romantik imo-ishoralar ustasi emas, lekin sevgini sadoqat va sherigining muammolarini faol hal qilish orqali ifodalaydilar. Ularga ko'p shaxsiy makon kerak va ular halollik va to'g'riso'zlikni qadrlashadi. Ularga mustaqillikka bo'lgan ehtiyojlarini hurmat qiladigan va kelajak haqida chuqur, mazmunli suhbatlarga tayyor sherik kerak.",
                "career": "Siz innovatsiyalar, strategik rejalashtirish va tizimli tahlilni talab qiladigan karyeralarda muvaffaqiyat qozonasiz. Bir xillik — sizning dushmaningiz. Avtonom ishlashingiz va murakkab, g'ayrioddiy vazifalarni hal qilishingiz mumkin bo'lgan rollarni izlang. <br><br><b>Ideal yo'llar:</b> Olim, dasturiy ta'minot arxitektori, tizim tahlilchisi, huquqshunos, universitet professori, moliyaviy strateg, muhandis."
            },
            "INTP": {
                "title": "Olim (The Logician)", "group": "Tahlilchilar",
                "overview": "INTP, 'Olim', — bu bilimga chanqoq ixtirochi mutafakkir. Sizning ongingiz — bu g'oyalar va nazariyalar 'fabrikasi'. Siz tizimlarni tahlil qilasiz, mantiqiy nomuvofiqliklarni qidirasiz va murakkab muammolarni yaxshi ko'rasiz. Siz sokin va o'ychan ko'rinasiz, chunki ko'p vaqtingizni o'zingizning 'ong saroyingizda' yangi tushunchalarni o'rganib o'tkazasiz.",
                "strengths": "<h3>Kuchli tomonlari:</h3><ul><li>Ajoyib tahliliy aql</li><li>Obyektivlik va aniqlik</li><li>Boy tasavvur va ijodkorlik</li><li>Yangi g'oyalarga ochiqlik</li><li>Halollik</li></ul><h3>Zaif tomonlari:</h3><ul><li>Parishonxotirlik va 'bulutlarda uchish'</li><li>O'z-o'zini izolyatsiya qilishga moyillik</li><li>Qoidalar va byurokratiyaga toqatsizlik</li><li>Bir xil vazifalarni bajarishda qiyinchilik</li><li>Boshqalarning his-tuyg'ulariga befarqlik</li></ul>",
                "relations": "INTP birinchi navbatda intellektual aloqani qidiradi. Ularga his-tuyg'ularni ifodalash qiyin bo'lishi mumkin, ammo ular juda sodiqdirlar. Ularga yolg'iz fikrlash ehtiyojini hurmat qiladigan va eng g'alati va mavhum nazariyalarni muhokama qilishga tayyor sherik kerak. Ular to'g'riso'zlikni qadrlaydilar va hissiy 'dramalarni' yoqtirmaydilar.",
                "career": "Sizga intellektingizga qiyinchilik tug'diradigan va tadqiqot uchun erkinlik beradigan ish kerak. Siz qattiq doiralar va mikromenejmentni yomon ko'rasiz. Siz tizimlarni qismlarga ajratish, ularni tushunish va takomillashtirish uchun yaratilgansiz.<br><br><b>Ideal yo'llar:</b> Faylasuf, professor, dasturiy ta'minot ishlab chiquvchisi, tizim tahlilchisi, tadqiqotchi olim, matematik, iqtisodchi."
            },
            "ENTJ": {
                "title": "Qo'mondon (The Commander)", "group": "Tahlilchilar",
                "overview": "ENTJ, 'Qo'mondon', — bu tug'ma lider. Siz xarizma, qat'iyat va irodaga egasiz. Siz samarasizlikni darhol bartaraf etilishi kerak bo'lgan qiyinchilik deb bilasiz. Siz dunyoga optimallashtirilishi mumkin va kerak bo'lgan tizim sifatida qaraysiz. Siz har doim strategik fikrlaysiz va murakkab qarorlar uchun javobgarlikni olishdan qo'rqmaysiz.",
                "strengths": "<h3>Kuchli tomonlari:</h3><ul><li>Tug'ma samaradorlik va uyushqoqlik</li><li>Bukovilmas iroda kuchi</li><li>Xarizma va o'ziga ishonch</li><li>Strategik fikrlash</li><li>Boshqalarni ilhomlantirish qobiliyati</li></ul><h3>Zaif tomonlari:</h3><ul><li>Xatolarga (o'zinikiga va boshqalarnikiga) toqatsizlik</li><li>Qaysarlik va ustunlik qilish</li><li>Hissiy jihatdan sovuqqon bo'lib tuyulishi mumkin</li><li>Bo'shashishda qiyinchilik</li><li>Boshqalarni 'bosib o'tish' moyilligi</li></ul>",
                "relations": "ENTJ munosabatlarda tashabbusni o'z qo'liga oladi. Ular sherik bilan birgalikda o'sish va rivojlanishni qidiradilar va vakolat va intellektni qadrlaydilar. Ular 'aylanib yurishni' yoqtirmaydilar va muammolarni to'g'ridan-to'g'ri hal qilishni afzal ko'radilar. Ularga o'zlari kabi shuhratparast yoki hech bo'lmaganda ularning shuhratparastligini to'liq qo'llab-quvvatlaydigan sherik kerak.",
                "career": "Siz yetakchilik uchun yaratilgansiz. Sizga strategiyalar qurish, jamoalarni boshqarish va o'lchanadigan, ulug'vor maqsadlarga erishish mumkin bo'lgan rol kerak. Siz hokimiyat va mas'uliyatdan qo'rqmaysiz.<br><br><b>Ideal yo'llar:</b> Yuqori darajali rahbar, tadbirkor, huquqshunos, boshqaruv bo'yicha maslahatchi, siyosatchi, harbiy ofitser."
            },
            "ENTP": {
                "title": "Bahslashuvchi (The Debater)", "group": "Tahlilchilar",
                "overview": "ENTP, 'Bahslashuvchi', — bu maftunkor va aqlli provokator. Sizning ongingiz intellektual qiyinchiliklarni va g'oyalarni 'o'ynatishni' yaxshi ko'radi. Siz bahsdan o'zingizni tiya olmaysiz, buni mojaro emas, balki qiziqarli o'yin va haqiqatga yetish usuli deb bilasiz. Siz murakkab tushunchalarni tezda qabul qilasiz va dunyoni o'zaro bog'liq g'oyalar to'ri sifatida ko'rasiz.",
                "strengths": "<h3>Kuchli tomonlari:</h3><ul><li>Yashin tezligidagi aql</li><li>O'ziga xoslik va ixtirochilik</li><li>Xarizma va g'ayrat</li><li>Ajoyib 'aqliy hujum' ustasi</li><li>Muammoni 10 xil tomondan ko'rish qobiliyati</li></ul><h3>Zaif tomonlari:</h3><ul><li>Bir xillikka nisbatan o'ta toqatsizlik</li><li>'Bahs uchun bahslashish' moyilligi</li><li>Yomon ijrochilik (10 ta ish boshlaydi, birortasini tugatmaydi)</li><li>Bahsda boshqalarning his-tuyg'ulariga befarqlik</li><li>Oson chalg'ish</li></ul>",
                "relations": "ENTPlar maftunkor, hozirjavob va g'ayratga to'la. Ular tezda zerikib qolishadi, shuning uchun ularga intellektual o'yinlarga va sarguzashtlarga tayyor sherik kerak. Ular hozirjavoblikni qadrlaydilar va ularni nazorat qilishga urinishlarini yoqtirmaydilar. Ular bilan munosabatlar har doim g'oyalar va bahslarga to'la sarguzashtdir.",
                "career": "Sizga hech qaysi ikki kuni bir-biriga o'xshamaydigan dinamik ish kerak. Siz doimiy ravishda yangi muammolarni hal qilishni va g'oyalarni yaratishni talab qiladigan rollarda muvaffaqiyat qozonasiz. Siz 'instruksiya bo'yicha' bir xil ish uchun yaratilmagansiz.<br><br><b>Ideal yo'llar:</b> Tadbirkor, advokat, psixolog, siyosiy tahlilchi, aktyor, ijodiy direktor, venchur kapitalist."
            },
            "INFJ": {
                "title": "Himoyachi (The Advocate)", "group": "Diplomatlar",
                "overview": "INFJ, 'Himoyachi', — eng kam uchraydigan shaxs tipi. Siz sokin, ammo juda qat'iyatli idealistsiz. Sizda chuqur hamdardlik hissi va odamlar va vaziyatlarni intuitiv tushunish mavjud. Siz shunchaki yashashga emas, balki bir missiyaga ega bo'lishga, dunyoni yaxshiroq qilishga intilasiz. Sizda orzumandlik va qat'iyatning noyob uyg'unligi mavjud.",
                "strengths": "<h3>Kuchli tomonlari:</h3><ul><li>Chuqur ziyraklik va intuitsiya</li><li>Haqiqiy altruizm va hamdardlik</li><li>G'oyalarga ergashishda qat'iyat va ehtiros</li><li>Ijodkorlik va ilhomlantiruvchi tabiat</li></ul><h3>Zaif tomonlari:</h3><ul><li>Tanqid va mojarolarga yuqori sezgirlik</li><li>Perfektsionizm (mukammallikka intilish)</li><li>Tez 'kuyib ketish' moyilligi</li><li>Haqiqatan tanish qiyin (juda yopiq)</li><li>Noreal kutishlar</li></ul>",
                "relations": "INFJ chuqur, deyarli ma'naviy aloqani qidiradi. Ular 'qalb egasini' xohlaydilar. Ular juda sodiq va sherigini qo'llab-quvvatlaydilar, ammo ularni haqiqatan ham tanish qiyin. Ularga ideallarini qadrlaydigan, chuqur hissiy suhbatlarga tayyor bo'lgan va vaqti-vaqti bilan 'qayta quvvat olish' uchun yolg'izlikka bo'lgan ehtiyojlarini hurmat qiladigan sherik kerak.",
                "career": "Sizga ma'noga ega bo'lgan va qadriyatlaringizga mos keladigan karyera kerak. Shunchaki 'pul ishlash' siz uchun yetarli emas. Siz odamlarga yordam berishni va dunyoni yaxshilashni xohlaysiz.<br><br><b>Ideal yo'llar:</b> Psixolog, maslahatchi, yozuvchi, ijtimoiy xodim, dizayner, NNT xodimi, o'qituvchi."
            },
            "INFP": {
                "title": "Vositachi (The Mediator)", "group": "Diplomatlar",
                "overview": "INFP, 'Vositachi', — bu she'riyatli, mehribon va fidoyi idealist. Siz o'z qadriyatlaringiz va his-tuyg'ularingiz dunyosida yashaysiz. Siz odamlarda eng yaxshi fazilatlarni ko'rasiz va chin dildan yordam berishni xohlaysiz. Sizda tasavvur va fantaziyaga to'la boy ichki dunyo bor. Siz qilayotgan har bir ishingizda uyg'unlik va ma'no izlaysiz.",
                "strengths": "<h3>Kuchli tomonlari:</h3><ul><li>Chuqur hamdardlik va g'amxo'rlik</li><li>Sahovat va altruizm</li><li>Yuqori ijodkorlik va tasavvur</li><li>O'z ideallari va qadriyatlariga sodiqlik</li></ul><h3>Zaif tomonlari:</h3><ul><li>Noreal idealizm</li><li>Tanqidga o'ta sezgirlik</li><li>Noamaliylik, bir xillik bilan bog'liq qiyinchiliklar</li><li>'O'ziga chekinish' va mojarolardan qochish moyilligi</li><li>Qattiq qarorlar qabul qilish qiyin</li></ul>",
                "relations": "INFPlar umidsiz romantiklardir. Ular 'qalb egasini' qidiradilar va ideallashtirilgan, chuqur munosabatlarga intiladilar. Ular juda sezgir va qo'llab-quvvatlovchi sheriklardir, ammo osonlikcha xafa bo'lishlari mumkin. Ularga qadriyatlarini baham ko'radigan, ijodkorligini qadrlaydigan va his-tuyg'ulariga muloyimlik bilan munosabatda bo'ladigan sherik kerak.",
                "career": "Siz o'zingizni ifoda etishga va boshqalarga yordam berishga imkon beradigan, shu bilan birga o'z qadriyatlaringizga sodiq qoladigan ishni qidirasiz. Siz qattiq korporativ muhitda muvaffaqiyat qozona olmaysiz. Sizga moslashuvchanlik va ijodiy erkinlik kerak.<br><br><b>Ideal yo'llar:</b> Yozuvchi, rassom, psixolog, fizioterapevt, muharrir, kutubxonachi, ijtimoiy xodim."
            },
            "ENFJ": {
                "title": "Murabbiy (The Protagonist)", "group": "Diplomatlar",
                "overview": "ENFJ, 'Murabbiy', — bu xarizmatik va ilhomlantiruvchi lider. Sizda odamlarni tushunish, ularni rag'batlantirish va o'zingizga ergashtirish uchun tug'ma qobiliyat mavjud. Siz ehtiros va hamdardlikka to'lasiz, va sizning asosiy istagingiz — boshqalarga o'z salohiyatini ochishga yordam berish. Siz har qanday guruhning ijtimoiy markazisiz, iliqlik va ishonch taratasiz.",
                "strengths": "<h3>Kuchli tomonlari:</h3><ul><li>Ajoyib hamdardlik va sezgirlik</li><li>Tug'ma etakchilik va xarizma</li><li>Altruizm va yordam berish istagi</li><li>A'lo darajadagi muloqot qobiliyatlari</li><li>Uyushqoqlik</li></ul><h3>Zaif tomonlari:</h3><ul><li>Haddan tashqari ideallik</li><li>'Yordam berish' istagida haddan tashqari intiluvchan bo'lishi mumkin</li><li>(Ma'qullash olmasa) past o'z-o'zini baholash</li><li>'Qattiq' qarorlar qabul qilishda qiyinchiliklar</li><li>Manipulyatsiyaga moyillik (ba'zan ongsiz ravishda)</li></ul>",
                "relations": "ENFJ juda g'amxo'r, samimiy va qo'llab-quvvatlovchi sheriklardir. Ular munosabatlarni birinchi o'ringa qo'yadilar va ularning uyg'unligi uchun ko'p ishlashga tayyorlar. Ba'zan ular o'z g'amxo'rligida haddan tashqari intiluvchan bo'lishi mumkin. Ularga qo'llab-quvvatlashlarini qadrlaydigan, shuningdek, o'zlari haqida ham g'amxo'rlik qilish zarurligini eslatib turadigan sherik kerak.",
                "career": "Siz odamlar bilan ishlash uchun yaratilgansiz. Sizning ishingiz boshqalarning hayotiga qanday qilib yaxshilik uchun bevosita ta'sir qilishini ko'rishingiz kerak. Siz ajoyib motivator va tashkilotchisiz.<br><br><b>Ideal yo'llar:</b> O'qituvchi, siyosatchi, PR menejeri, tadbir menejeri, rivojlanish bo'yicha murabbiy, HR direktori, diplomat."
            },
            "ENFP": {
                "title": "Kurashchi (The Campaigner)", "group": "Diplomatlar",
                "overview": "ENFP, 'Kurashchi', — bu ijodkor, kirishimli va erkinlikni sevuvchi ruh. Siz g'ayratga to'lasiz va hayotni imkoniyatlarga to'la katta sarguzasht sifatida ko'rasiz. Siz odamlar bilan osongina til topishasiz va yangi g'oyalarni yaratishni yaxshi ko'rasiz. Siz kelajak bilan yashaysiz va har doim tabassum uchun sabab topasiz.",
                "strengths": "<h3>Kuchli tomonlari:</h3><ul><li>Cheksiz qiziquvchanlik va g'ayrat</li><li>Yuqori ijodkorlik</li><li>A'lo muloqotchi va 'davra guli'</li><li>Hamdardlik va ziyraklik</li></ul><h3>Zaif tomonlari:</h3><ul><li>Yomon uyushqoqlik va tafsilotlarni yoqtirmaslik</li><li>Bir xillikdan osongina stressga tushish</li><li>Haddan tashqari hissiy va beqaror</li><li>Ishlarni oxiriga yetkazishda qiyinchiliklar</li><li>Haddan tashqari ko'ngilchanlik</li></ul>",
                "relations": "ENFPlar oson, tez va ehtiros bilan sevib qolishadi. Munosabatlarda ular qiziqarli, chuqur hissiy aloqani va ular bilan dunyoni o'rganishga tayyor sherikni qidiradilar. Ular tezda zerikib qolishadi, shuning uchun bir xillik ularning asosiy dushmani. Ularga kutilmaganligini qadrlaydigan va sarguzashtlarga tayyor sherik kerak.",
                "career": "Sizga xilma-xillik, ijodkorlik va muloqotni taklif qiladigan ish kerak. Siz qattiq jadvallar va monoton vazifalarni yomon ko'rasiz. Siz g'oyalar generatorisiz, ularni amalga oshirish uchun sizga boshqa birov kerak.<br><br><b>Ideal yo'llar:</b> Jurnalist, aktyor, PR mutaxassisi, sayyohlik agenti, ijodiy direktor, maslahatchi, tadbir menejeri."
            },
            "ISTJ": {
                "title": "Ma'mur (The Logistician)", "group": "Qo'riqchilar",
                "overview": "ISTJ, 'Ma'mur', — bu halollik, mehnatsevarlik va mas'uliyatning jonli timsoli. Siz amaliy va faktlarga asoslanasiz. Siz faktlarga, tartibga va an'analarga ishonasiz. Siz har doim so'ziga ishonish mumkin bo'lgan odamsiz. Siz osmonda qasrlar qurmaysiz, balki g'isht va tsementdan haqiqiy uylar qurishni afzal ko'rasiz.",
                "strengths": "<h3>Kuchli tomonlari:</h3><ul><li>Mutlaq halollik va to'g'riso'zlik</li><li>Aql bovar qilmaydigan mas'uliyat va ishonchlilik</li><li>Xotirjamlik, amaliylik va uslubiylik</li><li>Tafsilotlarga e'tibor</li><li>Iroda kuchi</li></ul><h3>Zaif tomonlari:</h3><ul><li>Qaysarlik va moslashmaslik</li><li>Hissiyotlarga befarqlik (o'zinikiga va boshqalarnikiga)</li><li>Hamma narsada o'zini ayblash moyilligi</li><li>Qoidalarga qat'iy rioya qilish, hatto ular eskirgan bo'lsa ham</li></ul>",
                "relations": "ISTJlar juda sodiq va sadoqatlidirlar. Ular dunyodagi eng romantik sheriklar bo'lmasligi mumkin, ammo ular sevgini harakatlar orqali ifodalaydilar: g'amxo'rlik, barqarorlik va ishonchlilik. Ular an'analarni qadrlaydilar va hayotga o'zlarining qarashlarini baham ko'radigan sherikni qidiradilar. Ular har doim suyanish mumkin bo'lgan 'qoya'dir.",
                "career": "Siz tartib, aniqlik va tartib-qoidalarga rioya qilish qadrlanadigan muhitda muvaffaqiyat qozonasiz. Sizga hamma narsa 'o'z o'rnida' bo'lishi yoqadi. Siz har qanday tashkilotning asoschisiz.<br><br><b>Ideal yo'llar:</b> Buxgalter, logist, harbiy, huquqshunos, inspektor, auditor, backend dasturchi, ma'lumotlar bazasi ma'muri."
            },
            "ISFJ": {
                "title": "Himoyachi (The Defender)", "group": "Qo'riqchilar",
                "overview": "ISFJ, 'Himoyachi', — bu juda sodiq, samimiy va ishonchli inson. Siz sezgirlik va tahlilning noyob uyg'unligisiz. Sizda, ayniqsa, odamlarga oid tafsilotlar uchun ajoyib xotira mavjud. Sizning asosiy maqsadingiz — siz sevgan insonlarni himoya qilish va ularga g'amxo'rlik qilish. Siz sokin, ammo juda mehnatkash altruistsiz.",
                "strengths": "<h3>Kuchli tomonlari:</h3><ul><li>Qo'llab-quvvatlash va g'amxo'rlik</li><li>Ajoyib ishonchlilik va mehnatsevarlik</li><li>Tafsilotlarga e'tibor va amaliylik</li><li>Rivojlangan hamdardlik va sabr-toqat</li></ul><h3>Zaif tomonlari:</h3><ul><li>Kamtarinlik va tortinchoqlik</li><li>Hamma narsani yuragiga yaqin olish</li><li>O'zini ish bilan haddan tashqari yuklash</li><li>O'zgarishni istamaslik va mojarolardan qo'rqish</li><li>Kerak bo'lmagan narsalarni ham 'himoya qilish'</li></ul>",
                "relations": "ISFJlar eng g'amxo'r va sodiq sheriklardan biridir. Ular sherigining ehtiyojlarini o'zlarinikidan ustun qo'yadilar, bu esa ba'zan 'kuyib ketish'ga olib keladi. Ular uyda uyg'unlik va barqarorlikni qadrlaydilar. Ularga g'amxo'rligini qadrlaydigan, harakatlarini sezadigan va o'zlari haqida ham g'amxo'rlik qilishga undaydigan sherik kerak.",
                "career": "Sizga o'z hamdardligingiz va tafsilotlarga e'tiboringizni aniq odamlarga yordam berish uchun ishlata oladigan ish kerak. Siz qo'llab-quvvatlovchi rollarda muvaffaqiyat qozonasiz.<br><br><b>Ideal yo'llar:</b> Hamshira, boshlang'ich sinf o'qituvchisi, ijtimoiy xodim, kadrlar bo'yicha menejer, interyer dizayneri, ma'mur."
            },
            "ESTJ": {
                "title": "Menejer (The Executive)", "group": "Qo'riqchilar",
                "overview": "ESTJ, 'Menejer', — bu tartib o'rnatishni yaxshi ko'radigan ajoyib ma'mur. Siz halollik, mehnatsevarlik va an'analar tamoyillari asosida yashaysiz. Siz odamlar va jarayonlarni boshqarishni biladigan va yaxshi ko'radigan tug'ma tashkilotchisiz. Siz faktlarni qadrlaysiz va bo'sh gaplarni yoqtirmaysiz. Siz ishlarni 'bajaradigan' odamsiz.",
                "strengths": "<h3>Kuchli tomonlari:</h3><ul><li>Ajoyib tashkilotchilik qobiliyatlari</li><li>Iroda kuchi va qat'iyatlilik</li><li>Halollik va to'g'riso'zlik</li><li>Ishonchlilik va sadoqat</li><li>Tartibsizlikdan tartib yaratish qobiliyati</li></ul><h3>Zaif tomonlari:</h3><ul><li>Moslashmaslik va qaysarlik</li><li>Hissiyotlarni ifodalashda qiyinchiliklar</li><li>Har doim haq bo'lish istagi</li><li>'Qoidalarga ko'ra' yashamaydiganlarni hukm qilish moyilligi</li><li>Dangasalikka toqatsizlik</li></ul>",
                "relations": "ESTJlar barqarorlik, sodiqlik va an'analarni qadrlaydilar. Ular munosabatlarda har doim so'zida turadigan va tartibni ta'minlaydigan ishonchli 'sardor'dir. Ular hukmron bo'lib tuyulishi mumkin, ammo bu ularning g'amxo'rlik qilish usulidir. Ularga ishonchliligini qadrlaydigan va mustahkam, barqaror oila qurishga tayyor sherik kerak.",
                "career": "Siz tug'ma menejer va ma'mursiz. Sizga aniq tuzilma, qoidalar va ierarxiyaga ega ish kerak. Siz mas'uliyatni o'z zimmangizga olishni va loyihalarni oxiriga yetkazishni yaxshi ko'rasiz.<br><br><b>Ideal yo'llar:</b> Menejer (har qanday darajada), sudya, moliyaviy direktor, harbiy ofitser, politsiyachi, maktab direktori."
            },
            "ESFJ": {
                "title": "Konsul (The Consul)", "group": "Qo'riqchilar",
                "overview": "ESFJ, 'Konsul', — bu g'oyat g'amxo'r, ijtimoiy va mashhur inson. Siz — 'davra guli'siz. Siz muloqotdan energiya olasiz va boshqalarga g'amxo'rlik qilishdan chin dildan zavqlanasiz. Siz atrofdagilarning ehtiyojlariga juda sezgirsiz va har doim yordam berishga tayyorsiz. Jamoada uyg'unlik — sizning asosiy qadriyatingiz.",
                "strengths": "<h3>Kuchli tomonlari:</h3><ul><li>Kuchli amaliy ko'nikmalar</li><li>Yuqori burch va mas'uliyat hissi</li><li>Aql bovar qilmaydigan darajada kirishimli va do'stona</li><li>Hamdardlik va g'amxo'rlik</li><li>Uyg'unlik yaratish qobiliyati</li></ul><h3>Zaif tomonlari:</h3><ul><li>Atrofdagilarning fikriga yuqori bog'liqlik</li><li>Moslashmaslik va tanqidni yoqtirmaslik</li><li>Tan olinish va minnatdorchilikka haddan tashqari ehtiyoj</li><li>Murakkab, yoqimsiz qarorlar qabul qilishda qiyinchiliklar</li></ul>",
                "relations": "ESFJ — bu uyda uyg'unlik va baxt uchun hamma narsani qiladigan ajoyib sherik. Ular o'z majburiyatlariga juda jiddiy qarashadi. Ularga o'z minnatdorchiligini ochiqchasiga bildiradigan, g'amxo'rligini qadrlaydigan va ijtimoiy hayotda faol ishtirok etadigan sherik kerak.",
                "career": "Sizga faol muloqot va odamlarga yordam berish bilan bog'liq ish kerak. Siz ajoyib tashkilotchi va jamoa o'yinchisisiz. Siz samimiy, do'stona muhitda gullab-yashnaysiz.<br><br><b>Ideal yo'llar:</b> O'qituvchi, tadbir menejeri, PR mutaxassisi, ma'mur, mijozlar bilan ishlash menejeri, hamshira."
            },
            "ISTP": {
                "title": "Virtuoz (The Virtuoso)", "group": "Tadqiqotchilar",
                "overview": "ISTP, 'Virtuoz', — bu jasur va amaliy eksperimentator. Siz narsalarni qanday ishlashini tushunish uchun ularni qismlarga ajratishni yaxshi ko'rasiz. Siz asboblar va mexanika dunyosida yashaysiz. Siz xotirjamsiz, lekin inqirozli vaziyatda yashin tezligida harakat qilasiz. Siz kitoblardan emas, balki amaliyotda o'rganadigan hamma narsaning ustasisiz.",
                "strengths": "<h3>Kuchli tomonlari:</h3><ul><li>Optimistlik va g'ayrat</li><li>Ijodkorlik va amaliylik</li><li>Inqirozli vaziyatlarda a'lo ko'nikmalar</li><li>Mantiq va sog'lom fikr</li><li>Tez o'rganish (amaliyot orqali)</li></ul><h3>Zaif tomonlari:</h3><ul><li>Qaysarlik va yopiqlik</li><li>Asossiz tavakkalga moyillik</li><li>Uzoq muddatli majburiyatlarni yoqtirmaslik</li><li>Oson zerikish</li><li>Hissiyotlarga befarqlik</li></ul>",
                "relations": "ISTPlar juda mustaqil va shaxsiy makonni yaxshi ko'radilar. Ular 'shu damda yashashni' afzal ko'radilar va uzoq muddatli rejalar tuzishni yoqtirmaydilar. Ular sevgini amaliy ishlar orqali ifodalaydilar (masalan, biror narsani tuzatish). Ularga mustaqilligini qadrlaydigan, qiziqishlarini baham ko'radigan va ularga bosim o'tkazmaydigan sherik kerak.",
                "career": "Sizga 'qo'llaringiz' bilan ishlashingiz va mehnatingizning darhol natijasini ko'rishingiz mumkin bo'lgan ish kerak. Siz nazariyani va ofisdagi bir xillikni yomon ko'rasiz. Siz harakat uchun yaratilgansiz.<br><br><b>Ideal yo'llar:</b> Mexanik, muhandis, uchuvchi, o't o'chiruvchi, dasturchi, jarroh, tizim ma'muri, detektiv."
            },
            "ISFP": {
                "title": "Rassom (The Adventurer)", "group": "Tadqiqotchilar",
                "overview": "ISFP, 'Rassom', — bu moslashuvchan va maftunkor san'atkor. Siz beshta sezgi dunyosida yashaysiz va go'zallikni barcha ko'rinishlarida qadrlaysiz. Siz kutilmagan, badiiysiz va har doim yangi narsalarni o'rganishga va sinab ko'rishga tayyorsiz. Siz so'zlar orqali emas, balki ishlar va estetika orqali o'zini ifodalaydigan sokin, ammo ehtirosli odamsiz.",
                "strengths": "<h3>Kuchli tomonlari:</h3><ul><li>Tabiiy maftunkorlik va do'stonalik</li><li>Go'zallikka va estetikaga sezgirlik</li><li>Ehtiros va qiziquvchanlik</li><li>Moslashuvchanlik va adaptatsiya</li><li>Amaliylik</li></ul><h3>Zaif tomonlari:</h3><ul><li>Oldindan aytib bo'lmaydiganlik</li><li>Tanqid yoki mojarolardan osongina stressga tushish</li><li>Haddan tashqari mustaqillik (bilish qiyin)</li><li>Yomon uzoq muddatli rejalashtirish</li><li>Past o'z-o'zini baholash</li></ul>",
                "relations": "ISFP kutilmagan, samimiy va hissiy sheriklardir. Ular erkinlikni qadrlaydilar va hayotga va go'zallikka bo'lgan ehtiroslarini baham ko'radigan sherikni qidiradilar. Ular mojarolarni yoqtirmaydilar va bosim ostida 'o'zlariga chekinishlari' mumkin. Ularga o'zini ifoda etish uchun erkinlik beradigan va dunyoga o'ziga xos qarashlarini qadrlaydigan sherik kerak.",
                "career": "Sizga go'zallik hissini ifodalashga va moslashuvchan jadvalda ishlashga imkon beradigan karyera kerak. Siz qattiq korporativ ierarxiya uchun yaratilmagansiz. Siz ish jarayonidan zavq olishni xohlaysiz.<br><br><b>Ideal yo'llar:</b> Rassom, dizayner (grafik, moda), musiqachi, florist, oshpaz, veterinar, fotograf."
            },
            "ESTP": {
                "title": "Tadbirkor (The Entrepreneur)", "group": "Tadqiqotchilar",
                "overview": "ESTP, 'Tadbirkor', — bu aqlli, g'ayratli va juda ziyrak odam. Siz 'chegarada' yashaysiz va tavakkal qilishni yaxshi ko'rasiz. Siz har qanday davraning markazidasiz, maftunkor va hozirjavobsiz. Siz odamlar va vaziyatlarni a'lo darajada 'o'qiysiz', bu sizni ajoyib muzokarachiga aylantiradi. Siz 'shu yerda va hozir' yashaysiz va nazariya qilishni yoqtirmaysiz.",
                "strengths": "<h3>Kuchli tomonlari:</h3><ul><li>Jasorat va tavakkalga moyillik</li><li>O'ziga xoslik va amaliylik</li><li>A'lo muloqot va odamlarni 'o'qish' qobiliyatlari</li><li>G'ayrat va ziyraklik</li><li>Tez qaror qabul qilish qobiliyati</li></ul><h3>Zaif tomonlari:</h3><ul><li>Sabrsizlik va impulsivlik</li><li>Tavakkalli xatti-harakatlarga moyillik</li><li>Tuzilmasizlik va rejalarni yoqtirmaslik</li><li>Boshqalarning his-tuyg'ulariga befarq bo'lishi mumkin</li><li>Oson zerikish</li></ul>",
                "relations": "ESTPlar har qanday davraning 'yulduzlari'dir. Munosabatlarda ular qiziqarli, ehtirosli va 'jinoyat sherigini' qidiradilar. Ular bir xillikdan tezda zerikadilar. Ularga xuddi shunday g'ayratli, kutilmaganlikni yaxshi ko'radigan va ularni 'qo'lga o'rgatishga' harakat qilmaydigan sherik kerak.",
                "career": "Sizga adrenalin, muloqot va tezkor qarorlarga to'la ish kerak. Siz ishlarni 'bajarish' va odamlarni ishontirish uchun tug'ilgansiz. Ofisdagi bir xillik va uzoq muddatli rejalashtirish siz uchun emas.<br><br><b>Ideal yo'llar:</b> Tadbirkor, sotuv bo'yicha mutaxassis, detektiv, kaskadyor, marketolog, investor, sport agenti."
            },
            "ESFP": {
                "title": "Ko'ngilochar (The Entertainer)", "group": "Tadqiqotchilar",
                "overview": "ESFP, 'Ko'ngilochar', — bu kutilmagan, g'ayratli va jo'shqin odam. Siz — tug'ma artistsiz va sizning yoningizda hayot hech qachon zerikarli bo'lmaydi. Siz diqqat markazida bo'lishni va odamlarga quvonch ulashishni yaxshi ko'rasiz. Siz his-tuyg'ular bilan yashaysiz, go'zallikni qadrlaysiz va har bir daqiqadan zavqlanasiz.",
                "strengths": "<h3>Kuchli tomonlari:</h3><ul><li>Tabiiy artistizm va jasorat</li><li>Estetik did</li><li>Amaliylik va topqirlik</li><li>A'lo muloqot qobiliyatlari</li><li>Optimistlik va hayotsevarlik</li></ul><h3>Zaif tomonlari:</h3><ul><li>Tanqidga o'ta sezgirlik</li><li>Yomon uzoq muddatli rejalashtirish</li><li>Oson chalg'ish va bir xillikni yoqtirmaslik</li><li>Impulsivlik</li><li>Nazariya va murakkab tushunchalarni yoqtirmaslik</li></ul>",
                "relations": "ESFP saxiy, quvnoq va juda e'tiborli hamkorlardir. Ular e'tibor, maqtovlar va sovg'alarni berishni va olishni yaxshi ko'radilar. Ular 'shu yerda va hozir' yashaydilar. Ularga qiziqarli narsalarga bo'lgan sevgisini baham ko'radigan, kutilmaganligini qadrlaydigan va ularni kelajak haqidagi jiddiy rejalar bilan 'ortiqcha yuklamaydigan' sherik kerak.",
                "career": "Sizga diqqat markazida bo'lishingiz, muloqot qilishingiz va odamlarga bayramona kayfiyat ulashishingiz mumkin bo'lgan ish kerak. Siz uchun estetika va jamoada yaxshi muhit muhim.<br><br><b>Ideal yo'llar:</b> Aktyor, artist, gid, tadbir menejeri, moda bo'yicha maslahatchi, kosmetolog, tadbir boshlovchisi, sotuv bo'yicha mutaxassis."
            }
        }
    }
};