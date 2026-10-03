import { app } from './app.js';
import { env } from './config/env.js';

const PORT = env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Sentical AI API server running on http://localhost:${PORT}`);
  console.log(`💚 Health Check endpoint available at http://localhost:${PORT}/health`);
});
