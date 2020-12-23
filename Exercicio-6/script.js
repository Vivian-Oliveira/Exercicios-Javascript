// Peca para o usuario digitar um numero e mostre a tabuada desse numero de 1 a 1000

const tabuadaNumero = Number(prompt('Digite um numero: '));
let indice = 1;

while(indice <= 1000) {
    console.log(`${tabuadaNumero} x ${indice} = ${tabuadaNumero * indice}`);
    indice ++;
}
console.log('Saiu do loop');