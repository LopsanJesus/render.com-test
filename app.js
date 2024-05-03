import { WebSocketServer } from "ws";

// Crear un nuevo servidor de websockets en el puerto 3000
const wss = new WebSocketServer({ port: 8000 });

// Evento que se dispara cuando un cliente se conecta al servidor
wss.on("connection", (ws) => {
  console.log("Nuevo cliente conectado");

  // Evento que se dispara cuando se recibe un mensaje del cliente
  ws.on("message", (message) => {
    console.log("Mensaje recibido:", message.toString());

    // Enviar un mensaje de respuesta al cliente
    ws.send("Mensaje recibido por el servidor: " + message);
  });

  // Evento que se dispara cuando se cierra la conexión con el cliente
  ws.on("close", () => {
    console.log("Cliente desconectado");
  });
});
