/*
Ejercicio 5: Adivina el Número
Crea un juego en el que el usuario deba adivinar un número aleatorio
entre 1 y 10. Usa readline-sync para recibir el intento del usuario y
proporciona pistas (mayor o menor) hasta que adivine.
*/

const readlineSync = require('readline-sync');

const numeroRandom = Math.floor(Math.random() * 100);

const numeroElegido = readlineSync.questionInt("A ver si adivinas! Elegi un numero entre el 0 y el 99... ");

function verSiGana(numero, numeroRandom) {
    if (numero === numeroRandom) {
        console.log("GANASTE!! FELICITACIONES!! :D ");
    } else if ((numero > 99) || (numero < 0)) {
        nuevoNumero = readlineSync.questionInt("Ese numero no es valido! Tenes que elegir un número entre 0 y 99: ");
        verSiGana(nuevoNumero, numeroRandom);
    } else if (numero < numeroRandom) {
        nuevoNumero = readlineSync.questionInt("Mmmmm... mas alto ");
        verSiGana(nuevoNumero, numeroRandom);
    } else if (numero > numeroRandom) {
        nuevoNumero = readlineSync.questionInt("No... es mas bajo ");
        verSiGana(nuevoNumero, numeroRandom);
    };
};

verSiGana(numeroElegido, numeroRandom);
