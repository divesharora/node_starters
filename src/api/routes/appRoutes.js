const express = require("express");
const router = express.Router();

const auth = require("../handlers/auth");
const crud = require("../handlers/movieHandler");

//signup
router.post("/signup", auth.signup);

//login
router.post("/login", auth.login);

//create
router.post("/create", crud.createMovie);

//update
router.put("/update/:id", crud.updateMovie);

//delete
router.delete("/delete/:id", crud.deleteMovie);

//router
router.get("/movies", crud.getAllMovies);
module.exports = router;
