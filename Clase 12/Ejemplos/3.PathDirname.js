const path = require('path');

//Ejemplo 1: obtener directorio contenedor de un archivo desde ruta absoluta
const filePath = "/home/user/docs/file.txt";

const dirname1 = path.dirname(filePath);
console.log(`Ejemplo 1: directorio contenedor de file.txt ${dirname1}`);

//Ejemplo 2: obtener directorio contenedor de un archivo desde ruta relativa
const relativePath = "src/utils/helpers.js";
const dirname2 = path.dirname(relativePath);
console.log(`Ejemplo 2: directorio contenedor de helpers.js ${dirname2}`);

//Ejemplo 3: uso con rutas Windows
const windowsPath = "C:\\Users\\Admin\\Documents\\report.pdf";
const dirname3 = path.dirname(windowsPath);
console.log(`Ejemplo 3: directorio Windows de report.pdf ${dirname3}`);

//Ejemplo 4: obtener el directorio padre
const dirPath = "/var/www/html";
const parentDirname = path.dirname(dirPath);
console.log(`Ejemplo 4: directorio padre ${parentDirname}`);

//Ejemplo 5: manejo de rutas que terminan en barra diagonal
const slashPath = "/home/user/docs/";
const parentDirname2 = path.dirname(slashPath);
console.log(`Ejemplo 5: directorio padre ${parentDirname2}`)