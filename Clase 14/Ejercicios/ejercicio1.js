/*
Ejercicio 1: Cálculo de Hash Simple
Escribe un script en Node.js que use el módulo crypto para generar un
hash SHA-256 de un texto ingresado por el usuario. Muestra el hash en
la consola.
*/

const crypto = require('crypto');
const readlineSync = require('readline-sync');

const data = readlineSync.question("Ingresa el texto que te gustaría hashear: ");

// Creo el objeto hash usando el algoritmo 'sha256'
const hash = crypto.createHash('sha256');

hash.update(data);

const hashOutput = hash.digest('hex');

// Muestro el hash generado
console.log(`Hash de sha256 ejercicio 1: ${hashOutput}`);
