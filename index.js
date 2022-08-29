

Object.defineProperty(exports, "__esModule", { value: true });
exports.zcs_location =  () => {
    const levelup = require("levelup");
    const leveldown = require("leveldown");
    const mgrs_data = levelup(leveldown(__dirname +"/location/mgrs_db"));
    const street_mgrs_data = levelup(leveldown(__dirname +"/location/street_mgrs_db"));
    return {
        mgrs_data,
        street_mgrs_data
    }
}

