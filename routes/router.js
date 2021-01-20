var express = require('express');
var router = express.Router();
var persent = 0.7;
var state_P = 0;
var state_U = 0;
var fan_speed = 1;

router.get('/', (req, res) => res.render('main', {state_P:state_P, 
                                                  state_U:state_U, 
                                                  fan_speed:fan_speed}));

router.get('/sub', function(req, res){
  console.log(persent);
  res.render('sub', {persent:persent, 
                      state_P:state_P, 
                      state_U:state_U, 
                      fan_speed:fan_speed} );
});

router.post('/', function(req, res){

  state_P = req.body.state_P;
  state_U = req.body.state_U;
  fan_speed = req.body.fan_speed;

    console.log('main POST Parameter = ' + state_P +" " + state_U);
    var result = fan_speed;
    res.send({result:result});

});

router.post('/sub', function(req, res){

    state_P = req.body.state_P;
    state_U = req.body.state_U;
    fan_speed = req.body.fan_speed;

    console.log('sub POST Parameter = ' + state_P +" " + state_U);
    var result ='Succese';
    res.send({result:result});

});

module.exports = router;