const ErrorApp = require("../utils/errorApp");
const productionError = ({ res, err }) => {
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    })
}
exports.globalHandler = async (error, req, res, _) => {
    error.statusCode ||= 500;
    error.status ||= 'error';
    if (process.env?.NODE_ENV === 'development') {
        res.status(error.statusCode).json({
            status: error.status,
            message: error.message,
            stack: error.stack,
            error,
        })
    }
    if (process.env?.NODE_ENV === 'production') {
        // we need to clone error object

        // checking invalid data sending to database;
        error.message ||= `we haven't any idea about this error !`
        let err = { ...error, message: error.message, name: error.name }
        if (err.name === 'CastError') err = new ErrorApp({ message: `invalid ${err.path}:${err.value}`, statusCode: 400 })
        // checking duplicate data sending to database;
        if (err.code === 11000) {
            err = new ErrorApp({
                message: Object.entries(err.keyValue).length === 1 ? `The field with name '${Object.entries(err.keyValue).map(el => `${el[0]} : ${el[1]}`).join(' | ')}' is duplicated ` : `The fields with names '${Object.entries(err.keyValue).map(el => `${el[0]} : ${el[1]}`).join(' | ')}' are duplicated `,
                statusCode: 400
            })
        }
        productionError({ res, err })
    }
}