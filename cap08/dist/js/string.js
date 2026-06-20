let nomeProduto = "Notebook";
let precoProduto = 7500;
let quantidadeEstoque = 15;
let promocaoProduto = true;

//Criando o Template
let mensagem = `O produto ${nomeProduto} custa R$ ${precoProduto}, possui ${quantidadeEstoque} unidades em estoque e está em promoção: ${promocaoProduto}.`;

//Exibindo a variável com o Template
console.log(mensagem);