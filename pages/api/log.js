import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { message } = req.query;

    if (!message) {
      return res.status(400).json({ error: 'Message query parameter is required' });
    }

    // Define the log file path
    const logFilePath = path.join(process.cwd(), 'logs', 'log.txt');

    // Ensure the logs directory exists
    const logsDir = path.dirname(logFilePath);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }

    // Append the message to the log file
    const logEntry = `${new Date().toISOString()} - ${message}\n`;
    fs.appendFileSync(logFilePath, logEntry);

    return res.status(200).json({ success: true, message: 'Log entry added' });
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}