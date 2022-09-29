window.onload = () => {
  document.querySelector("#excuse").innerHTML = generateExcuse();
};

randomQuien = randomNumber = Math.floor(Math.random() * 4 + 1);
randomAccion = randomNumber = Math.floor(Math.random() * 4 + 1);
randomQue = randomNumber = Math.floor(Math.random() * 4 + 1);
randomCuando = randomNumber = Math.floor(Math.random() * 4 + 1);

let generateExcuse = () => {
  let quien = ["Pepe", "Carlos", "Mi perro", "Estela", "Mi gato"];
  let accion = ["comio", "rompio", "perdio", "incendio", "exploto"];
  let que = ["mi tarea", "las llaves", "el auto", "la casa", "mi mochila"];
  let cuando = [
    "antes de ayer",
    "justo antes de venir",
    "hoy",
    "hace una semana",
    "el martes",
  ];

  let quienIndex = [randomQuien];
  let accionIndex = [randomAccion];
  let queIndex = [randomQue];
  let cuandoIndex = [randomCuando];

  return (
    quien[quienIndex] +
    " " +
    accion[accionIndex] +
    " " +
    que[queIndex] +
    " " +
    cuando[cuandoIndex]
  );
};
generateExcuse();