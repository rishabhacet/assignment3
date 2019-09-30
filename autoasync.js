const async =require('async');
async.auto(
    {
    a : function(cb)
    {
        var l = 3;
        var r =7;
        cb(null,l,r);
    } ,
    b : function(cb)
    {
        var br=4;
        cb(null,br);
    },
    c :['a','b',function(result,cb){
    data=result.a[1]*result.b;

    cb(null,data);
}]
},
function(error,result) {
    console.log(result);
    
}
);
   