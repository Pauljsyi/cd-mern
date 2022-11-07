const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "First name is required"],
      minlength: [2, "First name must be at least 2 characters long"],
    },
    last_name: {
      type: String,
      required: [true, "Last name is required"],
      minlength: [2, "Last name must be at least 6 characters long"],
    },
    age: {
      type: Number,
      min: [1, "You must be at least 1 or older to register"],
      max: [150, "You must be at most 149 years old to register"],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: [true, "email is in use"],
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email",
      },
      required: [true, "Email is required"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
