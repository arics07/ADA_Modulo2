const path = require('path');

//Ejemplo 1: obtener la extension de un archivo desde una ruta absoluta
const filePath = "/home/user/docs/file.txt";
const extname1 = path.extname(filePath);
console.log(`Ejemplo 1: extensión del archivo desde ruta absoluta ${extname1}`);

//Ejemplo 2: obtener la extensión de un archivo desde una ruta relativa
const relativePath = "src/utils/helpers.js";
const extname2 = path.extname(relativePath);
console.log(`Ejemplo 2: extensión del archivo desde ruta relativa ${extname2}`);

//Ejemplo 3: manejo de archivo sin extensión
const noExtpath = "home/user/docs/README";
const extname3 = path.extname(noExtpath);
console.log(`Ejemplo 3: archivo sin extensión ${extname3}`);

//Ejemplo 4: ruta con múltiples puntos en el nombre
const multipleDot = "images/photo.large.500x100.jpg";
const extname4 = path.extname(multipleDot);
console.log(`Ejemplo 4: multiples puntos ${extname4}`);