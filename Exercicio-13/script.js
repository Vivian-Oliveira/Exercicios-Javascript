let valorUsuario = Number(prompt('Digite um numero: '));

const calculadora = () => {
    let output = document.querySelector('#output');
    output.innerHTML = valorUsuario;   
}

const calcular = (operador) => {
    let valorUsuario2 = Number(prompt('Digite outro numero:'));
    
    switch(operador){
        case '+':
            valorUsuario += valorUsuario2;
            break;
        case 'X':
            valorUsuario *= valorUsuario2;
            break;
        case '-':
            valorUsuario -= valorUsuario2;
            break;
        case '/':
            valorUsuario /= valorUsuario2;
            
    }

    calculadora();
}


