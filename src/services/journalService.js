import connection from '../db.js';

export async function saveJournalEntry(userId, title, content) {
  const [result] = await connection.promise().query(
    'INSERT INTO journal (title, content, user_id) VALUES (?, ?, ?)', [
      title,
      content,
      userId
    ]
  );
  return result.insertId;
}

export async function getJournalEntries(userId) {
  const [result] = await connection.promise().query(
    'SELECT * FROM journal WHERE user_id = (?)', [userId]
  );
  return result;
}