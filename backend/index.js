import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import movieRoutes from "./routes/movies.routes.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use("/api", movieRoutes);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
