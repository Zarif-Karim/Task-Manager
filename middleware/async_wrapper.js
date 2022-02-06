const async_wrapper = (callback) => {
    return async (req,res,next) => {
        try{
            await callback(req,res,next);
        } catch (error){
            next(error);
        }
    }
}

module.exports = async_wrapper;