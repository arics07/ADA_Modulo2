/*
Ejercicio 3: Cifrado y Descifrado Básico con crypto
Crea un script en Node.js que permita al usuario ingresar un texto, luego
lo cifre usando el algoritmo AES-256-CBC y lo descifre para mostrar el
resultado original. Usa el módulo crypto para el cifrado y descifrado.
*/

const crypto = require('crypto');
const readlineSync = require('readline-sync');

//creo las ctes necesarias
const algoritmo = 'aes-256-cbc'; // algoritmo de cifrado AES con un tamaño de 256 bits 
const key = crypto.randomBytes(32); // genera una clave de 265(bits) -> 32 bytes
const iv = crypto.randomBytes(16); // genera un vector de inicializacion de 16 bytes

// Creamos el objeto cipher 
const cipher = crypto.createCipheriv(algoritmo, key, iv);

// El usuario ingresa el texto
const data = readlineSync.question("Ingrese el texto que desea cifrar: ");

let encriptado = cipher.update(data, 'utf8', 'hex');

// Procesa el texto plano y lo cifra
encriptado += cipher.final('hex'); // finaliza el cifrado

// Mostramos el texto cifrado
console.log(`Texto cifrado: ${encriptado}`);

// PARA DESCIFRAR:

// Crear objeto decipher 
const decipher = crypto.createDecipheriv(algoritmo, key, iv);

// Deciframos los datos
let decifrado = decipher.update(encriptado, 'hex', 'utf8');
decifrado += decipher.final('utf-8');

// Mostramos el texo decifrado
console.log(`Texto decifrado: ${decifrado}`);