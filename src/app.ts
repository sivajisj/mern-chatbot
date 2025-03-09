import express from 'express';
import { config } from 'dotenv';
const app = express();

// Middleware to parse JSON requests
app.use(express.json());


export default app;