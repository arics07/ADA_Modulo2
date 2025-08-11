/*
Actividad 2: Seguimiento de series de televisión
Consigna: ¡Es hora de organizar tus series favoritas! Crea un programa que permita:
1. Registrar una serie: Se debe registrar una serie con su nombre y la cantidad de temporadas.
2. Listar las series: Muestra todas las series registradas.
3. Actualizar las temporadas de una serie: Permite actualizar la cantidad de temporadas de una serie.
Pistas:
• Usa un archivo JSON para almacenar la información de las series.
• Si el archivo no existe, comienza con un arreglo vacío.
• ¿Qué es fs.existsSync()?
• El método fs.existsSync() es parte del módulo fs (file system) en Node.js. Este método se usa para comprobar si un 
archivo o directorio existe en el sistema de archivos de manera sincrónica, lo que significa que el código se ejecuta 
y espera a que la operación se complete antes de continuar con el siguiente paso.
• Sintaxis: fs.existsSync(path);
*/

const fs = require('fs');

const filePath = './series.json';

//Argumentos que se pasan en la línea de comandos
const args = process.argv.slice(2);
const comando = args[0]; //el primer argumento va a hacer el comando a ejecutar
const nombreSerie = args[1]; // el segundo argumento es el nombre del libro
const cantidadTemporadas = args[2]; //el tercer argumento es la cantidad de temporadas de la serie

//defino una funcion para leer las series
const leerSeries = () => {
    if (!fs.existsSync(filePath)) {
        console.log("El archivo no existía y se ha creado recién.");
        return []; // Devuelve un arreglo vacío
    } else {
        const contenido = fs.readFileSync(filePath, 'utf-8'); //lee el archivo libros.json
        return JSON.parse(contenido); //convierte el contenido del json en un array de libros
    }
};

//defino una función para escribir las series
const escribirSeries = (series) => {
    const json = JSON.stringify(series); //convierte el array de series en formato JSON
    fs.writeFileSync(filePath, json, 'utf-8'); //guarda el json en el archivo
};

//defino la función registrarSerie: Se debe registrar una serie con su nombre y la cantidad de temporadas.
const registrarSerie = (nombreSerie, cantidadTemporadas) => {
    const series = leerSeries();
    series.push({nombre: nombreSerie, temporadas: cantidadTemporadas});
    escribirSeries(series);
    console.log(`Serie agregada con éxito! Serie: ${nombreSerie} con ${cantidadTemporadas} temporadas.`);
};

//defino la función listarSeries: Muestra todas las series registradas
const listarSeries = () => {
    const series = leerSeries(); //lee todas series guardadas
    console.log('Lista de series: ');
    series.forEach((serie) => {
        console.log(`Título: ${serie.nombre} - ${serie.temporadas} temporadas.`);
    });
};

//defino la funcion actualizarSerie: Actualizar las temporadas de una serie: Permite actualizar la cantidad de temporadas de una serie
const actualizarSerie = (nombreSerie, cantidadTemporadas) => {
    const series = leerSeries();
    const serie = series.find((serie) => serie.nombre === nombreSerie) //busca la serie por su nombre
    //si encontró la serie, la actualiza
    if (serie) {
        serie.temporadas = cantidadTemporadas;
        //y guarda las series, con la serie actualizada
        escribirSeries(series); 
        console.log(`Serie ${serie.nombre} actualizada con ${serie.temporadas} temporadas.`);
    } else {
        console.log("La serie ingresada no fue encontrada.");
    };
};

//MENÚ
if (comando === "registrar") {
    registrarSerie(nombreSerie, cantidadTemporadas);
} else if (comando === "listar") {
    listarSeries();
} else if (comando === "actualizar") {
    actualizarSerie(nombreSerie, cantidadTemporadas);
} else {
    console.log("El comando no es válido. Ingresar 'registrar', 'listar' o 'actualizar'.");
};