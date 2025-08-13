/*
Ejercicio 5: ¡Despídete de tu perfil!
Consigna:
¿Quieres empezar de cero? Es momento de eliminar tu archivo perfil.json.
Verifica que el archivo existe antes de intentar borrarlo.
Pista: Usa fs.unlink para eliminar archivos
*/

const fs = require('fs');

const filePath = 'perfil.json';

if (fs.existsSync(filePath)) {
    //fs.unlink() es asíncrona y necesita un callback para manejar el resultado
    fs.unlink(filePath, () => {
        console.log(`El archivo ${filePath} ha sido eliminado con éxito.`);
    });  
} else {
    console.log("El archivo no existe.")
};