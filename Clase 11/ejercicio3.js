/*
Ejercicio 3: Calculadora Simple
Crea un script en Node.js que utilice readline-sync para solicitar al
usuario dos números y una operación (suma, resta, multiplicación o
división). Luego, muestra el resultado de la operación seleccionada.
*/

const readlineSync = require('readline-sync');

const operaciones = ["Suma", "Resta", "Multiplicacion", "Division"];

const operacion = readlineSync.keyInSelect(operaciones, "Ingrese la operacion que desea realizar: ");

const primerNumero = readlineSync.questionFloat("Ingrese un numero: ");
const segundoNumero = readlineSync.questionFloat("Ingrese el otro numero: ");

if (operacion === 0) {
    console.log(`${primerNumero} + ${segundoNumero} = ${primerNumero+segundoNumero}`);
} else if (operacion === 1) {
    console.log(`${primerNumero} - ${segundoNumero} = ${primerNumero-segundoNumero}`);
} else if (operacion === 2) {
    console.log(`${primerNumero} * ${segundoNumero} = ${primerNumero*segundoNumero}`);
} else if (operacion === 3) {
    console.log(`${primerNumero} / ${segundoNumero} = ${primerNumero/segundoNumero}`);
};
