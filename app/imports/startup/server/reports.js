import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Reports } from '../../api/reports/reports';

/** Initialize the database with a default reports document. */
function addData(data) {
  console.log(`  Adding Reports: ${data.Name} `);
  Reports.insert(data);
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Reports', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Reports.find({ owner: username });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('ReportsAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Reports.find();
  }
  return this.ready();
});

/** Initialize the collection if empty. */
if (Reports.find().count() === 0) {
  if (Meteor.settings.defaultReports) {
    console.log('Creating default Reports.');
    Meteor.settings.defaultReports.map(data => addData(data));
  }
}
