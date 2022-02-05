const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be empty'],
        trim: true,
        maxlength: [30, 'Cannot be more than 30 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Task',taskSchema);