import { auth, db } from "./firebase.js";

import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

export async function completeLesson(lesson) {

    const user = auth.currentUser;

    if (!user) return;

    const completedLessons = [];

    for (let i = 1; i <= lesson; i++) {
        completedLessons.push(i);
    }

    await updateDoc(doc(db, "users", user.uid), {
        currentLesson: lesson + 1,
        completedLessons: completedLessons
    });

    alert("🎉 Lesson completed!");
    console.log("Indo para:", `lesson${lesson + 1}.html`);
   window.location.href = `lesson${lesson + 1}.html`;

}
