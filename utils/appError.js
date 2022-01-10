// extends for appError object to inherit from the built-in error
class AppError extends Error {
  constructor(message, statusCode) {
    super(message); // to call the parent constructor

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
