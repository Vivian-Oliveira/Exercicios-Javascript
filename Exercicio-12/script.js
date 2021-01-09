/* Pedir para um usuario digitar um numero e mostrar a tabuada desse numero de 1 a 1000.
Deve ter a possibilidade de o usuario digitar outro numero e tambem limpar a tabuada previamente. */

const mostrarTabuada = () => {
    let numeroUsuario = Number(prompt('Digite um numero: '));
    limparTabuada();
    let output = document.querySelector('#output');
    let mensagem = '';
    let indice = 1;
    
    
 
    while(indice <= 1000) {
       mensagem += (`${numeroUsuario} x ${indice} = ${numeroUsuario * indice} </br>`);
        indice ++;
 
 }
   output.innerHTML = mensagem;
}

const limparTabuada = () => {
    mensagem = '';
    output.innerHTML = mensagem;
}

 
//  console.log(output)
