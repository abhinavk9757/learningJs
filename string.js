// ES-5 Versions of previous
// const str = "djhfbvhjdfb";
// const str2 = 'sjdhbcjhsdc';
// const str3 = "it's an animal";
// const str4 = 'it"s an animal';

// ES-6 Template strings
// const injectVar = 'Abhinav'
// const str5 = `djkfnvkjd ${injectVar} fnvkjfd ${injectVar} ${54*2}`;
// console.log(str5)


// concat
// const concatenatedStr = str.concat(str2);
// const concatenatedStr2 = str + str2;
// console.log({ concatenatedStr, concatenatedStr2 })
// typeof String(amt1)
//typecasting - autocsting

// '400rasdhgsv' NaN
// 348765387456 '348765387456'

// const amt1 = 4000; //number
// const amt2 = 500;

// console.log(amt1 + ',' + amt2);
// console.log(`${amt1},${amt2}`)

// string array
// const a =['s','d','k', 'j']
// const s ='sdkj';

// let valArr = a[2];
// let valStr = s[2];
// console.log(valArr, valStr)

const splitteStr = '4000,500'.split('');
const joinedStr = splitteStr.join('$');
console.log(joinedStr)