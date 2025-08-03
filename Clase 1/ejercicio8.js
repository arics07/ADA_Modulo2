/*
Ejercicio 8: Contador de letras
Crea una función que reciba una cadena de texto y una letra, y devuelva
cuántas veces aparece esa letra en la cadena.
Consigna:
• Usa un bucle for y condicionales.
• Haz que la búsqueda no distinga entre mayúsculas y minúsculas.
*/

let texto = "Mi michi León es el más hermoso"

function contarLetra(texto, letra) {
    let textoFormateado = texto.toLowerCase();
    let letraFormateada = letra.toLowerCase();

    let contador = 0;
    for (let i=0; i<texto.length; i++) {
        if (textoFormateado[i] === letraFormateada) {
            contador++;
        };
    };

    return contador;
}

console.log(contarLetra(texto, "m"));