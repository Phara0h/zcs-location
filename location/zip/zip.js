class Zip {
    constructor(zip, bounds) {
      this.zip = zip;
      this.bounds = bounds;
      //console.log(this)
    }
  
    search(lat, lng) {
      var point = [lng, lat];
      for(let z = 0; z < this.bounds.length; z++) {
  
        var polygon = this.bounds[z];
        let nvert = polygon.length;
        let c = false;
        for(let i = 0, j = nvert-1; i < nvert; j = i++) {
            let pI = polygon[i];
            let pJ = polygon[j];
            if(((pI[1] > point[1]) !== (pJ[1] > point[1])) &&
             (point[0] < (pJ[0] - pI[0]) * (point[1] - pI[1]) / (pJ[1] - pI[1]) + pI[0]) ) {
                c = !c;
            }
        }
        if(c) {
          return true;
        }
      }
      return false;
    }
  
  }
  module.exports = Zip;