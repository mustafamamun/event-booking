import BaseModel from './basemodel';

export default class profile extends BaseModel {
  static get tableName() {
    return 'profile';
  }
  static get allowedProperties() {
    return ['id', 'user_id', 'first_name', 'last_name', 'image'];
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        id: { type: 'string' },
        user_id: { type: 'string', maxLength: 50 },
        first_name: { type: 'string', maxLength: 10 },
        last_name: { type: 'string', maxLength: 100 },
        image: { type: 'string' }
      }
    };
  }
}
