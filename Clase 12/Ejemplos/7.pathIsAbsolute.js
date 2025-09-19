const path = require('path');

//Ejemplo 1: verficación de una ruta absoluta en UNIX
const absolutePath1 = '/home/user/docs/file.txt';
const isAbsolute1 = path.isAbsolute(absolutePath1);
console.log(`Ejemplo 1: verificación de ruta absoluta en UNIX ${isAbsolute1}`);

//Ejemplo 2: idem en Windows
const absolutePath2 = 'C:\\Users\\Admin\\Documents\\file.txt';
const isAbsolute2 = path.isAbsolute(absolutePath2);
console.log(`Ejemplo 2: verificación de ruta absoluta en Windows ${isAbsolute2}`);

//Ejemplo 3: verificación de ruta relativa
const relativePath3 = 'docs/file.txt';
const isAbsolute3 = path.isAbsolute(relativePath3);
console.log(`Ejemplo 3: verificación de ruta relativa ${isAbsolute3}`);