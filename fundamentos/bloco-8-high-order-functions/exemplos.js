// primeira parte:
// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };
// repeat(5, console.log);

const { EALREADY } = require("constants");

// segunda parte:
// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(3, (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// });

// // terceira parte:
// const repeat = (number, xablau) => {
//   for (let count = 0; count <= number; count += 1) {
//     xablau(count);
//   }
// };

// const isEven = (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// };

// const isOdd = (number) => {
//   if ((number % 2) > 0) {
//     console.log(number, 'is odd');
//   }
// };

// repeat(3, isEven); // Testa quais números serão pares;
// repeat(3, isOdd); // Testa quais números serão ímpares;

//durante a aula do isaac:

// const person = {
//   name: 'flávia',
//   lastName: 'labanca',
//   greet: function (humor){
//     const message = 'olá!';
//     if (humor === 'bad'){
//       return  `${message} não fale comigo!`;
//     }
//     return message;
//   }
// }

// const humor = 'good'

// console.log(person.greet(humor))



// segunda parte:

const person = {
  name: 'flávia',
  lastName: 'labanca',
  greet: function (greetCallback){
    const message = 'olá!';
    return `${message} ${person.name} ${greetCallback()}`; // * callback da o poder de escolha pra quem estiver chamando ela.
    // a propriedade GREET do objeto PERSON, passa uma função por parâmetro.
    // na execução dela, tem que ser chamada como objeto.propriedade(_nome da função que vai ser executada_)
  }
}

const greet = person.greet(formalGreet);
console.log(greet);

function formalGreet(){
  return 'está tudo na maior maravilha!'
}

function badHumorGreet(){
  return 'não fale comigo!'
}

console.log(person.greet(badHumorGreet))
