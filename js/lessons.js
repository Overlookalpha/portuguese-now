// =======================================
// Portuguese Now - Lessons Database
// =======================================

const lessons = {

    lesson1: {

        id: 1,
        module: 1,
        title: "The Brazilian Alphabet",
        subtitle: "Learn the Brazilian Portuguese alphabet and its pronunciation.",
        duration: "15 min",
        progress: 5,
        next: "lesson2.html"

    },

    lesson2: {

    id: 2,
    module: 1,
    title: "Brazilian Pronunciation",
    subtitle: "Learn the main sounds used in Brazilian Portuguese.",
    duration: "20 min",
    progress: 10,
    next: "lesson3.html"

},

lesson3: {

    id: 3,
    module: 1,
    title: "Greetings",
    subtitle: "Learn the most common greetings used in Brazil.",
    duration: "20 min",
    progress: 15,
    next: "lesson4.html"

},

lesson4: {

    id: 4,
    module: 1,
    title: "Introducing Yourself",
    subtitle: "Learn how to introduce yourself in Brazilian Portuguese.",
    duration: "20 min",
    progress: 20,
    next: "lesson5.html"

},

lesson5: {
    id: 5,
    module: 1,
    title: "Numbers",
    subtitle: "Learn numbers from 0 to 20 in Brazilian Portuguese.",
    duration: "20 min",
    progress: 25,
    next: "lesson6.html"
},

lesson6: {
    id: 6,
    module: 1,
    title: "Days of the Week",
    subtitle: "Learn the days of the week in Brazilian Portuguese.",
    duration: "20 min",
    progress: 30,
    next: "lesson7.html"
},

lesson7: {
    id: 7,
    module: 1,
    title: "Months and Dates",
    subtitle: "Learn months, dates and birthdays.",
    duration: "20 min",
    progress: 35,
    next: "lesson8.html"
},

lesson8: {
    id: 8,
    module: 1,
    title: "Colors",
    subtitle: "Learn the most common colors in Brazilian Portuguese.",
    duration: "20 min",
    progress: 40,
    next: "lesson9.html"
},

lesson9: {
    id: 9,
    module: 1,
    title: "Family",
    subtitle: "Learn family members and relationships.",
    duration: "20 min",
    progress: 45,
    next: "lesson10.html"
},

lesson10: {
    id: 10,
    module: 1,
    title: "Food and Drinks",
    subtitle: "Learn food, drinks and restaurant vocabulary.",
    duration: "20 min",
    progress: 50,
    next: "lesson11.html"
},

lesson11: {
    id: 11,
    module: 1,
    title: "At the Restaurant",
    subtitle: "Learn how to order food in Brazil.",
    duration: "20 min",
    progress: 55,
    next: "lesson12.html"
},

lesson12: {
    id: 12,
    module: 1,
    title: "Shopping",
    subtitle: "Learn shopping expressions and prices.",
    duration: "20 min",
    progress: 60,
    next: "lesson13.html"
},

lesson13: {
    id: 13,
    module: 1,
    title: "Asking for Directions",
    subtitle: "Learn how to ask and understand directions.",
    duration: "20 min",
    progress: 65,
    next: "lesson14.html"
},

lesson14: {
    id: 14,
    module: 1,
    title: "Transportation",
    subtitle: "Learn transportation vocabulary.",
    duration: "20 min",
    progress: 70,
    next: "lesson15.html"
},

lesson15: {
    id: 15,
    module: 1,
    title: "Time and Schedule",
    subtitle: "Learn how to tell the time and make appointments.",
    duration: "20 min",
    progress: 75,
    next: "lesson16.html"
},

lesson16: {
    id: 16,
    module: 1,
    title: "Weather",
    subtitle: "Learn to talk about the weather.",
    duration: "20 min",
    progress: 80,
    next: "lesson17.html"
},

lesson17: {
    id: 17,
    module: 1,
    title: "Daily Routine",
    subtitle: "Learn common daily routine expressions.",
    duration: "20 min",
    progress: 85,
    next: "lesson18.html"
},

lesson18: {
    id: 18,
    module: 1,
    title: "Present Tense Basics",
    subtitle: "Learn the basics of the present tense.",
    duration: "20 min",
    progress: 90,
    next: "lesson19.html"
},

lesson19: {
    id: 19,
    module: 1,
    title: "Common Conversations",
    subtitle: "Practice real-life conversations.",
    duration: "20 min",
    progress: 95,
    next: "lesson20.html"
},

lesson20: {
    id: 20,
    module: 1,
    title: "Final Review & Certificate",
    subtitle: "Review everything you've learned and complete Module 1.",
    duration: "30 min",
    progress: 100,
    next: null
}
    
};

const listeningQuestions = [

{
audio:"Casa",
options:[
    {
        word:"Casa",
        emoji:"🏠"
    },
    {
        word:"Cama",
        emoji:"🛏️"
    },
    {
        word:"Carro",
        emoji:"🚗"
    },
    {
        word:"Copo",
        emoji:"🥤"
    }
],
correct:0
},

{
audio:"Janela",
options:[
    {
        word:"Porta",
        emoji:"🚪"
    },
    {
        word:"Janela",
        emoji:"🪟"
    },
    {
        word:"Mesa",
        emoji:"🪑"
    },
    {
        word:"Livro",
        emoji:"📚"
    }
],
correct:1
},

{
audio:"Rua",
options:[
    {
        word:"Rua",
        emoji:"🛣️"
    },
    {
        word:"Casa",
        emoji:"🏠"
    },
    {
        word:"Escola",
        emoji:"🏫"
    },
    {
        word:"Praia",
        emoji:"🏖️"
    }
],
correct:0
},

{
audio:"Livro",
options:[
    {
        word:"Livro",
        emoji:"📚"
    },
    {
        word:"Caneta",
        emoji:"🖊️"
    },
    {
        word:"Bola",
        emoji:"⚽"
    },
    {
        word:"Carro",
        emoji:"🚗"
    }
],
correct:0
},

{
audio:"Gato",
options:[
    {
        word:"Cachorro",
        emoji:"🐶"
    },
    {
        word:"Gato",
        emoji:"🐱"
    },
    {
        word:"Pássaro",
        emoji:"🐦"
    },
    {
        word:"Peixe",
        emoji:"🐟"
    }
],
correct:1
}

];
const lesson1Quiz = [
{
question:"How many letters does the Brazilian alphabet have?",
options:["24","26","28"],
correct:1
},
{
question:"Which letter is usually silent?",
options:["J","X","H"],
correct:2
},
{
question:"At the beginning of a word, the Brazilian R sounds like...",
options:["English R","English H","Spanish R"],
correct:1
},
{
question:"Which word means House?",
options:["Casa","Livro","Janela"],
correct:0
},
{
question:"Which word means Window?",
options:["Livro","Janela","Rua"],
correct:1
},
{
question:"Which word means Book?",
options:["Livro","Casa","Hotel"],
correct:0
},
{
question:"Which word means Street?",
options:["Rua","Mesa","Hotel"],
correct:0
},
{
question:"Which word means Ice?",
options:["Gelo","Fogo","Água"],
correct:0
},
{
question:"Which letter can have different sounds?",
options:["B","X","M"],
correct:1
},
{
question:"Which word starts with a silent H?",
options:["Hotel","Rua","Casa"],
correct:0
},
{
question:"Which letter sounds like the English sound in 'measure'?",
options:["J","T","P"],
correct:0
},
{
question:"Which word means Cup?",
options:["Livro","Xícara","Mesa"],
correct:1
},
{
question:"How many vowels are there?",
options:["4","5","6"],
correct:1
},
{
question:"Which is a vowel?",
options:["B","A","T"],
correct:1
},
{
question:"Which letter comes after M?",
options:["L","N","O"],
correct:1
}
];

const lesson2Quiz = [

{
question:"How many vowels are there in Brazilian Portuguese?",
options:["4","5","6"],
correct:1
},

{
question:"Which vowel sounds like 'ah'?",
options:["A","E","I"],
correct:0
},

{
question:"Which combination sounds like 'sh'?",
options:["CH","LH","NH"],
correct:0
},

{
question:"Which word contains the NH sound?",
options:["Filho","Manhã","Casa"],
correct:1
},

{
question:"Which word contains the LH sound?",
options:["Carro","Filho","Amor"],
correct:1
},

{
question:"The word 'Carro' uses:",
options:["Soft R","Strong R","Silent R"],
correct:1
},

{
question:"The letter Ç sounds like:",
options:["S","Z","CH"],
correct:0
},

{
question:"Brazilian vowels are usually:",
options:["Silent","Clear","Optional"],
correct:1
},

{
question:"The X in 'Peixe' sounds like:",
options:["SH","KS","Z"],
correct:0
},

{
question:"The X in 'Táxi' sounds like:",
options:["KS","SH","H"],
correct:0
},

{
question:"What should you do before speaking?",
options:["Listen","Translate","Read"],
correct:0
},

{
question:"Which word contains RR?",
options:["Carro","Casa","Rua"],
correct:0
},

{
question:"Which word contains CH?",
options:["Chuva","Filho","Manhã"],
correct:0
},

{
question:"How many times should you repeat a new word?",
options:["1","3","5 or more"],
correct:2
},

{
question:"The best way to improve pronunciation is:",
options:[
"Practice every day",
"Study once a month",
"Only read"
],
correct:0
}

];

const lesson3Quiz = [

{
question:"How do you say 'Hello' in Portuguese?",
options:["Olá","Tchau","Obrigado"],
correct:0
},

{
question:"Which greeting is commonly used with friends?",
options:["Oi","Boa tarde","Boa noite"],
correct:0
},

{
question:"What does 'Bom dia' mean?",
options:["Good evening","Good morning","Goodbye"],
correct:1
},

{
question:"When do you normally say 'Boa tarde'?",
options:["Morning","Afternoon","Late night"],
correct:1
},

{
question:"When is 'Boa noite' used?",
options:["Only in the morning","In the evening or before bed","Only at noon"],
correct:1
},

{
question:"How do you say 'Goodbye'?",
options:["Até amanhã","Tchau","Olá"],
correct:1
},

{
question:"What does 'Até logo' mean?",
options:["See you later","Good morning","Thank you"],
correct:0
},

{
question:"What does 'Até amanhã' mean?",
options:["See you tomorrow","See you tonight","Good afternoon"],
correct:0
},

{
question:"Which greeting is suitable in almost every situation?",
options:["Oi","Olá","Tchau"],
correct:1
},

{
question:"'Oi' is considered:",
options:["Formal","Informal","Old-fashioned"],
correct:1
},

{
question:"Which greeting is used after lunch?",
options:["Bom dia","Boa tarde","Boa noite"],
correct:1
},

{
question:"Brazilians are generally:",
options:["Reserved","Friendly","Silent"],
correct:1
},

{
question:"What usually helps make a good first impression?",
options:["Ignoring people","Using the correct greeting","Speaking loudly"],
correct:1
},

{
question:"How should you improve your greetings?",
options:["Practice every day","Only study grammar","Never speak aloud"],
correct:0
},

{
question:"Greetings are important because:",
options:["They start conversations","They replace grammar","They are optional"],
correct:0
}

];

const lesson4Quiz = [

{
question:"How do you say 'My name is...' in Portuguese?",
options:["Meu nome é...","Eu moro em...","Eu sou de..."],
correct:0
},

{
question:"How do you say 'I am...'?",
options:["Eu sou...","Eu falo...","Eu moro..."],
correct:0
},

{
question:"How do you say 'I am from...'?",
options:["Eu moro em...","Eu sou de...","Meu nome é..."],
correct:1
},

{
question:"How do you say 'I live in...'?",
options:["Eu moro em...","Eu sou de...","Eu falo..."],
correct:0
},

{
question:"How do you say 'I speak English'?",
options:["Eu falo inglês.","Eu moro em inglês.","Meu inglês é."],
correct:0
},

{
question:"How do you say 'I am learning Portuguese'?",
options:["Estou aprendendo português.","Eu ensino português.","Eu gosto de português."],
correct:0
},

{
question:"How do you ask 'What is your name?'",
options:["Qual é o seu nome?","Onde você mora?","Quantos anos você tem?"],
correct:0
},

{
question:"How do you ask 'Where are you from?'",
options:["De onde você é?","Onde você mora?","Qual é o seu nome?"],
correct:0
},

{
question:"How do you ask 'Where do you live?'",
options:["Onde você mora?","Como você está?","De onde você é?"],
correct:0
},

{
question:"How do you ask 'How old are you?'",
options:["Quantos anos você tem?","Qual é o seu nome?","Você fala inglês?"],
correct:0
},

{
question:"Brazilians usually introduce themselves using:",
options:["Their first name","Their last name only","A nickname only"],
correct:0
},

{
question:"Which sentence means 'I live in São Paulo'?",
options:["Eu moro em São Paulo.","Eu sou de São Paulo.","Meu nome é São Paulo."],
correct:0
},

{
question:"Which sentence means 'I am from Brazil'?",
options:["Eu sou do Brasil.","Eu moro no Brasil.","Eu falo Brasil."],
correct:0
},

{
question:"A good introduction should be:",
options:["Polite and friendly","Very loud","Very fast"],
correct:0
},

{
question:"The best way to improve introductions is:",
options:["Practice speaking every day","Only memorize grammar","Never speak aloud"],
correct:0
}

];

// =======================================
// Lesson 5 Quiz
// =======================================

const lesson5Quiz = [

{
question:"How do you say number 0 in Portuguese?",
options:["Zero","Um","Dez"],
correct:0
},

{
question:"How do you say number 1?",
options:["Dois","Um","Cinco"],
correct:1
},

{
question:"How do you say number 2?",
options:["Dois","Três","Quatro"],
correct:0
},

{
question:"How do you say number 3?",
options:["Cinco","Quatro","Três"],
correct:2
},

{
question:"How do you say number 5?",
options:["Cinco","Seis","Sete"],
correct:0
},

{
question:"How do you say number 7?",
options:["Seis","Sete","Oito"],
correct:1
},

{
question:"How do you say number 10?",
options:["Nove","Onze","Dez"],
correct:2
},

{
question:"Which number is 'Onze'?",
options:["10","11","12"],
correct:1
},

{
question:"Which number is 'Doze'?",
options:["11","12","13"],
correct:1
},

{
question:"Which number is 'Treze'?",
options:["13","14","15"],
correct:0
},

{
question:"How do you say number 15?",
options:["Treze","Quatorze","Quinze"],
correct:2
},

{
question:"Which number is 'Dezessete'?",
options:["16","17","18"],
correct:1
},

{
question:"Which number is 'Dezoito'?",
options:["17","18","19"],
correct:1
},

{
question:"Which number is 'Dezenove'?",
options:["18","19","20"],
correct:1
},

{
question:"How do you say number 20?",
options:["Dezenove","Vinte","Trinta"],
correct:1
}

];

// =======================================
// Lesson 6 Quiz
// =======================================

const lesson6Quiz = [

{
question:"How do you say Monday in Portuguese?",
options:["Segunda-feira","Sexta-feira","Domingo"],
correct:0
},

{
question:"How do you say Tuesday?",
options:["Terça-feira","Quarta-feira","Quinta-feira"],
correct:0
},

{
question:"How do you say Friday?",
options:["Quinta-feira","Sexta-feira","Sábado"],
correct:1
},

{
question:"How do you say Sunday?",
options:["Domingo","Sábado","Segunda-feira"],
correct:0
},

{
question:"Which month is 'Janeiro'?",
options:["January","June","July"],
correct:0
},

{
question:"Which month is 'Março'?",
options:["March","May","April"],
correct:0
},

{
question:"Which month is 'Julho'?",
options:["June","July","August"],
correct:1
},

{
question:"Which month is 'Dezembro'?",
options:["November","December","October"],
correct:1
},

{
question:"How do you say 'Today is Monday'?",
options:[
"Hoje é segunda-feira.",
"Hoje é domingo.",
"Hoje é sexta-feira."
],
correct:0
},

{
question:"How do you say 'My birthday is in February'?",
options:[
"Meu aniversário é em fevereiro.",
"Meu aniversário é em março.",
"Meu aniversário é em janeiro."
],
correct:0
},

{
question:"In Portuguese, days of the week are usually written with:",
options:[
"Capital letters",
"Lowercase letters",
"Only abbreviations"
],
correct:1
},

{
question:"What comes after Wednesday?",
options:[
"Tuesday",
"Thursday",
"Friday"
],
correct:1
},

{
question:"What comes before Sunday?",
options:[
"Friday",
"Saturday",
"Monday"
],
correct:1
},

{
question:"How do you say August?",
options:[
"Agosto",
"Abril",
"Outubro"
],
correct:0
},

{
question:"How do you say October?",
options:[
"Outubro",
"Novembro",
"Setembro"
],
correct:0
}

];
let currentChallenge = 0;



function loadChallenge() {

    const question = listeningQuestions[currentChallenge];

    document.getElementById("challengeQuestion").textContent =
        `Question ${currentChallenge + 1} of ${listeningQuestions.length}`;

    const optionsDiv = document.querySelector(".challenge-options");

    optionsDiv.innerHTML = "";

    question.options.forEach((option, index) => {

    const word = typeof option === "string" ? option : option.word;

     const emoji = typeof option === "string" ? "❓" : option.emoji;
        
    optionsDiv.innerHTML += `
    <div class="challenge-card" onclick="checkChallenge(${index})">

        <div class="challenge-image">
    ${emoji}
        </div>

        <h3>${word}</h3>

    </div>
`;
});

    document.getElementById("challengeFeedback").textContent = "";
    document.getElementById("nextChallenge").style.display = "none";

}

function playChallengeAudio() {

    const question = listeningQuestions[currentChallenge];

    speakLetter(question.audio);

}

function checkChallenge(selected) {

    const question = listeningQuestions[currentChallenge];

    const feedback = document.getElementById("challengeFeedback");

    if (selected === question.correct) {

        feedback.innerHTML =
            "✅ Correct! Great job!";

    } else {

        feedback.innerHTML =
            "❌ Incorrect. Try the next question.";

    }

    document.getElementById("nextChallenge").style.display = "inline-block";

}

function nextChallenge() {

    currentChallenge++;

    if (currentChallenge >= listeningQuestions.length) {

        document.getElementById("challengeBox").innerHTML = `
            <h2>🎉 Congratulations!</h2>
            <p>You completed the Listening Challenge.</p>
        `;

        return;

    }

    loadChallenge();

}

document.addEventListener("DOMContentLoaded", () => {

    if (document.getElementById("challengeBox")) {
        loadChallenge();
    }

});

window.checkChallenge = checkChallenge;
window.playChallengeAudio = playChallengeAudio;
window.nextChallenge = nextChallenge;

// =======================================
// Lesson 1 Quiz
// =======================================

let currentQuizQuestion = 0;

function loadQuiz() {

    const container = document.getElementById("quizQuestions");

    if (!container) return;

    const question = lesson1Quiz[currentQuizQuestion];

    let html = `
        <h3>Question ${currentQuizQuestion + 1} of ${lesson1Quiz.length}</h3>
        <p>${question.question}</p>
    `;

    question.options.forEach((option, index) => {
        html += `
            <label>
                <input type="radio" name="quiz" value="${index}">
                ${option}
            </label><br><br>
        `;
    });

    container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {

    if (document.getElementById("quizContainer")) {

       if (window.location.pathname.includes("lesson6")) {

    loadLesson6Quiz();

} else if (window.location.pathname.includes("lesson5")) {

    loadLesson5Quiz();

} else if (window.location.pathname.includes("lesson4")) {

    loadLesson4Quiz();

} else if (window.location.pathname.includes("lesson3")) {

    loadLesson3Quiz();

} else if (window.location.pathname.includes("lesson2")) {

    loadLesson2Quiz();

} else {

    loadQuiz();

}
    }

    if (document.getElementById("challengeBox")) {
        loadChallenge();
    }

});

let quizScore = 0;

function checkLesson1Quiz() {

    const selected = document.querySelector('input[name="quiz"]:checked');

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    if (parseInt(selected.value) === lesson1Quiz[currentQuizQuestion].correct) {
        quizScore++;
        document.getElementById("quizResult").innerHTML = "✅ Correct!";
    } else {
        document.getElementById("quizResult").innerHTML = "❌ Incorrect!";
    }

    setTimeout(() => {

        currentQuizQuestion++;

        if (currentQuizQuestion < lesson1Quiz.length) {

            loadQuiz();
            document.getElementById("quizResult").innerHTML = "";

        } else {

    document.getElementById("quizContainer").innerHTML = `
        <h2>🎉 Lesson 1 Completed!</h2>

        <p><strong>Correct:</strong> ${quizScore}</p>
        <p><strong>Incorrect:</strong> ${lesson1Quiz.length - quizScore}</p>
        <p><strong>Score:</strong> ${Math.round((quizScore / lesson1Quiz.length) * 100)}%</p>

        <br>

        <button class="hero-button" onclick="location.reload()">
            🔄 Retake Quiz
        </button>

        <br><br>

        <button class="hero-button" onclick="finishLesson1()">
            ➜ Continue to Lesson 2
        </button>
    `;

    document.getElementById("quizResult").innerHTML = "";
    document.getElementById("checkAnswerBtn").style.display = "none";
}

    }, 1000);

}

window.checkLesson1Quiz = checkLesson1Quiz;

async function finishLesson1() {

    const { completeLesson } = await import("./progress.js");

    await completeLesson(1);

}

window.finishLesson1 = finishLesson1;

// =======================================
// Lesson 2 Quiz
// =======================================

let currentLesson2Question = 0;
let lesson2Score = 0;

function loadLesson2Quiz() {

    const container = document.getElementById("quizQuestions");

    if (!container) return;

    const question = lesson2Quiz[currentLesson2Question];

    let html = `
        <h3>Question ${currentLesson2Question + 1} of ${lesson2Quiz.length}</h3>
        <p>${question.question}</p>
    `;

    question.options.forEach((option, index) => {

        html += `
            <label>
                <input type="radio" name="lesson2quiz" value="${index}">
                ${option}
            </label><br><br>
        `;

    });

    container.innerHTML = html;

}

function checkLesson2Quiz() {

    const selected = document.querySelector('input[name="lesson2quiz"]:checked');

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    if (parseInt(selected.value) === lesson2Quiz[currentLesson2Question].correct) {
        lesson2Score++;
        document.getElementById("quizResult").innerHTML = "✅ Correct!";
    } else {
        document.getElementById("quizResult").innerHTML = "❌ Incorrect!";
    }

    setTimeout(() => {

        currentLesson2Question++;

        if (currentLesson2Question < lesson2Quiz.length) {

            loadLesson2Quiz();
            document.getElementById("quizResult").innerHTML = "";

        } else {

            document.getElementById("quizContainer").innerHTML = `
                <h2>🎉 Lesson 2 Completed!</h2>

                <p><strong>Correct:</strong> ${lesson2Score}</p>
                <p><strong>Incorrect:</strong> ${lesson2Quiz.length - lesson2Score}</p>
                <p><strong>Score:</strong> ${Math.round((lesson2Score / lesson2Quiz.length) * 100)}%</p>

                <br>

                <button class="hero-button" onclick="location.reload()">
                    🔄 Retake Quiz
                </button>

                <br><br>

                <button class="hero-button" onclick="finishLesson2()">
                    ➜ Continue to Lesson 3
                </button>
            `;

            document.getElementById("quizResult").innerHTML = "";

            const btn = document.getElementById("checkAnswerBtn");
            if (btn) btn.style.display = "none";
        }

    }, 1000);

}

window.checkLesson2Quiz = checkLesson2Quiz;

async function finishLesson2() {

    const { completeLesson } = await import("./progress.js");

    await completeLesson(2);

}

window.finishLesson2 = finishLesson2;

// =======================================
// Lesson 3 Quiz
// =======================================

let currentLesson3Question = 0;
let lesson3Score = 0;

function loadLesson3Quiz() {

    const container = document.getElementById("quizQuestions");

    if (!container) return;

    const question = lesson3Quiz[currentLesson3Question];

    let html = `
        <h3>Question ${currentLesson3Question + 1} of ${lesson3Quiz.length}</h3>
        <p>${question.question}</p>
    `;

    question.options.forEach((option, index) => {

        html += `
            <label>
                <input type="radio" name="lesson3quiz" value="${index}">
                ${option}
            </label><br><br>
        `;

    });

    container.innerHTML = html;

}

function checkLesson3Quiz() {

    const selected = document.querySelector('input[name="lesson3quiz"]:checked');

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    if (parseInt(selected.value) === lesson3Quiz[currentLesson3Question].correct) {
        lesson3Score++;
        document.getElementById("quizResult").innerHTML = "✅ Correct!";
    } else {
        document.getElementById("quizResult").innerHTML = "❌ Incorrect!";
    }

    setTimeout(() => {

        currentLesson3Question++;

        if (currentLesson3Question < lesson3Quiz.length) {

            loadLesson3Quiz();
            document.getElementById("quizResult").innerHTML = "";

        } else {

            document.getElementById("quizContainer").innerHTML = `
                <h2>🎉 Lesson 3 Completed!</h2>

                <p><strong>Correct:</strong> ${lesson3Score}</p>
                <p><strong>Incorrect:</strong> ${lesson3Quiz.length - lesson3Score}</p>
                <p><strong>Score:</strong> ${Math.round((lesson3Score / lesson3Quiz.length) * 100)}%</p>

                <br>

                <button class="hero-button" onclick="location.reload()">
                    🔄 Retake Quiz
                </button>

                <br><br>

                <button class="hero-button" onclick="finishLesson3()">
                    ➜ Continue to Lesson 4
                </button>
            `;

           const result = document.getElementById("quizResult");
if (result) {
    result.innerHTML = "";
}

const btn = document.getElementById("checkAnswerBtn");
if (btn) {
    btn.style.display = "none";
}
        }

    }, 1000);

}

window.checkLesson3Quiz = checkLesson3Quiz;

async function finishLesson3() {

    const { completeLesson } = await import("./progress.js");

    await completeLesson(3);

}

window.finishLesson3 = finishLesson3;

// =======================================
// Lesson 4 Quiz
// =======================================

let currentLesson4Question = 0;
let lesson4Score = 0;

function loadLesson4Quiz() {

    const container = document.getElementById("quizQuestions");

    if (!container) return;

    const question = lesson4Quiz[currentLesson4Question];

    let html = `
        <h3>Question ${currentLesson4Question + 1} of ${lesson4Quiz.length}</h3>
        <p>${question.question}</p>
    `;

    question.options.forEach((option, index) => {

        html += `
            <label>
                <input type="radio" name="lesson4quiz" value="${index}">
                ${option}
            </label><br><br>
        `;

    });

    container.innerHTML = html;

}

function checkLesson4Quiz() {

    const selected = document.querySelector('input[name="lesson4quiz"]:checked');

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    if (parseInt(selected.value) === lesson4Quiz[currentLesson4Question].correct) {
        lesson4Score++;
        document.getElementById("quizResult").innerHTML = "✅ Correct!";
    } else {
        document.getElementById("quizResult").innerHTML = "❌ Incorrect!";
    }

    setTimeout(() => {

        currentLesson4Question++;

        if (currentLesson4Question < lesson4Quiz.length) {

            loadLesson4Quiz();
            document.getElementById("quizResult").innerHTML = "";

        } else {

            document.getElementById("quizContainer").innerHTML = `
                <h2>🎉 Lesson 4 Completed!</h2>

                <p><strong>Correct:</strong> ${lesson4Score}</p>
                <p><strong>Incorrect:</strong> ${lesson4Quiz.length - lesson4Score}</p>
                <p><strong>Score:</strong> ${Math.round((lesson4Score / lesson4Quiz.length) * 100)}%</p>

                <br>

                <button class="hero-button" onclick="location.reload()">
                    🔄 Retake Quiz
                </button>

                <br><br>

                <button class="hero-button" onclick="finishLesson4()">
                    ➜ Continue to Lesson 5
                </button>
            `;

            const result = document.getElementById("quizResult");
            if (result) {
                result.innerHTML = "";
            }

            const btn = document.getElementById("checkAnswerBtn");
            if (btn) {
                btn.style.display = "none";
            }
        }

    }, 1000);

}

window.checkLesson4Quiz = checkLesson4Quiz;

async function finishLesson4() {

    const { completeLesson } = await import("./progress.js");

    await completeLesson(4);

}

window.finishLesson4 = finishLesson4;

// =======================================
// Lesson 5 Quiz
// =======================================

let currentLesson5Question = 0;
let lesson5Score = 0;

function loadLesson5Quiz() {

    const container = document.getElementById("quizQuestions");

    if (!container) return;

    const question = lesson5Quiz[currentLesson5Question];

    let html = `
        <h3>Question ${currentLesson5Question + 1} of ${lesson5Quiz.length}</h3>
        <p>${question.question}</p>
    `;

    question.options.forEach((option, index) => {

        html += `
            <label>
                <input type="radio" name="lesson5quiz" value="${index}">
                ${option}
            </label><br><br>
        `;

    });

    container.innerHTML = html;

}

function checkLesson5Quiz() {

    const selected = document.querySelector('input[name="lesson5quiz"]:checked');

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    if (parseInt(selected.value) === lesson5Quiz[currentLesson5Question].correct) {
        lesson5Score++;
        document.getElementById("quizResult").innerHTML = "✅ Correct!";
    } else {
        document.getElementById("quizResult").innerHTML = "❌ Incorrect!";
    }

    setTimeout(() => {

        currentLesson5Question++;

        if (currentLesson5Question < lesson5Quiz.length) {

            loadLesson5Quiz();
            document.getElementById("quizResult").innerHTML = "";

        } else {

            document.getElementById("quizContainer").innerHTML = `
                <h2>🎉 Lesson 5 Completed!</h2>

                <p><strong>Correct:</strong> ${lesson5Score}</p>
                <p><strong>Incorrect:</strong> ${lesson5Quiz.length - lesson5Score}</p>
                <p><strong>Score:</strong> ${Math.round((lesson5Score / lesson5Quiz.length) * 100)}%</p>

                <br>

                <button class="hero-button" onclick="location.reload()">
                    🔄 Retake Quiz
                </button>

                <br><br>

                <button class="hero-button" onclick="finishLesson5()">
                    ➜ Continue to Lesson 6
                </button>
            `;

            const result = document.getElementById("quizResult");
            if (result) {
                result.innerHTML = "";
            }

            const btn = document.getElementById("checkAnswerBtn");
            if (btn) {
                btn.style.display = "none";
            }
        }

    }, 1000);

}

window.checkLesson5Quiz = checkLesson5Quiz;

async function finishLesson5() {

    const { completeLesson } = await import("./progress.js");

    await completeLesson(5);

    window.location.href = "lesson6.html";

}

window.finishLesson5 = finishLesson5;

// =======================================
// Lesson 6 Quiz
// =======================================

let currentLesson6Question = 0;
let lesson6Score = 0;

function loadLesson6Quiz() {

    const container = document.getElementById("quizQuestions");

    if (!container) return;

    const question = lesson6Quiz[currentLesson6Question];

    let html = `
        <h3>Question ${currentLesson6Question + 1} of ${lesson6Quiz.length}</h3>
        <p>${question.question}</p>
    `;

    question.options.forEach((option, index) => {

        html += `
            <label>
                <input type="radio" name="lesson6quiz" value="${index}">
                ${option}
            </label><br><br>
        `;

    });

    container.innerHTML = html;

}

function checkLesson6Quiz() {

    const selected = document.querySelector('input[name="lesson6quiz"]:checked');

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    if (parseInt(selected.value) === lesson6Quiz[currentLesson6Question].correct) {

        lesson6Score++;
        document.getElementById("quizResult").innerHTML = "✅ Correct!";

    } else {

        document.getElementById("quizResult").innerHTML = "❌ Incorrect!";

    }

    setTimeout(() => {

        currentLesson6Question++;

        if (currentLesson6Question < lesson6Quiz.length) {

            loadLesson6Quiz();
            document.getElementById("quizResult").innerHTML = "";

        } else {

            document.getElementById("quizContainer").innerHTML = `
                <h2>🎉 Lesson 6 Completed!</h2>

                <p><strong>Correct:</strong> ${lesson6Score}</p>
                <p><strong>Incorrect:</strong> ${lesson6Quiz.length - lesson6Score}</p>
                <p><strong>Score:</strong> ${Math.round((lesson6Score / lesson6Quiz.length) * 100)}%</p>

                <br>

                <button class="hero-button" onclick="location.reload()">
                    🔄 Retake Quiz
                </button>

                <br><br>

                <button class="hero-button" onclick="finishLesson6()">
                    ➜ Continue to Lesson 7
                </button>
            `;

            const result = document.getElementById("quizResult");
            if (result) {
                result.innerHTML = "";
            }

            const btn = document.getElementById("checkAnswerBtn");
            if (btn) {
                btn.style.display = "none";
            }
        }

    }, 1000);

}

window.checkLesson6Quiz = checkLesson6Quiz;

async function finishLesson6() {

    const { completeLesson } = await import("./progress.js");

    await completeLesson(6);

    window.location.href = "lesson7.html";

}

window.finishLesson6 = finishLesson6;
