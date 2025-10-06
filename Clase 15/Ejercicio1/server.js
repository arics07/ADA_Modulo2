import net from 'net';

import {v4 as uuidv4} from 'uuid';

const server = net.createServer();

server.on('connection', (socket) => {
    
    const idv4 = uuidv4();
    console.log(`El ciente ${socket.remoteAddress}:${socket.remotePort} se ha conectado y tiene el uuid: ${uuidv4}`);
    socket.write(`UUIDV4: ${idv4}`);

    socket.on('data', (data) => {
        console.log(`El ciente ${socket.remoteAddress}:${socket.remotePort} dice: ${data.toString()}`);
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
const PORT = 8000;

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});