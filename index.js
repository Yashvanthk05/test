const express = require("express");
const chalk = require("chalk");
const gradient = require("gradient-string");

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  const now = new Date().toLocaleTimeString();
  console.log(gradient.pastel.multiline(`[${now} ${req.method} ${req.url}]`));
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

app.listen(PORT, () => {
  console.log(`✅ Server running at: http://localhost:${PORT}\n`);
});
