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

const nota = 69;
let mensagem;
let estado;

if (nota >= 80){
    mensagem = 'Parabéns, você foi aprovado'
    estado = 'aprovado'
}
else if (nota < 80 && nota >= 60) {   
    mensagem = 'Você está na nossa lista de espera'
    estado = 'lista'
}
else if (nota < 60){
    mensagem = 'Você foi reprovado'
    estado = 'reprovado'
}   

console.log ('exercício três:');
console.log (mensagem);
console.log ('---------------');

// exercício 4

const currentHour = 22;
let message = "";

if (currentHour >= 22){
    message = 'não deveríamos comer nada, é hora de dormir';
}
else if (currentHour >= 18 && current < 22){
    message = 'rango da noite, vamos jantar :D';
}
else if (currentHour >=14 && currentHour < 18){
    message = 'vamos fazer um bolo pro café da tarde?';
}
else if (currentHour > 11 && currentHour < 14){
    message = 'hora do almoço';
}
else if (currentHour > 4 && currentHour < 11){
    message = 'hummm, cheiro de café recém passado';
}

// segunda parte

let weekDay = 'sabado';

if (weekDay === 'segunda feira' || weekDay === 'terça feira' || weekDay === 'quarta feira' || weekDay === 'quinta feira' || weekDay === 'sexta feira'){
    console.log ('Oba, mais um dia de aprendizado na Trybe! :D');
}
else {
    console.log ('FINALMENTE, descanso merecido UwU');
}

console.log ('exercício quatro:');
console.log (message);
console.log ('---------------');

// exercício 5

//let estado;

console.log ('exercício cinco:');
console.log (nota);

switch (estado){
    case ('aprovado'):
        console.log('aprovada');
        break;
    case ('lista'):
        console.log('lista');
        break;
    case ('reprovado'):
        console.log('reprovada')
        break;
    default:
        console.log('não se aplica')
}

console.log ('---------------');
