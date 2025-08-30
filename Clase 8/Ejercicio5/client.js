/*
Ejercicio 5: Detectar cuando el servidor cierra la conexión

Consigna
Crea un cliente que:
1. Se conecte y envíe "¿Sigues ahí, servidor?".
2. Cuando el servidor cierre la conexión, muestre " Servidor cerró la conexión".

Pistas
• El evento 'end' se activa cuando el servidor finaliza la conexión.
*/

const net = require('net');

const PORT = 5000;
const HOST = 'localhost';

const client = net.createConnection({port: PORT, host: HOST}, () => {
    console.log("Conexión establecida con éxito.");
    client.write("¿Sigues ahí, servidor?");

});

//Cuando el servidor envia data
client.on('data', (data) => {
    console.log('Servidor dice:', data.toString());
});

//Cuando el servidor cierra la conexión
client.on('end', () => {
    console.log('Servidor cerró la conexión');
});