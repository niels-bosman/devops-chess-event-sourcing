import { Move } from '../domain/entities/Move'
import { Piece } from '../domain/entities/Piece'

export class MoveMade extends Event {
  public move: Move
  public piece: Piece
}
