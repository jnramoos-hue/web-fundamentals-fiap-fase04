//instanciando o método construtor
const dataAtual = new Date();
//exibindo o objeto
console.log(`Data atual: ${dataAtual}`);
//================ GET =================
//milissegundos
console.log(`Milissegundos: ${dataAtual.getTime()}`);
//dia da semana
console.log(`Dia da semana: ${dataAtual.getDay()}`);
//dia do mês
console.log(`Dia do mês: ${dataAtual.getDate()}`);
//mês
console.log(`Mês atual: ${dataAtual.getMonth()}`);
//ano
console.log(`Ano atual: ${dataAtual.getFullYear()}`);
//hora
console.log(`Hora: ${dataAtual.getHours()}`);
//minutos
console.log(`Minutos: ${ dataAtual.getMinutes()}`);
//segundos
console.log(`Segundos: ${dataAtual.getSeconds()}`);
//milissegundos
console.log(`Milissegundos: ${dataAtual.getMilliseconds()}`);

//================ SET =================
//alterando o ano
dataAtual.setFullYear(2025);
console.log(`Ano alterado: ${dataAtual.getFullYear()}`);
//alterando o mês
dataAtual.setMonth(11);
console.log(`Mês alterado: ${dataAtual.getMonth()}`);
//alterando o dia
dataAtual.setDate(31);
console.log(`Dia alterado: ${dataAtual.getDate()}`);
//alterando a hora
dataAtual.setHours(20);
console.log(`Hora alterada: ${dataAtual.getHours()}`);
//alterando os minutos
dataAtual.setMinutes(45);
console.log(`Minutos alterados: ${dataAtual.getMinutes()}`);
//alterando os segundos
dataAtual.setSeconds(30);
console.log(`Segundos alterados: ${dataAtual.getSeconds()}`);
//alterando os milissegundos
dataAtual.setMilliseconds(500);
console.log(`Milissegundos alterados: ${dataAtual.getMilliseconds()}`);
//exibindo a data final
console.log(`Data final: ${dataAtual}`);