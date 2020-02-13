export default class ApplicationError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }

  static getMessage() {
    return super.message;
  }
  static getCode() {
    return this.code;
  }
}
