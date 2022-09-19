import { Move } from '../domain/entities/Move'
import { Piece } from '../domain/entities/Piece'
import { Event } from './Event'

export class MoveMade extends Event {
  private move: Move
  private piece: Piece
  public name = 'MoveMade'

  constructor(move: Move, piece: Piece) {
    super()
    this.move = move
    this.piece = piece
  }

  public toString(): string {
    return JSON.stringify({
      move: this.move.toString(),
      piece: this.piece.toString(),
    })
  }
}
