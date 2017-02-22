// @flow
import Realm from 'realm';

const SavedItemSchema = {
  name: 'savedItems',
  properties: {
    key:  'string',
    value: 'string',
  },
};

const databaseSchema = [SavedItemSchema];

let createDatabase = () => {
  return new Realm({schema: databaseSchema});
};

export default createDatabase;
