// el archivo.env guarda las variables de entorno

//importo el módulo readLine para trabajar con entrada y salida de datos
const readline = require('readline');

//instalo el módulo 'dotenv'para poder cargar las variables de entorno desdde el archivo .env
//npm install dotenv (en la carpeta madre 'MODULO 2')

// PROCESS
//importo los módulos
require('dotenv').config();

//1) Establecemos un saludo predeterminado usando nuestra variable de entorno
const defaulGreeting = process.env.GREETING || 'Hola'; ///GREETING es el nombre de la variable de entorno definida en el archivo .env
//si la variable de entorno GREETING no está definida o declarada, usará 'Hola'

//2) Procesamos los argumentos de la linea de comandos (process.argv)
const args = process.argv.slice(2);
const userName = args[0] || "Invitado"; 

//Mostramos el saludo personalizado y el nombre de usuario
console.log(`${defaulGreeting} ${userName}`);

//Información sobre el enorno de ejecución
console.log("Información sobre el entorno de ejecución: ");
//Directorio actual desde donde se ejecuta el programa
console.log("- Directorio actual: ", process.cwd());
//Plataforma del sistema operativo
console.log("- Plataforma: ", process.platform);

// READLINE
//Creamos una interfaz readline para poder interactuar con el usuario
const rl = readline.createInterface({
    input: process.stdin, //input se configura como el flujo de entrada
    output: process.stdout//input se configura como el flujo de salida de los datos
});

//Usamos el método 'rl.question' para mostrar una pregunta al usuario
//La pregunta se muestra en la consola, y la respuesta se procesa en el callback
rl.question('¿Cuántos años tenés? ', (age) =>{
    //Mostrar un mensaje con la edad del usuario
    console.log(`Wow! ${age} años es una gran edad!`);
    rl.close(); // cierra lal interface readline después de obtener una respuesta
});

//Manejo del evento 'close' que se emite cuando se cierra la interfaz readline
//Mostrar un mesaje de despedida y finalizamos el programa de forma ordenada
rl.on('close', () => {
    console.log("Gracias por usar este programa. ¡Adiós!");
});
