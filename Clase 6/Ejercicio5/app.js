/*
Ejercicio 5: Convierte temperaturas como un profesional
Consigna:
Crea un programa interactivo que permita convertir temperaturas de grados Celsius a Fahrenheit. 
Este ejercicio te ayudará a practicar el uso del módulo readline para manejar entradas del usuario 
y aplicar cálculos básicos. Además, incluye un mensaje personalizado de bienvenida
configurado a través de variables de entorno.

Requisitos del programa:
1. Usa una variable de entorno llamada WELCOME_MESSAGE para
mostrar un mensaje inicial. Si no se define, usa "¡Bienvenido al conversor de temperaturas!" por defecto.
2. Usa el módulo readline para solicitar al usuario una temperatura en grados Celsius.
3. Calcula la conversión a Fahrenheit usando la fórmula.
4. Muestra el resultado en la consola.
5. Despídete del usuario al final.

Indicaciones:
1. Crea un archivo llamado app.js para el código.
2. Usa dotenv para cargar el mensaje de bienvenida desde el archivo .env.
3. Configura la interfaz con readline y calcula la conversión.
4. Ejecuta el programa y prueba ingresando diferentes valores de temperatura.
*/

const readline = require('readline');
require('dotenv').config(); // Carga las variables de entorno

const defaulGreeting = process.env.WELCOME_MESSAGE || "¡Bienvenido al conversor de temperaturas!";

//Mostramos el saludo personalizado y el nombre de usuario
console.log(`${defaulGreeting}`);


//Creo una interfaz readline para poder interactuar con el usuario
const rl = readline.createInterface({
    input: process.stdin, //input se configura como el flujo de entrada
    output: process.stdout//input se configura como el flujo de salida de los datos
});

rl.question('Ingrese la temperatura en grados Celsius: ', (temperaturaCelsius) => {
    let temperaturaFahrenheit = ((temperaturaCelsius)*9/4) + 32;
    console.log(`La temperatura en Fahrenheit es ${temperaturaFahrenheit}`);
    rl.close();
});

rl.on('close', () => {
});