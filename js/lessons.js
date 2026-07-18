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
