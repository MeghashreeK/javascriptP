//DAY-1
//shortest program in JS

//DAY-2
// console.log(a);
function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    return y;
}
var z=x();
console.log(z);
z();
//7 is printed
