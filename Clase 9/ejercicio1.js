/*
DESAFÍO 1: Cliente con Reconexión Automática

Objetivo: Crear un cliente TCP que se conecte a un servidor, pero si la
conexión se pierde, debe intentarlo nuevamente cada 3 segundos.

El cliente debe:
Conectarse al servidor en el puerto 5000.
Enviar un mensaje inicial: "¡Hola, servidor!".
Escuchar el evento 'close' y volver a conectarse tras 3 segundos.
Escuchar y manejar 'error', mostrando el mensaje en consola.
*/

const net = require('net');

PORT = 5000;

const client = net.createConnection({port: PORT});

client.on('connect', () => {
    console.log("Se estableció la conexión con éxito.");
    client.write("¡Hola, servidor!");
});

client.on('error', (err) => {
    console.log(`Error en la conexión: ${err.message}`);
});

client.on('close', () => {
    console.log("Conexión cerrada con éxito.");
});

client.on('data', (data) => {
    console.log(`Mensaje recibido del servidor: ${data.toString()}`);
});

//----------------------------------------------------------------------------------