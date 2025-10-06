//Importamos el módulo http que es nativo de node.js
import http from 'http';

//Importamos el módulo fs ya que vamos a trabajar con archivos
import fs from 'fs';

const PORT = 3000;

//Creamos el servidor
const server = http.createServer((req, res) => {
    //Leemos el archivo datos.json
    fs.readFile('data.json', 'utf-8', (err, data) => {
        if (err) {
            res.end("No se pudo leer el archivo JSON.");
            return;
        };

        //Si se pudo leer el archivo y no hay error, enviamos el contenido del JSON al navegador
        res.setHeader('Content-Type', 'application/json');//Configuramos el contenido en formato JSON
        res.end(data); //enviamos el contenido del archivo
    });
});

server.listen(PORT, () => {
    console.log(`Servidor esuchando en http://localhost:${PORT}`);
})

