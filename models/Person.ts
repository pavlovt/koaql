import { Model } from 'objection';

export default class Person extends Model {
  static tableName = 'persons';
}