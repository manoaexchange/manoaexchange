import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Messages = new Mongo.Collection('Messages');

/** Create a schema to constrain the structure of documents associated with this collection. */
const MessagesSchema = new SimpleSchema({
  owner: String,
  name: String,
  senderName: String,
  receiverName: String,
  messageTime: String,
  messageBody: String,
  flagged: Boolean,
});

/** Attach this schema to the collection. */
Messages.attachSchema(MessagesSchema);

/** Make the collection and schema available to other code. */
export { Messages, MessagesSchema };
