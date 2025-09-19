//Importamos el módulo; al ser nativo, no requiere instalación
const path = require('path');

//Ejemplo 1: uniendo segmentos de ruta simple
const ejemplo1 = path.join("/user", "local", "bin");
//Como el primer segmento es una ruta absulota (/user), el resultado será una ruta absoluta
console.log(`Ejemplo 1: ruta combinada ${ejemplo1}`);
/* Resultado esperado:
En UNIX: /user/local/bin
En Windows: \user\local\bin
*/

//Ejemplo 2: eliminando elementos redundantes
const ejemplo2 = path.join("/user", "\local", "//bin/");
console.log(`Ejemplo 2: ruta normalizada sin redundancia ${ejemplo2}`);

//Ejemplo 3: normalizando rutas con .. (subir directorio)
const ejemplo3 = path.join("user", "local", "..", "bin");
console.log(`Ejemplo 3: ruta normalizada subiendo directorio con ..  ${ejemplo3}`);

//Ejemplo 4: construir una ruta relativa multiplataforma
const ejemplo4 = path.join("docs", "projects", "index.html");
console.log(`Ejemplo 4: ruta relativa que funciona en cualquier SO  ${ejemplo4}`);