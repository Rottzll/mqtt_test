var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://127.0.0.1:1883');
var fs = require('fs');
 
client.on('connect', function (message) {
    client.subscribe('test');
    console.log("sussess");
});

client.on('message', function (topic, message) { 
    console.log(topic);
    if (client.connected == true) {
        data = JSON.stringify(message);
        console.log(data.name);
        fs.writeFileSync(data.name, data.data);
        console.log("sussess!");
        client.end();
    }
});