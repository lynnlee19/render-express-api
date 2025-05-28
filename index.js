const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Render Express API!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(location.hostname)
});