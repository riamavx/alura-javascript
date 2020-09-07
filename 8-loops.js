console.log("\n Trabalahndo com Loops");

const listasDeDestinos = new Array(
    `Ceará`,
    `Recife`,
    `São Paulo`,
    `Rio Grande do Norte`

);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Paris";

console.log("\n Destinos Possíveis:");
console.log(listasDeDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false

while(contador < 4){
    if(listasDeDestinos[contador] == destino){
        destinoExiste = true
        break;
    }


    contador += 1
}

console.log("Destino existe", destinoExiste)







