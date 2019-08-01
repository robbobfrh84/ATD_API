const ObjArr = require("./../utilities/csv_to_objArr.js")

const Transit_routes = {

  all: function(req, res) {
    console.log(" 📈 GET /routes 📉 ")

    const objArr = ObjArr("./data/routes.txt")
    const url = "http://"+req.headers.host+"/trips/"

    objArr.map( obj => obj.trips = url+obj.route_id )

    res.json({
      "message": " 📈 The routes array below contains all the transit routes available.",
      "api_request": "GET /routes",
      "rootUrl": "http://"+req.headers.host,
      "total_routes": objArr.length,
      "routes": objArr
    })

  },

  testy: function(req,res) {
    console.log(" GET /routes/testy ", req.params.x)
    res.json({ "routes": " GET 🧪👨‍🔬 testy routes 👩‍🔬🧪 "})
  }
}

module.exports = Transit_routes
