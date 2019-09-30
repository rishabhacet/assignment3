
var async = require('async');
async.series([
    function(cb)
    {
        console.log('rishabh');
        cb(null,'ab');
    },
    function(cb)
    {
        console.log("delta school");
        cb(null,'ok');
    }
],function(err,result){
if(err) console.log(err.message);
console.log(result);
});
console.log("end Program");