// let num = 0;
// while (num < 5) {
//     // num ++;
//     console.log(num);
//     num++;
// }

// let num = 1;
// let sum = 0;
// while (num <= 10) {
//     sum = sum + num;
//     console.log(num, sum);
//     num++;
// }

// for (let num = 1; num <= 5; num++) {
//     console.log(num);

// }

//even number
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log('even numbet', i);
//     }
// }

// odd number

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 1) {
//         console.log('odd number', i);

//     }
//     else {
//         console.log(i);

//     }
// }

// for (let i = 1; 1 <= 5; i--) {
//     console.log('I love you', i);

// }

// let sum = 0;

// for (let i = 11; i <= 20; i++) {
//     sum += i;
//     console.log(i);

// }
// console.log('Total', sum);


// for (let i = 10; i >= 0; i--) {
//     console.log(i);

// }

// while loop

// let num = 10;
// let sum = 0;
// while (num >= 0) {
//     console.log(num)
//     num--

// }
let total = 0
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        // console.log(i);
        total = total + i;


    }
}
console.log(total);