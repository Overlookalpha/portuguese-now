// Portuguese Now - JavaScript
console.log("Portuguese Now carregado!");

// =======================================
// Render Beginner Modules
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    const modulesContainer = document.getElementById("modulesContainer");

    if (!modulesContainer) return;
    if (typeof courses === "undefined") return;

    const beginner = courses.beginner;

    beginner.modules.forEach(module => {

        const card = document.createElement("div");
        card.className = "course-card";

        let lessonsHTML = "";

        module.lessons.forEach(lesson => {
            lessonsHTML += `
                <li>✔️ ${lesson.title} <small>${lesson.duration}</small></li>
            `;
        });

        card.innerHTML = `
            <h3>📚 ${module.title}</h3>
            <p>${beginner.description}</p>
            <ul>
                ${lessonsHTML}
            </ul>
            <a href="lesson1.html" class="course-button">
                Start Module
            </a>
        `;

        modulesContainer.appendChild(card);

    });

}); // <-- O DOMContentLoaded termina aqui

// =======================================
// Lesson 1 Quiz
// =======================================

function checkLesson1Quiz() {

    const answers = document.getElementsByName("quiz");
    const result = document.getElementById("quizResult");

    if (answers[1].checked) {

        result.innerHTML = "✅ Correct! Lesson completed!";
        result.style.color = "#009739";

        // Salva o progresso
        localStorage.setItem("lesson1Completed", "true");

    } else {

        result.innerHTML = "❌ Incorrect. Try again!";
        result.style.color = "red";

    }

}

// =======================================
// Pronunciation
// =======================================

function speakLetter(text) {

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "pt-BR";
    speech.rate = 0.8;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

}

document.addEventListener("DOMContentLoaded", () => {

    if (localStorage.getItem("lesson1Completed") === "true") {

        const result = document.getElementById("quizResult");

        if(result){

            result.innerHTML = "🏆 Lesson already completed!";
            result.style.color = "#009739";

        }

    }
loadCourseProgress();
updateLessonMenu();
});

// =======================================
// Beginner Progress
// =======================================

function loadCourseProgress() {

    const progress = document.getElementById("courseProgress");
    const text = document.getElementById("progressText");

    if (!progress || !text) return;

    let completed = 0;

    if (localStorage.getItem("lesson1Completed") === "true") {
        completed++;
    }

    const percent = completed * 5;

    progress.value = percent;
    text.innerHTML = percent + "% Completed";

}

// =======================================
// Lesson Menu
// =======================================

function updateLessonMenu() {

    const lesson1 = document.getElementById("lesson1Item");
    const lesson2 = document.getElementById("lesson2Item");

    if (!lesson1 || !lesson2) return;

    if (localStorage.getItem("lesson1Completed") === "true") {

        lesson1.innerHTML = "✅ Lesson 1 - Brazilian Alphabet";

        lesson2.innerHTML =
            '<a href="lesson2.html">🔓 Lesson 2 - Pronunciation</a>';

    }

}
