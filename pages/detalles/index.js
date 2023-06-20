function obtenerPelicula() {
  let url = new URL(window.location.href);
  let peliculaID = url.searchParams.get("id");
  if (peliculaID == null) {
    window.location.href = "/pages/error";
  } else {
    obtenerPeliculas()
      .filter((peli) => peli.codigo == peliculaID)
      .map((peli) => {
        let html = `
        <div class="card text-white bg-dark-v1 border-dark mt-5">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${peli.imagen}" class="img-fluid rounded-start" alt="">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h1 class="card-title">${peli.nombre}</h1>
                <p class="card-text">${peli.descripcion}</p>
                <button class="btn text-white colorBoton">Reproducir</button>
              </div>
            </div>
          </div>
        </div>`;

        document.getElementById("peliculas-container").innerHTML += html;
      });
  }
  /*traer del localstorage para agregarlo en una variable y a eso aplicarle el filter y toda la wea*/
}
crearHeader("");
crearFooter();
obtenerPelicula();
