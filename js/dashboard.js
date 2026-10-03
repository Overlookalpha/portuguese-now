import { auth, db } from "./firebase.js";

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { courseConfig } from "./course-config.js";

const TOTAL_LESSONS = courseConfig.lastPublishedLesson;

onAuthStateChanged(auth, async (user) => {

    if (!user) return;

    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) return;

    const data = docSnap.data();

    // Valores padrão para usuário novo
    data.currentLesson = Math.max(1, Number(data.currentLesson || 1));
    data.completedLessons = [...new Set(data.completedLessons || [])]
        .filter((lesson) => Number.isInteger(lesson) && lesson >= 1 && lesson <= TOTAL_LESSONS)
        .sort((first, second) => first - second);

    const percent = Math.round(
        (data.completedLessons.length / TOTAL_LESSONS) * 100
    );

    // Nome
    const studentName = document.getElementById("studentName");
    if (studentName) {
        studentName.textContent = data.name;
    }

    // Barra de progresso
    const progressBar = document.getElementById("courseProgress");
    const progressText = document.getElementById("progressText");

    if (progressBar) {
        progressBar.value = percent;
    }

    if (progressText) {
        progressText.textContent = percent + "% Completed";
    }

    const progressSummary = document.getElementById("progressSummary");
    if (progressSummary) {
        progressSummary.textContent = `${data.completedLessons.length} of ${TOTAL_LESSONS} published lessons completed`;
    }

    // Card do curso
    const beginnerProgress = document.getElementById("beginnerProgress");

    if (beginnerProgress) {
        beginnerProgress.textContent = `${percent}% complete • ${data.completedLessons.length}/${TOTAL_LESSONS} lessons`;
    }

    // Lição atual
    const currentLessonTitle = document.getElementById("currentLessonTitle");

    if (currentLessonTitle) {
        currentLessonTitle.textContent =
            "Lesson " + data.currentLesson;
    }

    const currentLessonName = document.getElementById("currentLessonName");

    if (currentLessonName) {
        currentLessonName.textContent = "Current Lesson";
    }

const nextLessonTitle = document.getElementById("nextLessonTitle");
const nextLessonName = document.getElementById("nextLessonName");

const nextLesson = data.currentLesson + 1;

if (nextLessonTitle) {
    if (nextLesson <= TOTAL_LESSONS) {
        nextLessonTitle.textContent = "Lesson " + nextLesson;
        nextLessonName.textContent = "Next Lesson";
    } else {
        nextLessonTitle.textContent = "Course Completed";
        nextLessonName.textContent = "🎉 Congratulations!";
    }
}
    
    // Botões Continuar
    const continueButton = document.getElementById("continueButton");

    if (continueButton && data.currentLesson <= TOTAL_LESSONS) {
        continueButton.href =
            "lesson" + data.currentLesson + ".html";
    }

    const heroContinueButton =
        document.getElementById("heroContinueButton");

    if (heroContinueButton && data.currentLesson <= TOTAL_LESSONS) {
        heroContinueButton.href =
            "lesson" + data.currentLesson + ".html";
    }

// Próxima lição
const nextLessonButton = document.getElementById("nextLessonButton");

if (nextLessonButton) {

    if (data.currentLesson <= TOTAL_LESSONS) {

        nextLessonButton.textContent = "Start Lesson";
        nextLessonButton.href = "lesson" + data.currentLesson + ".html";

    } else {

        nextLessonButton.textContent = "Locked";
        nextLessonButton.href = "#";

    }

}
    
    console.log("Dashboard carregado:", data);

});
