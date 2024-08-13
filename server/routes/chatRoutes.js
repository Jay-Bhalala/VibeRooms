const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.post('/chats', chatController.postMessage);
router.get('/chats', chatController.getMessages);

module.exports = router;