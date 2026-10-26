import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);

// Serve compiled static assets from dist
app.use(express.static(path.join(__dirname, 'dist')));

// Serve raw public assets (e.g. uploaded images, resume)
app.use(express.static(path.join(__dirname, 'public')));

// Health check endpoint for Cloud Run
app.get('/healthz', (_req, res) => {
  res.status(200).send('OK');
});

// SPA fallback: send dist/index.html for all non-file routes
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Portfolio server is listening on port ${port}`);
});
