const JokeController = require("../controllers/jokes.controller");

module.exports = (app) => {
  app.get("/api/jokes", JokeController.findAllJokes);
  app.get("/api/jokes/:id", JokeController.findOneJoke);
  app.get("/api/jokes/random", JokeController.findRandomJoke);
  app.post("/api/jokes/new", JokeController.createNewJoke);
  app.put("/api/jokes/update/:id", JokeController.updateExistingJoke);
  app.delete("/api/jokes/delete/:id", JokeController.deleteAnExistingJoke);
};
