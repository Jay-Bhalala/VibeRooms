module.exports = {
    app: {
      port: 3000,
      name: "VibeRooms",
      environment: process.env.NODE_ENV || 'development'
    },
    db: {
      url: 'mongodb://localhost:27017/viberooms'
    }
  };