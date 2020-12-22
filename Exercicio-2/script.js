//Escreva um programa que peca para o usuario digitar 2 numeros e calcule a media

const n1 = Number(prompt('Digite o primeiro numero'));
const n2 = Number(prompt('Digite o segundo numero'));

const media = (n1 + n2) / 2;

if(media >= 7){
    alert('Passou de ano!')
} else {
    alert('Reprovado!')
}

