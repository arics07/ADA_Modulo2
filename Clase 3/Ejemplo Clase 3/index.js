/*
Vamos a crear una aplicación en Node.js para gestionar una lista de tareas
*/

//Importamos el módulo 'fs' para trabajar con el sistema de archivos
const fs = require('fs');

//Definimos la ruta del archivo JSON donde vamos a ir almacenando los datos
//ruta relativa, dentro de la misma carpeta ./
const filePath = './tareas.json';

//Argumentos que se pasan en la línea de comandos
const args = process.argv.slice(2);
const comando = args[0]; //el primer argumento va a ser el comando a ejecutar
const descripcion = args.slice(1).join(' '); //el resto de los argumentos son la descripcion de la tarea
const id = args[1]; //el segundo argumento que se pasa es el id

//Función para leer el archivo JSON y que nos devuelva las tareas guardadas
const leerTareas = () => {
    const contenido = fs.readFileSync(filePath, 'utf-8'); //lee el archivo tareas.json
    return JSON.parse(contenido); //convierte el contenido del json en un array de tareas y lo retorna
};

//Función para escribir tareas en el archivo JSON
const escribirTareas = (tareas) => {
    const json = JSON.stringify(tareas); //convierte el array de tareas en formato JSON:  array JS --> stringify --> JSON
    fs.writeFileSync(filePath, json, 'utf-8'); //guarda el json en el archivo
};

//Función para agregar una nueva tarea
const agregarTarea = (descripcion) => {
    const tareas = leerTareas(); //lee las tareas guardadas en el archivo json y las guarda en una variable
    tareas.push({id: tareas.length+1, descripcion, completada: false}); //agrega un atarea al array
    //pasa las tareas al archivo json
    escribirTareas(tareas);
    console.log('Tarea agregada con éxito! ', descripcion);
};

//Función para listar todas las tareas
const listarTareas = () => {
    const tareas = leerTareas(); //lee todas las tareas actuales
    console.log('Lista de tareas: ');
    tareas.forEach((tarea) => {
        const estado = tarea.completada ? 'FINALIZADA' : 'PENDIENTE'; //muestra si la tarea está completada
        console.log(`${tarea.id}. ${tarea.descripcion} - ${estado}`);
    });
};

//Función para marcar una tarea como finalizada
const completarTarea = (id) => {
    const tareas = leerTareas();
    const tarea = tareas.find((t) => t.id === parseInt(id)); //busca la tarea por id
    //si encuentra la tarea la marca como finalizada
    if (tarea) {
        tarea.completada = true;
        //y guarda la tarea finalizada
        escribirTareas(tareas); 
        console.log("Tarea completada: ", tarea.descripcion);
    } else {
        console.log("Tarea no encontrada");
    };
};

//MENÚ
if (comando === "agregar") {
    agregarTarea(descripcion);
} else if (comando === "listar") {
    listarTareas();
} else if (comando === "completar") {
    completarTarea(id);
} else {
    console.log("Comando NO reconocido. Debes usar 'agregar', 'listar' o 'completar'.");
};