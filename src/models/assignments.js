const mongoose = require('mongoose');

const assignmentSchema = mongoose.Schema({  
    classId: {type: mongoose.Schema.Types.ObjectId, ref: 'Class'},
    assignmentName: {type: String, required: true},
    assignmentDescription: {type: String, required: true},
    dueDate: {type: Date, required: true},
    submissions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Submission'}]
});

module.exports = mongoose.model('Assignment', assignmentSchema);