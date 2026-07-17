import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

alert("auth.js carregou!");

onAuthStateChanged(auth, (user) => {

    if (user) {
        alert("Usuário logado: " + user.email);
    } else {
        alert("Nenhum usuário logado");
        window.location.href = "login.html";
    }

});
