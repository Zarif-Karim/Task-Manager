class CustomAPIError extends Error {
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

const create_api_error = (message, statusCode) => {
    return new CustomAPIError(message,statusCode);
} 

module.exports = { create_api_error, CustomAPIError };