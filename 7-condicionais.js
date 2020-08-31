console.log("Trabalahndo com condicionais");

const listasDeDestinos = new Array(
    `Ceará`,
    `Recife`,
    `São Paulo`,
    `Rio Grande do Norte`

);

const idadeComprador = 39;
console.log("Destinos Possíveis:");
console.log(listasDeDestinos);


if(idadeComprador >= 21){
    console.log("Comprador maior de Idade");
    listasDeDestinos.splice(1,1); // removendo um item
}else{
    console.log("Não é maior de idade, não posso vender")

}




console.log(listasDeDestinos);

