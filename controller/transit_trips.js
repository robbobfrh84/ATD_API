const ObjArr = require("./../utilities/csv_to_objArr.js")

const Transit_trips = {

  route: function(req,res) {
    console.log(" 🚎 GET /trips/"+req.params.route+" 🚎 ")

    ObjArr("./data/trips.txt")
      .then( data => {
        const url = "http://"+req.headers.host

        const filtered_data = data.filter( trip => {
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
          "total_trips": filtered_data.length,
          "trips": filtered_data
        })

      })
  },

}

module.exports = Transit_trips
