const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

const Transit_routes = require("./controller/transit_routes.js")
const Transit_trips = require("./controller/transit_trips.js")

app.get("/", (req,res) => {
  console.log(" GET / ")
  res.json({
    message: "🌱 Hello! Welcome to ATD_API root API! 🌱",
    routes_info: " 📈 To see a list of all routes, add /routes to the url.",
    routes_example: "http://"+req.headers.host+"/routes",
    trips_info: " 🚎 To see a list of all the trips of a specific route, add /routes/<route> to the url.",
    trips_example: "http://"+req.headers.host+"/trips/3",
    stops_info: "",
    stops_example: "",
  })
})

// API End Points ...
app.get("/routes", Transit_routes.all)
app.get("/trips/:route", Transit_trips.route)

// Test routes
app.get("/routes/testy/:x", Transit_routes.testy)

app.listen(PORT, ()=> console.log('Listening on Port:' + PORT) )
