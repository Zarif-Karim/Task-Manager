
const get_all_tasks = (req,res) => { res.json(req.body); }
const add_task = (req,res) => { res.send('adding a task'); }
const get_single_task = (req,res) => { res.send('getting single task'); }
const update_single_task = (req,res) => { res.send('updating single task'); }
const delete_single_task = (req,res) => { res.send('delete single task'); }


module.exports =  {
    get_all_tasks,
    add_task,
    get_single_task,
    update_single_task,
    delete_single_task
};