const net = require('net'); //se usa para crear servidores y clientes
const path = require('path');

const server = net.createServer();

//Manejo del evento 'connection' que se emite cuando el cliente le manda un mensaje al servidor
server.on('connection', (socket) => {
    
    console.log(`El ciente ${socket.remoteAddress}:${socket.remotePort} se ha conectado`);

    socket.on('data', (data) => {
        //console.log(`El ciente ${socket.remoteAddress}:${socket.remotePort} dice: ${data.toString()}`);
        const formattedData = data.toString().trim();
        if (formattedData === "0") {
            socket.write("Mensaje recibido. Adios client!!");
            socket.end();
            return
        };
        //socket.write("Mensaje recibido.");
        const rutaNormalizada = path.normalize(formattedData);
        socket.write(`Ruta normalizada: ${rutaNormalizada}`);
    });

    socket.on('close', () => {
        console.log("El cliente se ha desconectado. Comunicación finalizada.");
    });

    socket.on('error', (err) => {
        console.error(`Ocurrió un error: ${err.message}`);
    });

    socket.on('end', () => {
        console.log("Conexión finalizada.");
    })

});


//Iniciar el servidor
const PORT = 8081;

server.listen(PORT, () => {
    console.log(`Servidor escuchado en el puerto ${server.address().port}`);
});