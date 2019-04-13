import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Users = new Mongo.Collection('Users');

const UserSchema = new SimpleSchema(
    {
      first: String,
      last: String,
      email: String,
      admin: Boolean,
    }
);

Users.attachSchema(UserSchema);

export {Users, UserSchema };

