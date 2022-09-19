import express from 'express';

import { MoveController } from '../database/controllers/MoveController'
import { MakeMoveCommandHandler } from "../command-handler/MakeMoveCommandHandler";
import { MakeMoveCommand } from "../commands/makeMoveCommand";

const chessRouter = express.Router();

chessRouter.post('/', async (request, response) => {
  try {
    const moveController = new MoveController(new MakeMoveCommandHandler());
    const moveCommand = new MakeMoveCommand(request.body.piece, request.body.move);
    const result = moveController.makeMove(moveCommand);

    return response.status(201).send(result);
  } catch (e: any) {
    return response.status(500).send(e);
  }
});

export default chessRouter;
