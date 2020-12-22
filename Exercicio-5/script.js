//Pedir para o usuario digitar um numero de 1 a 6. Mostrar na tela uma mensagem diferente para cada numero.

const numerosAleatorios = Number(prompt('Digite um numero entre 1 e 6!'));

switch(numerosAleatorios){
    case 1 :
        alert('Eh bolacha e nao biscoito!');
        break;
    case 2:
        alert('Sao Paulo eh maior que Portugal!');     
        break;
    case 3:
        alert('Baixo eh mais legal que guitarra!');
        break;
    case 4:
        alert('Voce eh especial!');
        break; 
    case 5:
        alert('Va tomar uma cerveja!');
        break;
    case 6:
        alert('Tava esperando algo grande acontcer neh meu filho?');
        break; 
    default:
        alert('Digite um numero entre 1 e 6!')              

}