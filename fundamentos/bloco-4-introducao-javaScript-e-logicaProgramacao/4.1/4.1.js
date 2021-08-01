// // exercício 1

// const myName = "Flávia";
// const birthCity = "Rio de Janeiro";
// var birthYear = 1983;

// birthYear = 2030;

// console.log ('exercício um:');
// console.log (myName);
// console.log (birthCity);
// console.log (birthYear);
// console.log ('-----------');

// // exercício 2

// const base = 5;
// let height = 8;
// const area = base * height;
// const perimeter = (base * 2) + (height * 2)

// console.log ('exercício dois:');
// console.log (base);
// console.log (height);
// console.log (area);
// console.log (perimeter);
// console.log ('--------------');

// // exercício 3

// const nota = 69;
// let mensagem;
// let estado;

// if (nota >= 80){
//     mensagem = 'Parabéns, você foi aprovado'
//     estado = 'aprovado'
// }
// else if (nota < 80 && nota >= 60) {   
//     mensagem = 'Você está na nossa lista de espera'
//     estado = 'lista'
// }
// else if (nota < 60){
//     mensagem = 'Você foi reprovado'
//     estado = 'reprovado'
// }   

// console.log ('exercício três:');
// console.log (mensagem);
// console.log ('---------------');

// // exercício 4

// const currentHour = 22;
// let message = "";

// if (currentHour >= 22){
//     message = 'não deveríamos comer nada, é hora de dormir';
// }
// else if (currentHour >= 18 && current < 22){
//     message = 'rango da noite, vamos jantar :D';
// }
// else if (currentHour >=14 && currentHour < 18){
//     message = 'vamos fazer um bolo pro café da tarde?';
// }
// else if (currentHour > 11 && currentHour < 14){
//     message = 'hora do almoço';
// }
// else if (currentHour > 4 && currentHour < 11){
//     message = 'hummm, cheiro de café recém passado';
// }

// // segunda parte

// let weekDay = 'sabado';

// if (weekDay === 'segunda feira' || weekDay === 'terça feira' || weekDay === 'quarta feira' || weekDay === 'quinta feira' || weekDay === 'sexta feira'){
//     console.log ('Oba, mais um dia de aprendizado na Trybe! :D');
// }
// else {
//     console.log ('FINALMENTE, descanso merecido UwU');
// }

// console.log ('exercício quatro:');
// console.log (message);
// console.log ('---------------');

// // exercício 5

// //let estado;

// console.log ('exercício cinco:');
// console.log (nota);
// switch (estado){
//     case ('aprovado'):
//         console.log('aprovada');
//         break;
//     case ('lista'):
//         console.log('lista');
//         break;
//     case ('reprovado'):
//         console.log('reprovada')
//         break;
//     default:
//         console.log('não se aplica')
// }
// console.log ('---------------');

// ----

// exercícios: 'agora a prática', do course:
// 1
let a = 22;
let b = 10;
let valor;

console.log('faz operações:')
valor = a+b;
console.log ('soma: ' + valor);
valor = a-b;
console.log ('subtração: ' + valor);
valor = a*b;
console.log ('multiplicação: ' + valor);
valor = a/b;
console.log ('divisão: ' + valor);
valor = a%b;
console.log ('módulo: ' + valor);

//2
console.log('retorna maior numero:')
if (a>b){
    console.log (a)
}
else {
    console.log(b)
}

//3
let c = 3;

console.log('retorna maior dos três:')
if (a>b && a>c){
    console.log (a)
}
else if (b>c && b>a){
    console.log(b)
}
else if (c>a && c>b){
    console.log(c)
}

//4

const d = -10;
console.log('retorna positivo/negativo:')
if (d > 0){
    console.log ('positivo')
}
else if (d < 0){
    console.log('negativo')
}
else {
    console.log('zero')
}

//5

const anguloUm = 100;
const anguloDois = 90;
const anguloTres = -70;
let soma = anguloUm + anguloDois + anguloTres;
let confere = anguloUm > 0 && anguloDois > 0 && anguloTres > 0;

if (confere){
    if (soma === 180){
        console.log('true');
    }
    else {
        console.log('false');
    }
} else {
    console.log('ângulo inválido');
}

//6

let peca;

peca = 'Rei';

switch (peca.toLowerCase()){
    case 'rei':
        console.log('rei - só pode andar uma casa em qualquer direção.');
        break;
    case 'bispo':
        console.log('bispo - diagona.');
        break;    
    case 'rainha':
        console.log('rainha - pode andar na horizontal, vertical e diagonal.');
        break;
    case 'cavalo':
        console.log('cavalo - anda em L; pode pular sobre as peças.');
        break;
    case 'torre':  
        console.log('torre - horizontal e vertical.');
        break;
    case 'peao':
        console.log('peão - apenas uma casa para frente, no primeiro movimento podem ser duas.');
        break;
    default:
        console.log('essa peça não existe!');
        break;
}

//7

let nota = 77;

if (nota > 100 || nota < 0){
    console.log('a nota deve estar entre 0 e 100')
} else if (nota >= 90) {
    console.log('conceito: A');
} else if (nota >= 80){
    console.log('conceito: B');
} else if (nota >= 70){
    console.log('conceito: C');
} else if (nota >= 60){
    console.log('conceito: D');
} else if (nota >= 50){
    console.log('conceito: E');
} else {
    console.log('conceito: F');
}

//8

const numeroUm = 1;
const numeroDois = 2;
const numeroTres = 3;

if (numeroUm % 2 === 0 || numeroDois % 2 === 0 || numeroTres% 2 === 0){
    console.log('true');
} else {
    console.log('false');
}

//9

const numeroUm = 4;
const numeroDois = 2;
const numeroTres = 6;

if (numeroUm % 2 > 0 || numeroDois % 2 > 0 || numeroTres% 2 > 0){
    console.log('true');
} else {
    console.log('false');
}

//10

const valorProduto = 1;
const valorVenda = 2;
let valorTotal;
// valor total: com imposto
let valorFinal;
// valor final: valor da venda

if (valorProduto < 0 || valorVenda < 0){
    console.log('erro!')
} else {
    valorTotal = valorProduto * 1.2;
    valorFinal = (valorVenda - valorTotal) * 1000;
    console.log('lucro em 1000 unidades: ' + valorFinal);
}

//11

let salarioBruto = 3000;
let salarioLiquido;
let inss; 
let ir

if (salarioBruto <= 1556.94){
    inss = (salarioBruto*8)/100
} else if (salarioBruto <= 2594.92){
    inss = (salarioBruto*9)/100
} else if (salarioBruto <= 5189.82){
    inss = (salarioBruto*11)/100
} else {
    inss = 570.88;
}

let salarioBase = salarioBruto - inss;

if (salarioBase <= 1903.98){
    ir = 0;
} else if (salarioBase <= 2806.65) {
    ir = (salarioBase*0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
    ir = (salarioBase*0.015) - 354.80;
} else if (salarioBase <= 4664.68) {
    ir = (salarioBase*0.225) - 636.13;
} else {
    ir = (salarioBase*0.275) - 869.36;
}

salarioLiquido = salarioBase - ir;

console.log('--- salário bruto:   ' + salarioBruto);
console.log('inss:                ' + inss);
console.log('salário base:        ' + salarioBase);
console.log('imposto de renda:    ' + ir);
console.log('--- salário líquido: ' + salarioLiquido);