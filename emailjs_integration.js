document.addEventListener("DOMContentLoaded", function () {
  emailjs.init({
    publicKey: "x1j-IKMVLrlBiy_RH", // Reemplaza "YOUR_PUBLIC_KEY" con tu clave pública obtenida de EmailJS
  });

  document.getElementById("wf-form-Contact-3-Form").addEventListener("submit", function (event) {
    event.preventDefault();
       // Ocultar mensajes antes de enviar
       document.querySelector(".success-message").style.display = "none";
       document.querySelector(".error-message").style.display = "none";

    // Obtén los valores de los campos del formulario
    const name = document.getElementById("Contact-3-Name-2").value.trim();
    const email = document.getElementById("Contact-3-Email-2").value.trim();
    const message = document.getElementById("Contact-3-Message-2").value.trim();

    // Validación simple
    if (!name || !email || !message) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Configura los parámetros del servicio
    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs.send("service_ghbeh6k", "template_aulod9m", templateParams)
    .then(function (response) {
      // Mostrar mensaje de éxito
      document.querySelector(".success-message").style.display = "block";
    }, function (error) {
      // Mostrar mensaje de error
      document.querySelector(".error-message").style.display = "block";
    });
});
});