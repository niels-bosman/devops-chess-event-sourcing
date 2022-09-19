import { Event } from '../../events/Event'
import EventModel from '../models/event'

export class EventController {

  static saveEvent(event: Event) {

    console.log("Saving event: " + event.toString());

    new EventModel({
      Type: event.name,
      EventData: event.toString(),
    }).save()
  }

}
