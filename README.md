# blueriiot-api-client
This is an unofficial node js wrapper for the Blueriiot API

## Usage
Example to fetch all pools

```javascript
const {BlueriiotAPI} = require('./api');
var api = new BlueriiotAPI(process.env.EMAIL,process.env.PASSWORD);
api.init().then(function(){
    console.log(api.isAuthenticated());
    api.getSwimmingPools().then(function(data){console.log(data);});
    
    //api.getUser().then(function(data){console.log(data);});
    //api.getBlueDevice(process.env.BLUEID).then(function(data){console.log(data);});
    //api.getSwimmingPool(process.env.POOLID).then(function(data){console.log(data);});
    //api.getSwimmingPoolStatus(process.env.POOLID).then(function(data){console.log(data);});
    //api.getSwimmingPoolBlueDevices(process.env.POOLID).then(function(data){console.log(data);});
    //api.getSwimmingPoolFeed(process.env.POOLID, "en").then(function(data){console.log(data);});
    //api.getLastMeasurements(process.env.POOLID, "process.env.BLUEID).then(function(data){console.log(data);});
}).catch( function(error){
    console.log("We have issues signing in: " + error);
});
```

## End Points
```javascript
getUser()
getBlueDevice(<blue_device_serial>)
getSwimmingPools()
getSwimmingPool(<swimming_pool_id>)
getSwimmingPoolStatus(<swimming_pool_id>)
getSwimmingPoolBlueDevices(<swimming_pool_id>)
getSwimmingPoolFeed(<swimming_pool_id>,<language>)
getLastMeasurements(<swimming_pool_id>,<blue_device_serial>)
```

## Test
For test you can look in the test.js file. To use it either mod the code or add a .env file.
.env should then include at least email and password. Poolid/blueid can be added when you have it.

```javascript
EMAIL= ""
PASSWORD=""
POOLID=""
BLUEID=""
```