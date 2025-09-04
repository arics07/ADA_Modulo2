/*
Instrucciones:
Crear un cliente TCP en Node.js que se conecte a un servidor en el puerto 5000.
Enviar y recibir mensajes del servidor.
Implementar eventos clave (data, end, close, error).
Utilizar métodos de control y conexión, como pause(), resume(), destroy(), setTimeout(), etc.
Ejecutar pruebas para observar el comportamiento de cada método.
*/

const net = require('net');

const PORT = 5000;
const HOST = 'localhost';

const client = net.createConnection({port: PORT, host: HOST});

//Evento 'connect':para manejar la conexión con el servidor
client.on('connect', () => {
    //Mensaje de conexión exitosa
    console.log("Conectado al servidor.");

    //Envía un mensaje al servidor al conectarse
    client.write("Hola Servidor! Soy el Cliente.");
});

//Evento 'data': manejo de datos recibidos desde el servidor
client.on('data', (data) => {
    console.log(`Mensaje recibido del servidor: ${data.toString()}`);
});

//Evento 'end': se ejecuta cuando el servidor cierra la conexión
client.on('end', () => {
    console.log("El servidor ha cerrado la conexión.");
});

//Evento 'close': se ejecuta cuando la conexión se cierra completamente, tanto del lado del servidor como del cliente, ordenadamente
client.on('close', () => {
    console.log("Conexión cerrada con éxito.");
});

//Evento 'error': maneja errores en la conexión
client.on('error', (err) => {
    console.error(`Error en la conexión: ${err.message}`);
});

//Cerramos la conexión si no hay respuesta en 10 segundos
client.setTimeout(10000, () => {
    console.log("Tiempo de espera agotado. Cerrando la conexión...");
    client.end(); //Finaliza la conexión de forma ordenada
});

//client.pause(): pausa la recepción de datos
setTimeout(() => {
    console.log("Pausando la recepción de datos...");
    client.pause();
}, 5000);

//client.resume(): reanuda la recepción de datos después de un apausa
setTimeout(() => {
    console.log("Reanudando la recepción de datos...");
    client.resume();
}, 7000);

//client.end(): finaliza la conexión automáticamente
setTimeout(() => {
    console.log("Finalizando la conexión correctamente...");
    client.end();
}, 12000);

//client.destroy(): cerrar y liberar todos los recursos inmediatamente
setTimeout(() => {
    console.log("Destruyendo la conexión...");
    client.destroy();
}, 17000);