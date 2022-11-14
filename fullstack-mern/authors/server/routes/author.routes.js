const AuthorController = require("../controllers/authors.controller");
const Author = require("../models/Author.model");

module.exports = (app) => {
  app.get("/hello", AuthorController.hello);
  app.get("/api/authors/", AuthorController.findAllAuthors);
  app.get("/api/authors/:id", AuthorController.findOneAuthor);
  app.post("/api/authors/new", AuthorController.createAuthor);
  app.put("/api/authors/update/:id", AuthorController.updateExistingAuthor);
  app.delete(
    "/api/authors/delete/:id",
    AuthorController.deleteAnExistingAuthor
  );
};
