//Importo el módulo
const readlineSync = require('readline-sync');

const nombre = readlineSync.question("Ingrese su nombre: ");
const edad = readlineSync.questionInt("Ingrese su edad: ");

console.log(`Hola ${nombre}!! Tu edad es ${edad} años.`);

//Ojo que el question permite la entrada de cualquier String
//Con el método questionInt me aseguro que entrará en número entero

const salario = readlineSync.questionFloat("Ingrese su salario en dólares: ");
console.log(`Salario: $${salario}.`);