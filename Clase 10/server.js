/*
Parte 1: Crear el Servidor TCP

1. Descripción: Crea un servidor TCP en Node.js que escuche en el puerto 5000. El servidor debe manejar múltiples conexiones de
clientes y mostrar los mensajes recibidos en la consola. Además, el servidor debe responder a cada mensaje con una confirmación que
diga "Mensaje recibido".

2. Requisitos:
o El servidor debe escuchar en el puerto 5000. ---
o Debe manejar el evento connection para aceptar nuevas conexiones de clientes. ---
o Debe manejar el evento data para recibir y mostrar mensajes de los clientes. ---
o Debe manejar el evento close para saber cuándo un cliente se desconecta. ---
o Debe manejar el evento error para mostrar cualquier error que ocurra. ---
o El servidor debe responder a los mensajes de los clientes con "Mensaje recibido". ---
*/

const net = require('net');

const PORT = 5000;

const server = net.createServer((socket) => {
    console.log(`Cliente conectado: ${socket.remoteAddress}:${socket.remotePort}`);
    
    //Evento 'data': se emite cuando el servidor recibe datos del cliente
    socket.on('data', (data) => {
        console.log("Datos recibidos del cliente: ", data.toString());
        //Le avisa al cliente que el server recibió el mensaje
        socket.write("Mensaje recibido por el servidor.");
    });

    //Evento 'end': se emite cuando del lado del cliente se cierra la conexión de forma ordenada
    socket.on('end', () => {
        console.log("El cliente ha cerrado la conexión.");
    });

    //Evento 'error': se emite cuando ocurre un error dentro del socket
    socket.on('error', (err) => {
        console.error("Error en la conexión: ", err.message);
    });

    //Evento 'close': se emite cuando el socket se cierra de manera ordenada o abrupta
    socket.on('close', () => {
        console.log("La conexión con el cliente se ha cerrado.")
    });

});

server.on('connection', (socket) => {
    console.log("Nueva conexión establecida.");
});

server.listen(PORT, () => {
    console.log("Escuchando desde el puerto ", PORT);
});
