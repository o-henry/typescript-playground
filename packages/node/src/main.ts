import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  console.log(req.body);
  // save data to db
  res.send("Hi");
});

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
