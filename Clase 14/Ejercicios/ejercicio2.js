/*
Ejercicio 2: Ordenar una Lista de Números
Crea un script en Node.js que permita al usuario ingresar una lista de
números separados por comas. Ordena los números de menor a mayor y
muestra la lista ordenada.
*/

const readlineSync = require('readline-sync');

const numerosIngresados = readlineSync.question("Ingrese una lista de números separados por comas: ");

const listaNumeros = numerosIngresados.split(',');

//Convierto los npumeros ingresados de string a int
const listaNumerosInt = listaNumeros.map(numero => parseInt(numero.trim(), 10));

const listaNumerosOrdenados = listaNumerosInt.sort((a,b)=>a-b);

console.log(`Números ordenados: ${listaNumerosOrdenados}`);