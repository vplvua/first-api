import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";

console.log("Server is working");

dotenv.config();
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

const app = express();

app.use(express.json());
app.use("/api", router);
app.use(fileUpload({}));

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log("Server started on port ", PORT));
  } catch (err) {
    console.log(err);
  }
}

startApp();
