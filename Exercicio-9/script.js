// Para este exercicio aplique a lógica necessário para mostrar os anos que são realmente bissextos, respeitando a regra:
// Os anos bissextos são múltiplos de 4, não múltiplos de 100 (1900 não é bissexto) e múltiplos de 400 (2000 é bissexto).

for(let i = 1004; i <= 2020; i++){
    if(!(i % 100 === 0) || (i % 400 ===0)){
        console.log(`Ano Bissexto: ${i}`);
    } else {
        console.log(`Nao e Bissexto: ${i}`)
    }
}