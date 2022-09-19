import { Move } from "../domain/entities/Move";
import { Game } from "../domain/entities/Game";
import { Piece } from "../domain/entities/Piece";
import { MoveMade } from "../events/MoveMade";

export class MakeMoveCommand {
  constructor(
    public piece: Piece,
    public move: Move,
    public game: Game
  ) {
    new MoveMade(piece, move);
  }

}
