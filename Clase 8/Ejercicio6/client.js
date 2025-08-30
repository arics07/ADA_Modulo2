/*
Ejercicio 6: Cliente interactivo con la usuaria

Consigna
Crea un cliente donde la usuaria pueda escribir mensajes en la consola y enviarlos al servidor.
• Después de cada mensaje, la usuaria puede escribir otro.
• Si escribe "salir", el cliente se desconecta.

Pistas
• Usa readline para capturar texto de la usuaria.
• Si el mensaje es "salir", cierra la conexión con client.end().

Ejercicio 7: Cliente que destruye el socket al fallar

Consigna
Crea un cliente que:
1. Se conecte al servidor.
2. Si hay un error en la conexión, use client.destroy() y muestre "Conexión destruida".

Pistas
• client.destroy() libera los recursos del socket de inmediato.

Ejercicio 8: Cliente con unref/ref para control de procesos

Consigna
Crea un cliente que:
1. Use client.unref() para permitir que Node.js termine si no hay otras tareas.
2. Luego, después de 5 segundos, use client.ref() para evitar que el proceso termine.

Pistas
• unref() hace que el socket no impida que Node.js termine.
• ref() lo vuelve a mantener activo.

Ejercicio 9: Cliente que reconecta automáticamente

Consigna
Crea un cliente que:
1. Si la conexión falla, reintente conectarse cada 3 segundos hasta que tenga éxito.

Pistas
• Usa setTimeout() para intentar de nuevo tras 3 segundos.
• Llama a net.createConnection() dentro del reintento.

Ejercicio 10: Cliente que detecta pérdida de conexión

Consigna
Crea un cliente que:
1. Si deja de recibir datos durante 10 segundos, muestre "No hay datos del servidor" y cierre la conexión.

Pistas
• Usa setTimeout() que se reinicie con cada mensaje recibido.
• Si pasan 10 segundos sin mensajes, cierra con client.end().
*/