const webSocket = require("ws");
const serverAddress = "ws://simple-web-socket-echo-server.glitch.me/";
const ws = new webSocket(serverAddress, {
    headers: {
        'user-agent': "morzilla"
    }
});

ws.on('open', () => {
    ws.send('Connected to server');
});

ws.on("message", (message) => {
    // const recievedMessage = message;
    // const authDetails = recievedMessage.split(":");
    // if (authDetails[0] == sessionStorage.getItem("sessionId")) {
    //     qrLogin(authDetails[1], authDetails[2]);
    // }
    console.log(message);
});

// const webSocket = require("ws");
// const serverAddress = "wss://simple-web-socket-echo-server.glitch.me/";
// const ws = new webSocket(serverAddress);

// ws.on("message", (message) => {
//     const recievedMessage = message;
//     const authDetails = recievedMessage.split(":");
//     const email = authDetails[1];
//     const pass = authDetails[2];
//     qrLogin(emaIl, Pass);
// });