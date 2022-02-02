const mongoose = require("mongoose");

const submissionSchema = mongoose.Schema({
  assignmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Assignment" },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  submissionDate: { type: Date, required: true },
  uploadPath: { type: String, required: true },
});

module.exports = mongoose.model("Submission", submissionSchema);