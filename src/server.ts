import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import AppRoutes from "./routes";

dotenv.config();
const app = express();
const port = process.env.port;

app.use(express.json());
app.use(cors());

AppRoutes(app);

app.listen(port, () => {
  console.info(`The server is running on: http://localhost:${port}`);
});
