/*
Ejercicio 4: Contando vocales 🅰️🅾️
Crea una función que reciba una cadena de texto y devuelva cuántas
vocales contiene.
Consigna:
• Usa un bucle for y condicionales.
• Considera vocales mayúsculas y minúsculas (a, e, i, o, u).
*/

let texto = "Hola mundo, soy yo";

function contarVocales(texto) {
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    let cantidadVocales = 0;
    for (let i=0; i<texto.length; i++){
        if (vocales.includes(texto[i])) {
            cantidadVocales++;
        }
    }
    return cantidadVocales;
};

console.log(contarVocales(texto));