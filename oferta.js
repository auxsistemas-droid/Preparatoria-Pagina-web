const contenedorTabla = document.getElementById("tablaMaterias");
const indicador = document.getElementById("indicadorTexto");

contenedorTabla.addEventListener("click", function () {
  this.classList.toggle("expandida");

  if (this.classList.contains("expandida")) {
    indicador.textContent = " Haz clic para contraer la tabla";
  } else {
    indicador.textContent = "Desplegar mapa curricular completo";
  }
});
