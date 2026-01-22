import connection from '../db.js';

export async function saveMoodEntry(userId, mood) {
  const [result] = await connection
    .promise()
    .query(`
      INSERT INTO mood (mood, user_id)
      VALUES (?, ?)
      ON DUPLICATE KEY UPDATE
        mood = VALUES(mood),
        created_at = CURRENT_TIMESTAMP
      `, [
        mood,
        userId
      ]);
  return result;
}

// Service file is just for handling the DB