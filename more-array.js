// const numbers = [2, 3, 5, 55, 99];
// numbers.reverse();
// console.log(numbers);


const numbers = [2, 3, 5, 55, 99];

const rev = [];
// for (const number of numbers) {
//     // console.log(number);
//     // rev.push(number)
//     rev.unshift(number);


// }

for (let i = numbers.length - 1; i >= 0; i--) {
    // console.log(number);
    const num = numbers[i];
    rev.push(num)

}
console.log(rev);