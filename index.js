window.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("video");
  const overlay = document.getElementById("videoOverlay");

  function ponerAlturaOverlay() {
    overlay.style.height = video.offsetHeight + "px";
  }

  ponerAlturaOverlay();

  window.addEventListener("resize", ponerAlturaOverlay);
});
