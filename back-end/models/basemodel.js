import { Model, snakeCaseMappers } from "objection";

export default class BaseModel extends Model {
  // Case mangling
  static get columnNameMappers() {
    return snakeCaseMappers();
  }

  // Auto populate created_at and updated_at fields
  $beforeInsert() {
    if (!this.created_at) {
      this.created_at = new Date().toISOString();
    }
    if (!this.updated_at) {
      this.updated_at = new Date().toISOString();
    }
  }

  // Auto populate updated_at field
  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}

// module.exports = BaseModel;
// module.exports.BaseModel = BaseModel;
