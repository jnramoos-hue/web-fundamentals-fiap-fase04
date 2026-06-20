let precos = [3000, 150, 200, 1200, 5000, 2800, 3500, 4000];
console.log(precos);
// filtra produtos acima de R$ 2000
let precosElevados = precos.filter(preco => preco > 2000);
console.log(precosElevados);
// aplica desconto de 10%
let precosComDesconto = precos.map(preco => preco * 0.9);
console.log(precosComDesconto);
// soma total
let total = precos.reduce((acc, preco) => acc + preco, 0);
console.log("Total:", total);