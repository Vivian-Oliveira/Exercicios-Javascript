/* Faça um programa para ler o ano atual e o ano de nascimento de uma pessoa. 
Imprimir uma mensagem que diga se ela poderá ou não votar este ano. */

const anoAtual = Number(prompt("Digite o ano atual:"));
const anoNascimento = Number(prompt("Digite o ano que voce nasceu:"));

if(anoAtual - anoNascimento >= 16){
    alert('Voce pode votar!')
} else {
    alert('Nao pode votar!')
}

