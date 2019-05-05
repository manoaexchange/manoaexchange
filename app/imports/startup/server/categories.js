import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Categories } from '../../api/categories/categories';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Categories.insert(data);
}

/** Initialize the collection if empty. */
if (Categories.find().count() === 0) {
  if (Meteor.settings.defaultCategories) {
    console.log('Creating default Category.');
    Meteor.settings.defaultCategories.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Categories', function publish() {
  if (this.userId) {
    return Categories.find();
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('CategoriesAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Categories.find();
  }
  return this.ready();
});
