const config = require('config');
const dbConfig = config.get('db');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('./utils/logger');
const errorHandler = require('./utils/errorHandler');
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
const themeRoutes = require('./routes/themeRoutes');
const soundRoutes = require('./routes/soundRoutes');
const timerRoutes = require('./routes/timerRoutes');
const taskRoutes = require('./routes/taskRoutes');
const WebSocketServer = require('./websocket/index');

// Initialize Express application
const app = express();

// Setup middleware
app.use(cors()); // Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Database connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => logger.info('MongoDB connected successfully.'))
  .catch(err => logger.error('MongoDB connection error:', err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/chats', chatRoutes);
app.use('/api/themes', themeRoutes);
app.use('/api/sounds', soundRoutes);
app.use('/api/timers', timerRoutes);
app.use('/api/tasks', taskRoutes);

// Error handling middleware
app.use(errorHandler.handleError);

// Start server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});

// Setup WebSocket server and export server
WebSocketServer.initialize(server);
module.exports = server;