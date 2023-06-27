import { io, Socket } from "socket.io-client";

const socket: Socket = io("http://192.168.0.235:3000");

console.log("conectado",socket);



export default socket;
