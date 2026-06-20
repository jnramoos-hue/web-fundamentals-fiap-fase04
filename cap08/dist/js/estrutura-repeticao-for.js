//declarando as variáveis
let totalSoma = 0;
let numerosSorteados;
//criando o for
for (let i = 0; i <= 9; i++) {
    //sorteando os números
    numerosSorteados = Math.ceil(Math.random() * 100);
    //fazendo a somatória
    totalSoma += numerosSorteados;
    //exibindo os números no console
    console.log(`Números sorteados: ${numerosSorteados}`);
}
//finalizando o for
//exibindo a somatória
console.log(`Somatória dos números sorteados: ${totalSoma}`);