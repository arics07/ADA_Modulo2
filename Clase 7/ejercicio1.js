/*
Ejercicio 1: Servidor de Eco
Consigna:
Crea un servidor TCP que actúe como un servidor de eco. Cuando un cliente se conecte, el servidor debe recibir 
los datos enviados por el cliente y devolverlos exactamente igual (hacer un "eco"). Además, el
servidor debe imprimir en la consola cada vez que un cliente se conecta, desconecta o envía datos.
Requisitos:
• Usa el evento connection para detectar nuevas conexiones.
• Usa el evento data para recibir datos del cliente.
• Usa el método socket.write() para enviar los datos de vuelta al cliente.
• Usa los eventos end y close para manejar la desconexión del cliente.
*/

const net = require('net');

const server = net.createServer((socket) => {
    console.log("Un cliente se ha conectado");

    socket.on('data', (data) => {
        console.log(`Datos recibidos: ${data.toString()}`);
        socket.write(data);
    });

    socket.on('end', () => {
        console.log("El cliente ha cerrado la conexión.");
    });

    socket.on('close', () => {
        console.log("Se ha cerrado la conexión");
    });

});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Servidor escuchando desde el puerto ${PORT}`);
});