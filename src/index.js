// const express = require("express");
import express from "express";
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.status(200).send(`<h1>Welcome To Express JS</h1>`);
});

app.listen(port, () => console.log(`app is listening port ${port}`));
