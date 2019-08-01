const ObjArr = require("./../utilities/csv_to_objArr.js")

const Transit_stops = {

  trip: function(req,res) {
    console.log(" 🛑 GET /stops/"+req.params.trip+"/"+req.params.direction+" 🛑 ")

    const stopTimes_objArr = ObjArr("./data/stop_times.txt")

    const filtered_objArr = stopTimes_objArr.filter( trip => {
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
      "total_stops": filtered_objArr.length,
      "stops": filtered_objArr
    })
  },

}

module.exports = Transit_stops
