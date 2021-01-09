/* Pedir para o ususario digitar dois numeros que representam os lados de um retangulo assim que a pagina e carregada.
Mostrar na tela a area total quando clicar num botao. */

let largura = Number(prompt('Digite a largura: '));
let altura = Number(prompt('Digite a altura: '));

const mostrarArea = (l, a) => {
    alert(`Largura: ${l}. Altura: ${a}. Area Total = ${l * a}`)
}