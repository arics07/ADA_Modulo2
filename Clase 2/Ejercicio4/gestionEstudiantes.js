/*
Ejercicio 4: Gestión de Estudiantes
Instrucciones

1. Dentro de la carpeta clase2/ejercicio4, crea dos archivos:
o estudiantes.js
o gestionEstudiantes.js

2. En estudiantes.js:
o Crea un array de objetos que represente una lista de estudiantes.
o Cada estudiante debe tener las propiedades: nombre, edad, curso y notas (un array de números).
o Exporta este array usando module.exports.

3. En gestionEstudiantes.js:
o Importa el array desde estudiantes.js.
o Muestra en la consola los nombres de todos los estudiantes.
o Calcula y muestra el promedio de notas de un estudiante específico.
o Agrega un nuevo estudiante al array y muestra el array actualizado en formato JSON
*/

// Importar el array usando require(archivo)
const listaEstudiantes = require("./estudiantes");

// Muestra en la consola los nombres de todos los estudiantes
for (let i=0; i<listaEstudiantes.length; i++) {
    console.log(`Nombre del estudiante n°${i}: ${listaEstudiantes[i].nombre}`)
};

// Calcula y muestra el promedio de notas de un estudiante específico
let estudianteSeleccionado = listaEstudiantes[0];
let suma = estudianteSeleccionado.notas.reduce((acum, nota) => acum + nota, 0);
let promedio = (suma / estudianteSeleccionado.notas.length).toFixed(2);

console.log(`El promedio del estudiante de nombre ${estudianteSeleccionado.nombre} es ${promedio}`);

// Agrega un nuevo estudiante al array y muestra el array actualizado en formato JSON
listaEstudiantes.push(
   {nombre: "Juan",
    edad: 11,
    curso: "Economía",
    notas: [10, 7, 8]
});

let cadenaEstudiantes = JSON.stringify(listaEstudiantes);
console.log(cadenaEstudiantes);