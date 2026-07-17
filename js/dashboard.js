import { auth, db } from "./firebase.js";

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {

    if (!user) return;

    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) return;

    const data = docSnap.data();

    // Valores padrão para usuário novo
    data.currentLesson = Number(data.currentLesson || 1);
    data.completedLessons = data.completedLessons || [];

    const percent = Math.round(
        (data.completedLessons.length / 20) * 100
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

    // Card do curso
    const beginnerProgress = document.getElementById("beginnerProgress");

    if (beginnerProgress) {
        beginnerProgress.textContent = percent + "% Completed";
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
    if (nextLesson <= 20) {
        nextLessonTitle.textContent = "Lesson " + nextLesson;
        nextLessonName.textContent = "Next Lesson";
    } else {
        nextLessonTitle.textContent = "Course Completed";
        nextLessonName.textContent = "🎉 Congratulations!";
    }
}
    
    // Botões Continuar
    const continueButton = document.getElementById("continueButton");

    if (continueButton) {
        continueButton.href =
            "lesson" + data.currentLesson + ".html";
    }

    const heroContinueButton =
        document.getElementById("heroContinueButton");

    if (heroContinueButton) {
        heroContinueButton.href =
            "lesson" + data.currentLesson + ".html";
    }

    console.log("Dashboard carregado:", data);

});
