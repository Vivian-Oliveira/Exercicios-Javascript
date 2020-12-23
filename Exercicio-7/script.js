// Para esta tarefa reescreva o código da aula anterior, mas inserindo uma linha divisória sempre que mudar a dezena. 
// Ou seja, entre o 10 e o 11, entre o 20 e o 21 e assim por diante.
// Dica: para escrever uma linha horizontal, use a tag <hr

const tabuadaNumero = Number(prompt('Digite um numero: '));

for(let i = 0; i <= 1000; i++){
    console.log(`${tabuadaNumero} x ${i} = ${tabuadaNumero * i}`);
    if(i % 10 === 0){
        console.log('<hr>');
    }
}
