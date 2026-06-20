//Sorteando um número para exibir um produto
const codigo = Math.ceil(Math.random() * 6);
let produto;
let categoria;
let preco;

// estrutura switch
switch (codigo) {
    case 1:
        produto = 'Notebook';
        categoria = 'Informática';
        preco = 8500.12;
        break;
    case 2:
        produto = 'Tablet';
        categoria = 'Informática';
        preco = 3800.93;
        break;
    case 3:
        produto = 'Videogame';
        categoria = 'Entretenimento';
        preco = 3500.46;
        break;
    case 4:
        produto = 'Smartphone';
        categoria = 'Telefonia';
        preco = 5230.89;
        break;
    case 5:
        produto = 'Teclado + Mouse';
        categoria = 'Acessórios';
        preco = 215.99;
        break;
    default:
        produto = 'Drone';
        categoria = 'Tecnologia';
        preco = 9123.45;
}

// exibição das informações
console.log('===== INFORMAÇÕES DO PRODUTO =====');
console.log(`Código do produto: ${codigo}`);
console.log(`Nome: ${produto}`);
console.log(`Categoria: ${categoria}`);
console.log(`Preço: R$ ${preco}`);