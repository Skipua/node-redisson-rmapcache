var redis = require("redis"),
    client = redis.createClient();
const fs = require('fs');

module.exports = {
    getFromMapCache: function (mapName, key, callback) {
        client.eval(fs.readFileSync('./unpack.lua'), 2, mapName, key, function (err, res) {
            if (err)
                console.log(err)
            callback(res);
        });
    }
}