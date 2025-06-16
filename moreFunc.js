// function doubleOrTriple(number, doDouble) {
//     if (doDouble === true) {
//         const result = number * 2;
//         console.log(result);

//     }
//     else{
//         console.log(false);

//     }
// }
// doubleOrTriple(23, 63)
/////////////////////////////////////
// function mileToKilometer(mile) {

//     const kilo = mile * 1.60934;
//     return kilo;

// }
// console.log(mileToKilometer(3));

////////////////////////////////////

function inchToFeet(inch) {
    const feet = inch / 12;

    const feetnumber = parseInt(feet);

    const inchRem = inch % 12;
    const result = feetnumber + '  ' + 'ft' + ' ' + inchRem + '  ' + 'inch';
    return result;
}
console.log(inchToFeet(64));


// function KgToPound(kg) {
//     const pound = kg * 2.20462;
//     return pound

// }
// console.log(KgToPound(25));
