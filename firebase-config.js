// firebase-config.js

// Importa Firebase App y Auth desde la CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB2lW0KYtnmyqrLLA-L6mhrvMIVDFr1ICM",
  authDomain: "web-infantil.firebaseapp.com",
  projectId: "web-infantil",
  storageBucket: "web-infantil.firebasestorage.app",
  messagingSenderId: "906393909749",
  appId: "1:906393909749:web:2804f838c60f7f08fe08bc",
  measurementId: "G-WFYBJR35D2"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// ✅ Exporta 'auth'
export { auth };
