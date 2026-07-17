import { completeLesson } from "./progress.js";
// =======================================
// Portuguese Now
// Main Script
// =======================================

console.log("Portuguese Now Loaded!");

/* =======================================
   Dashboard Data
======================================= */

function speakLetter(text) {

    if (!("speechSynthesis" in window)) {
        alert("Speech Synthesis is not supported in this browser.");
        return;
    }

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "pt-BR";
    speech.rate = 0.75;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

}


// =======================================
// Check if Lesson Completed
// =======================================

function lessonCompleted(lesson) {

    return localStorage.getItem(
        "lesson" + lesson + "Completed"
    ) === "true";

}

// =======================================
// Lesson 1 Quiz
// =======================================

async function checkLesson1Quiz() {

    const answer =
        document.querySelector('input[name="quiz"]:checked');

    if (!answer) {

        alert("Please select an answer.");

        return;

    }

    if (answer.parentElement.textContent.includes("26")) {

    await completeLesson(1);

} else {

    alert("❌ Incorrect.");

}

}

// =======================================
// Lesson 2 Quiz
// =======================================

async function checkLesson2Quiz() {

    const answer =
        document.querySelector('input[name="quiz"]:checked');

    if (!answer) {

        alert("Please select an answer.");

        return;

    }

    if (answer.parentElement.textContent.includes("CH")) {

    await completeLesson(2);

} else {

    alert("❌ Incorrect.");

}

}
// =======================================
// Load Lesson Information
// =======================================

function loadLessonData() {

    if (typeof lessons === "undefined") return;

    const page = window.location.pathname.split("/").pop().replace(".html", "");

    const lesson = lessons[page];

    if (!lesson) return;

    const title = document.getElementById("lessonTitle");
    const subtitle = document.getElementById("lessonSubtitle");

    if (title) {
        title.innerHTML =
            "🇧🇷 Lesson " + lesson.id + " - " + lesson.title;
    }

    if (subtitle) {
        subtitle.innerHTML = lesson.subtitle;
    }

}

// =======================================
// Beginner Progress
// =======================================

function loadCourseProgress() {

    const progress = document.getElementById("courseProgress");
    const text = document.getElementById("progressText");

    if (!progress || !text) return;

    let completed = 0;

    for (let i = 1; i <= 20; i++) {

        if (lessonCompleted(i)) {

            completed++;

        }

    }

    const percent = completed * 5;

    progress.value = percent;

    text.innerHTML = percent + "% Completed";

}

// =======================================
// Unlock Lessons
// =======================================

function updateLessonMenu() {

    for (let i = 1; i <= 20; i++) {

        const item =
            document.getElementById("lesson" + i + "Item");

        if (!item) continue;

        if (lessonCompleted(i)) {

            item.innerHTML =
                "✅ Lesson " + i;

        }

        if (lessonCompleted(i - 1)) {

            item.innerHTML =
                '<a href="lesson' + i + '.html">📖 Lesson ' + i + "</a>";

        }

    }

}
// =======================================
// Page Initialization
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    // Render Beginner Modules
    const modulesContainer = document.getElementById("modulesContainer");

    if (modulesContainer &&
        typeof courses !== "undefined" &&
        courses.beginner) {

        const beginner = courses.beginner;

        beginner.modules.forEach(module => {

            const card = document.createElement("div");
            card.className = "course-card";

            let lessonsHTML = "";

            module.lessons.forEach(lesson => {

                lessonsHTML += `
                    <li>✔️ ${lesson.title}
                    <small>${lesson.duration}</small></li>
                `;

            });

            card.innerHTML = `
                <h3>📚 ${module.title}</h3>
                <p>${beginner.description}</p>

                <ul>
                    ${lessonsHTML}
                </ul>

                <a href="lesson1.html"
                   class="course-button">

                    Start Module

                </a>
            `;

            modulesContainer.appendChild(card);

        });

    }

    // Load lesson information
    loadLessonData();

    // Update progress
    loadCourseProgress();

    // Update lesson menu
    updateLessonMenu();

});







/* ===========================
   My Courses
=========================== */


const intermediateButton =
document.getElementById("intermediateButton");

if(intermediateButton){

    intermediateButton.addEventListener("click",function(){

        alert("Intermediate Course is coming soon!");

    });

}

const advancedButton =
document.getElementById("advancedButton");

if(advancedButton){

    advancedButton.addEventListener("click",function(){

        alert("Advanced Course is coming soon!");

    });

}

window.checkLesson1Quiz = checkLesson1Quiz;
window.checkLesson2Quiz = checkLesson2Quiz;
window.speakLetter = speakLetter;
