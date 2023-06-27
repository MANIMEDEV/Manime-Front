import { io, Socket } from "socket.io-client";


const hostUrl: string | undefined = import.meta.env.VITE_HOST_URL;
const socket: Socket = io("http://"+hostUrl+":3000");

console.log("conectado",socket);



export default socket;
