// 1- crie um programa que pergunte o nome do usuario e mostre uma mensagem de boas vindas.

const usuarioNome = prompt('Qual e o seu nome?');
alert(`Seja bem vind@ ${usuarioNome}. Agora voce ira digitar dois numeros e te mostraremos alguns resultados!`);

// 2- crie um programa que pergunte dois numeros para o usuario e mostre a soma

let numero1 = Number(prompt('Digite o primeiro numero'));
let numero2 = Number(prompt('Digite o segundo numero'));
let resultado = numero1 + numero2;
let resultado2 = numero1 - numero2;
let resultado3 = numero1 * numero2;
let resultado4 = numero1 / numero2;

alert(`${usuarioNome}, a soma dos 2 numeros digitados é: ${resultado}, a subtração é: ${resultado2}, a multiplicação é: ${resultado3} e a divisão é: ${resultado4} `);