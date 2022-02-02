const mongoose = require("mongoose");

const classSchema = mongoose.Schema({
    subject: {type: String, required: true},
    faculty: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    students: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    assignments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Assignment'}]
});

module.exports = mongoose.model("ClassModel", classSchema);