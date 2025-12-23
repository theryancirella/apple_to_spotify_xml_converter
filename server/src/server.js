const express = require("express");

const app = express();
const PORT = 3000;

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express running in Docker!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});