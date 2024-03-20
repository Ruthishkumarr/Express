const express = require("express");
const app = express();
const port=8000

app.get("/", (req, res) => {
  res.status(200).send(`<h1>welcome</h1>`);
});

app.get("/user", (req, res) => {
  res.status(200).send(`<h1>welcome-users</h1>`);
});

app.listen(port,()=>console.log(`app is listening port ${port}`));
