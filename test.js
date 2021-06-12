require('dotenv').config()
const {BlueriiotAPI} = require('./api');
var api = new BlueriiotAPI(process.env.EMAIL,process.env.PASSWORD);
api.init().then(function(){
    console.log(api.isAuthenticated());
    //api.getUser().then(function(data){console.log(data);});
    //api.getBlueDevice(process.env.BLUEID).then(function(data){console.log(data);});
    //api.getSwimmingPools().then(function(data){console.log(data);});
    //api.getSwimmingPool(process.env.POOLID).then(function(data){console.log(data);});
    //api.getSwimmingPoolStatus(process.env.POOLID).then(function(data){console.log(data);});
    //api.getSwimmingPoolBlueDevices(process.env.POOLID).then(function(data){console.log(data);});
    //api.getSwimmingPoolFeed(process.env.POOLID, "en").then(function(data){console.log(data);});
    //api.getLastMeasurements(process.env.POOLID,process.env.BLUEID).then(function(data){console.log(data);})
    //api.getGuidance(process.env.POOLID, "en").then(function(data){console.log(data);});
    //api.getGuidanceHistory(process.env.POOLID, "en").then(function(data){console.log(data);});
    //api.getChemistry(process.env.POOLID).then(function(data){console.log(data);});
    //api.getWeather(process.env.POOLID, "en").then(function(data){console.log(data);});
    //api.getBlueDeviceCompatibility(process.env.BLUEID).then(function(data){console.log(data);});
    
}).catch( function(error){
    console.log("We have issues signing in: " + error);
});