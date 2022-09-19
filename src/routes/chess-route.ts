import express from 'express';

const chessRouter = express.Router();

chessRouter.post('/', async (request, response) => {
  try {
    return response.status(201).send("test");
  } catch (e: any) {
  }
});

export default chessRouter;
