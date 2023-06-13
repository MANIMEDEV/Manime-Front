import { io, Socket } from "socket.io-client";

const socket: Socket = io("http://localhost:3000"); // Substitua o URL pelo seu servidor Socket.io

export default socket;
