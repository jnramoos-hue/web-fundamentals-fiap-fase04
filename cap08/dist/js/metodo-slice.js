const carrinho = ['Notebook', 'Mouse', 'Teclado', 'Headset', 'Monitor'];
console.log(carrinho);
// copia os itens dos índices 0 e 1
let copiaArray = carrinho.slice(0, 2);
// remove 1 item a partir do índice 2
carrinho.splice(2, 1);
console.log(copiaArray);
console.log(carrinho);