exports.parseMessage = function(message) {
    try {
        return JSON.parse(message);
    } catch (e) {
        console.error('Failed to parse message', e);
        return null;
    }
};

exports.isValidMessage = function(message) {
    // Implement
    return message && message.type && message.payload;
};