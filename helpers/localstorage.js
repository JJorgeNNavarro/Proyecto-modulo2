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
