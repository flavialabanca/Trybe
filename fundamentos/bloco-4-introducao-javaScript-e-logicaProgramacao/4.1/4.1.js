// exercício 1

const myName = "Flávia";
const birthCity = "Rio de Janeiro";
var birthYear = 1983;

birthYear = 2030;

console.log ('exercício um:');
console.log (myName);
console.log (birthCity);
console.log (birthYear);
console.log ('-----------');

// exercício 2

const base = 5;
let height = 8;
const area = base * height;
const perimeter = (base * 2) + (height * 2)

console.log ('exercício dois:');
console.log (base);
console.log (height);
console.log (area);
console.log (perimeter);
console.log ('--------------');

// exercício 3

const nota = 75;
let mensagem;

if (nota >= 80){
    mensagem = 'Parabéns, você foi aprovado'
}
else if (nota < 80 && nota >= 60) {   
    mensagem = 'Você está na nossa lista de espera'
}
else if (nota < 60){
    mensagem = 'Você foi reprovado'
}   

console.log ('exercício três:');
console.log (mensagem);
console.log ('---------------');