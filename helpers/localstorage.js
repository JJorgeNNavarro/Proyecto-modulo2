function obtenerPeliculas() {
  let pelis = JSON.parse(localStorage.getItem("peliculas"));
  if (pelis === null || pelis !== JSON.stringify(peliculas)) {
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  }
  return pelis;
}

function obtenerPeliculaDestacada() {
  return obtenerPeliculas().find((p) => p.destacada);
}

function obtenerUsuarios(nombre, contrasena) {
  let listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));

  return listaUsuarios.find(
    (usuario) => usuario.nombre == nombre && usuario.contrasena == contrasena
  );
}

function usuarioLogueado(user) {
  localStorage.setItem(JSON.stringify("usuarioLogueado", user));
}
