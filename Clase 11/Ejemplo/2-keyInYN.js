const readlineSync = require('readline-sync');

const decision = readlineSync.keyInYN("Desea salir? y/n :");

console.log(decision)