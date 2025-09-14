const readlineSync = require('readline-sync');

//Se usa por ej para crear un menú interactivo

//Defino un array de opciones
const lenguajes = ['javascript', 'python', 'java', 'cobol', 'c++'];

const seleccion = readlineSync.keyInSelect(lenguajes, "Cuál es tu lenguaje de rogramación favorito? ");

if (seleccion === -1) { 
   // console.log("El lenguaje no se encuentra disponible...")
} else {
    console.log(`${lenguajes[seleccion]} es el mejor!!`);
};

//la opcion 1 corresponde al indice 0 del array