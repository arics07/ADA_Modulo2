/*
Actividad 6: Gestión de un diario personal
Consigna: Crea un programa que te permita gestionar un diario personal. El programa debe permitirte:
1. Agregar una entrada al diario: Registrar una nueva entrada con la fecha y el texto.
2. Listar las entradas: Mostrar todas las entradas registradas.
3. Eliminar una entrada: Eliminar una entrada específica por su ID.
Pistas:
• Usa un archivo JSON para guardar las entradas del diario.
• Cada entrada tendrá una fecha y un texto.
• Si el archivo no existe, comienza con un arreglo vacío.
*/

const fs = require('fs');

const filePath = './diario.json';