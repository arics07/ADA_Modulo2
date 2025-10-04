// Importamos el módulo 'crypto' en Node
const crypto = require('crypto');

// Datos que queremos hashear
const data = 'Este es un mensaje secreto, aunque todos saben que mi micho es el más hermosooo!';

// Creamos el objeto hash usando el algoritmo 'sha256'
const hash = crypto.createHash('sha256'); //'sha256' o 'sha512'

// Actualizar el hash con los datos
hash.update(data);

// Obtener el hash en formato hexadecimal
const hashOutput = hash.digest('hex');

// Mostrar el hash generado
console.log('Hash de sha256: ', hashOutput);