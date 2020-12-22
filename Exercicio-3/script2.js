/* Fazer jogador 1 digitar um numero, fazer jogador 2 digitar outro numero. Se os numeros forem iguais, mostrar a mensagem "empate" e
encerrar o programa. Se forem diferentes, sortear um numero entre 0 e 1, se o numero sorteado for 0, ganha quem escolher o menor numero,
se nao, ganha quem escolher o maior numero. */


alert('Jogador 1')
const player1 = Number(prompt('Digite um numero'));
alert('Jogador 2')
const player2 = Number(prompt('Digite um numero'));
const sorteio = Number(Math.random() * 2);

if(player1 === player2){
    alert('Empatou!')
} 
else if (sorteio === 0) {
} else if(player1 < player2) {
    alert('Jogador 1 ganhou!')
} else if(player2 < player1) {
    alert('Jogador 2 ganhou!')
} else if(sorteio === 1) {
} else if(player1 < player2) {
    alert('Jogador 1 ganhou!')
} else {
    alert('Jogador 2 ganhou!')
}
