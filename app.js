var rmapcache = require("./rmapcache");
var redis = require("redis"),
    client = redis.createClient();

client.on("error", function (err) {
    console.log("Error " + err);
});

rmapcache.getFromMapCache('test', '"1"', function(value) {
	console.log(value);
});

rmapcache.getFromMapCache('test', '2', function (value) {
	console.log(value);
});

client.quit();