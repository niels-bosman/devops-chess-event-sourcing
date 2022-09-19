import { MakeMoveCommand } from "../commands/makeMoveCommand";
import { Game } from "../domain/entities/Game";
import { Event } from "../events/Event";
import { Move } from "../domain/entities/Move";

export class MakeMoveCommandHandler {
  constructor() {

  }

  handleCommand(moveCommand: MakeMoveCommand): Game {
    const oldEvents: Event[] = [];

    const game = new Game(oldEvents);

    let move = new Move();
    // TODO map command to move

    const eventsToSave = game.events;

    // TODO publish events

    return game;
  }
}
