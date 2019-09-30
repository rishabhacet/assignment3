
var a = require('async');
a.waterfall([
    function (cb) {
        console.log('First part');
        cb(null, 'i', 'vicky');
    },
    function (pr1, pr2, cb) {
        var thing= pr1 +'and' + pr2;
        cb(null, thing);
    },
    function (thing, cb) {
        thing=thing +' '+'ice-cream';
        cb(null, thing);
    }
], function (err, thing) {
    if(err) console.log("error");
    console.log('Main Callback --> ' + thing);
});

console.log('Program End');