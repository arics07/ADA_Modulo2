const net = require('net');

const PORT = 4000;

//Creamos una conexión TCP
const client = net.createConnection({port: PORT}, () => {
    console.log("Conectado al servidor.");

    //Enviamos un id de vehículo al servidor
    const vehicleId = "2";
    client.write(vehicleId); //Envía el id al servidor

});

//Escuchamos el evento 'data'
client.on('data', (data) => {
    //Convertimos los datos (que están en buffer) a una cadena de texto
    console.log(`Respuesta del servidor: ${data.toString()}`)

    //Cerramos la conexión
    client.end();
});

client.on('end', () => {
    console.log("Conexión cerrada.");
});