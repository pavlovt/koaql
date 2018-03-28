import { Model } from 'objection';
import User from './User';

export default class Person extends Model {
  static tableName = 'posts';
  // static defaultEagerAlgorithm: any = Model.JoinEagerAlgorithm;

  static relationMappings: any = {
    user: {
      relation: Model.HasOneRelation,
      modelClass: User,
      join: {
        from: 'posts.user_id',
        to: 'users.id'
      }
    }
  }
}