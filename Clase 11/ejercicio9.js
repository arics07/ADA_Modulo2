/*
Ejercicio 9: Calculadora de IMC
Crea un script que calcule el Índice de Masa Corporal (IMC) del usuario.
Solicita su peso (en kg) y altura (en metros) usando readline-sync, y
luego muestra el resultado.
*/

const readlineSync = require('readline-sync');

const altura = readlineSync.questionFloat("Ingrese su altura en metros: ");
const peso = readlineSync.questionFloat("Ingrese su peso en kg: ");

console.log(`Su IMC es: ${(peso/(altura*altura)).toFixed(2)}`);