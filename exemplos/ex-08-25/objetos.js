const cliente = {
  nome: "Lucas",
  sobrenome: "Mendes",
  idade: 23,
  nomeCompleto: function () {
    return this.nome + " " + this.sobrenome;
  },
  incrementarIdade: function () {
    this.idade++;
  },
};

cliente.incrementarIdade();
cliente.incrementarIdade();
console.log("Nova idade: " + cliente.idade);
