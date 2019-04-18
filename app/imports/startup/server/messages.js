import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Messages } from '../../api/stuff/messages.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Messages.insert(data);
}

/** Initialize the collection if empty. */
if (Messages.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Messages', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Messages.find({ receiverName: username });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('Message Admin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Messages.find();
  }
  return this.ready();
});
