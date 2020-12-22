//Escreva um programa que pergunte ao usuario 2 numeros, mostre um alert com o resto da disivisao e um alert com o numero elevado

const numero1 = Number(prompt('Digite o primeira numero'));
const numero2 = Number(prompt('Digite o segunda numero'));

let resultado1 = numero1 % numero2;
let resultado2 = numero1 ** numero2;

alert(`O resto da divisao do ${numero1} pelo ${numero2} e: ${resultado1}`);
alert(`O numero ${numero1} elevado a potencia de ${numero2} e igual a ${resultado2}`);
