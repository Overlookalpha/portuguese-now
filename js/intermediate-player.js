import { intermediateCurriculum, intermediateLessonContent } from "./intermediate-curriculum.js";

const requestedLesson = Number(new URLSearchParams(window.location.search).get("lesson"));
const lesson = intermediateCurriculum.lessons.find((item) => item.number === requestedLesson)
    || intermediateCurriculum.lessons[0];

document.title = `${lesson.title} | Portuguese Now`;
document.getElementById("lessonNumber").textContent = `Intermediate • Lesson ${lesson.number}`;
document.getElementById("lessonTitle").textContent = lesson.title;
document.getElementById("lessonFocus").textContent = `Language focus: ${lesson.focus}`;
document.getElementById("lessonOutcome").textContent = lesson.outcome;
document.getElementById("listenPhrase").textContent = lesson.phrase;

const content = intermediateLessonContent[lesson.number];
if (content) {
    document.getElementById("lessonDialogue").replaceChildren(...content.dialogue.map((line) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = line;
        return paragraph;
    }));
    document.getElementById("lessonVocabulary").replaceChildren(...content.vocabulary.map((item) => {
        const entry = document.createElement("li");
        entry.textContent = item;
        return entry;
    }));
    document.getElementById("speakingChallenge").textContent = content.challenge;
} else {
    document.getElementById("lessonDialogue").textContent = "This lesson is being prepared.";
    document.getElementById("speakingChallenge").textContent = lesson.outcome;
}

document.getElementById("listenButton").addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance(lesson.phrase);
    utterance.lang = "pt-BR";
    utterance.rate = 0.85;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
});

const lessonIndex = intermediateCurriculum.lessons.indexOf(lesson);
const previous = intermediateCurriculum.lessons[lessonIndex - 1];
const next = intermediateCurriculum.lessons[lessonIndex + 1];
const previousLink = document.getElementById("previousLesson");
const nextLink = document.getElementById("nextLesson");

previousLink.href = previous ? `intermediate-lesson.html?lesson=${previous.number}` : "intermediate-course.html";
previousLink.textContent = previous ? "← Previous lesson" : "← Course overview";
nextLink.href = next ? `intermediate-lesson.html?lesson=${next.number}` : "intermediate-quiz.html";
nextLink.textContent = next ? "Next lesson →" : "Take the module quiz →";
