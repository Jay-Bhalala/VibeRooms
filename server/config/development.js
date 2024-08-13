module.exports = {
    app: {
      port: 3000,
      name: "VibeRooms",
      environment: 'development',
      logLevel: 'debug'
    },
    db: {
      url: 'mongodb://localhost:27017/viberooms_dev'
    },
    firebase: {
      apiKey: "your-firebase-api-key",
      authDomain: "your-project-id.firebaseapp.com"
    },
    websocket: {
      timeout: 5000,
      maxConnections: 50
    }
  };