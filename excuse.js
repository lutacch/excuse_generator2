window.onload = () => {
  document.querySelector("#excuse").innerHTML = generateExcuse();
};

let generateExcuse = () => {
  randomNumber = Math.floor(Math.random() * 5 + 1);
  switch (randomNumber) {
    case 1:
      return "Mi perro comio mi tarea";
    case 2:
      return "El tren se rompio";
    case 3:
      return "Netflix no me dejo salir de casa";

    case 4:
      return "Perdi las llaves de mi casa";
    case 5:
      return "No tengo internet";

    default:
      break;
  }
};
