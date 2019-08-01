const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

const Transit_routes = require("./controller/transit_routes.js")
const Transit_trips = require("./controller/transit_trips.js")
const Transit_stops = require("./controller/transit_stops.js")

app.get("/", (req,res) => {
  console.log(" GET / ")
  res.json({
    message: "🌱 Hello! Welcome to ATD_API root API! 🌱",
    routes_info: " 📈 To see a list of all routes, add /routes to the url.",
    routes_example: "http://"+req.headers.host+"/routes",
    trips_info: " 🚎 To see a list of all the trips of a specific route, add /routes/<route> to the url.",
    trips_example: "http://"+req.headers.host+"/trips/3",
    stops_info: " 🛑 To see a list of all stops of a specific trip and directions, add /stops/<trip>/<direction> to the url",
    stops_example: "http://"+req.headers.host+"/stops/2035691/1",
  })
})

// API End Points ...
app.get("/routes", Transit_routes.all)
app.get("/trips/:route", Transit_trips.route)
app.get("/stops/:trip/:direction", Transit_stops.trip)

app.listen(PORT, ()=> console.log('Listening on Port:' + PORT) )
