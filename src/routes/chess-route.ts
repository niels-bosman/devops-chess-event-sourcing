import express from 'express';
import { MoveController } from "../ui/controllers/MoveController";
import { MakeMoveCommandHandler } from "../command-handler/MakeMoveCommandHandler";
import { MakeMoveCommand } from "../commands/makeMoveCommand";

const chessRouter = express.Router();

chessRouter.post('/', async (request, response) => {
  try {
    let moveController = new MoveController(new MakeMoveCommandHandler());
    let moveCommand = new MakeMoveCommand(request.body.piece, request.body.move);
    let result = moveController.makeMove(moveCommand);

    return response.status(201).send(result);
  } catch (e: any) {
  }
});

export default chessRouter;
