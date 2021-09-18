// let arr = [1,2,3,4,5,6];
// console.log('orig array', arr);

// //add at the end - push
// arr.push(23);
// console.log('new array', arr);

// //take out the last element - pop
// let lastElem = arr.pop();
// console.log('new array after popping', arr, 'popped element is', lastElem);

// arr[arr.length] = 34;
// console.log('new array', arr);


// map -> array transformation function, filter, reduce -> getting a single result

// let firstArray = [1,2,3,4,5,6]
// let arrObj = [{}, {}, {}, {}]
// // let transformedArr = firstArray.map((elem) => {
// //     const transformed = elem * 2;
// //     return transformed;
// // });
// let idAddedArray = arrObj.map((elem,index) => {
//     elem.id = index;
//     return elem
// })
// console.log('idAddedArray', idAddedArray)

// const arr = [{isAnimal: true, type: 'cheetah'}, {isBird: true, type: 'parrot'}, {isBird: true, type: 'sparrow'},{isBird: true, type: 'pigeon'}, {isAnimal: true, type: 'lion'}]
// // output => [cheetah,parrot, sparrow, pigeon, lion]

const arr = [22,133,66,44,29,33];
let evenNumbers = arr.filter((elem) => {
    // if(elem % 2 === 0){
    //     return true
    // } else {
    //     return false
    // }
    return false;
})
console.log(evenNumbers)