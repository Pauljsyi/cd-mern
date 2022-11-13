const Product = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
  Product.find()
    .then((allProducts) => res.json({ products: allProducts }))
    .catch((err) => res.json({ message: "something went wrong", error: err }));
};

module.exports.hello = (req, res) => {
  res.json({ message: "hello" });
};

module.exports.findOneProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((allProducts) => res.json({ products: allProducts }))
    .catch((err) => res.json({ message: "something went wrong", error: err }));
};

module.exports.createNewProduct = (req, res) => {
  Product.create(req.body)
    .then((newlyCreatedProduct) => {
      console.log("newlyCreatedProduct: ", newlyCreatedProduct);
      res.json({ product: newlyCreatedProduct });
    })
    .catch((err) => {
      // res.json({ message: "something went wrong", error: err });
      res.status(400).json({ validation_error: err });
    });
};

module.exports.updateExistingProduct = (req, res) => {
  // Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
  //   new: true,
  // })
  //   .then((updatedProduct) => {
  //     console.log("updated Product in Controller", updatedProduct);
  //     res.json({ product: updatedProduct });
  //   })
  //   .catch((err) => {
  //     res.json({ message: "Something went wrong", error: err });
  //     res.status(400).json({ VALIDATION_ERROR: err });
  //   });
  Product.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { runValidators: true },
    function (err, product) {
      if (err) {
        console.log("SOMETHING WENT WRONG FOOL", err);
        res.status(400).json({ validation_error: err });
        // res.status(400).json({ validation_error: err });
      }
      return res.json(product);
    }
  );
};

module.exports.deleteAnExistingProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
