document.addEventListener("DOMContentLoaded", function () {
  // Obtener el botón de regresar
  let regresarBtn = document.getElementById("regresarBtn");

  // Redirigir a la página principal después de 5 segundos
  setTimeout(function () {
    window.location.href = "/index.html";
  }, 50000);

  // Manejar el evento clic del botón de regresar
  regresarBtn.addEventListener("click", function () {
    window.location.href = "/index.html";
  });
});

crearFooter();
