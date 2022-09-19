import { Move } from '../domain/entities/Move'
import { Piece } from '../domain/entities/Piece'
import { Event } from './Event'

export class MoveMade extends Event {
  public move: Move
  public piece: Piece

  constructor(move: Move, piece: Piece) {
    super()
    this.move = move
    this.piece = piece
  }
}
