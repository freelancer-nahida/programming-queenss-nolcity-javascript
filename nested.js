// let college = {
//     classroom: 16,
//     student: 200,
//     class: 'XI-XII',
//     good_people: ['a', 'd', 'e'],
//     top_people: {
//         top_class: 'togor',
//         top_section: 'A',
//         top_student: {
//             proXI: 'shila',
//             proXII: 'Sonia'
//         }
//     }
// }
// // college.top_people.top_student.proXII = 'sanjida';
// // console.log(college.top_people.top_student.proXII);
// const keys = Object.keys(college);

// for (const key of keys) {
//     console.log(college[key]);

// }

const pen = {
    brand: 'econo',
    price: 5,
    color: 'sada'
}
const pencil = new Object(pen);

const rubber = Object.create({hello:'1', gello:'2', })
console.log(pencil);
