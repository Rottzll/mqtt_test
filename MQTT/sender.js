var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://127.0.0.1:1883');

var fs = require('fs');

file = 'devconfig.json';
data = fs.readFileSync(file);
console.log(data);

D = {
    "name": file,
    "data": data,
};

var message = JSON.stringify(D);

client.on('connect', function () {
    if (client.connected == true) {
        client.publish('test', message);
        console.log("sussess");
        client.end();
    }
});

// client.on('message', function (topic, message) {
//     console.log(topic + ' : send');
//     client.end();
// });