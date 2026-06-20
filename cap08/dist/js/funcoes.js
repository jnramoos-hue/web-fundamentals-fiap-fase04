function exibirMensagem() {
    console.log("Bem-vindo à nossa loja!");
}
// chamando a função
exibirMensagem();
exibirMensagem();

function calcularTotal(preco, quantidade) {
    const total = preco * quantidade;
    console.log(`Total da compra: R$ ${total}`);
}
// chamando a função com diferentes valores
calcularTotal(50, 2);
calcularTotal(30, 3);

// Retornando Valores

function calcularFrete(valorCompra) {
    if (valorCompra >= 200) {
        return 0;
    }
    return 20;
}
let frete = calcularFrete(150);
console.log(`Valor do frete: R$ ${frete}`);
frete = calcularFrete(300);
console.log(`Valor do frete: R$ ${frete}`);

//Function Expression

const calcularDesconto = function (preco, porcentagem) {
    const desconto = preco * (porcentagem / 100);
    return desconto;
};
console.log(`Desconto aplicado: R$ ${calcularDesconto(200, 10)}`);
console.log(`Desconto aplicado: R$ ${calcularDesconto(5000, 30)}`);

//Arrow Function
const calcularParcelas = (valor, parcelas) => {
    return valor / parcelas;
};
console.log(`Valor da parcela: R$ ${calcularParcelas(300, 2)}`);
console.log(`Valor da parcela: R$ ${calcularParcelas(1800, 4)}`);

//callback function
const calcularTotal = (valor, operacao) => {
    const resultado = operacao(valor);
    return resultado;
};
const aplicarDesconto = (valor) => {
    return valor * 0.9;
};
const aplicarMulta = (valor) => {
    return valor * 1.1;
};
const valor = 2580;
console.log(`Valor original: R$ ${valor}`);
console.log(`Com desconto: R$ ${calcularTotal(valor, aplicarDesconto)}`);
console.log(`Com multa: R$ ${calcularTotal(valor, aplicarMulta)}`);