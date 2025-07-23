/*
Ejercicio 6: Calculadora de promedio

Escribe una función que reciba un array de números y devuelva el
promedio.
Consigna:
• Usa un bucle for para sumar los números.
• Divide la suma total entre la cantidad de elementos del array.
*/

let calificaciones = [7, 10, 6, 9, 7, 8];

function calcularPromedio(notas) {
    let suma = 0;
    for (let i=0; i<notas.length; i++){
        suma = suma + notas[i];
    };

    return (suma/notas.length).toFixed(2);
};

console.log(calcularPromedio(calificaciones));