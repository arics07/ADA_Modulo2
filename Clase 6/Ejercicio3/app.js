/*
Ejercicio 3: ¡Sumemos dos números!
Consigna:
Tu tarea es escribir un programa interactivo que permita al usuario ingresar dos números y calcule su suma. 
Este ejercicio te ayudará a practicar el uso del módulo readline para leer entradas del usuario en la consola.

Requisitos del programa:
1. Usa el módulo readline para crear una interfaz interactiva.
2. Pide al usuario que ingrese dos números, uno a la vez.
3. Calcula y muestra la suma de los dos números.
4. Finaliza el programa con un mensaje de agradecimiento.

Indicaciones:
1. Crea un archivo llamado app.js.
2. Usa readline.createInterface para manejar la entrada y salida del usuario.
3. Utiliza callbacks para procesar las respuestas del usuario.
4. Ejecuta el programa y prueba ingresando diferentes valores.
*/

const readline = require('readline');

//Creo una interfaz readline para poder interactuar con el usuario
const rl = readline.createInterface({
    input: process.stdin, //input se configura como el flujo de entrada
    output: process.stdout//input se configura como el flujo de salida de los datos
});

//Uso el método 'rl.question' para mostrar una pregunta al usuario
//La pregunta se muestra en la consola, y la respuesta se procesa en el callback
rl.question("Ingrese un número: ", (primerNumero) =>{
    let suma = parseFloat(primerNumero);

    rl.question("Ingresese el segundo número: ", (segundoNumero) => {
        suma = suma + parseFloat(segundoNumero);
        console.log(`La suma ${primerNumero} + ${segundoNumero} da como resultado ${suma}`);
        rl.close();
    });
});

//Manejo del evento 'close' que se emite cuando se cierra la interfaz readline
//Mostrar un mesaje de despedida y finalizamos el programa de forma ordenada
rl.on('close', () => {
    console.log("Gracias por usar este programa. ¡Adiós!");
});