// function isLeapYear(year) {
//     if (year % 4 === 0 && year % 100 !== 0) {
//         return true
//     }
//     else if (year % 100 === 0 && year % 400 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// const islipi = isLeapYear(19927);
// console.log(islipi);

// function halirthumkatu(year) {
//     if (year % 76 === 0) {
//         console.log(true);

//     }
//     else {
//         console.log(false);

//     }

// }
// halirthumkatu(76);

// const numbers = [42, 23, 56, 56, 89, 12];

// function oddAvg(number) {

//     const odd = [];
//     for (const num of number) {
//         // console.log(num);
//         if (num % 2 === 1) {
//             odd.push(num);
//         }

//     }
//     // return odd;

//     let sum = 0;
//     for (const odds of odd) {
//         sum = sum + odds;

//     }
//     const count = odd.length;
//     const average = sum / count;
//     return average;
//     // console.log(sum, count);

// }
// const avg = oddAvg(numbers);
// console.log(avg);


// const friends = ['faria', 'maria', 'sadia', 'nadia', 'rasia', 'maria',];

// const num = [4, 5, 3, 2, 1, 3];

// function noDuplicate(array) {
//     const unique = [];
//     for (const item of array) {
//         if (unique.includes(item) === false) {
//             unique.push(item);
//         }
//     }
//     return unique;
// }
// // const uniqueArray = noDuplicate(friends);
// const uniqueArray = noDuplicate(num);
// console.log(uniqueArray);


const min = Math.min(45, 48, 41, 30, 65);

const max = Math.max(12, 56, 888, 99, 753)
// console.log(max);

// console.log(Math.PI);

// console.log(Math.abs(-88));
// console.log(Math.round());

// console.log(Math.round(2.5));


// console.log(Math.floor(2.49));
// console.log(Math.ceil(2.49));

// console.log(Math.random() * 10);

const today = new Date();
const date = new Date('1975-10-19')
// console.log(date.getMonth());
// console.log(date.getDay());

// console.log(date);
// const specificDate = new Date(2025, 0, 26);
// specificDate.setMonth(10);
// console.log(specificDate);

let x = 5;
let y = 7;

// let temp = x;
// x = y;
// y = temp;

[x, y] = [y, x];
console.log(x, y);

