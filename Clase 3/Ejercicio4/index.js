/*
Actividad 4: Control de inventario
Consigna: Crea un programa para llevar el control de un inventario. El programa debe permitirte:
1. Agregar un producto: Registrar un producto con su nombre y cantidad disponible.
2. Listar los productos: Mostrar todos los productos registrados.
3. Actualizar la cantidad de un producto: Modificar la cantidad de un producto en el inventario.
Pistas:
• Usa un archivo JSON para guardar los productos.
• Si el archivo no existe, comienza con un arreglo vacío.
• Cada producto debe tener un ID único que se pueda utilizar para actualizar su cantidad.
*/

const fs = require('fs');

const filePath = './inventario.json';

//Argumentos que se pasan en la línea de comandos
const args = process.argv.slice(2);
const comando = args[0]; //el primer argumento va a ser el comando a ejecutar
const id = args[1]; //el segundo argumento es el id del producto
const cantidad = args[2] //el tercer argumento es la cantidad del producto
const nombre = args[3]; //el cuarto argumento es el nombre del producto


//defino la función leerInventario
const leerInventario = () => {
    if (!fs.existsSync(filePath)) {
        console.log("El archivo no existía y se ha creado recién.");
        return []; // Devuelve un arreglo vacío
    } else {
        const contenido = fs.readFileSync(filePath, 'utf-8'); //lee el archivo inventario.json
        return JSON.parse(contenido); //convierte el contenido del json en un array de libros y lo retorna
    }
};

//defino la función escribirInventario
const escribirInventario = (inventario) => {
    const json = JSON.stringify(inventario); //convierte el array en formato JSON
    fs.writeFileSync(filePath, json, 'utf-8'); //guarda el json en el archivo
};

//defino la función agregarProducto
const agregarProducto = (nombre, id, cantidad) => {
    const inventario = leerInventario();
    inventario.push({nombre: nombre, id: id, cantidad:cantidad});
    escribirInventario(inventario);
    console.log(`Producto agregado al inventario con éxito`);
};

//defino la funcion listarProductos
const listarProductos = () => {
    const inventario = leerInventario();
    inventario.forEach((producto) => {
        console.log(`Producto: ${producto.nombre} - id: ${producto.id} - Cantidad: ${producto.cantidad}`);    
    });
};

//defino la función actualizarProducto
const actualizarProducto = (id, nuevaCantidad) => {
    const inventario = leerInventario();
    const producto = series.find((producto) => producto.id === id) //busca el producto por su id
    //si encontró el producto, actualiza la cantidad
    if (producto) {
        producto.cantidad = nuevaCantidad;
        //y guarda el inventario
        escribirInventario(inventario); 
        console.log(`La cantidad del producto ${producto.nombre} con id ${id} fue actualizada: ${producto.cantidad}.`);
    } else {
        console.log("El id ingresado no fue encontrado.");
    };
};


//MENU
if (comando.toLowerCase() === "agregar") {
    agregarProducto(nombre, id, cantidad);
} else if (comando.toLowerCase() === "listar") {
    listarProductos();
} else if (comando.toLowerCase() === "actualizar") {
    actualizarProducto(id);
} else {
    console.log("Comando NO reconocido. Debes usar 'agregar', 'listar' o 'completar'.");
    console.log("Ingresar comando - id - cantidad - nombre del producto.");
};