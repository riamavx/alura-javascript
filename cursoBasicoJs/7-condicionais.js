console.log("Trabalahndo com condicionais");

const listasDeDestinos = new Array(
    `Ceará`,
    `Recife`,
    `São Paulo`,
    `Rio Grande do Norte`

);

const idadeComprador = 32;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos Possíveis:");
console.log(listasDeDestinos);


if (idadeComprador >= 18 || estaAcompanhada == true ) {
    console.log("Comprador maior de Idade");
    listasDeDestinos.splice(1, 1); // removendo um item
} else {
    console.log("Não é maior de idade, não posso vender")
}

console.log("Embarque:\n\n");

if(idadeComprador > 18 && temPassagemComprada){
    console.log("Boa Viagem")
}else{
    console.log("Sorry, você não pode embarcar!")
}

console.log(listasDeDestinos);

console.log("tudo certo")

