const Author = require("../models/Author.model");

module.exports.findAllAuthors = (req, res) => {
  Author.find()
    .then((allAuthors) => res.json({ author: allAuthors }))
    .catch((err) => res.json({ message: "something went wrong", error: err }));
};

module.exports.hello = (req, res) => {
  res.json({ message: "hello" });
};

module.exports.findOneAuthor = (req, res) => {
  Author.findOne({ _id: req.params.id })
    .then((allAuthors) => res.json({ author: allAuthors }))
    .catch((err) => res.json({ message: "something went wrong", error: err }));
};

module.exports.createAuthor = (req, res) => {
  Author.create(req.body)
    .then((newlyCreatedAuthor) => {
      res.json({ author: newlyCreatedAuthor });
    })
    .catch((err) => {
      res.status(400).json({ validation_error: err });
    });
};

module.exports.updateExistingAuthor = (req, res) => {
  Author.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { runValidators: true },
    function (err, author) {
      if (err) {
        // console.log("SOMETHING WENT WRONG FOOL", err);
        res.status(400).json({ validation_error: err });
      }
      return res.json(author);
    }
  );
};

module.exports.deleteAnExistingAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
