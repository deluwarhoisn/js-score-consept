// function counter (){
//     let count = 0;
//     function innerFunction (){
//         console.log('inside the inner function call me')
//     }
//     return innerFunction
// }
// const output = counter();
// console.log(output())

function counter(){
    let count = 10
}
return function(user){
    count = count + 1;
    console.log('inside the inner function')
}