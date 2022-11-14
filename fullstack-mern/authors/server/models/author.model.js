const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "First name is required"],
    minLength: [2, "First name must be at least 2 characters long"],
  },
  last_name: {
    type: String,
    required: [true, "Last name is required"],
    minLength: [2, "Last name must be at least 2 characters long"],
  },
});

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
