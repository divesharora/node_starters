const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [
      function (v) {
        var re = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        return re.test(v);
      },
      "Please enter a valid Email ID",
    ],
  },
  role: {type: String, required: true,enum:['admin','student','faculty']},
  classes:[{type: mongoose.Schema.Types.ObjectId, ref: 'Class'}],
  marks:[{type: mongoose.Schema.Types.ObjectId, ref: 'Mark'}],
});

module.exports = mongoose.model("User", userSchema);
