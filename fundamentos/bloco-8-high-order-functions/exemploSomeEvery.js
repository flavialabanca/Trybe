// // const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// // const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

// // console.log(verifyFirstLetter('J', listNames)); // true
// // console.log(verifyFirstLetter('x', listNames)); // false

// const grades = {
//   portugues: 'Aprovado',
//   matematica: 'Aprovado',
//   ingles: 'Aprovado',
// };

// const verifyGrades = (studentGrades) => (
//   Object.values(studentGrades).every((grade) => grade === 'Aprovado')
// );

// console.log(verifyGrades(grades));


// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// const { nationality = 'Brazilian' } = person;
// console.log(nationality); // Brazilian

const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!