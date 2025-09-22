//Importamos el módulo VehicleModel
const VehicleModel = require("../models/vehicleModel");
//Este módulo contiene la lógica para obtener los datos de los vehículos

//Importamos el módulo VehicleView
const VehicleView = require("../views/vehicleView");
//Este módulo contiene la lógica para formatear la rta que le vamos a enviar al usuario

//
const VehicleController = {

    //Método para manejar una solicitud de un vehículo por id
    handleRequest: (id) => {

        //Obtenemos los datos del vehículo
        const vehicle = VehicleModel.getVehicleById(parseInt(id, 10)); //en base decimal

        //devuelvo la respuesta que llega desde el modelo formateada (para formatear uso la view)
        return VehicleView.formatResponse(vehicle);

    }

};

//Exportamos el objeto VehicleController
module.exports = VehicleController;