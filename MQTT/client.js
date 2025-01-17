var mqtt    = require('mqtt');
var count =0;
var client  = mqtt.connect("tcp://test.mosquitto.org",{clientId:"mqttjs01"});
console.log("connected flag  " + client.connected);

var options={
    retain:true,
    qos:1
};

var topic="testtopic";

var message="test message";

var topic_list=["topic2","topic3","topic4"];

var topic_o={"topic22":0,"topic33":1,"topic44":1};

console.log("subscribing to topics");
client.subscribe(topic); //single topic
client.subscribe(topic_list); //topic list
client.subscribe(topic_o); //object

function publish(topic,msg,options){
    console.log("publishing",msg);
        if (client.connected == true) {
            client.publish(topic,msg,options);
        }
}

var timer_id = setInterval ( function() {
    publish(topic,message,options);
    },5000);

//handle incoming messages
client.on('message',function(topic, message, packet){
	console.log("message is "+ message);
	console.log("topic is "+ topic);
});


client.on("connect",function(){	
    console.log("connected  "+ client.connected);
})

//handle errors
client.on("error",function(error){
    console.log("Can't connect" + error);
    process.exit(1)
});
//publish


//////////////



//notice this is printed even before we connect
