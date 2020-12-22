//Escreva um programa que peca para o usuario digitar 2 numeros e calcule a media

const nota1 = Number(prompt('Digite a primeira nota'));
const nota2 = Number(prompt('Digite a segunda nota'));

const media = (nota1 + nota2) / 2;
alert(`A sua media e: ${media}`)

if(media >= 7){
    alert('Passou de ano!')
} else {
    alert('Reprovado!')
}

