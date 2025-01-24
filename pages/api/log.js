import { put  } from '@vercel/blob';

const LOG_FILE_KEY = 'https://vc5jpppgnpbgoack.public.blob.vercel-storage.com/logs/log.txt'; // Key for the log file in Vercel Blob

export default async function handler(req, res) {

    const { message } = req.query;

    try {
      // Fetch the current log file if it exists
      let currentLog = '';

      const existingBlob = await fetch(LOG_FILE_KEY);
      currentLog = await existingBlob.text();

      // Append the new message to the log content
      const newLog = `${currentLog}\n${new Date().toISOString()} - ${message}\n`;

      // Save the updated log back to Vercel Blob
      await put('logs/log.txt', newLog, {
        access: 'public',
        addRandomSuffix: false,
        contentType: 'text/plain',
      });

      const msg = `Log updated ${new Date().toISOString()}`;

      return res.status(200).json({ success: true, message: msg });
    } catch (err) {
      console.error('Error appending log:', err);
      return res.status(500).json({ error: 'Failed to update log file' });
    }

  // Method not allowed
  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}