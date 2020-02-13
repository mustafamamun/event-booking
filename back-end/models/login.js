import BaseModel from "./basemodel";

export default class login extends BaseModel {
  static get tableName() {
    return "login";
  }
  static get allowedProperties() {
    return ["id", "email", "password"];
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: [],
      properties: {
        id: { type: "string" },
        email: { type: "string", maxLength: 50 },
        password: { type: "string", maxLength: 100 }
      }
    };
  }
}
