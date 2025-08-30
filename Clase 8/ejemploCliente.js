//Importo el módulo 'net' para crear el cliente TCP
const net = require('net');

//Configuración de la conexión
const PORT = 5000;
const HOST = 'localhost';

//Creo la conexión con el servidor usando net.createConnection()
const client = net.createConnection({port: PORT, host: HOST}, () => {
    //Mensaje de conexión exitosa
    console.log("Conectado al servidor.");

    //Enviamos un mensaje inicial al servidor
    client.write("Hola servidor!");

    //Configuro el tiempo de espera para la conexión usando setTimeout()
    client.setTimeout(10000, () => {
        console.log("Tiempo de espera alcanzado. Cerrando la conexión...");
        client.end() //Finaliza la conexión
    });

    //Pausa la recepción de datos después de 2 segundos
    setTimeout(() => {
        console.log("Pausando la recepción de datos...");
        client.pause();

        //Reanuda la recepción de datos después de 3 segundos
        setTimeout(() => {
            console.log("Reanudando la recepció´n de datos...");
            client.resume();
        }, 3000);
    }, 2000);
});

//MANEJO DE EVENTOS
//Manejo del evento 'data' para recibir mensajes del servidor
client.on('data', (data) => {
    console.log(`Datos recibidos del servidor: ${data.toString()}`);
});

//Manejo del evento 'end' cuando el servidor cierra la conexión
client.on('end', () => {
    console.log("El servidor cerró la conexión.");
});

//Manejo del evento 'error'
client.on('error', (err) => {
    console.log(`Error en la conexión: ${err.message}`);
});

//Manejo del evento 'close' cuando la conexión se cierra
client.on('close', () => {
    console.log("Conexión cerrada.");
});

//Destruimos el socket después de 15 segundos con destroy para liberar recursos
setTimeout(() => {
    console.log("Destruyendo el socket...");
    client.destroy();
}, 15000);