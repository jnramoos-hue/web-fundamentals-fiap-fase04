// criando variáveis
let primeiroValor = 35;
let segundoValor = 15;
let resultado;

// operador OU
resultado = (primeiroValor === segundoValor) || (primeiroValor >= segundoValor);
console.log(`${primeiroValor} === ${segundoValor} || ${primeiroValor} >= ${segundoValor} = ${resultado}`);

// operador E
resultado = (primeiroValor === segundoValor) && (primeiroValor >= segundoValor);
console.log(`${primeiroValor} === ${segundoValor} && ${primeiroValor} >= ${segundoValor} = ${resultado}`);

// operador NÃO
resultado = !(primeiroValor === segundoValor && primeiroValor >= segundoValor);
console.log(`!(${primeiroValor} === ${segundoValor} && ${primeiroValor} >= ${segundoValor}) = ${resultado}`);