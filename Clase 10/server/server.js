const net = require('net');

//aquí quedaran guardados los clientes conectados
let clients = [];

const server = net.createServer();

//Manejo del evento 'connection' que se emite cuando el cliente le manda un mensaje al servidor
server.on('connection', (socket) => {
    
    console.log(`El ciente ${socket.remoteAddress}:${socket.remotePort} se ha conectado`);
    clients.push(socket);

    socket.on('data', (data) => {
        console.log(`El ciente ${socket.remoteAddress}:${socket.remotePort} dice: ${data.toString()}`);
        socket.write("Mensaje recibido.");
    });

    socket.on('close', () => {
        console.log("El cliente se ha desconectado. Comunicación finalizada.");
        //Eliminamos al cliente de la lista
        clients = clients.filter((client) => client !== socket);
    });

    socket.on('error', (err) => {
        console.error(`Ocurrió un error: ${err.message}`);
        //Eliminamos el socket de la lista de clientes
        clients = clients.filter((client) => client !== socket);
        //Cierra conexión 
        socket.destroy();
    });

    socket.on('end', () => {
        console.log("Conexión finalizada.");
        clients = clients.filter((client) => client !== socket);
    })

});

function sendMsgToAllClients(msg) {
    clients.forEach((client) => {
        client.write(msg);        
    });
};

//Iniciar el servidor
const PORT = 4000;

server.listen(PORT, () => {
    console.log(`Servidor escuchado en el puerto ${server.address().port}`);
});