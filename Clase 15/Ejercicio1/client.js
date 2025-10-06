import net from 'net';
//npm install readline-sync
import readline from 'readline-sync';

const options = {
    port: 8000,
    host: '127.0.0.1'
};

//Creamos la conexión TCP
const client = net.createConnection(options);

//Manejo de eventos
client.on('connect', () => {
    console.log("Conexión exitosa!");
    sendLine();  //función para que el usuario pueda ingresar un mensaje
});

client.on('data', (data) => {
    console.log(`El uuid enviado por el servidor: ${data}`);
    client.end();
});

client.on('error', (err) => {
    console.error(`Ocurrió un error: ${err.message}`);
});



//Esta función permite ingresasr un mensaje por la terminal
function sendLine() {
    var line = readline.question("Ingrese un mensaje: ");
    if (line === '0') {
        client.end(); //si el usuario ingresa 0, se cierra la conexión 
    } else {
        client.write(line); //envía la información al servidor
    };
};
