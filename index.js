import express from "express";

console.log("Server is working");

const PORT = 4000;

const app = express();

app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).json("Server works");
});

app.listen(PORT, () => console.log("Server started on port ", PORT));
