const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

let sharedValue = 0;

app.use(express.json());

// Endpoint to get the current value
app.get("/value", (req, res) => {
  res.json({ value: sharedValue });
});

// Endpoint to update the value
app.post("/value", (req, res) => {
  const { increment } = req.body;
  if (typeof increment === "number") {
    sharedValue += increment;
    res.json({ value: sharedValue });
  } else {
    res.status(400).json({ error: "Invalid increment value" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
