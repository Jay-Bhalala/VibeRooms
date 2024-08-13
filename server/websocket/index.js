const WebSocket = require('ws');
const server = require('../index');

const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
    console.log('A new client connected.');
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        // Broadcast incoming message to all clients
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', function close() {
        console.log('Connection closed');
    });

    ws.on('error', function error(err) {
        console.error('WebSocket error:', err);
    });
});

module.exports = wss;