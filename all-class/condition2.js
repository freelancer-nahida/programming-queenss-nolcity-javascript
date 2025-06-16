// var amount = 10;

// if (amount >= 1000) {
//     console.log('i can eat ');

// }
// else if (amount >= 600) {
//     console.log('i eat pizza ');

// }
// else if (amount >= 300) {
//     console.log('eat barger');

// }
// else {
//     console.log('ber hoy');

// };

var budget = 300;

if (budget >= 5000) {
    //10% discount
    var discount = budget * 10 / 100;
    var payAmount = budget - discount;
    console.log('you discount', discount, 'you pay', payAmount);
}
else if (budget >= 3000) {
    // 5% discount

    var discount = budget * 5 / 100;
    var payAmount = budget - discount;
    console.log('your discount', discount, 'you pay', payAmount);
}

else if (budget >= 1000) {
    // 2% discount

    var discount = budget * 2 / 100;
    var payAmount = budget - discount;
    console.log('your discount ', discount, 'you pay', payAmount);

}
else {
    console.log('you have to pay hol amount', budget);

};