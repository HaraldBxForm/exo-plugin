// ==============================
// 🌱 Sélection des éléments
// ==============================

// ==============================
// 🎊 Fonctionnalités
// ==============================
document.getElementById('notify').addEventListener('click', () => {
    Toastify({
      text: "Spam",
      duration: 3000,
      gravity: "top",
      position: "right",
      backgroundColor: "linear-gradient(0deg,rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%);",
    }).showToast();
  });

  document.getElementById('notify2').addEventListener('click', () => {
    Toastify({
      text: "Bonjour",
      duration: 3000,
      gravity: "bottom",
      position: "left",
      backgroundColor: "linear-gradient(0deg,rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%);",
    }).showToast();
  });
  
// ==============================
// 🧲 Événements
// ==============================