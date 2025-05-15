// routes/canteenRoutes.js
const express = require('express');
const router = express.Router();
const { getCanteens, addCanteen } = require('../controllers/canteenController');

router.get('/', getCanteens);
router.post('/', addCanteen);

module.exports = router;