//Escreva um programa que peca para o usuario digitar 2 numeros e calcule a media e mostre uma mensagem se o aluno foi aprovado ou nao.
//A nota de corte eh 5, entretanto, se uma das notas for 0 o aluno reprova automaticamente.

const nota1 = Number(prompt('Digite a primeira nota: '));
const nota2 = Number(prompt('Digite a segunda nota: '));
const media = (nota1 + nota2) / 2;

if(media < 5 || nota1 === 0 || nota2 === 0){
    alert('Voce foi reprovado!')
} else {
    alert('Voce foi aprovado, parabens!')
}