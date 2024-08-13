const express = require('express');
const router = express.Router();
const themeController = require('../controllers/themeController');

router.get('/themes', themeController.getThemes);
router.post('/themes/:userId', themeController.setTheme);

module.exports = router;