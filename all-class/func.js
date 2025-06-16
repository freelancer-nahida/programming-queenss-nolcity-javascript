// function add(value1, value2) {
//     return value1 + value2;
// }
// console.log(add(1, 2));

// function isEven(number) {
//     if (number % 2 === 0) {
//         return true;

//     }
//     else {
//         return false;
//     }
// }
// console.log(isEven(23));

function evenSizeStr(str) {
    const size = str.length;

    if (size % 2 === 0) {
        console.log('even');

    }
    else {
        console.log('odd');

    }
    console.log(size);

}
evenSizeStr('nahida')