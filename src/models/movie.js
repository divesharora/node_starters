const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("Movie", movieSchema);
