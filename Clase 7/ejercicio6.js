/*
Ejercicio 6: Servidor de Comandos

Consigna:
Crea un servidor TCP que permita a los clientes enviar comandos simples. Dependiendo del comando recibido, el servidor debe realizar
una acción específica:
• Si el cliente envía "fecha", el servidor debe responder con la fecha y hora actual.
• Si el cliente envía "ip", el servidor debe responder con la dirección IP del cliente.
• Si el cliente envía "salir", el servidor debe cerrar la conexión.
• Para cualquier otro comando, el servidor debe responder "Comando no reconocido".

Requisitos:
• Usa el evento data para recibir y procesar los comandos.
• Usa el método socket.write() para enviar respuestas.
• Usa el método socket.end() para cerrar la conexión cuando el cliente envíe "salir".
*/

const { Socket } = require('dgram');
const net = require('net');

const server = net.createServer((socket) => {
    console.log("Un cliente se ha conectado.");

    socket.on('data', (data) => {
        const mensaje = data.toString().trim().toLowerCase();

        if (mensaje === 'fecha') {
            socket.write(`Fecha y hora: ${new Date().toLocaleString()}.`);
        } else if (mensaje === 'ip') {
            socket.write(`IP: ${socket.remoteAddress}.`);
        } else if (mensaje === 'salir') {
            socket.write("La conexión se ha cerrado.");
            socket.end();
        } else {
            socket.write("Comando no reconocido.")
        };
    });

    socket.on('end', () => {
        console.log('Cliente desconectado.');
    });
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}.`)
});