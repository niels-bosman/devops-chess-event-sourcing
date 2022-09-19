import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  Date: {
    type: Date,
    default: new Date().toLocaleDateString(),
  },
  Type: {
    type: String,
    required: true,
  },
  EventData: {
    type: String,
    required: true
  }
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
