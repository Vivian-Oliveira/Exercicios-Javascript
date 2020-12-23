// Peca para o usuario digitar um numero e mostre a tabuada desse numero de 1 a 1000

const tabuadaNumero = Number(prompt('Digite um numero: '));
let indice = 1;

// for(let i = 0; i <= 10; i++){
//     console.log(`${tabuadaNumero} x ${indice} = ${tabuadaNumero * indice}`)
//     i ++;   
// }

while(indice <= 1000) {
    console.log(`${tabuadaNumero} x ${indice} = ${tabuadaNumero * indice}`);
    indice = indice + 1;
}
console.log('Saiu do loop');