import { Event } from '../../events/Event'

export class Game {
  _events: Event[] = [];

  constructor(events: Event[]) {
    this._events = events;
  }

  set events(events: Event[]) {
    this._events = events;
  }

  get events(): Event[] {
    return this._events;
  }
}
