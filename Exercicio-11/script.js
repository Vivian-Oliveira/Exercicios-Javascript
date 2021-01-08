//Faça um programa para ler dois valores e imprimí-los em ordem crescente. Considere que não serão lidos valores iguais.

const numero1 = Number(prompt('Digite o primeiro numero: '));
const numero2 = Number(prompt('Digite o segundo numero: '));

if(numero1 < numero2){
    alert(`${numero1}, ${numero2}`)
} else {
    alert(`${numero2}, ${numero1}`)
}