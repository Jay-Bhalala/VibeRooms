exports.handleChatMessage = function(message, ws, wss) {
    console.log(`Chat message received: ${message}`);
    // incoming chat message
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(`Echo from server: ${message}`);
        }
    });
};

exports.handleNotification = function(notification, ws) {
    console.log(`Notification received: ${notification}`);
    // send notification to the specific user
    ws.send(`Notification: ${notification}`);
};