window.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("video");
  const overlay = document.getElementById("videoOverlay");

  function ponerAlturaOverlay() {
    overlay.style.height = video.offsetHeight + "px";
  }

  ponerAlturaOverlay();

  window.addEventListener("resize", ponerAlturaOverlay);
});

let productos = JSON.parse(localStorage.getItem("aventura"));

if (productos === null) {
  productos = aventura;
  localStorage.setItem("carritox", JSON.stringify(productos));
}

function crearTarjeta(arrayProductos, seccion) {
  arrayProductos.forEach((producto) => {
    let item = `
    <div class="col-3 p-2 new-sand bg-white my-2 justify-content-center d-flex flex-column bg-transparent">
      <img src="${producto.imagen}" class="img-fluid tarjetaImagen" alt="Imagen del ${producto.nombre}">
    </div>
    `;
    seccion.innerHTML += item;
  });
}

function renderAventura() {
  let lugarhtml = document.getElementById("aventura");

  crearTarjeta(aventura, lugarhtml);
}

renderAventura();
