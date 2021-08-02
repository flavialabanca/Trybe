//1

//let n = 5;
//for (let index = 0; index < n; index += 1){
//    let linhaNova = '';
//    for (let indexDois = 0; indexDois < n; indexDois += 1){
//        linhaNova = linhaNova + '*'
//    }
//}

//2 
//let n = 5;
//let linhaMaisNova = '*';
//for(let index = 0; index < n; index +=1){
//    console.log(linhaMaisNova);
//    linhaMaisNova = linhaMaisNova + '*'
//}

//3
/* let n = 5;
let asterisco = '*';
let espaco = '';
let posicao = n;

for (let indexLinha = 0; indexLinha < n; indexLinha += 1){
    for (let indexColuna = 0; indexColuna <= n; indexColuna += 1){
        if (indexColuna < posicao){
            espaco = espaco + ' ';
        } else {
            espaco = espaco + asterisco;
        }
    }
    console.log (espaco);
    espaco = '';
    posicao -= 1;
} */

//4
let n = 5;
let asterisco = '*';
let linhaNova = '';

let meio = (n + 1) / 2
let ladoEsquerdo = meio;
let ladoDireito = meio;

for (let indexLinha = 0; indexLinha <= meio; indexLinha += 1){
    for (let indexColuna = 0; indexColuna <= n; indexColuna +=1){
        if (indexColuna > ladoEsquerdo && indexColuna < ladoDireito){
            linhaNova = linhaNova + asterisco;
        } else {
            linhaNova = linhaNova + ' ';
        }
    }
    console.log(linhaNova);
    linhaNova = '';
    ladoDireito += 1;
    ladoEsquerdo -= 1;
};