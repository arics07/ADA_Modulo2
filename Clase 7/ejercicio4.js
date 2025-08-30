/*
Ejercicio 4: Servidor con Manejo de Errores

Consigna:
Crea un servidor TCP que maneje errores de conexión de manera adecuada. Si ocurre un error en la conexión con un cliente, el servidor
debe imprimir un mensaje de error en la consola y cerrar la conexión con ese cliente. Además, el servidor debe seguir funcionando y aceptando
nuevas conexiones.

Requisitos:
• Usa el evento error para detectar errores en la conexión.
• Usa el método socket.destroy() para cerrar la conexión en caso de error.
• Asegúrate de que el servidor siga escuchando nuevas conexiones después de manejar el error.
*/

const net = require('net');

const server = net.createServer((socket) => {
    console.log("El cliente se ha conectado.");

    socket.on('err', (err) => {
        console.error(`Error en la conexión: ${err.message}`);
        //Cierra la conexión
        socket.destroy();
    });
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});