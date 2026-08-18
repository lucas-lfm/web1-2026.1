// Seleção de elementos do DOM
const imgPreferencia = document.getElementById("imgPreferencia");
const formCadastro = document.getElementById("formCadastro");
const sectionDados = document.getElementById("sectionDados");

function cadastrarDados(evento) {
  evento.preventDefault(); // previne o refresh da página

  let nome = formCadastro.getElementById("email").value;
  let email = docuformCadastroment.getElementById("email").value;
  let senha = formCadastro.getElementById("senha").value;
  let idade = Number(formCadastro.getElementById("idade").value);
  let urlImagem = formCadastro.getElementById("urlImagem").value;

  imgPreferencia.src = urlImagem;

  alert("Opa, virus detectado!");
}

formCadastro.addEventListener("submit", cadastrarDados);
