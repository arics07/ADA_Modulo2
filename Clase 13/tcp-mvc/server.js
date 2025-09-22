const net = require('net');

//Importamos el controlador, que es quien se va a comunicar con el servidor
const VehicleController = require('./controllers/vehicleController');
const { Socket } = require('dgram');

//Creamos el servidor tcp
const server = net.createServer((socket) => {
    //Cuando el cliente se conecta se ejecuta esta linea de código
    console.log("Cliente conectado.")

    //Escuchamos el evento 'data'
    socket.on('data', (data) => {
        const vehicleId = data.toString().trim();
        console.log(`Solicitud recibida: ID: ${vehicleId}`);

        //Llamamos al método del controller 'handleRequest' que se va a encargar de manejar la solicitud
        //va a tomar el id del vehículo y va a devolver la respuesta formateada
        const response = VehicleController.handleRequest(vehicleId);

        //Envía la respuesta al usuario
        socket.write(response);

    });

    //Escuchamos el evento 'end'
    socket.on('end', () => {
        console.log("Cliente desconectado.");
    });

    //Escuchamos el evento 'error'
    socket.on('error', (err) => {
        console.error(`Ocurrió un error: ${err.message}`);
    });

});

const PORT = 4000;

server.listen(PORT, () => {
    console.log(`Servidor escuchando desde el puerto ${PORT}...`);
});