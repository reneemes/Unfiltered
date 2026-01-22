import express from 'express';
import { createMood } from '../controllers/moodController.js';

const router = express.Router();

router.post('/', createMood);
router.get('/user_id', )

export default router;