document
  .getElementById("registroForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    //---------------- Obtener los valores de los campos del formulario-------------------------------
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;
    let email = document.getElementById("email").value;

    //------------------------------- Validar los campos del formulario-------------------------------------
    if (nombre.trim() === "") {
      alert("Por favor, ingrese su nombre.");
      return;
    }

    if (edad.trim() === "") {
      alert("Por favor, ingrese su edad.");
      return;
    }
    if (edad < 18) {
      alert("Debe ser mayor de edad para registrarse");
      return;
    }

    if (usuario.trim() === "") {
      alert("Por favor, ingrese su usuario.");
      return;
    }

    if (contrasena.trim() === "") {
      alert("Por favor, ingrese su contraseña.");
      return;
    }
    if (contrasena.length < 4 || contrasena.length > 8) {
      alert("La contraseña debe tener entre 4 y 8 caracteres.");
      return;
    }

    if (email.trim() === "") {
      alert("Por favor, ingrese su correo electrónico.");
      return;
    }
    // --------------------Crear un objeto usuario con los datos del formulario--------------------------
    const usuarioNuevo = {
      nombre: nombre,
      edad: edad,
      usuario: usuario,
      contraseña: contrasena,
      mail: email,
    };

    // -------------------------Obtener los usuarios existentes del Local Storage---------------------------------
    let usuarios = localStorage.getItem("usuarios");
    if (!usuarios) {
      usuarios = []; // Si no hay usuarios, crear un array vacío
    } else {
      usuarios = JSON.parse(usuarios); // Convertir la cadena JSON en un array
    }

    // ---------------------Agregar el nuevo usuario al array-----------------------------------
    usuarios.push(usuarioNuevo);

    // ----------------Guardar el array de usuarios actualizado en el Local Storage--------------------------
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    //------------ Mostrar mensaje de éxito-------------------------
    alert("Registro exitoso");

    // -------------------Restablecer el formulario-----------------
    document.getElementById("registroForm").reset(); // Reiniciar el formulario
  });

crearHeader("registro");
crearFooter();
