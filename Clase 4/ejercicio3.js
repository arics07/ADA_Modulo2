/*
Ejercicio 3: ¡Actualiza tu estilo!
Consigna:
¿Has cambiado tu estilo o actividad reciente? ¡Es momento de actualizar
tu perfil! Agrega un nuevo atributo hobby a tu perfil y guarda los cambios
en el archivo perfil.json.
Pista: Primero, lee el archivo existente, actualiza el objeto y vuelve a escribirlo.
*/

// Importo el módulo fs que permite trabajar con el sistema de archivos
const fs = require('fs');

// Leo el archivo y lo guardo en una variable como cadena
let datos = fs.readFileSync('perfil.json', 'utf-8');

// Paso la cadena a objeto JS
let perfil = JSON.parse(datos);

// Agrego un dato
perfil.hobby = "correr";

// Reescribo el archivo
fs.writeFileSync('perfil.json', JSON.stringify(perfil, null, 2));


/*
fs.readFile — Asíncrono

    No detiene el programa mientras lee.

    Requiere una función callback que se ejecuta cuando termina de leer el archivo.


fs.readFileSync — Síncrono

    Detiene el programa hasta que el archivo se lea completamente.

    No necesita callback.
*/