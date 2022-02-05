const express = require('express');
const router = express.Router();

//functions from controller
const {
    get_all_tasks,
    add_task,
    get_single_task,
    update_single_task,
    delete_single_task
} = require('../controllers/task');

router.route('/').get(get_all_tasks).post(add_task);
router.route('/:id').get(get_single_task).patch(update_single_task).delete(delete_single_task);

module.exports = router;