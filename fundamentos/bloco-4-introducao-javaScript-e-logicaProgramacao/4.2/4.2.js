// aula do gus:
//let pessoas = ['flavia', 'fernanda', 'julio', 'vitor'];
//console.log(pessoas);
//console.log(pessoas.sort());
//pessoas.push ('vô raul');
//console.log(pessoas);
//console.log('tamanho do array: ' + pessoas.length)

//for (let index = 0; index < pessoas.length; index++){
//    console.log(pessoas[index]);
//}

//pessoas.pop();
//console.log('--- depois do pop')
//for (let index = 0; index < pessoas.length; index++){
//    console.log(pessoas[index]);
//}

//let indexPessoas = pessoas.indexOf('vitor');
//console.log(indexPessoas);

// exercícios - ARRAY:
// 1

//let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
//indexMenu = menu.indexOf('Serviços');
//console.log(indexMenu);

// 2

//indexMenu = menu.indexOf('Portfólio');
//console.log(indexMenu);

// 3 

//console.log(menu);
//menu.push('Contato');
//console.log(menu.length);
//console.log(menu);

// exercícios - FOR:

//let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
//for (var index = 0; index < groceryList.length; index +=1){
//    console.log(groceryList[index]);
//}

// exercícios - FOR/OF:

//let numeros = [1, 2, 3, 4, 5];
//for (let numero of numeros){
//    console.log(numero);
//}

//let palavra = 'princesa';
//for (let letra of palavra) {
//  console.log(letra);
//}

//let numeros = [10, 20, 30];
//for (let soma of numeros) {
//  soma += 1;
//  console.log(soma);
//}

//let names = ['João', 'Maria', 'Antônio', 'Margarida'];
//for (let nome of names){
//    console.log(nome);
//}

// Exercícios do Course: Vamos Praticar! 

//1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//console.log('--- ex um');
for (let index = 0; index < numbers.length; index +=1){
//        console.log(numbers[index]);
}

//console.log('--- ex dois');
let total = 0;
for (let index = 0; index < numbers.length; index +=1){
    total = total + numbers[index];
}
//console.log(total);

//console.log('--- ex tres');
let media = 0;
media = total/numbers.length;
//console.log(media);

//console.log('--- ex quatro');
if (media > 20){
//    console.log('valor maior que 20!');
} else {
//    console.log('valor menor ou igual a 20');
}

//console.log('--- ex cinco');
let maiorNumero = 0;
for (let index = 0; index < numbers.length; index +=1){
    if (numbers[index] > maiorNumero){
        maiorNumero = numbers[index];
    }
}
//console.log('maior numero: ' + maiorNumero);

console.log('--- ex seis');
let numerosImpares = 0;
for (let index = 0; index <numbers.length; index +=1){
    if (numbers[index] % 2 !== 0){
        numerosImpares +=1;
    } 
}
if (numerosImpares === 0){
    console.log('não tem nenhum impar');
} else {
    console.log(numerosImpares + ' numeros impares.')
}

console.log(' ');
console.log('--- ex sete');