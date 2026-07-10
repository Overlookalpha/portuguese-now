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

// =======================================
// Lesson 1 Quiz
// =======================================

function checkLesson1Quiz() {

    const answer = document.querySelector('input[name="quiz"]:checked');

    if (!answer) {
        alert("Please select an answer.");
        return;
    }

    if (answer.parentElement.textContent.includes("26")) {
        alert("✅ Correct!");
    } else {
        alert("❌ Incorrect. Try again.");
    }

}

// =======================================
// Lesson 2 Quiz
// =======================================

function checkLesson2Quiz() {

    const answer = document.querySelector('input[name="quiz"]:checked');

    if (!answer) {
        alert("Please select an answer.");
        return;
    }

    if (answer.parentElement.textContent.includes("CH")) {
        alert("✅ Correct!");
    } else {
        alert("❌ Incorrect. The correct answer is CH.");
    }

}
