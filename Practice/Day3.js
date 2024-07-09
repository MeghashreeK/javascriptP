function x(){
    for(var i=1;i<=5;i++){

        setTimeout(function y(){
           console.log(i);
        },i*1000);
    }
}
x();

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