/*
Ejercicio 5: Generador de iniciales 🅰️
Escribe una función que reciba un nombre completo y devuelva las
iniciales en mayúsculas.
Consigna:
• Usa el método split() para dividir el nombre.
• Usa un bucle for y métodos de string.
*/

let nombre = "Leon Salomone";

function generarIniciales(nombre) {
    let iniciales = [];
    let palabras = nombre.split(" ");
    for (let i=0; i<palabras.length; i++) {
        iniciales.push(palabras[i][0])
    };
    let inicialesNombre = iniciales.join("");

    return inicialesNombre;
};

console.log(generarIniciales(nombre));