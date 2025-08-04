/*
Ejercicio 1: ¡Crea tu perfil digital!
Consigna:
Imagina que acabas de unirte a una red social donde puedes crear tu perfil digital básico. Tu misión es:
1. Crear un archivo llamado perfil.json.
2. Dentro de este archivo, guarda información: nombre, edad y tu ciudad favorita.
3. Usa el módulo fs para escribir este archivo desde Node.js.

Pista: Utiliza JSON.stringify para convertir tu información en un formato que pueda guardarse en el archivo.
*/

// Importo el módulo fs que permite trabajar con el sistema de archivos
const fs = require('fs');

// Creo un perfil nuevo
 const perfilNuevo = {
    nombre: "Martin",
    edad: 24,
    ciudadFavorita: "Melbourne"
 };

// Uso el módulo writeFile para escribir el archivo
fs.writeFile('perfil.json', JSON.stringify(perfilNuevo, null, 2), (err) => {
    if (err) {
        console.log('Error al leer el archivo', err);
        return;
    };

    console.log("Archivo perfil.json fue modificado con éxito.");
});
