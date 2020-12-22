//Faca um programa que peca para o usuario digitar 2 numeros, e mostre um booleam indicando se a media for maior que 5

const numero1 = Number(prompt('Digite o primeiro numero: '));
const numero2 = Number(prompt('Digite o segundo numero: '));

const resultado = (numero1 + numero2) / 2;

if(resultado > 5){
    alert(true)
} else {
    alert(false)
}