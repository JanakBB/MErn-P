function errorHanndlor (error, req, res, next) {
    let statusCode = error.status || 500;
    let errMes = error.message || "Internal server error";
    res.status(statusCode).send({error: errMes, stack: error.stack});
}

module.exports = errorHanndlor;