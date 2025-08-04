/*
2. En estudiantes.js:
o Crea un array de objetos que represente una lista de estudiantes.
o Cada estudiante debe tener las propiedades: nombre, edad, curso y notas (un array de números).
o Exporta este array usando module.exports.
*/

const estudiantes = [
  {
    nombre: "León",
    edad: 16,
    curso: "Matemática",
    notas: [10, 9, 10]
  },
  {
    nombre: "Sofia",
    edad: 17,
    curso: "Biología",
    notas: [8, 7, 9]
  },
  {
    nombre: "Valentina",
    edad: 16,
    curso: "Historia",
    notas: [6, 8, 9]
  },
  {
    nombre: "Mateo",
    edad: 15,
    curso: "Matemática",
    notas: [6, 7, 7]
  }
];

// Exportar el array
module.exports = estudiantes;