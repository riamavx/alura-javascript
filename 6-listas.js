console.log(`Trabalhando com Listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// console.log(`Destinos possíveis`);
// console.log(salvador, saoPaulo, rioDeJaneiro);


const listasDeDestinos = new Array(
    `Ceará`,
    `Recife`,
    `São Paulo`,
    `Rio Grande do Norte`

);

listasDeDestinos.push(`Paraíba`);  //Adicionando um item na lista


console.log(listasDeDestinos);


listasDeDestinos.splice(1,1); // removendo
console.log(listasDeDestinos);

console.log(listasDeDestinos[3]); // imprimir algo em especifico.


