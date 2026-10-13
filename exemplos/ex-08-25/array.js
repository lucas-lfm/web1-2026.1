const numeros = [4, 36, 483, 39];
const nomes = ["Lucas", "João", "Maria"];

// Operações em Arrays
console.log(numeros[1]); // recupera um elemento do array, pelo indice
console.log(numeros.length);

nomes.push("Ramon"); // adiciona no final
nomes.unshift("Felipe"); // adiciona no início
console.log(nomes);

const ultimo = nomes.pop(); // remove o último elemento e retorna
const primeiro = nomes.shift(); // remove o primeiro elemento e retorna

nomes[2] = "Joana";
console.log(nomes);

nomes.splice(1, 0, "Mateus"); // exclui ou insere elementos em qualquer posição
console.log(nomes);

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

numeros.forEach(console.log);

numeros.forEach(function (numero) {
  console.log(numero * 2);
});
