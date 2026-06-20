let carrinho = ['Notebook', 'Mouse', 'Teclado', 'Headset', 'Monitor'];
console.log(`========= Laço for =========`);
for (let i = 0; i < carrinho.length; i++) {
    console.log(`Produto: ${carrinho[i]}`);
}
console.log(`========= Laço for in =========`);
for (let indice in carrinho) {
    console.log(`Índice: ${indice} - Produto: ${carrinho[indice]}`);
}
console.log(`========= Laço for of =========`);
for (let produto of carrinho) {
    console.log(`Produto: ${produto}`);
}
console.log(`========= Laço forEach =========`);
carrinho.forEach(function (produto, indice) {
    console.log(`Índice: ${indice} - Produto: ${produto}`);
});