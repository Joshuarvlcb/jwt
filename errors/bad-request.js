const CustomAPIError = require("./custom-error");
const { StatusCodes } = require("http-status-codes");

class BadRequestError extends CustomAPIError {
  constructor(msg) {
    super(msg);
    this.statusCode = statusCode.BAD_REQUEST;
  }
}

module.exports = BadRequestError;
