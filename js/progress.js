import { auth, db } from "./firebase.js";
import { doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

export async function completeLesson(lesson) {
    const totalLessons = 21;
    const user = auth.currentUser;
    if (!user) return;
    const lessonNumber = Number(lesson);
    if (!Number.isInteger(lessonNumber) || lessonNumber < 1 || lessonNumber > totalLessons) {
        throw new Error("Invalid lesson number.");
    }
    const userRef = doc(db, "users", user.uid);
    const userSnapshot = await getDoc(userRef);
    const existingLessons = userSnapshot.exists() ? userSnapshot.data().completedLessons || [] : [];
    const completedLessons = [...new Set([...existingLessons, lessonNumber])].sort((first, second) => first - second);
    const nextLesson = lessonNumber + 1;
    await updateDoc(userRef, { currentLesson: nextLesson, completedLessons });
    if (lessonNumber >= totalLessons) {
        alert("🎉 Course completed!");
        window.location.href = "dashboard.html";
        return;
    }
    alert("🎉 Lesson completed!");
    window.location.href = `lesson${nextLesson}.html`;
}
