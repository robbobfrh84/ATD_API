const csv = require('csv-parser');
const fs = require('fs');

const ObjArr = function(file_path){

  const data = []

  return new Promise(resolve => {
    fs.createReadStream(file_path)
      .pipe(csv())
      .on('data', (row) => {
        data.push(row)
      })
      .on('end', () => {
        resolve(data)
      });
  });

}

module.exports = ObjArr
