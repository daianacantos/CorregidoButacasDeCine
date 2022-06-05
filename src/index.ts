/*Estructuras de Datos y Métodos
Cine
• Diseñar un algoritmo que recorra las
butacas de una sala de cine y determine
cuántas butacas desocupadas hay
• Suponga que para modelar este
problema, se utiliza un arreglo con
valores lógicos
• La presencia de un valor verdadero (true) en
el arreglo indica que la butaca está ocupada
• La presencia de un valor falso (false) en el
arreglo indica que la butaca está desocupada*/

let ButacasElegidas: number = Number(
  prompt(" ingrese cuantas butacas tiene la sala de cine")
);
let butacas: boolean[] = new Array(ButacasElegidas);

butacas[0] = false; // int numero = (int)(Math.random()*(X-Y+1)+Y;
butacas[1] = false;
butacas[2] = false;
butacas[3] = true;
butacas[4] = true;
let contadorVacios = 0;
let contadorOcupados = 0;
//  int valorEntero = Math.floor(Math.random()*(N-M+1)+M);

function getRandom() {
  for (let i = 0; i < butacas.length; i++) {
    if (butacas[i] === false) {
      contadorVacios = contadorVacios + 1;
    }
  }
  //console.log("hay", , "butacas disponibles");

  for (let i = 0; i < butacas.length; i++) {
    if (butacas[i] === true) {
      contadorOcupados = contadorOcupados + 1;
    }
  }

  return Math.round(Math.random() * (100 - 5) + 5); // maximo 100 butacas , minimo 5
}

console.log("hay", getRandom() + "", "butacas ocupadas");
console.log("hay", getRandom() + "", "butacas disponibles");
