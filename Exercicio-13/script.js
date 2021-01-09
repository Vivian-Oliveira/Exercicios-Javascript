let valorUsuario = Number(prompt('Digite um numero: '));

const calculadora = () => {
    let output = document.querySelector('#output');
    output.innerHTML = valorUsuario;   
}

const somar = () => {
    let valorUsuario2 = Number(prompt('Digite outro numero:'));
    valorUsuario += valorUsuario2;
    calculadora();
}

const multiplicar = () => {
    let valorUsuario2 = Number(prompt('Digite outro numero:'));
    valorUsuario *= valorUsuario2;
    calculadora();
     
}

const subtrair = () => {
    let valorUsuario2 = Number(prompt('Digite outro numero:'));
    valorUsuario -= valorUsuario2;
    calculadora();
}

const dividir = () => {
    let valorUsuario2 = Number(prompt('Digite outro numero:'));
    valorUsuario /= valorUsuario2;
    calculadora();
}

// const limparTela = () => {
//     mensagem = '';
//     output.innerHTML = mensagem;
// }