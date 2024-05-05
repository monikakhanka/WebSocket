import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const port = 8080;

// app.listen returns a server instance
// needed when we are running the http and socket server on the same port

const server = app.listen(port, () => {
    console.log("server listening...");
});

const wss = new WebSocketServer({ server });
// for different port 
// const wss = new WebSocketServer({ port: 3000 });

wss.on("connection", (ws)=> {
    ws.on("message", (data) => {
        console.log("data from client: %s ", data);
        ws.send("thanks buddy!");
    })
} )