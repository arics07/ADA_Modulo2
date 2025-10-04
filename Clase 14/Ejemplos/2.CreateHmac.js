// Importar el módulo 'crypto' de Node.js
const crypto = require('crypto');

// Guardamos en una cte los datos que vamos a autenticar
const data = 'Mensaje secreto';

// Clave secreta para HMAC (Hash-based Message Authentication Code)
const secretKey = 'mi_clave_secreta'; //suele ir en un .env

// Crear un objeto HMAC usando el algoritmo 'sha256' y la clave secreta
const hmac = crypto.createHmac('sha256', secretKey);

// Actualizamos el HMAC con los datos
hmac.update(data);

// Obtener el HMAC en formato hexadecimal
const hmacOutPut = hmac.digest('hex');

// Leemos el HMAC generado
console.log('HMAC de sha256:', hmacOutPut);