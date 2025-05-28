const express = require("express");
const cors = require("cors");
const os = require('os');


const app = express();
const port = process.env.PORT || 3000;
const hostname = os.hostname();
console.log('Hostname:', hostname);

app.use(cors());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Render Express API!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});