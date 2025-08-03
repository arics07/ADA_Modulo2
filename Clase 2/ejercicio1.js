/*
Ejercicio 1: Creación y Manipulación de un Objeto JSON
1.Dentro de la carpeta ADA_TRABAJOS, crea una nueva carpeta llamada
clase2.
2.En la carpeta clase2, crea un archivo JavaScript llamado ejercicio1.js.
3.En este archivo, crea un objeto JS que represente un libro. El objeto
debe tener las siguientes propiedades: titulo, autor, año, genero (puede
ser un array de géneros).
Instrucciones:
• Muestra en la consola el título y el autor del libro.
• Actualiza el año del libro a un valor más reciente.
• Añade una nueva propiedad llamada páginas que indique el número
de páginas del libro.
• Muestra el objeto actualizado en la consola.
*/


const libro = {
  titulo: "Brave New World",
  autor: "Aldous Huxley",
  año: 1932,
  genero: ["Ciencia ficción", "Distopía"]
};


console.log(typeof(libro));

console.log("Título:", libro.titulo);
console.log("Autor:", libro.autor);

// Actualizar el año a un valor más reciente 
libro.año = 2021;

// Añadir propiedad 'páginas'
libro.páginas = 268;

// Mostrar el objeto actualizado en la consola
console.log("Libro actualizado:", libro);