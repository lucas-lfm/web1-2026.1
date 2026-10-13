const carrinho = [
  {
    id: 1,
    nome: "Nintendo Switch OLED",
    preco: 2199.9,
    qtd: 1,
  },
  {
    id: 2,
    nome: "Controle Pro Controller",
    preco: 449.9,
    qtd: 2,
  },
  {
    id: 3,
    nome: "Jogo Mario Kart 8 Deluxe",
    preco: 299.9,
    qtd: 1,
  },
  {
    id: 4,
    nome: "Cartão microSD 256GB",
    preco: 159.9,
    qtd: 3,
  },
];

const carrinhoComDesc = carrinho.map((item) => {
  const novoItem = { ...item, preco: item.preco * 0.9 };

  return novoItem;
});

console.table(carrinho);
console.table(carrinhoComDesc);
