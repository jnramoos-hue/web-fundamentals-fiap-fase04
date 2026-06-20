let preco = 12000;
let desconto = 0;
let valorFinal = 0;
//verificando desconto com base no valor
if (preco <= 1000) {
    desconto = 5;
} else if (preco <= 3000) {
    desconto = 15;
} else if (preco <= 5000) {
    desconto = 25;
} else {
    desconto = 30;
}
//calculando valor do desconto
let valorDesconto = (preco * desconto) / 100;
//calculando valor final
valorFinal = preco - valorDesconto;
//exibindo resultados
console.log(`Preço do produto: R$ ${preco}`);
console.log(`Desconto aplicado: ${desconto}%`);
console.log(`Valor do desconto: R$ ${valorDesconto}`);
console.log(`Valor final: R$ ${valorFinal}`);