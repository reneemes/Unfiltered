const { 
  createJournalEntry, 
  getJournalEntries, 
  deleteJournalById 
} = require('../services/journalService.js');

async function createJournal(req, res) {
  if (!req.session.userId) {
    return res.redirect('/login');
  }

  const { title, content } = req.body;

  try {
    const journalId = await createJournalEntry(req.session.userId, title, content);
    res.status(201).json({ message: 'Journal created!', journalId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to save journal entry.' });
  }
}

async function getAllJournalEntries(req, res) {
  if (!req.session.userId) {
    return res.redirect('/login');
  }

  try {
    const journalEntries = await getJournalEntries(req.session.userId);
    res.status(200).json({ journalEntries });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to retrieve journal entries.' });
  }
}

async function deleteJournal(req, res) {
  if (!req.session.userId) {
    return res.redirect('/login');
  }

  const { journalId } = req.params;

  try {
    await deleteJournalById(req.session.userId, journalId);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Journal entry not found' });
    }

    const remainingEntries = await getJournalEntries(req.session.userId);

    res.status(200).json({
      message: 'Journal entry deleted',
      journalEntries: remainingEntries
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to delete journal entry.' });
  }
}

module.exports = {
  createJournal,
  getAllJournalEntries,
  deleteJournal
};