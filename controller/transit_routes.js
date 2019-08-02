const ObjArr = require("./../utilities/csv_to_objArr.js")

const Transit_routes = {

  all: function(req, res) {
    console.log(" 📈 GET /routes 📉 ")

    ObjArr("./data/routes.txt")
      .then( data => {
        // console.log("then data:", data)
        const url = "http://"+req.headers.host+"/trips/"
        data.map( obj => obj.trips = url+obj.route_id )
        res.json({
          "message": " 📈 The routes array below contains all the transit routes available.",
          "api_request": "GET /routes",
          "rootUrl": "http://"+req.headers.host,
          "total_routes": data.length,
          "routes": data
        })
      })
  },

}

module.exports = Transit_routes
