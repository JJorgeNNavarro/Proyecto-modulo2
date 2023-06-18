function obtenerPelicula() {
  let url = new URL(window.location.href);
  let peliculaID = url.searchParams.get("id");
  if (peliculaID == null) {
    window.location.href = "/pages/error";
  } else {
    obtenerPeliculas()
      .filter((peli) => peli.codigo == peliculaID)
      .map((peli) => {
        let html = "<div>";
        html += '<img src="' + peli.imagen + '" alt="' + peli.nombre + '">';
        html += "<h2>" + peli.nombre + "</h2>";
        html += "<p>" + peli.descripcion + "</p>";
        html += "</div>";

        document.getElementById("peliculas-container").innerHTML += html;
      });
  }
  /*traer del localstorage para agregarlo en una variable y a eso aplicarle el filter y toda la wea*/
}
obtenerPelicula();
