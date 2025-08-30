/*
Ejercicio 1: Conectar y enviar un mensaje al servidor

Consigna
Crea un cliente TCP que:
1. Se conecte a un servidor en localhost:5000.
2. Cuando la conexión se establezca, envíe el mensaje: "¡Hola, servidor!".
3. Escuche los datos recibidos y los muestre en consola.

Pistas
• Usa net.createConnection() para conectar al servidor.
• Maneja el evento 'connect' para saber cuándo la conexión está lista.
• Usa client.write() para enviar el mensaje.
• Captura los datos con el evento 'data'.
------------------------------------------------------------------------------
Ejercicio 2: Implementar un timeout en la conexión

Consigna
Modifica el cliente del Ejercicio 1 para que:
1. Si después de 5 segundos no ha recibido una respuesta, cierre la conexión.
2. Muestre " Tiempo de espera agotado" en la consola antes de cerrar.

Pistas
• Usa client.setTimeout() con 5000 milisegundos.
• Cuando el timeout ocurra, usa client.end() para cerrar la conexión.
------------------------------------------------------------------------------
Ejercicio 3: Pausar y reanudar la recepción de datos

Consigna
Crea un cliente TCP que:
1. Reciba mensajes continuamente del servidor.
2. Al recibir el primer mensaje, pause la recepción durante 3 segundos.
3. Luego de los 3 segundos, reanude la recepción y siga mostrando los mensajes.

Pistas
• Usa client.pause() y client.resume().
• Un setTimeout() puede ayudarte a reanudar después de 3 segundos.
------------------------------------------------------------------------------
Ejercicio 4: Manejo de errores en la conexión

Consigna
Modifica el cliente para que:
1. Si ocurre un error (como un servidor no disponible), lo detecte y lo muestre con " Error: [mensaje]".
2. Si la conexión se cierra inesperadamente, muestre " Conexión cerrada inesperadamente".

Pistas
• Usa client.on('error', callback) para manejar errores.
• Usa client.on('close', callback) para detectar cierres.

*/

const net = require('net');

const PORT = 5000;
const HOST = 'localhost';

//ejercicio 1
const client = net.createConnection({port: PORT, host: HOST}, () => {
    console.log("Conexión con el servidor establecida.");    
    client.write("¡Hola, servidor!");
});

client.on('data', (data) => {
    console.log(`Datos recibidos del servidor: ${data.toString()}`)
});

client.on('end', () => {
    console.log("El servidor cerró la conexión.");
});

//ejercicio 2
client.setTimeout(5000, () => {
    console.log('Tiempo de espera agotado.');
    client.end();
});

//ejercicio 3
client.on('data', (data) => {
    console.log('Recibido:', data.toString());
    client.pause(); //pausa la recepción de datos, el cliente deja de emitir el evento data (si el servidor sigue enviendo data, node la almacena en un buffer)
    // luego de 3 segundos se reanuda la recepción de datos
    setTimeout(() => {
        console.log('Reanudando recepción de datos');
        client.resume();
    }, 3000);
});


//ejercicio 4
client.on('error', (err) => {
    console.error(`Error en la conexión: ${err.message}`);
});

client.on('close', () => {
    console.log('Conexión cerrada inesperadamente');
});