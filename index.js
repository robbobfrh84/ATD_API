const express = require("express");
const app = express();
const PORT = 3000

const Transit_routes = require("./controller/transit_routes.js")

app.get("/", (req,res) => {
  console.log(" GET / ")
  res.json({ message: "hello! from URL 🌱root 🌱" })
})

// API End Points ...
app.get("/routes", Transit_routes.all)
app.get("/routes/testy", Transit_routes.testy)

app.listen(PORT, ()=> console.log('Listening on Port:' + PORT) )
