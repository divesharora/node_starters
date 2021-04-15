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
});

module.exports = mongoose.model("User", userSchema);
