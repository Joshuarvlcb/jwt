const CustomAPIError = require("./custom-error");
const { StatusCodes } = require("http-status-codes");

class UnathError extends CustomAPIError {
  constructor(msg) {
    super(msg);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = UnathError;
