// Función para iniciar sesión
function iniciarSesion() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // Obtener los usuarios del almacenamiento

  // Verificar si el usuario y la contraseña son válidos
  let user = obtenerUsuarios(username, password);
  if (user) {
    usuarioLogueado(user);
    location.href("/index.html");
  }
}

crearFooter();
