module.exports = {
    app: {
      port: 3001,
      name: "VibeRooms",
      environment: 'test',
      logLevel: 'error'
    },
    db: {
      url: 'mongodb://localhost:27017/viberooms_test'
    },
    firebase: {
      apiKey: "your-firebase-api-key-test",
      authDomain: "your-project-id-test.firebaseapp.com",
    },
    websocket: {
      timeout: 2000,
      maxConnections: 10
    }
  };
  