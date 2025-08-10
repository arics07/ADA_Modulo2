/*
Ejercicio 9: Números únicos
Escribe una función que reciba un array de números y devuelva un nuevo
array sin números repetidos.

Consigna:
• Usa el objeto Set para eliminar duplicados.
• Convierte el Set a un array usando el operador spread (...).
*/

let numeros = [1, 2, 3, 4, 2, 3, 3, 5, 6];

function obtenerNumerosUnicos(numeros) {
    let numerosSinRepeticiones = new Set(numeros);
    return [...numerosSinRepeticiones];
};

console.log(obtenerNumerosUnicos(numeros)); 