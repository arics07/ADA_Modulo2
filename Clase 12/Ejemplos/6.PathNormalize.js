const path = require('path');

//Ejemplo 1: normalización de una ruta con barras redundantes
const rawPath1 = 'home/user///docs/./file.txt';
const normalizePath1 = path.normalize(rawPath1);
console.log(`Ejemplo 1: normalización de una ruta con redundantes  ${normalizePath1}`);

//Ejemplo 2: normalización de una ruta con navegación hacia arriba
const rawPath2 = 'home/user/docs/../images/file.jpg';
const normalizePath2 = path.normalize(rawPath2);
console.log(`Ejemplo 2: normalización de una ruta con navegación hacia arriba  ${normalizePath2}`);
