//calcula dias

dataNascimento={
    dia: 9,
    mes: 3,
    ano: 1983
};

dataAtual={
    dia: 3,
    mes: 8,
    ano: 2021
};

// considerando todos os anos com 365 dias e todos os meses com 30 dias:

let totalAnos = dataAtual.ano - dataNascimento.ano;
let totalMeses;

console.log(dataAtual.mes + ' || ' + dataNascimento.mes)
if (dataAtual.mes > dataNascimento.mes){
    totalMeses = dataAtual.mes - dataNascimento.mes;
} else {
    
}

console.log('total anos: ' + totalAnos);
console.log('total meses: ' + totalMeses);