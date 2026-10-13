console.log("Exemplos de Métodos de Iteração");

const numeros = [10, 20, 30, 45, 5, 43];

numeros.forEach((numero) => console.log(numero * 2));

const precos = [200, 100, 50, 60];

// MAP - Executa uma transformação nos dados de entrada, gerando um novo array
// Entrada de tamanho N, gera uma saída de tamanho N
const precosComDesc = precos.map((preco) => preco * 0.9);
console.table(precosComDesc);
console.table(precos);

// FILTER - Executa uma função de filtragem nos dados de entrada
// Entrada de tamanho N, gera uma saída que pode variar de 0 a N
const resultado = precos.filter((preco) => preco < 100);
console.table(resultado);

// REDUCE - Executa uma função cumulativa nos dados de entrada,
// resultando em um único valor de saída
// Entrada de tamanho N, gera uma saída de tamanho 1
const valorTotal = precos.reduce((total, preco) => total + preco, 100);
