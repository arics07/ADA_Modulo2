/*
Ejercicio 4: Mensaje de despedida personalizado
Consigna:
Crea un programa interactivo que pregunte al usuario su nombre y lo use en un mensaje de despedida. 
Usa variables de entorno para personalizar el saludo inicial.

Requisitos del programa:
1. Usa una variable de entorno llamada START_MESSAGE para configurar el saludo inicial.
2. Usa readline para preguntar el nombre del usuario.
3. Despídete del usuario con un mensaje personalizado.
*/

const readline = require('readline');
require('dotenv').config(); // Carga las variables de entorno

const START_MESSAGE = process.env.START_MESSAGE;
const END_MESSAGE = process.env.END_MESSAGE;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Mostrar mensaje inicial
console.log(START_MESSAGE);

rl.question('Ingrese su nombre: ', (nombre) => {
    console.log(`${END_MESSAGE} ${nombre}!`);
    rl.close();
});

rl.on('close', () => {
});