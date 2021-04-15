const Movie = require("../../models/movie");

async function createMovie(req, res, next) {
  try {
    var movie = new Movie({
      name: req.body.name,
    });
    var m = await movie.save();
    res.status(200).send(m);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function getAllMovies(req, res, next) {
  try {
    var movies = await Movie.find();
    return res.status(200).send({ movies: movies });
  } catch (error) {
    res.status(400).send(error);
  }
}

async function deleteMovie(req, res, next) {
  try {
    var deleted = await Movie.findByIdAndDelete(req.params.id);
    if (!deleted) {
      throw "no such movie exists";
    } else {
      res.status(200).send({ message: "Movie removed from DB" });
    }
  } catch (error) {
    res.status(400).send(error);
  }
}

async function updateMovie(req, res, next) {
  try {
    var updated = await Movie.findByIdAndUpdate(req.params.id,{ name: req.body.name });
    if (!updated) {
      throw "no such movie exists";
    } else {
      res.status(200).send({ message: "Movie updated" });
    }
  } catch (error) {
    res.status(400).send(error);
  }
}

module.exports = { updateMovie, deleteMovie, getAllMovies, createMovie };
