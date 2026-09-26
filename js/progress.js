import { auth, db } from "./firebase.js";

import { doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { courseConfig } from "./course-config.js";

export async function completeLesson(lesson) {

    const totalLessons = courseConfig.lastPublishedLesson;

    const user = auth.currentUser;

    if (!user) return;

    const lessonNumber = Number(lesson);

    if (!Number.isInteger(lessonNumber) || lessonNumber < 1) {
        throw new Error("Invalid lesson number.");
    }

    const userRef = doc(db, "users", user.uid);
    const userSnapshot = await getDoc(userRef);
    const existingLessons = userSnapshot.exists()
        ? userSnapshot.data().completedLessons || []
        : [];
    const completedLessons = [...new Set([...existingLessons, lessonNumber])]
        .sort((first, second) => first - second);

    const nextLesson = lessonNumber + 1;

    await updateDoc(userRef, {
        currentLesson: nextLesson,
        completedLessons: completedLessons
    });

    if (lessonNumber >= totalLessons) {
        alert("🎉 All published lessons completed!");
        window.location.href = "dashboard.html";
        return;
    }

    alert("🎉 Lesson completed!");
    console.log("Indo para:", `lesson${nextLesson}.html`);
    window.location.href = `lesson${nextLesson}.html`;

}
