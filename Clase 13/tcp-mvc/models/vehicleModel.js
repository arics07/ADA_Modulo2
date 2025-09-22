const fs = require('fs'); //nos permite trabajar con sistemas de archivos
const path = require('path'); //nos ayuda a manejar las rutas de los archivos

//Definimos la ruta del archivo 'data.json'que está en el mismo directorio que este script.
//__dirname es una variable global de node.js que contiene la ruta del directorio actual
const dataPath = path.join(__dirname, 'data.json');

//creamos un objeto VehicleModel que contiene métodos para interactuar con los datos de data.json
const VehicleModel = {
    
    //método para obtener un vehículo por su id
    getVehicleById: (id) => {

        //leemos el contenido del archivo y lo guardamos como JSON
        const rawData = fs.readFileSync(dataPath); //pasamos como parámetro la ruta del archivo

        //convertimos el contenido del archivo JSON a un objeto JS (parse)
        const vehicles = JSON.parse(rawData);

        //buscamos el vehículo con el id solicitado; si no existe ese id, retorna null
        return vehicles.find(vehicle => vehicle.id === id) || null;

    }

};

//Exportamos el objeto VehicleModel para que pueda ser utulizado en otros archivos 
module.exports = VehicleModel;