/*---------------Agregar peliculas y categorias---------------------------------------*/
function crearTarjeta(arrayPeliculas) {
  let arrayPelis = ``;

  arrayPeliculas.forEach((peli) => {
    //agregada col-lg-3 col-md-3 col-6 para compatibilidad movil
    let item = `
    <div class="col-lg-3 col-md-3 col-6 p-2 new-sand bg-white my-2 justify-content-center d-flex flex-column bg-transparent">
    <a href="/pages/detalles/?id=${peli.codigo}"><img src="${peli.imagen}" class="img-fluid tarjetaImagen" alt="Imagen del ${peli.nombre}"></a> 
    </div>
    `; //creando la tarjeta de la pelicula
    arrayPelis += item; //al string vacio le sumo las tarjetas
  });
  return arrayPelis; //devuelvo el string con todos los div de las peliculas de array peliculas
}

function crearCategoriaDiv(categoria, peliculas) {
  //viene de la linea 44 como parametro
  return `<div id="${categoria}" class="row justify-content-center ps-1 pe-1 m-0 ">
  <div class="tituloCartelera justify-content-center m-0 p-0 container-fluid d-flex flex-wrap separador">
    <h3 class="text-center">${categoria}</h3>

    </div> ${peliculas} </div>`;
}
function crearListaPeliculas() {
  let lugarhtml = document.getElementById("peliculas");
  let arrayPeliculas = obtenerPeliculas(); //de local storage

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

function crearDestacada() {
  let destacada = obtenerPeliculaDestacada();

  let destacadaHtml = `
  <div class="card bg-dark text-white">
    <video id="video" src="/videos/ldlj-trailer.mp4" autoplay loop muted></video>
    <div class="card-img-overlay overlay d-flex flex-column justify-content-center">
      <h2 class="card-title">${destacada.nombre}</h2>
      <p class="card-text">${destacada.descripcion}</p>
      <a href="/pages/detalles/?id=${destacada.codigo}" class="botonPlayConLink">
        <button class="btn btn-sm">Reproducir</button>
      </a>
    </div>
  </div>`;

  document.getElementById("destacada").innerHTML += destacadaHtml;
}

function render() {
  crearHeader("inicio");
  crearFooter();
  crearListaPeliculas();
  crearDestacada();
}

render();
