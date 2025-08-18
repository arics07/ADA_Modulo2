/*
Ejercicio 6: Tu lista de metas
Consigna:
Es momento de planear tus metas. Crea un archivo llamado metas.json
con una lista vacía al principio. Luego, agrega metas como: “Aprender
Node.js” y “Viajar a Japón”. Guarda la lista actualizada en el archivo.
Pista: Usa fs.writeFile para crear el archivo y agregar elementos a la
lista.
*/

const fs = require('fs');

const filePath = "metas.json";

const leerLista = () => {
    if (!fs.existsSync(filePath)) {
        console.log("El archivo no existía y se ha creado recién.");
        return []; // Devuelve un arreglo vacío
    } else {
        const contenido = fs.readFileSync(filePath, 'utf-8'); //lee el archivo 
        return JSON.parse(contenido); //convierte el contenido del json en un array de libros y lo retorna
    };
};

const escribirLista = (lista) => {
    const json = JSON.stringify(listaDeContactos); //convierte el array en formato JSON
    fs.writeFileSync(filePath, json, 'utf-8'); //guarda el json en el archivo
};

const agregarMeta = (meta) => {
    const metas = leerLista();
    metas.push(meta);
    escribirLista(metas);
    console.log(`Se agregó un nuevo objetivo!: ${meta}`);
};