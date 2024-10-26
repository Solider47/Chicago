const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

let sharedNumber = 0;

app.use(express.json());

app.get("/value", (req, res) => {
  res.json({ value: sharedNumber });
});

app.post("/value", (req, res) => {
  const { increment } = req.body;
  if (typeof increment === "number") {
    sharedNumber += increment;
    res.json({ value: sharedNumber });
  } else {
    res.status(400).json({ error: "Increment must be a number" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
