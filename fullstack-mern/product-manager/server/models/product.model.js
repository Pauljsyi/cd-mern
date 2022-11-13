const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minLength: [1, "Title must be at least 1 character long"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [1, "Price cannot be $0"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minLength: [3, "Description must be at least 3 characters long "],
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
