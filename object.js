// const phone = [
//     { name: 'samsung', price: 20000, camera: '12mp', color: 'black' },

//     { name: 'vivo', price: 22000, camera: '15mp', color: 'blue' },

//     { name: 'oppo', price: 12000, camera: '16mp', color: 'purple' },

//     { name: 'iphone', price: 25000, camera: '20mp', color: 'black' },

//     { name: 'htc', price: 32000, camera: '22mp', color: 'silver' },
// ]

// function getCheapestPhone(phones) {
//     // console.log(phones);

//     let min = phones[0];
//     for (const phone of phones) {
//         // console.log(phone);
//         if (phone.price < min.price) {
//             min = phone;
//         }

//     }
//     return min;
// }
// const cheap = getCheapestPhone(phone)
// console.log(cheap);

// const products = [
//     { name: 'shampoo', price: 300 },
//     { name: ' churi', price: 100 },
//     { name: 'shirt', price: 1000 },
//     { name: 'total', price: 400 }

// ];

function add(num1, num2) {
    return num1 + num2;
}
function sub(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divition(num1, num2) {
    return num1 / num2;
}

function calculation(a, b, operation) {
    if (operation === 'add') {
        return add(a, b)
    }
    else if (operation === 'sub') {
        return sub(a, b)
    }

    else if (operation === 'multiply') {
        return multiply(a, b);
    }
    else if (operation === 'divition') {
        return divition(a, b);
    }
}
const calcu = calculation(2, 4, 'multiply')
console.log(calcu);
