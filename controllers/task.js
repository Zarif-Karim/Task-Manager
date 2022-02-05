const taskModel = require('../models/task');

const get_all_tasks = async (req,res) => { 
    try{
        const tasks = await taskModel.find({});
        res.status(201).json({tasks}); 
    } catch(error){
        res.status(500).json({msg: error});
    }
}

const add_task = async (req,res) => { 
    try{
        const task = await taskModel.create(req.body);
        res.status(201).json({task}); 
    } catch(error){
        res.status(500).json({msg: error});
    }
}

const get_single_task = async (req,res) => { 
    try{
        const task = await taskModel.findById(req.params.id).exec();
        if(!task){
            return res.status(404).json({ msg: `No task found with id: ${req.params.id}` });
        }
        res.status(201).json({task}); 
    } catch(error){
        res.status(500).json({msg: error});
    }
}

const update_single_task = async (req,res) => { 
    try{
        const task = await taskModel.findByIdAndUpdate(req.params.id,req.body,{runValidators:true});
        if(!task){
            return res.status(404).json({msg: `No task found with _id: ${req.params.id}`});
        }
        res.status(201).json({msg: 'Following Task updated', task}); 
    } catch(error){
        res.status(500).json({msg: error});
    }
}

const delete_single_task = async (req,res) => { 
    try{
        const task = await taskModel.findByIdAndDelete(req.params.id).exec();
        if(!task){
            return res.status(404).json({msg: `No task found with _id: ${req.params.id}`});
        }
        res.status(201).json({msg: 'Following Task deleted', task}); 
    } catch(error){
        res.status(500).json({msg: error});
    }
}


module.exports =  {
    get_all_tasks,
    add_task,
    get_single_task,
    update_single_task,
    delete_single_task
};