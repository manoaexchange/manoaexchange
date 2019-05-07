import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Reports = new Mongo.Collection('Reports');

/** Create a schema to constrain the structure of documents associated with this collection. */
const ReportSchema = new SimpleSchema({
  name: String,
  report: {
    type: String,
    allowedValues: ['Report a Bug', 'Other'],
    defaultValue: 'Report a Bug',
  },
  message: String,
  owner: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Reports.attachSchema(ReportSchema);

/** Make the collection and schema available to other code. */
export { Reports, ReportSchema };
