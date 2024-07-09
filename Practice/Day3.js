// function x(){
//     for(var i=1;i<=5;i++){

//         setTimeout(function y(){
//            console.log(i);
//         },i*1000);
//     }
// }
// x();
//output: here it prints 6, 6 times after each seconds.

// function x(){
//     for(var i=1;i<=5;i++){
//          function a(i){
//             setTimeout(function y(){
//                 console.log(i);
//              },i*1000);
//          }
//         a(i);
//     }
// }
// x();
//output: here it prints 1 to 5, after each seconds.

function a(){
    let x=2;
    function b(){
        console.log(x);
    }
    return b;
}
let x=6;
let z=a();
z();
