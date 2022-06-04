const express = require("express");

const app = express();
const PORT = 5000;

const friends = [
  { id: 0, name: "Kyle Olson" },
  { id: 1, name: "Josh Terwey" },
];

app.get("/", (req, res) => {
  res.send(friends);
});

app.get("/friend/:id", (req, res) => {
  const id = friends[req.params.id];
  if (id) {
    console.log("inside if")
    res.send(id);
  } else {
    console.log("inside else:")
    res.status(404).json({ message: "Friend Does not exist" });
  }
});

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON ${PORT}....`);
});
