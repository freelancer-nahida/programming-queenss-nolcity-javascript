// let sentence = 'I LOve Bd';

// for (let sentences of sentence) {
//     console.log(sentences);

// }

// let rev = '';
// for (let i = 0; i < sentence.length; i = i + 1) {
//     // console.log(i);
//     const letter = sentence[i];

//     rev = letter + rev;
//     console.log(rev);

// }

// rev shortcut

// let sentence = 'I LOve Bd';

// const reverse = sentence.split('').reverse().join('!');
// console.log(reverse);

const phone = {
    brand: 'apple',
    rom: 256,
    price: 132,
    color: 'white',
    isPassword: true,
    'fav iter' : ['bandarbon','sunderbon', 'sajec']

}
//dot notation 
// console.log(phone.brand);

// const phonePrice = phone.price;

// console.log(phonePrice);

//using third braket

console.log(phone['price']);

//upgrate your property
phone.price = 50;
phone['price'] = 80;
phone['fav item'] = ['france', 'coxs', 'qater'];
console.log(phone);
