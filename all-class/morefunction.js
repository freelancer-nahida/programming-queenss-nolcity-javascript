// const jim = 250;
// const kim = 275;
// const mim = 200;

// const max = Math.max(jim, kim, mim)
// console.log(max);


// if (jim > kim && jim > mim) {

//     console.log('jim will get the cake');

// }
// else if ( kim > jim && kim > mim){
//     console.log('kim will get the cack');

// }
// else if( mim > jim && mim > kim){
//     console.log(' mim will get the cack');

// }

// const hight = [65, 75, 60, 85, 55];
// function getMax(numbers) {
//     let maxx = numbers[0];
//     for (const number of numbers) {

//         if (let number > maxx) {
//             maxx = number;
//         }
//     }
//     return maxx
// }

// const max = getMax(hight);
// console.log(max);

// 

const prices = [20000, 10000, 30000, 40000]

function getMin(numbers) {
    let min = numbers[0];
    for (const number of numbers) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}
const cheap = getMin(prices);
console.log(cheap);
