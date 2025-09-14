/*
Ejercicio 2: Menú Interactivo con readline-sync
Crea un script de Node.js que muestre un menú de opciones usando
readline-sync. El menú debe permitir al usuario elegir entre tres acciones:
ver un mensaje de bienvenida, generar un hash de un texto, o salir.
*/

const readlineSync = require('readline-sync');

const opciones = ["Mensaje de bienvenida", "Generar un hash", "Salir"];

const nombre = readlineSync.question("Ingrese su nombre: ")
const seleccion = readlineSync.keyInSelect(opciones, "Seleccione una opcion: ");

if (seleccion === 0) {
    console.log(`Bienvenid@ ${nombre}!!`);
} else if (seleccion === 1) {
    console.log(`Generando un hash...`)
} else if (seleccion === 2) {
    console.log("Saliendo del programa... Hasta la próxima!");
};