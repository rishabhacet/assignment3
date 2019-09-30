function*  mul(x){
yield x*1;
var y=2;
console.log(x*y);
}
var a= mul(4);
a.next();
a.next();