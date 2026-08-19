import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    console.log("Usuário logado:", user.email);

    const titulo = document.querySelector(".hero-content h1");

    if (titulo) {
        titulo.innerHTML = `Welcome Back, ${user.displayName || "Student"}! 👋`;
    }

});
