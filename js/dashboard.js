import { auth, db } from "./firebase.js";

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const TOTAL_LESSONS = 21;

onAuthStateChanged(auth, async (user) => {
    if (!user) return;
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) return;

    const data = docSnap.data();
    data.currentLesson = Math.max(1, Number(data.currentLesson || 1));
    data.completedLessons = [...new Set(data.completedLessons || [])]
        .filter((lesson) => Number.isInteger(lesson) && lesson >= 1 && lesson <= TOTAL_LESSONS)
        .sort((first, second) => first - second);
    const percent = Math.round((data.completedLessons.length / TOTAL_LESSONS) * 100);

    const studentName = document.getElementById("studentName");
    if (studentName) studentName.textContent = data.name;
    const progressBar = document.getElementById("courseProgress");
    const progressText = document.getElementById("progressText");
    if (progressBar) progressBar.value = percent;
    if (progressText) progressText.textContent = percent + "% Completed";
    const beginnerProgress = document.getElementById("beginnerProgress");
    if (beginnerProgress) beginnerProgress.textContent = percent + "% Completed";

    const currentLessonTitle = document.getElementById("currentLessonTitle");
    if (currentLessonTitle) currentLessonTitle.textContent = data.currentLesson <= TOTAL_LESSONS ? "Lesson " + data.currentLesson : "Course Completed";
    const currentLessonName = document.getElementById("currentLessonName");
    if (currentLessonName) currentLessonName.textContent = data.currentLesson <= TOTAL_LESSONS ? "Current Lesson" : "🎉 Congratulations!";

    const nextLessonTitle = document.getElementById("nextLessonTitle");
    const nextLessonName = document.getElementById("nextLessonName");
    const nextLesson = data.currentLesson + 1;
    if (nextLessonTitle) {
        if (nextLesson <= TOTAL_LESSONS) {
            nextLessonTitle.textContent = "Lesson " + nextLesson;
            if (nextLessonName) nextLessonName.textContent = "Next Lesson";
        } else {
            nextLessonTitle.textContent = "Course Completed";
            if (nextLessonName) nextLessonName.textContent = "🎉 Congratulations!";
        }
    }

    const continueButton = document.getElementById("continueButton");
    const heroContinueButton = document.getElementById("heroContinueButton");
    const nextLessonButton = document.getElementById("nextLessonButton");
    if (data.currentLesson <= TOTAL_LESSONS) {
        if (continueButton) continueButton.href = "lesson" + data.currentLesson + ".html";
        if (heroContinueButton) heroContinueButton.href = "lesson" + data.currentLesson + ".html";
        if (nextLessonButton) {
            nextLessonButton.textContent = "Start Lesson";
            nextLessonButton.href = "lesson" + data.currentLesson + ".html";
        }
    } else if (nextLessonButton) {
        nextLessonButton.textContent = "Course Completed";
        nextLessonButton.href = "#";
    }
});
