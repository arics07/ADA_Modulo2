// Importo el módulo  net que nos permite trabajar con servidores TCP
const net = require('net');

// Creación del servidor TCP usando la función createServer del módulo 'net'
const server = net.createServer((socket) => {
    // Mensaje que aparece cuando un cliente se conecta al servidor
    console.log('¡Un cliente se ha conectado!');

    // Escuchamos el evento data que se va a activar cuando el cliente envie datos al servidor
    socket.on('data', (data) => {
        // mostrar en consola el mensaje recibido desde el cliente
        console.log('Mensaje recibido del cliente: ', data.toString());

    });

    // Escuchamos el evento 'end' que se va a activar cuando el cliente se desconecte del servidor
    socket.on('end', () => {
        // mostrar un mensaje en la consola indicando que el cliente se ha desconectado
        console.log('El cliente se ha desconectado.');
    });

});

// Defino el puerto desde donde escucha las conexiones el servidor
const PORT = 4000;

// Iniciamos el servidor y lo ponemos a 'escuchar' en el puerto definido
server.listen(PORT, () => {
    // Muestra en consola un mensaje indicando que el servidor está listo
    console.log('Servidor escuchando en el puerto: ', PORT);
});