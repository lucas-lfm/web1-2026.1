// Seleção de elementos do DOM
const imgPreferencia = document.getElementById("imgPreferencia");
const formCadastro = document.getElementById("formCadastro");
const sectionDados = document.getElementById("sectionDados");

function cadastrarDados(evento) {
  evento.preventDefault(); // previne o refresh da página

  let nome = formCadastro.get;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  let idade = Number(document.getElementById("idade").value);
  let urlImagem = document.getElementById("urlImagem").value;

  imgPreferencia.src = urlImagem;

  alert("Opa, virus detectado!");
}

formCadastro.addEventListener("submit", cadastrarDados);
