/*
Actividad 5: Registro de contactos
Consigna: Crea un programa que permita registrar contactos con nombre, teléfono y correo electrónico. 
El programa debe permitirte:
1. Agregar un contacto: Registrar un nuevo contacto.
2. Listar los contactos: Mostrar todos los contactos registrados.
3. Eliminar un contacto: Eliminar un contacto de la lista.
Pistas:
• Usa un archivo JSON para guardar los contactos.
• Si el archivo no existe, comienza con un arreglo vacío
*/

const fs = require('fs');

const filePath = './contactos.json';

//Argumentos que se pasan en la línea de comandos
const args = process.argv.slice(2);
const comando = args[0]; //el primer argumento va a ser el comando a ejecutar
const nombre = args[1]; //el segundo argumento es el nombre del contacto
const telefono = args[2] //el tercer argumento es el teléfono del contacto
const email = args[3]; //el cuarto argumento es el correo electrónico del contacto

const leerListaDeContactos = () => {
    if (!fs.existsSync(filePath)) {
        console.log("El archivo no existía y se ha creado recién.");
        return []; // Devuelve un arreglo vacío
    } else {
        const contenido = fs.readFileSync(filePath, 'utf-8'); //lee el archivo inventario.json
        return JSON.parse(contenido); //convierte el contenido del json en un array de libros y lo retorna
    };
};

const escribirListaDeContactos = (listaDeContactos) => {
    const json = JSON.stringify(listaDeContactos); //convierte el array en formato JSON
    fs.writeFileSync(filePath, json, 'utf-8'); //guarda el json en el archivo
};

const agregarContacto = (nombre, telefono, email) => {
    const listaDeContactos = leerListaDeContactos();
    listaDeContactos.push({nombre: nombre, telefono: telefono, email: email});
    escribirListaDeContactos(listaDeContactos);
    console.log(`El contacto ${nombre} fue agregado con éxito!!`);
};

const listarContactos = () => {
    const listaDeContactos = leerListaDeContactos();
    listaDeContactos.forEach((contacto) => {
        console.log(`Nombre: ${contacto.nombre} - Teléfono: ${contacto.telefono} - E-mail: ${contacto.email}`);;
    });
};

const eliminarContacto = (nombre, email) => {
    const listaDeContactos = leerListaDeContactos();
    //Filtro la lista, eliminando el contacto que coincide
    const nuevaLista = listaDeContactos.filter((contacto) => !(contacto.nombre === nombre && contacto.email === email));
    
    if (nuevaLista.length === listaDeContactos.length) {
        console.log("No se encontró el contacto que desea eliminar.");
    } else {
        escribirListaDeContactos(nuevaLista);
        console.log("Contacto eliminado correctamente.");
    };
};

//MENU
if (comando.toLowerCase() === "agregar") {
    agregarContacto(nombre, telefono, email);
} else if (comando.toLowerCase() === "listar") {
    listarContactos();
} else if (comando.toLowerCase() === "eliminar") {
    eliminarContacto(nombre, email);
} else {
    console.log("Comando NO reconocido. Debes usar 'agregar', 'listar' o 'completar'.");
    console.log("Ingresar comando - nombre - teléfono - email");
};