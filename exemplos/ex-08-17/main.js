// Seleção de elementos do DOM
const imgPreferencia = document.getElementById("imgPreferencia");
const formCadastro = document.getElementById("formCadastro");
const sectionDados = document.getElementById("sectionDados");

function renderizarDados(nome, email, idade, senha, urlImagem) {
  const lista = document.createElement("ul");
  const itemNome = document.createElement("li");
  const itemEmail = document.createElement("li");
  const itemIdade = document.createElement("li");
  const itemSenha = document.createElement("li");
  const itemUrlImagem = document.createElement("li");

  itemNome.textContent = "Nome: " + nome;
  itemEmail.textContent = "Email: " + email;
  itemIdade.textContent = "Idade: " + idade;
  itemSenha.textContent = "Senha: " + senha;
  itemUrlImagem.textContent = "Url Imagem: " + urlImagem;

  lista.appendChild(itemNome);
  lista.appendChild(itemEmail);
  lista.appendChild(itemIdade);
  lista.appendChild(itemSenha);
  lista.appendChild(itemUrlImagem);

  sectionDados.appendChild(lista);
}

function cadastrarDados(evento) {
  evento.preventDefault(); // previne o refresh da página

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  let idade = Number(document.getElementById("idade").value);
  let urlImagem = document.getElementById("urlImagem").value;

  imgPreferencia.src = urlImagem;

  renderizarDados(nome, email, idade, senha, urlImagem);
}

formCadastro.addEventListener("submit", cadastrarDados);
