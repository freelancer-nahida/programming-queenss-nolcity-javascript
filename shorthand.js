// var first = 100;
// var sec = 30;
// var total = 100 / 30;
// console.log(total);



// let rosePrice = 2;
// console.log(rosePrice);

// let amount = 10;

// if (amount >= 1200) {

//     console.log('you can a bouqet');

// }
// else {
//     if (amount >= 800)
//         console.log(' black rose');
//     else if (amount >= 600) {
//         console.log('get a tulip');
//     }
//     else {
//         if (amount >= 50) {
//             console.log('you  will get a dalia');

//         }
//         else if (amount >= 20) {
//             console.log(' arek dokan deko');
//         }
//         else {
//             console.log('mara khaw');

//         }

//     }
// }



// if (price >= 20) {
//     console.log('you will ge a rose');

// }
// else {
//     console.log('you will get nothing');

// }

//shortcart /ternary

// price >= 20 ? console.log('rose') : console.log('no');

let price = 10;
let isLeader = true;

// if (isLeader === true) {
//     price = 0;

// }
// else {
//     price = price + 100;

// }
// console.log(price);

// isLeader === true ? 0 : price + 100;

// console.log(price);

if (isLeader === true) {
    if (price > 1000) {
        price = price / 2;

    }
    else {
        price = 0;
    }
}
else {
    price = 0;
}

// console.log(price);

isLeader === true ? price > 1000 ? price = price / 2 : price = 0 : price = 1000;

console.log(price);

