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
    loadQuiz();
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
