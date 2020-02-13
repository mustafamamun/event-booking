import { Model, snakeCaseMappers } from "objection";

export default class BaseModel extends Model {
  static get columnNameMappers() {
    return snakeCaseMappers();
  }
  $beforeInsert() {
    if (!this.created_at) {
      this.created_at = new Date().toISOString();
    }
    if (!this.updated_at) {
      this.updated_at = new Date().toISOString();
    }
  }
  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}
