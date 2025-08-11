//SERVIDOR TCP
//importamos el módulo 'net' de Node.js
const net = require('net');

//Manejo de eventos
const server = net.createServer((socket) => {
    console.log("Un cliente se ha conectado al servidor.");

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
        console-log("La conexión con el cliente se ha cerrado.")
    });

    //Evento 'timeout': se emite cuando se alcanza el tiempo de espera definido por 'setTimeout' sin recibir datos
    socket.on('timeout', () => {
        console.log("Se ha alcanzado el tiempo de espera sin recibir datos.");
        //Podemos cerrar la conexión si se alcanzó el tiempo de espera
        socket.end(); //se cierra de forma ordenada
    });

    //Configuración del tiempo de espera (timeout) para la conexión
    socket.setTimeout(5000); //5000 mseg = 5 seg
});

//Evento 'connection': se va a emitir cuando un nuevo cliente se conecta al servidor
//Este evento está asociado al servidor y no al socket de forma individual
server.on('connection', (socket) => {
    console.log("Nueva conexión establecida.");
});

//Poner al servidor a escuchar en el puerto específico
const PORT = 3000;
server.listen(PORT, () => {
    console.log("Escuchando desde el puerto ", PORT);
});

//Evento 'listening': se emite cuando el servidor comienza a escuchar en el puerto especificado
server.on('listening', () => {
    console.log("El servidor está listo para recibir la conexión.");
});

//Evento 'error': se emite cuando ocurre un error al iniciar el servidor
server.on('error', (err) => {
    console.error("Error al iniciar el servidor: ", err.message);
});

//Evento 'close': se emite cuando el servidor se cierra
server.on('close', () => {
    console.log("El servidor se ha cerrado.");
});