import { auth, db } from "./firebase.js";

import { doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

export async function completeLesson(lesson) {

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

    await updateDoc(userRef, {
        currentLesson: lessonNumber + 1,
        completedLessons: completedLessons
    });

    alert("🎉 Lesson completed!");
    console.log("Indo para:", `lesson${lessonNumber + 1}.html`);
    window.location.href = `lesson${lessonNumber + 1}.html`;

}
