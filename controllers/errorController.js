const ErrorApp = require('./../utils/errorApp')
module.exports = function(req, res, next) {
  next(new ErrorApp({ message: `Can't find ${req.originalUrl} on this server`, statusCode: 404 }));
}