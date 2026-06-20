const produto = {
    nome: 'Notebook',
    preco: 3500,
    estoque: 10,
    exibirProduto: function () {
        console.log(`Produto: ${this.nome} - Preço: R$ ${this.preco} - Estoque: ${this.estoque}`);
    }
}
const cliente = {
    nome: 'João Silva',
    email: 'joao@email.com',
    idade: 28,
    exibirCliente: function () {
        console.log(`Cliente: ${this.nome} - Email: ${this.email} - Idade: ${this.idade}`);
    }
}
const pedido = {
    id: 1,
    produto: 'Notebook',
    quantidade: 2
}
// exibindo propriedades
console.log(`Produto: ${produto.nome}`);
console.log(`Cliente: ${cliente.email}`);
console.log(`Quantidade: ${pedido.quantidade}`);

// chamando métodos
produto.exibirProduto();
cliente.exibirCliente();