const express = require("express");
const app = express();

app.use((req, res, next) => {
  const now = new Date().toLocaleTimeString();
  console.log(`[${now} ${req.method} ${req.url}]`);
  next();
});

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Launchly Test API",
    tip: "Try /hell0?name=YourName",
  });
});

app.get("/hello", (req, res) => {
  const name = req.query.name || "Stranger";
  res.json({ message: `Hello ${name}!` });
});

module.exports = app;
