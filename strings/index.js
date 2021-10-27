// Strings Methods and properties and Examples
const sampleString = '   This is a sample is string  ';
console.log('String => ', sampleString);
console.log('');


//  1. length - Gives the length of the string
const length = sampleString.length;
console.log('1.length, Length of the string is => ', length);
console.log('');

// 2. substring(startIndex, numberOfCharacters?) - Takes out a part of string
const startIndex = 0;
const numberOfCharacters = 1;
const substr = sampleString.substring(0,1);
console.log(`2.substring(${startIndex}, ${numberOfCharacters}), Substring that starts from ${startIndex} and numberOfCharacter/s is/are ${numberOfCharacters} => ${substr}`);
console.log('');

// 3. indexOf(string, startIndex?) - Finds the first occurence of string from the start index
//    It gives the index if the string is found, if not found it gives -1
const searchStr1 = 'is';
const searchStr2 = 'qwer';
const positionOf1 = sampleString.indexOf(searchStr1);
const positionOf2 = sampleString.indexOf(searchStr2);
console.log(`3.indexOf('${searchStr1}'), First Occurence of '${searchStr1}' is => ${positionOf1}`);
console.log(`3.indexOf('${searchStr2}'), The string '${searchStr2}' is not present in sample string, hence return value is=> ${positionOf2}`);
console.log('');

// 4. lastIndexOf(string, startIndex?) - Exactly like indexOf, but it seraches from left to right
const positionOf1FromLast = sampleString.lastIndexOf(searchStr1);
console.log(`4.lastIndexOf('${searchStr1}'), Last Occurence of '${searchStr1}' is => ${positionOf1FromLast}`);
console.log('');

// 5. replace(oldCharacters, newCharacters) - Replaces oldCharacters with newCharacters
//    It replaces first occurence only
const oldCharacters = 'is';
const newCharacters = 'of';
const replacedStr = sampleString.replace(oldCharacters, newCharacters);
console.log(`5.replace('${oldCharacters}', '${newCharacters}'), After replacing first match of '${oldCharacters}' with '${oldCharacters}' => ${replacedStr}`)
console.log('');


// 6. replace all the occurences - use regex identifier /g -> global
const replacedAllStr = sampleString.replace(/is/g, 'of');
console.log(`6.replace(\\is\\g, 'of'), Replaces all occurence of 'is' with 'of' => ${replacedAllStr}`);
console.log('');

// 7. toUpperCase(), toLowerCase() - converts a string to upper or lower case
const upperCase = sampleString.toUpperCase();
const lowerCase = sampleString.toLowerCase();
console.log(`7.toUpperCase(), All characters in capital => ${upperCase}`);
console.log(`7.toLowerCase(), All characters in small => ${lowerCase}`);
console.log('');

// 8. trim() - removes white spaces from both ends of string
const trimmed = sampleString.trim();
console.log(`8.trim(), After trimmed => ${trimmed}`);
console.log('');

// 9. split(separatorString) - splits the string on the separatorString and gives splitted strings in array
const separatorString = 'is';
const splittedString = trimmed.split(separatorString);
console.log(`9.split('${separatorString}'), After splitting trimmed string on '${separatorString}' => `, splittedString)
console.log('');

// *** This is an array function but needed to knw
// 10.  join(joinStr) - Joins an array of strings with the joinStr
const arr = ['Apple', 'Orange', 'Pear'];
const joinStr = ' and ';
const joinedStr = arr.join(joinStr);

console.log('');
console.log('*** 10.');
console.log('Array used => ') 
console.log(arr)
console.log(' Joining array with "' + joinStr +'"');
console.log('Final joined string => ', joinedStr);
