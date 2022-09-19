import express from 'express';
import mongoose from 'mongoose';
import env from './helpers/env';
import chessRouter from './routes/chess-route';


const app = express();
const PORT = env("", "5005");
const MONGO_URI = env("", "");

app.use(express.json());

mongoose.connect(MONGO_URI);
const { connection } = mongoose;

connection.once('open', () => {
  console.info('MongoDB connected.');
});

app.use('/chess', chessRouter);

app.listen(PORT, () => {
  console.info(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
