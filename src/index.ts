import express from 'express';
import mongoose from 'mongoose';
import env from './helpers/env';
import chessRouter from './routes/chess-route';


const app = express();
const PORT = 5002;
const MONGO_USER = env("MONGO_INITDB_ROOT_USERNAME", "");
const MONGO_PASSWORD = env("MONGO_INITDB_ROOT_PASSWORD", "");
const MONGO_URI = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@localhost:5001`;

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
