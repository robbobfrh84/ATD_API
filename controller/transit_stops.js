const ObjArr = require("./../utilities/csv_to_objArr.js")

const Transit_stops = {

  trip: function(req,res) {
    console.log(" 🛑 GET /stops/"+req.params.trip+"/"+req.params.direction+" 🛑 ")

    ObjArr("./data/trips.txt")
      .then( data => {

        const filtered_data = data.filter( trip => {
          if (trip.trip_id === req.params.trip) {
            return trip
          }
        })

        res.json({
          "message": " 🛑 The stops array below contains all the stops on trip #"+req.params.trip+", in direction "+req.params.direction+".",
          "api_request": "GET /stops/"+req.params.trip+"/"+req.params.direction,
          "trip_id": req.params.trip,
          "direction": req.params.direction,
          "rootUrl": "http://"+req.headers.host,
          "total_stops": filtered_data.length,
          "stops": filtered_data
        })

      })

  },

}

module.exports = Transit_stops
