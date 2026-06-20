let totalSorteios = 0;
console.log('===== NÚMEROS PARES SORTEADOS =====');
// loop para gerar 10 números válidos
for (let i = 1; i <= 10; i++) {
    let numero = Math.floor(Math.random() * 100);
    totalSorteios++;
    // enquanto o número for ímpar, continua sorteando
    while (numero % 2 !== 0) {
        numero = Math.floor(Math.random() * 100);
        totalSorteios++;
    }
    console.log(`Número ${i}: ${numero}`);
}
console.log('===================================');
console.log(`Total de sorteios realizados: ${totalSorteios}`);