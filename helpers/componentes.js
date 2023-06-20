/*
 * Este metodo genera el header y lo agrega en el div <header> con id = header
 */
function crearHeader(seccionActiva) {
  let header = ` 
    <nav class="navbar navbar-2 navbar-expand-lg navbar-dark"> 
        <div class="container-fluid"> 
            <a href="/index.html"><img src="/images/logo4.png" alt="logo rolling stream" width="60"  class="d-inline-block align-text-center logo"></a> 
            <a class="navbar-brand text-white nombreNav align-text-left" href="/index.html">Rolling Stream</a> 
            <button class="navbar-toggler text-white bg-light " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation "> 
                <span class="navbar-toggler-icon"></span> 
            </button> 
            <div class="collapse navbar-collapse" id="navbarSupportedContent"> 
                <ul class="navbar-nav mr-auto"> 
                    <li class="nav-item"> 
                        <a class="nav-link letrasnav align-text-center justify-content-center ${
                          seccionActiva == "inicio" ? "active" : ""
                        }" href="/">  Inicio<span class="sr-only">(current)</span></a> 
                    </li> 
                    <li class="nav-item "> 
                        <a class=" nav-link letrasnav ${
                          seccionActiva == "login" ? "active" : ""
                        }" href="/pages/Login">Login</a> 
                    </li> 
                    <li class="nav-item"> 
                        <a class="nav-link letrasnav ${
                          seccionActiva == "registro" ? "active" : ""
                        }" href="/pages/registro">Registro</a> 
                    </li> 
                </ul> 
                <form class="form-inline my-2 my-lg-0"> 
                    <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"></input> 
                    <button class="btn btn-outline-success my-2 my-sm-0 colorBoton text-white" type="submit">Buscar</button> 
                </form> 
            </div> 
        </div> 
    </nav>`;

  document.getElementById("header").innerHTML += header;
}

/*
 * Este metodo genera el footer y lo agrega en el div <footer> con id = footer
 * Esto  para no tener que copiar y pegar el mismo componente en las diferentes vistas,
 * por eso todos los paths salen del root.
 */
function crearFooter() {
  let footer = `
        <div class="class-redes"> 
            <a href="/pages/error"><img class="mx-1" src="/images/whatsapp-logo.png" alt="logo de whatsapp"></a> 
            <a href="/pages/error"><img class="mx-1" src="/images/instagram-logo.png" alt="logo de instagram"></a> 
            <a href="/pages/error"><img class="mx-1" src="/images/facebook-logo.png" alt="logo de facebook"></a> 
        </div> 
        <div class="class-logo"><img src="/images/copy2.png" alt="simbolo copyright"></div> 
        <div class="class-acerca"> 
            <a href="/pages/error">Acerca de Nosotros</a> 
        </div> 
        <div class="class-contactanos"> 
            <a href="/pages/error">Contactanos</a> 
        </div>`;

  document.getElementById("footer").innerHTML += footer;
}
