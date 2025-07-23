/*
Ejercicio 7: Filtrar palabras largas
Escribe una función que reciba un array de palabras y un número, y
devuelva las palabras que tienen más caracteres que el número dado.
Consigna:
• Usa el método filter().
• Usa una función flecha para simplificar el código.
*/

let palabras = ["javascript", "html", "java", "python", "nodejs"];

let palabrasLargas = (palabras, cantidadLetras) => {
    let palabrasQueCumplen = [];
    for (let i=0; i<palabras.length; i++) {
        if (palabras[i].length > cantidadLetras) {
            palabrasQueCumplen.push(palabras[i]);
        };
    };
    return palabrasQueCumplen
};

console.log(palabrasLargas(palabras, 5));