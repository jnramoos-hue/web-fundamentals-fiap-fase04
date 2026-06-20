const minhaString = 'JavaScript - A linguagem da Internet!';
console.log(minhaString);
//propriedade length
console.log(`Tamanho da string: ${minhaString.length}`);
//toUpperCase()
console.log(`Letras maiúsculas: ${minhaString.toUpperCase()}`);
//toLowerCase()
console.log(`Letras minúsculas: ${minhaString.toLowerCase()}`);
//charAt()
console.log(`Caracter retornado: ${minhaString.charAt(15)}`);
//indexOf()
console.log(`Caracter encontrado no índice:
${minhaString.indexOf('s')}`);
//lastIndexOf()
console.log(`Caracter encontrado no índice:
${minhaString.lastIndexOf('s')}`);
//concat()
console.log(`Concatenando strings:
${'abc'.concat('def').concat('xyz')}`);
//replace()
console.log(`Substituindo a primeira letra a:
${minhaString.replace('a', '@')}`);
//replaceAll()
console.log(`Substituindo todas as letras a:
${minhaString.replaceAll('a', '@')}`);
//substring()
console.log(`Pegando uma parte da string: ${minhaString.substring(5, 20)}`);
//slice()
let novaString = minhaString.slice(11, 38);
console.log(`Nova string gerada: ${novaString}`);
//split()
console.log(`Convertendo a string em um array: ${minhaString.split('')}`);
//trim()
console.log(`Removendo espaços no início e fim: ${minhaString.trim()}`);
//includes()
console.log(`Verificando se existe na string: ${minhaString.includes('ava')}`);
//startsWith()
console.log(`Verificando se começa com a string: ${minhaString.startsWith('Java')}`);
//endsWith()
console.log(`Verificando se termina com a string: ${minhaString.endsWith('rnet!')}`);