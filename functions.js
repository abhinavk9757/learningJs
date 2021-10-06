// function is a set of code, and u can call it any where
// functions have parameters
// function has a return statement

// function sum(num1, num2) {
//     const addValue = num1 + num2;
//     return addValue;
// }

// const sumOf2310 = sum(23,10);
// console.log(sumOf2310)

// function print(){
//     console.log('1')
//     console.log('2')
//     console.log('3')
//     console.log('4')
//     console.log('5')
// }

// function func(x,y, a,b){
//     console.log('x ', x)
//     console.log('y ', y)
// }

// func('first', 'second', 'third', 'fourth')

// even => num %2 === 0

// Figure out what is happening here
// recursive
// let target = 25;

// function odd(num) {
//     if(num === target){
//         console.log("Target is Odd");
//     } else {
//         even(num+1)
//     }
// }

// function even(num) {
//     if(num === target) {
//         console.log("Target is Even");
//     } else {
//         odd(num+1)
//     }
// }

// even(0);

// function funName(){}   // ====> regular functions
// let arrowFunc = () => {}  // -----> arrow functions

// function a(str1 = '', str2 = '') {
//     return str1 + str2;
// }

// console.log(a(undefined, 'assd'))


// let recursive = (ctr) => {
//     if(ctr>2){
//         return;
//     } else {
//         console.log(ctr);
//     }
    
//     recursive(ctr+1);
// }

// recursive(0);



// R1
// ctr = 0

// R2
// ctr = 1

// R3
// ctr = 2

// R4
// ctr = 3

// 012



// const func1 = () => {
//     console.log('This is start statement');  // 1
//     func2();
//     console.log('This is after my call'); // 3

//  return undefined;
// }

// const func2 = () => {
//     console.log('This is func 2'); // 2
// }

// func1();



// const func = () => {
//     return;
// };
// func();


// Find the factorial of a number by using for loop and then try same using recursion
// factorial of 4 = 4*3*2*1
// factorial of 3 = 3*2*1

const factorial = (num) => {
    return;
}
console.log(factorial(10));

