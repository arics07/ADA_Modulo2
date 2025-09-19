const path = require('path');

//Ejemplo 1: obtener el nombre del archivo desde una ruta absoluta
const fullPath = "/home/user/docs/file.txt"; //fullPath contiene una ruta absoluta de un archivo

const basename = path.basename(fullPath); //toma solo el nombre del archivo
console.log(`Ejemplo 1: nombre del archivo ${basename}`); 

//Ejemplo 2: obtener el nombre del archivo sin la extension
const basenameSinExtension = path.basename(fullPath, ".txt"); //si la extensión coincide, la va a omitir
console.log(`Ejemplo 2: nombre del archivo sin extension ${basenameSinExtension}`); 

//Ejemplo 3: uso con rutas relativas
const relativePath = "src/utils/helpers.js";
const basename2 = path.basename(relativePath); 
console.log(`Ejemplo 3: nombre del archivo con ruta relativa ${basename2}`); 

//Ejemplo 4: obtener el nombre del directorio
const dirPath = "var/www/html"; //la ruta termina en un directorio llamado html
const basename3 = path.basename(dirPath);
console.log(`Ejemplo 4: nombre del directorio ${basename3}`); 

//Ejemplo 5: ruta con separadores de Windows
const windowsPath = "C:\\Users\\Admin\\Documents\\report.pdf"
const basename4 = path.basename(windowsPath);
console.log(`Ejemplo 5: nombre del archivo en ruta Windows ${basename4}`); 