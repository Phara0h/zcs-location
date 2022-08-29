var zcta = require("./zcta-bounds.json");
var mgrs =  require("../../mgrs.js");
const Zip = require("./zip.js");
var zips = [];
var keys = Object.keys(zcta);
for(let i = 0; i < keys.length; i++) {
  let key = keys[i];
  let bounds = zcta[key];
  zips.push(new Zip(key, bounds));
}


function geoSearchZip(lat, lng) {
    for(let i = 0; i < zips.length; i++) {
      if(zips[i].search(lat, lng)) {
        return zips[i].zip;
      }
    }
    return null;
}

function geoMGRSSearchZip(cords) {
    var cords2 = mgrs.toPoint(cords)
    return geoSearchZip(cords2[1], cords2[0]);
}


module.exports = {
    geoSearchZip,
    geoMGRSSearchZip
}