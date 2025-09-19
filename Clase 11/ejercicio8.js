/*
Ejercicio 8: Generador de Frases Aleatorias
Crea un script que genere una frase aleatoria a partir de arrays
predefinidos de sujetos, verbos y complementos. Usa readline-sync para
preguntar al usuario cuántas frases desea generar.
*/

const readlineSync = require('readline-sync');

sujetos = ["el michi", "Colapinto", "nuestro jefe", "tu mejor amiga"];
verbos = ["baila", "canta", "lee", "juega"];
complementos = ["todo el dia", "en el planetario", "mientras maneja", "cuando esta triste"];

cantidadDeFrases = readlineSync.questionInt("Cuantas frases queres generar? ");

function generarFrase(sujetos, verbos, complementos) {
    const frase = [];

    frase.push(sujetos[Math.floor(Math.random() * sujetos.length)]);
    frase.push(verbos[Math.floor(Math.random() * verbos.length)]);
    frase.push(complementos[Math.floor(Math.random() * complementos.length)]);
    
    return frase.join(" ");
};

for (let i=0; i<cantidadDeFrases; i++) {
    console.log(generarFrase(sujetos, verbos, complementos));
}