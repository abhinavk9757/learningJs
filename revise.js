// 1. Copy objects
// 2. Number of spaces in a string

// let obj1 = {
//     a: 1,
//     b: 2,
//     c: 3,
// }

// let obj2 = {
//     d:23,
//     c: 4
// }

let str = '1$2$3$4$56'
let number = Number(str);
if(Number.isNaN(number)){
    console.log('This string cannnot be converted to a number')
} else {
    console.log('This string can be converted to a number')
}

let arr = ['123', 45, 'sdsdf',"#@", 456456, '7567578'];

// find the sum of all the numbers