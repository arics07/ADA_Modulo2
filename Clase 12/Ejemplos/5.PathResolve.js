const path = require('path');

//Ejemplo 1: resolución de una ruta absoluta desde el directorio actual (NO CREA el archivo)
const resolvePath = path.resolve('file.txt');
console.log(`Ejemplo 1: devuelve una ruta absoluta desde el directorio actual  ${resolvePath}`);

//Ejemplo 2: multiples segmento de ruta
const resolvePath2 = path.resolve('home/user', 'docs', 'file.txt');
console.log(`Ejemplo 2: ruta a partir de múltiples segmentos  ${resolvePath2}`);

//Ejemplo 3: Uso con rutas relativas que cambian de nivel
const resolvePath3 = path.resolve('home/user/docs', '../images', 'file.jpg');
console.log(`Ejemplo 3: ruta absoluta con rutas relativas que cambian de nivel (..) ${resolvePath3}`);

//Ejemplo 4: ruta con directorio vacío (lo omite)
const resolvePath4 = path.resolve('home/user', '', 'file.txt');
console.log(`Ejemplo 4: ruta con directorio vacio  ${resolvePath2}`);

//Ejemplo 5: resuloción de rutas desde un directorio relativo
const resolvePath5 = path.resolve('docs', 'file.txt');
console.log(`Ejemplo 5: ruta con directorio relativo  ${resolvePath5}`);