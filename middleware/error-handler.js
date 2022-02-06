const { CustomAPIError } = require('../errors/custom_api_error');

const error_handler = (err,req,res,next) => {
    if(err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg : err.message });
    }
    res.status(500).json({ msg : 'Something went wrong' });
}

module.exports = error_handler;