# blueriiot-api-client
This is an unofficial node js wrapper for the Blueriiot API

## Usage
Example to fetch all pools

`const {BlueriiotAPI} = require('./api');

var api = new BlueriiotAPI("email","password");

api.init().then(function(){

    console.log(api.isAuthenticated());

    api.getSwimmingPools().then(function(data){

        console.log(data);

    });

}).catch( function(error){

    console.log("We have issues signing in: " + error);

});`


## Test
For test you can look in the test.js file. To use it either mod the code or add a .env file.
.env should then include at least email and password. Poolid/blueid can be added when you have it.

`EMAIL= ""
PASSWORD=""
POOLID=""
BLUEID=""`