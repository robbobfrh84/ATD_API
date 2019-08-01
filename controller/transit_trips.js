const ObjArr = require("./../utilities/csv_to_objArr.js")

const Transit_trips = {

  route: function(req,res) {
    console.log(" 🚎 GET /trips/"+req.params.route+" 🚎 ")

    const objArr = ObjArr("./data/trips.txt")
    const url = "http://"+req.headers.host

    const filtered_objArr = objArr.filter( trip => {
      if (trip.route_id === req.params.route) {
        trip.stops = url+"/stops/"+trip.trip_id+"/"+trip.dir_abbr
        return trip
      }
    })

    res.json({
      "message": "🚎 The trips array below contains all the trips on route #"+req.params.route+".",
      "api_request": "GET /trips/"+req.params.route,
      "route": req.params.route,
      "rootUrl": "http://"+req.headers.host,
      "total_trips": filtered_objArr.length,
      "trips": filtered_objArr
    })
  },

}

module.exports = Transit_trips
