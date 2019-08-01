const fs = require('fs');
const readline = require('readline');

const Transit_routes = {

  all: function(req,res) {
    console.log(" 📈GET /routes 📉 ")

    var contents = fs.readFileSync('./data/routes.txt', 'utf8').split('\n'); // blocking: pass callback for non-blocking
    const keys = contents[0].split('\r')[0].split(',')
    contents.shift()

    const object = contents.map( route => {
      const route_info = route.split('\r')[0].split(",")
      let routeObj = {}
      keys.forEach( (key, i) => routeObj[key] = route_info[i] )
      return routeObj
    })

    if (!object[object.length-1].route_id) object.pop()

    res.json({
      "api_request": "GET /routes",
      "total_routes": object.length,
      "routes": object
    })
  },

  testy: function(req,res) {
    console.log(" GET /routes/testy ")
    res.json({ "routes": " GET 🧪👨‍🔬 testy routes 👩‍🔬🧪 "})
  }
}

module.exports = Transit_routes
