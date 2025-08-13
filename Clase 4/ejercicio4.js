/*
Ejercicio 4: ¿Existe tu perfil?
Consigna:
Antes de hacer cualquier cosa, asegúrate de que tu archivo perfil.json
existe. Si no existe, crea uno nuevo con un perfil básico.
Pista: Usa fs.existsSync para verificar la existencia del archivo.
*/

const fs = require('fs');

const filePath = "perfilNuevo.json";

const perfilBasico = {
    nombre: "Santiago",
    edad: 33,
    email: "santi@email.com"
};

if (!fs.existsSync(filePath)) {
    //si el archivo no esxiste, lo crea con el perfil básico
    fs.writeFileSync(filePath, JSON.stringify(perfilBasico, null, 2), 'utf8');
    console.log("Archivo perfilNuevo.json creado con un perfil básico.");
} else {
    console.log("El archivo perfilNuevo.json ya existe.");
};