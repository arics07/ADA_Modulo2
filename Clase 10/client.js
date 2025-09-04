/*
Parte 2: Crear el Cliente TCP

1. Descripción: Crea un cliente TCP en Node.js que se conecte al
servidor en el puerto 5000. El cliente debe permitir al usuario
ingresar mensajes en la consola y enviar esos mensajes al servidor.
El cliente debe mostrar la respuesta del servidor en la consola.

2. Requisitos:
o El cliente debe conectarse al servidor en el puerto 5000 y en la dirección localhost. ---
o Debe permitir al usuario ingresar mensajes y enviarlos al servidor. ---
o Debe mostrar en la consola la respuesta del servidor. ---
o El cliente debe manejar la desconexión y mostrar un mensaje cuando se desconecta. ---

Instrucciones
1. Configuración:
o Crea dos archivos, server.js y client.js, y coloca el código proporcionado en cada uno. ---
o Asegúrate de que el módulo readline-sync esté instalado en el proyecto (para el cliente) usando npm install readline-sync. ---

2. Ejecución:
o Ejecuta primero el servidor usando node server.js.
o Luego, ejecuta el cliente usando node client.js.
o Prueba enviando mensajes desde el cliente y verifica que el servidor los reciba y responda adecuadamente.
*/

const net = require('net');
const readline = require('readline');

//Configuración de lectura desde consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const PORT = 5000;
const HOST = 'localhost';

//Cliente
const client = net.createConnection({port: PORT, host: HOST});

client.on('connect', () => {
    console.log("Conexión establecida con éxito.");
    pedirMensaje();
});

client.on('data', (data) => {
    console.log(`Mensaje recibido del servidor: ${data.toString()}`);
});

client.on('end', () => {
    console.log("El servidor ha cerrado la conexión.");
});

client.on('close', () => {
    console.log("Conexión cerrada con éxito.");
});

client.on('error', (err) => {
    console.error(`Error en la conexión: ${err.message}`);
});

function pedirMensaje() {
  rl.question("Mensaje: ", (mensaje) => {
    if (mensaje.toLowerCase() === "salir") {
      console.log("Cerrando conexión...");
      client.end();
      rl.close();
      return;
    }
    client.write(mensaje);
    pedirMensaje(); //vuelve a pedir mensaje
  });
}