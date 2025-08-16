/*
Actividad 1: Registro de libros favoritos
Consigna: ¡Hola! Hoy serás una bibliotecaria digital. Debes crear un
programa que permita registrar libros favoritos en un archivo JSON.
Implementa las siguientes funciones:
1. Agregar un libro: Se debe agregar un libro a la lista de favoritos.
Para esto, el libro tendrá solo un campo: su nombre.
2. Listar los libros: Muestra todos los libros registrados.
Pistas:
• Usa un archivo JSON para guardar los libros.
• Si el archivo no existe, comienza con un arreglo vacío.
*/

//Importamos el módulo 'fs' para trabajar con el sistema de archivos
const fs = require('fs');

//Definimos la ruta del archivo JSON donde vamos a ir almacenando los datos
const filePath = './libros.json';

//Argumentos que se pasan en la línea de comandos
const args = process.argv.slice(2);
const comando = args[0]; //el primer argumento va a ser el comando a ejecutar
const libro = args[1]; // el segundo argumento es el nombre del libro

//defino la función leerLibros
const leerLibros = () => {
    if (!fs.existsSync(filePath)) {
        console.log("El archivo no existe")
    } else {
        const contenido = fs.readFileSync(filePath, 'utf-8'); //lee el archivo libros.json
        return JSON.parse(contenido); //convierte el contenido del json en un array de libros
    }
};

//defino la función escribirLibro
const escribirLibros = (libros) => {
    const json = JSON.stringify(libros); //convierte el array de libros en formato JSON
    fs.writeFileSync(filePath, json, 'utf-8'); //guarda el json en el archivo
};

//defino la función agregarLibro que agrega un libro a la lista de favoritos
const agregarLibro = (nombre) => {
    //traigo los libros desde el archivo JSON
    const libros = leerLibros();
    //agrego el nuevo libro al array
    libros.push({nombre});
    //paso el array al json
    escribirLibros(libros);
    console.log("Nuevo libro agregado a favoritos: ", nombre);
};

//defino la función listar libros que muestra todos los libros en favoritos
const listarLibros = () => {
    const libros = leerLibros(); //lee todas los libros guardados
    console.log('Lista de libros favoritos: ');
    libros.forEach((libro) => {
        console.log(libro.nombre);
    });
}

if (comando === 'listar') {
    listarLibros();
} else if (comando === 'agregar') {
    agregarLibro(libro);
}