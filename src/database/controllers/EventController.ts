import { Event } from '../../events/Event'
import EventModel from '../models/event'

export class EventController {
  static saveEvent(event: Event) {
    new EventModel({
      event: event.name,
      data: event.toString(),
    }).save()
  }
}
