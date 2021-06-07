const {BlueriiotAPI} = require('./api');
var api = new BlueriiotAPI("user","password");
api.init().then(function(){
    console.log(api.isAuthenticated());
    api.getUser().then(function(data){
        console.log(data);
    });
}).catch( function(error){
    console.log("We have issues signing in: " + error);
});

