import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const loginBtn = document.getElementById("loginBtn");
const forgotPassword = document.getElementById("forgotPassword");

loginBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);

    alert("Login successful!");

    window.location.href = "dashboard.html";

  } catch (error) {
    alert("Invalid email or password.");
    console.error(error);
  }
});

forgotPassword.addEventListener("click", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();

  if (!email) {
    alert("Enter your email first.");
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset email sent.");
  } catch (error) {
    alert(error.message);
  }
});
