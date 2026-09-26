import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const forgotPassword = document.getElementById("forgotPassword");
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Preencha o e-mail e a senha.");
        return;
    }

    try {

        await signInWithEmailAndPassword(auth, email, password);

        window.location.href = "dashboard.html";

    } catch (error) {

        alert("E-mail ou senha inválidos. Se não lembrar da senha, use “Esqueci minha senha?”.");

        console.error(error);

    }

});

forgotPassword.addEventListener("click", async (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();

    if (!email) {
        alert("Digite o seu e-mail primeiro.");
        return;
    }

    try {

        await sendPasswordResetEmail(auth, email);

        alert("Enviamos o e-mail para redefinir a sua senha.");

    } catch (error) {

        alert(error.message);

    }

});
