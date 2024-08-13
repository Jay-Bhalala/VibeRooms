const express = require('express');
const router = express.Router();
const soundController = require('../controllers/soundController');

router.get('/sounds', soundController.getSounds);
router.get('/sounds/:soundId', soundController.playSound);

module.exports = router;