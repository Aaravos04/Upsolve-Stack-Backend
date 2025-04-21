import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
import connectDB from "./config/connectDB.js";
import routes from "./routes/problems.routes.js";

const app = express();
configDotenv();
connectDB();

const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());

app.use("/api/v1/problems", routes);
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "404! Invalid Route!",
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
