// Para este exercício, mostre na tela todos os anos a partir de 1004 até o ano 2020, pulando de quatro em quatro anos.

// Por exemplo:
// 1004
// 1008
// 1012
// E assim por diante.
// É como mostrar os anos bissextos, mas sem as regras para descobrir se um ano é bissexto ou não.
// (vamos imaginar que se o ano é múltiplo de quatro, ele é bissexto).



for(let i = 1004; i <= 2020; i++){
    if(i % 4 === 0){
        console.log(`Ano ${i}`);
    }
}