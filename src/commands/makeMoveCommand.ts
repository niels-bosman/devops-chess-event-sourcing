import { Move } from "../domain/entities/Move";
import { Piece } from "../domain/entities/Piece";
import { MoveMade } from "../events/MoveMade";

export class MakeMoveCommand {
  constructor(public piece: Piece, public move: Move) {
    new MoveMade(piece, move);
  }

}
