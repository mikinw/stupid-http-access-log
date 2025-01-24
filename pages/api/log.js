import { putBlob, getBlob } from '@vercel/blob';

const LOG_FILE_KEY = 'logs/log.txt'; // Key for the log file in Vercel Blob

export default async function handler(req, res) {

    const { message } = req.query;

    try {
      // Fetch the current log file if it exists
      let currentLog = '';
      const existingBlob = await getBlob(LOG_FILE_KEY);
      if (existingBlob) {
        currentLog = await existingBlob.text(); // Get current logs
      }

      // Append the new message to the log content
      const newLog = `${currentLog}${new Date().toISOString()} - ${message}\n`;

      // Save the updated log back to Vercel Blob
      await putBlob(LOG_FILE_KEY, newLog, {
        contentType: 'text/plain',
      });

      return res.status(200).json({ success: true, message: 'Log updated' });
    } catch (err) {
      console.error('Error appending log:', err);
      return res.status(500).json({ error: 'Failed to update log file' });
    }

  // Method not allowed
  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}