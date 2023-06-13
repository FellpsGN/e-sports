import express from "express";
import { Routes } from "./routes";

const app = express();
const port = 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

Routes(app);
