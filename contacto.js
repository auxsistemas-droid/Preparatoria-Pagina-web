function actualizarHorario() {
  const estado = document.getElementById("estado-horario");

  const ahora = new Date();

  const horaTorreon = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Monterrey",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(ahora);

  const [hora, minutos] = horaTorreon.split(":").map(Number);
  const horaActual = hora * 60 + minutos;

  const horaApertura = 8 * 60;
  const horaCierre = 16 * 60;

  if (horaActual >= horaApertura && horaActual < horaCierre) {
    estado.textContent = "Abierto";
    estado.style.color = "green";
  } else {
    estado.textContent = "Cerrado";
    estado.style.color = "red";
  }
}

actualizarHorario();
setInterval(actualizarHorario, 60000);
