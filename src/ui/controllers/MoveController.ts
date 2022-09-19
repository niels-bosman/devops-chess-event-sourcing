import { MakeMoveCommandHandler } from "../../command-handler/MakeMoveCommandHandler";
import { Response } from "express";
import { MakeMoveCommand } from "../../commands/makeMoveCommand";

export class MoveController {

  private makeMoveCommandHandler: MakeMoveCommandHandler;

  constructor(makeMoveCommandHandler: MakeMoveCommandHandler) {
    this.makeMoveCommandHandler = makeMoveCommandHandler;
  }

  makeMove(makeMoveCommand: MakeMoveCommand): any {


    const result = this.makeMoveCommandHandler.handleCommand(makeMoveCommand);

    return true;
  }

}
