// =======================================
// Portuguese Now
// Main Script
// =======================================

console.log("Portuguese Now Loaded!");

/* =======================================
   Dashboard Data
======================================= */

let dashboardData = null;

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
// Save Lesson Progress
// =======================================

function completeLesson(lesson) {

    localStorage.setItem(
        "lesson" + lesson + "Completed",
        "true"
    );

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

function checkLesson1Quiz() {

    const answer =
        document.querySelector('input[name="quiz"]:checked');

    if (!answer) {

        alert("Please select an answer.");

        return;

    }

    if (answer.parentElement.textContent.includes("26")) {

        completeLesson(1);

        alert("✅ Correct!");

    } else {

        alert("❌ Incorrect.");

    }

}

// =======================================
// Lesson 2 Quiz
// =======================================

function checkLesson2Quiz() {

    const answer =
        document.querySelector('input[name="quiz"]:checked');

    if (!answer) {

        alert("Please select an answer.");

        return;

    }

    if (answer.parentElement.textContent.includes("CH")) {

        completeLesson(2);

        alert("✅ Correct!");

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
   Dashboard Progress
=========================== */

const progress = Math.round(

    (dashboardData.completedLessons /

     dashboardData.totalLessons) * 100

);

const progressBar = document.getElementById("courseProgress");
const progressText = document.getElementById("progressText");

if(progressBar && progressText){

    progressBar.value = progress;

    progressText.textContent = progress + "% Completed";

}

/* ===========================
   Continue Learning
=========================== */

const currentLesson =
    dashboardData.currentLesson;

const lessonTitle =
document.getElementById("currentLessonTitle");

const lessonName =
document.getElementById("currentLessonName");

const continueButton =
document.getElementById("continueButton");

const heroContinueButton =
document.getElementById("heroContinueButton");
if(lessonTitle && lessonName && continueButton){

    lessonTitle.textContent =
        "Lesson " + currentLesson.number;

    lessonName.textContent =
        currentLesson.title;

    continueButton.href =
        currentLesson.page;

}

if(heroContinueButton){

    heroContinueButton.href =
        currentLesson.page;

}

/* ===========================
   Next Lesson
=========================== */

const nextLesson =
    dashboardData.nextLesson;

const nextLessonTitle =
document.getElementById("nextLessonTitle");

const nextLessonName =
document.getElementById("nextLessonName");

if(nextLessonTitle && nextLessonName){

    nextLessonTitle.textContent =
        "Next Lesson " + nextLesson.number;

    nextLessonName.textContent =
        nextLesson.title;

}

/* ===========================
   Certificate
=========================== */

const certificateStatus =
document.getElementById("certificateStatus");

const certificateButton =
document.getElementById("certificateButton");

if(certificateStatus && certificateButton){

    if(dashboardData.completedLessons >= dashboardData.totalLessons){

        certificateStatus.textContent =
        "Congratulations! Your certificate is ready.";

        certificateButton.textContent =
        "Download Certificate";

        certificateButton.href =
        "certificate.html";

    }else{

        certificateButton.addEventListener("click",function(e){

            e.preventDefault();

            alert(
                "Complete the Beginner Course to unlock your certificate."
            );

        });

    }

}

/* ===========================
   My Courses
=========================== */

const beginnerProgress =
document.getElementById("beginnerProgress");

if(beginnerProgress){

    const percent =
    Math.round(
        (dashboardData.completedLessons /
        dashboardData.totalLessons) * 100
    );

    beginnerProgress.textContent =
        percent + "% Completed";

}

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
