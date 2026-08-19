// Importa o Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA_pOaq-8gKGn5fLMUkqCFia7vI0LdwMt8",
  authDomain: "portuguese-now.firebaseapp.com",
  projectId: "portuguese-now",
  storageBucket: "portuguese-now.firebasestorage.app",
  messagingSenderId: "912497033906",
  appId: "1:912497033906:web:4286b3488510d2f746ffab"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta os serviços
export const auth = getAuth(app);
export const db = getFirestore(app);
