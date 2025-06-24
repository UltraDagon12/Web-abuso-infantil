import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

// Registro de usuario
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      alert("Cuenta creada correctamente: " + user.email);
      closeRegisterModal();
    })
    .catch(error => {
      console.error(error);
      alert("Error: " + error.message);
    });
});

// Login de usuario
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      alert("Bienvenido: " + user.email);
      closeLoginModal();
    })
    .catch(error => {
      console.error(error);
      alert("Error: " + error.message);
    });
});

// Mostrar y cerrar modales
window.showRegisterForm = function () {
  document.getElementById("registerModal").style.display = "block";
  document.getElementById("loginModal").style.display = "none";
};

window.closeRegisterModal = function () {
  document.getElementById("registerModal").style.display = "none";
};

window.closeLoginModal = function () {
  document.getElementById("loginModal").style.display = "none";
};

// Cambia el texto del botón y muestra menú de cuenta si está logueado
function actualizarBotonLogin(user) {
  const loginBtn = document.getElementById("loginBtn");
  const accountMenu = document.getElementById("accountMenu");
  if (loginBtn) {
    if (user) {
      loginBtn.textContent = "Mi cuenta";
      loginBtn.onclick = function(e) {
        e.stopPropagation();
        if (accountMenu) accountMenu.style.display = accountMenu.style.display === "block" ? "none" : "block";
      };
    } else {
      loginBtn.textContent = "Iniciar Sesión";
      loginBtn.onclick = null;
      if (accountMenu) accountMenu.style.display = "none";
    }
  }
}

// Espera a que el DOM esté listo antes de escuchar el estado de autenticación
document.addEventListener("DOMContentLoaded", function () {
  // Logout
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function() {
      signOut(auth).then(() => {
        document.getElementById("accountMenu").style.display = "none";
        alert("Sesión cerrada correctamente");
      });
    });
  }

  onAuthStateChanged(auth, (user) => {
    actualizarBotonLogin(user);
    if (user) {
      console.log("Usuario activo:", user.email);
    } else {
      console.log("Ningún usuario ha iniciado sesión.");
    }
  });

  // Oculta el menú si haces click fuera de él
  document.addEventListener("click", function(e) {
    const accountMenu = document.getElementById("accountMenu");
    const loginBtn = document.getElementById("loginBtn");
    if (accountMenu && loginBtn && accountMenu.style.display === "block") {
      if (!accountMenu.contains(e.target) && e.target !== loginBtn) {
        accountMenu.style.display = "none";
      }
    }
  });
});