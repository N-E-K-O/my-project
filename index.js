var _Promise = require("./Promise");

var p = new _Promise(function(resolve, reject) {
    setTimeout(function() { resolve("promise success") }, 5000)
});

p.then(
    function(rs) { console.log(rs); },  //promise success
    function(e) {}
);