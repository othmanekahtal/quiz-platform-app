class ErrorApp extends Error {
    isOperationalError = true;
    status;
    statusCode;

    constructor({message, statusCode}) {
        super(message);
        this.status = statusCode.toString().startsWith(`4`) ? 'failed' : 'error';
        this.statusCode = statusCode;
        Error.captureStackTrace(this, ErrorApp)
    }
}
module.exports = ErrorApp