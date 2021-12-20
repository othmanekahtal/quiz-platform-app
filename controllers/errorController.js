const ErrorApp = require('./../utils/errorApp')
module.exports = (req, res, next) => {
  return next(new ErrorApp({ message: 'Resource not found !', statusCode: 404 }))
};
