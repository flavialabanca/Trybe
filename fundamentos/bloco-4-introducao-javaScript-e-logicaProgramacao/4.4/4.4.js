/*let familia = {
    nome: 'flavia',
    sobrenome: 'labanca',
    idade: 38,
    cidades: ['rio de janeiro', 'brasilia'],
    sobre: {
        anoNascimento: 1983,
        mesNascimento: 'março',
        diaNascimento: 9
    }
};

//console.log('a princesa ' + familia.nome + ' ' + familia.sobrenome + ' já tem ' + familia.idade + ' anos, embora não pareça. Ela já morou em ' + familia.cidades);

familia['nomeCompleto'] = familia.nome + ' ' + familia.sobrenome;

//console.table(familia);

//console.log(familia.nomeCompleto + ' nasceu no dia ' + familia.sobre.diaNascimento + ' de ' + familia.sobre.mesNascimento + ' no ano de ' + familia.sobre.anoNascimento + '.');

// exercícios
let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { 
        golden: 2, 
        silver: 3
    },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
};

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.')

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.')

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

let pizzas = {
    sabor: 'calabresa',
    preco: 39.90,
    bordaCatupiry: true
};

for (let chave in pizzas){
    console.log(chave);
}

let pizzasDoces = ['chocolate', 'banana', 'morango'];
for (let chave in pizzasDoces){
    console.log(chave);
}

let pizzasDoces = ['chocolate', 'banana', 'morango'];
for (let chave in pizzasDoces){
    console.log(chave, pizzasDoces[chave]);
}

let comidasBoas = ['hamburguer', 'pizza', 'batatinha frita'];
for (let index of comidasBoas) {
  console.log(index);
};

let comidasBoas = ['hamburguer', 'pizza', 'batatinha frita'];
for (let index of comidasBoas) {
  console.log(index);
};

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

for (let index in names){
    console.log('Olá, ' + names[index] + '!');
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (let index in car){
    console.log(car);
} 

// Exercícios

//1*/

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//console.log('Bem vinda, ' + info.personagem + '!');

//2
info['recorrente'] = 'Sim';
console.log('personagem: ' + info.personagem);
console.log('origem: ' + info.origem);
console.log('nota: ' + info.nota);
console.log('recorrente: ' + info.recorrente);

//3
// for(let index in info){
//     console.log(index);
// }

//4
// for (let index in info){
//     console.log(info[index]);
// }

//5
let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhasNamorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};

console.log(info.personagem + ' e ' + info2.personagem);
console.log(info.origem + ' e ' + info2.origem);
console.log(info.nota + ' e ' + info2.nota);
if (info.recorrente === 'Sim' && info2.recorrente === 'Sim'){
    console.log('Ambos recorrentes.')
} else {
    console.log(info.recorrente + ' e ' + info2.recorrente);
} 

//Exercícios Função:

//1 - PRIMEIRO aqui: ta errado;
// let palavra = 'arara';
// let index;
// function verificaPalindrome(palavra){
//     for (index in palavra){
//         if (palavra[index] === palavra[(palavra.lenght -1) - index]){
//             return true;
//         }
//     }
//     return false;
// }
// console.log('verifica arara: ');
// console.log(verificaPalindrome('arara'));
// --------------------------------------abaixo, o código certo:
// function verificaPalindrome(palavra){
//     for(index in palavra){
//         if(palavra[index] != palavra[(palavra.length - 1) - index]){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(verificaPalindrome('arara'));
// console.log(verificaPalindrome('princesa'));

// 2
// function maiorIndice(numeros){
//     let maiorIndex;
//     let maiorNumero = numeros
//     for (index = 0; index < 6; index++){
//         console.log('---' + [index]);
//         console.log('se ' + numeros[index] + ' > ' + maiorNumero);
//         if (numeros[index] > maiorNumero){
//             maiorIndex = index;
//         } 
//     }
//     return maiorIndex;
// }
// console.log(maiorIndice([2, 3, 6, 7, 10, 1]));