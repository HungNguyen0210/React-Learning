import express from "express";
import {
  getPopularMovies,
  searchMovies,
} from "../controllers/movies.controllers.js";

const router = express.Router();

router.get("/movies", getPopularMovies);
router.get("/movies/search", searchMovies);

export default router;
