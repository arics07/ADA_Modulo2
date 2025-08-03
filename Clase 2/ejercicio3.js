/*
Ejercicio 3: Módulos y require
1.Dentro de la carpeta clase2, crea un archivo llamado datos.js que
contenga un objeto con información sobre un curso, similar a los ejemplos
anteriores.
2.Crea otro archivo llamado ejercicio3.js que importará los datos de
datos.js usando require().
Instrucciones:
• En datos.js, define un objeto que tenga información como
nombreCurso, duracion, y temas (array de cadenas).
• Exporta este objeto para que pueda ser utilizado en otros archivos.
• En actividad3.js, importa el objeto usando require().
• Muestra en la consola la información del curso.
*/

// Importar el objeto usando require(archivo)
const curso = require("./datos");

console.log(`Información del curso - Nombre: ${curso.curso1.nombre} - Profesor: ${curso.curso1.profesor} - 
    Aula: ${curso.curso1.aula} - Duración: ${curso.curso1.duracionMeses} meses - Temas: ${curso.curso1.temas}`);