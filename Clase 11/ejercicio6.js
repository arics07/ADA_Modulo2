/*
Ejercicio 6: Lista de Compras
Crea un script que permita al usuario agregar elementos a una lista de
compras. El usuario debe poder agregar tantos elementos como desee y
luego ver la lista completa.
*/

const readlineSync = require('readline-sync');

listaDeCompras = [];

const articulo = readlineSync.question("LISTA DE COMPRAS. Ingrese articulo: ");

function crearListaDeCompras(articulo, listaDeCompras) {
    if (articulo === "0") {
        console.log("LISTA DE TAREAS COMPLETA:");
        listaDeCompras.forEach(articulo => {
            console.log(articulo);        
        });
    } else {
        listaDeCompras.push(articulo);
        const articulo = readlineSync.question("Ingrese otro artículo o 0 para finalizar: ");
        crearListaDeCompras(articulo, listaDeCompras)
    };
};

crearListaDeCompras(articulo, listaDeCompras);
