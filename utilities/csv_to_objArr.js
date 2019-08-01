const fs = require('fs');
const readline = require('readline');

const ObjArr = function(file_path){

  var contents = fs.readFileSync(file_path, 'utf8').split('\n'); // blocking: pass callback for non-blocking
  const keys = contents[0].split('\r')[0].split(',')
  contents.shift()

  const objArr = contents.map( route => {
    const route_info = route.split('\r')[0].split(",")
    let routeObj = {}
    keys.forEach( (key, i) => routeObj[key] = route_info[i] )
    return routeObj
  })

  if (!objArr[objArr.length-1].route_id) objArr.pop()

  return objArr
}

module.exports = ObjArr
