const net = require('net');
//np, install readline-sync
const readlineSync = require('readline-sync');

const PORT = 8080;
const HOST = 'localhost';

const client = net.createConnection({port: PORT, host: HOST});

//Evento 'connect':para manejar la conexión con el servidor
client.on('connect', () => {
    //Mensaje de conexión exitosa
    console.log("Conectado al servidor.");

    //Envía un mensaje al servidor al conectarse
    //client.write("C:\\Users\\Usuario\\Pictures\\escuela.png");
    client.write("Hola servidor! Te voy a mandar rutas...");
});

//Evento 'data': manejo de datos recibidos desde el servidor
client.on('data', (data) => {
    console.log(`Mensaje recibido del servidor: ${data.toString()}`);
    sendLine();
});

//Evento 'end': se ejecuta cuando el servidor cierra la conexión
client.on('end', () => {
    console.log("El servidor ha cerrado la conexión.");
});

//Evento 'close': se ejecuta cuando la conexión se cierra completamente, tanto del lado del servidor como del cliente, ordenadamente
client.on('close', () => {
    console.log("Conexión cerrada con éxito.");
});

//Evento 'error': maneja errores en la conexión
client.on('error', (err) => {
    console.error(`Error en la conexión: ${err.message}`);
});

//Cerramos la conexión si no hay respuesta en 20 segundos
client.setTimeout(20000, () => {
    console.log("Tiempo de espera agotado. Cerrando la conexión...");
    client.end(); //Finaliza la conexión de forma ordenada
});

//Esta función permite ingresasr un mensaje por la terminal
function sendLine() {
    var line = readlineSync.question("Ingrese una ruta: ");
    if (line === '0') {
        client.end(); //si el usuario ingresa 0, se cierra la conexión 
    } else {
        client.write(line); //envía la información al servidor
    };
};