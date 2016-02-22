// store greetings
var msg0 = 'It seems you have lost your way';
var msg1 = 'Your not frodo, go back to the shire';
var msg2 = '-Boromir';
var msg3 = 'but the 404 is a different story';
// get/make random number
var limit = 3;
var numRand = Math.floor( Math.random()*limit );
console.log( numRand );

// show random greetings
$('.greeting').text(eval('msg' + numRand));
console.log('msg' + numRand)