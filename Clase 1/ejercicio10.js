/*
Ejercicio 10: Invertir palabras
Crea una función que reciba una cadena de texto y devuelva otra cadena
con las palabras en orden inverso.
Consigna:
• Usa el método split() para separar las palabras.
• Usa el método reverse() para invertir el array.
• Usa el método join() para unir las palabras en una nueva cadena.
*/

let frase = "Mi michi León es el más hermoso de todos los universos"

function fraseInvertida(frase) {
    // Convierto el string en un array de palabras
    let palabras = frase.split(" ");

    palabras.reverse();
    let nuevaFrase = palabras.join(" ");

    return nuevaFrase;
};

console.log(fraseInvertida(frase));