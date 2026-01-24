const express = require('express');
const { createMood, getAllMoods } = require('../controllers/moodController.js');

const router = express.Router();

router.post('/', createMood);
router.get('/', getAllMoods);

module.exports = router;