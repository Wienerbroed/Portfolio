import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import routes from '../routes/index.js';          
import { errorHandler, notFound } from '../middleware/error.js'; 

dotenv.config();

const port = process.env.PORT || 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static file folder
app.use(express.static(path.join(__dirname, '../public')));

// API routes

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`✅ Server running on port ${port}`));

export default app;