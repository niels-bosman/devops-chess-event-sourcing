import { MakeMoveCommand } from '../commands/makeMoveCommand'
import { Game } from '../domain/entities/Game'
import { Event } from '../events/Event'
import { Move } from '../domain/entities/Move'
import { MoveMade } from '../events/MoveMade'
import { EventController } from '../database/controllers/EventController'

export class MakeMoveCommandHandler {
  handleCommand(moveCommand: MakeMoveCommand): Game {
    const oldEvents: Event[] = []
    const game = new Game(oldEvents)

    const { move, piece } = moveCommand
    const event = new MoveMade(move, piece)

    EventController.saveEvent(event)
    game.events = [...game.events, event]

    return game
  }
}
