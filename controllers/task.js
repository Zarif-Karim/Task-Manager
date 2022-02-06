const taskModel = require('../models/task');
const async_wrapper = require('../middleware/async_wrapper');
const { create_api_error } = require('../errors/custom_api_error');

const get_all_tasks = async_wrapper ( async (req,res) => { 
    const tasks = await taskModel.find({});
    res.status(201).json({tasks}); 
});

const add_task = async_wrapper ( async (req,res) => { 
    const task = await taskModel.create(req.body);
    res.status(201).json({task}); 
});

const get_single_task = async_wrapper ( async (req,res,next) => { 
    const task = await taskModel.findById(req.params.id).exec();
    if(!task){
        return next(create_api_error(`No task found with id: ${req.params.id}`,404));
    }
    res.status(201).json({task}); 
});

const update_single_task = async_wrapper ( async (req,res,next) => { 
    const task = await taskModel.findByIdAndUpdate(req.params.id,req.body,{runValidators:true});
    if(!task){
        return next(create_api_error(`No task found with id: ${req.params.id}`,404));
    }
    res.status(201).json({msg: 'Following Task updated', task}); 
});

const delete_single_task = async_wrapper ( async (req,res,next) => { 
    const task = await taskModel.findByIdAndDelete(req.params.id).exec();
    if(!task){
        return next(create_api_error(`No task found with id: ${req.params.id}`,404));
    }
    res.status(201).json({msg: 'Following Task deleted', task}); 
});


module.exports =  {
    get_all_tasks,
    add_task,
    get_single_task,
    update_single_task,
    delete_single_task
};