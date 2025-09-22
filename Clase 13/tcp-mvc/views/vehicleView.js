//La vista define cómo el cliente va a ver la respuesta a la solicitud

//Creamos el objeto VehicleView que contiene métodos para formatear la rta
const VehicleView = {

    formatResponse: (vehicle) => {

        //Chequeamos si el vehículo es null o undefined
        if (!vehicle) {
            return JSON.stringify({
                status: "error",
                message: "Vehículo no encontrado"
            });
        };

        return JSON.stringify({
            status: "success",
            data: vehicle //incluimos los datos del vehículo en la respuesta
        });
    }
};

//Exportamos el objeto VehicleView
module.exports = VehicleView;