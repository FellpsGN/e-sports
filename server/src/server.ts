import express from "express";
import { Routes } from "./routes";
import cors from "cors";

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

Routes(app);
