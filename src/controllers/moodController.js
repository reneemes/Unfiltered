import { saveMoodEntry } from '../services/moodService.js';

export async function createMood(req, res) {
  if (!req.session.userId) {
    return res.redirect('/login');
  }

  const { mood } = req.body;

  try {
    const result = await saveMoodEntry(req.session.userId, mood);
    res.status(201).json({ message: 'Mood saved!', result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to save mood.'});
  }
}

export async function getAllMood(req, res) {
  if (!req.session.userId) {
    return res.redirect('/login');
  }

  try {
    const allMoods = await getAllMoodEntries(req.session.userId);
    res.status(200).json({ allMoods });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to retrieve logged moods.' });
  }
}