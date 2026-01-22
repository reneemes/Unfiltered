import express from 'express';
import { createJournal } from '../controllers/journalController.js';

const router = express.Router();

router.post('/', createJournal);
router.get('/', getAllJournalEntries);

export default router;
