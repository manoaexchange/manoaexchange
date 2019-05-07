import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

/* eslint-disable no-console */

function createUser(username, email, password, profile, role) {
  console.log(`  Creating user ${email}.`);
  const userID = Accounts.createUser({
    username: email,
    email: email,
    password: password,
    profile: {
      name: profile.name,
      flagged: profile.flagged,
    },
  });
  if (role === 'admin') {
    Roles.addUsersToRoles(userID, 'admin');
  }
}

/** When running app for first time, pass a settings file to set up a default user account. */
if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultAccounts) {
    console.log('Creating the default user(s)');
    Meteor.settings.defaultAccounts.map(({ username, password, profile, role }) => createUser(username, username, password, profile, role));
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}

Meteor.publish('UserView', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    Meteor.users.allow({
      remove: function (userId, user) { return true; },
    });
    return Meteor.users.find();
  }
  return this.ready();
});
