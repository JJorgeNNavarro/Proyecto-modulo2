window.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("video");
  const overlay = document.getElementById("videoOverlay");

  function ponerAlturaOverlay() {
    overlay.style.height = video.offsetHeight + "px";
  }

  ponerAlturaOverlay();

  window.addEventListener("resize", ponerAlturaOverlay);
});

let pelis = JSON.parse(localStorage.getItem("peliculas"));

if (pelis === null || pelis !== JSON.stringify(peliculas)) {
  localStorage.setItem("peliculas", JSON.stringify(peliculas));
}
/*---------------Agregar peliculas y categorias---------------------------------------*/
function crearTarjeta(arrayPeliculas) {
  let arrayPelis = ``;

  arrayPeliculas.forEach((peli) => {
    let item = `
    <div class="col-3 p-2 new-sand bg-white my-2 justify-content-center d-flex flex-column bg-transparent">
      <img src="${peli.imagen}" class="img-fluid tarjetaImagen" alt="Imagen del ${peli.nombre}">
    </div>
    `; //creando la tarjeta de la pelicula
    arrayPelis += item; //al string vacio le sumo las tarjetas
  });
  return arrayPelis; //devuelvo el string con todos los div de las peliculas de array peliculas
}

function render(arrayPeliculas) {
  let lugarhtml = document.getElementById("peliculas");

  let categoriaSet = new Set(); //no permite duplicados y no tiene orden
  arrayPeliculas.forEach((peli) => categoriaSet.add(peli.categoria)); //guardo la categoria de las peliculas

  categoriaSet.forEach((categoria) => {
    let peliculasDivs = crearTarjeta(
      arrayPeliculas.filter((peli) => peli.categoria == categoria)
    );
    let categoriaHtml = crearCategoriaDiv(categoria, peliculasDivs);
    lugarhtml.innerHTML += categoriaHtml; //agrego al div de  peliculas , las demas categorias
  });
}
function crearCategoriaDiv(categoria, peliculas) {
  //viene de la linea 44 como parametro
  return `<div id="${categoria}" class="row justify-content-center ps-1 pe-1 m-0">
  <div class="tituloCartelera justify-content-center m-0 p-0 container-fluid d-flex flex-wrap">
    <h3 class="text-center">${categoria}</h3>

    </div> ${peliculas} </div>`;
}
render(pelis);
