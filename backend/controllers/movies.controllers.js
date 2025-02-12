import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.TMDB_API_KEY;
console.log("API_KEY:", process.env.TMDB_API_KEY);
const API_OPTIONS = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const getPopularMovies = async (req, res) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`,
      API_OPTIONS
    );
    res.status(200).json({ data: response.data });
  } catch (error) {
    console.log("Error fetching popular movies: ", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

export const searchMovies = async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ message: "Query parameter is required" });
  }

  try {
    const response = await axios.get(
      `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`,
      API_OPTIONS
    );
    res.status(200).json({ data: response.data });
  } catch (error) {
    console.log("Error searching movies: ", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};
