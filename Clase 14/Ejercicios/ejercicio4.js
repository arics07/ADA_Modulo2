/*
Ejercicio 4: Hash de Contraseña con Sal
Crea un script en Node.js que permita al usuario ingresar una contraseña
y un "sal" (un valor aleatorio que se usa para añadir seguridad). Luego,
genera un hash de la contraseña combinada con el "sal" usando el
algoritmo SHA-256. Muestra el hash generado.
*/

const crypto = require('crypto');
const readlineSync = require('readline-sync');

const password = readlineSync.question('Ingrese la contraseña: ');
const sal = readlineSync.question('Ingrese un sal (para añadir seguridad): ');

// Crear un objeto HMAC usando el algoritmo 'sha256' y la clave secreta
const hmac = crypto.createHmac('sha256', sal);

hmac.update(password);

// Obtener el HMAC en formato hexadecimal
const hmacOutPut = hmac.digest('hex');

console.log('HMAC de sha256:', hmacOutPut);

