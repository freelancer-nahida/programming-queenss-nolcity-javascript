const numbers = [4, 5, 6, 3, 7, 9];
const shortenPerson = numbers.sort();
console.log(shortenPerson);

//accending -------------> smaller to larger

//desending ---------> larger to  smaller

const number_dsc = numbers.sort(function (a, b) { return b - a });
console.log(number_dsc);
