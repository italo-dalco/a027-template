let novoParagrafo = "";
let conteudoImput = "";

const adicionar = () => {
  novoParagrafo = document.getElementById("paragrafo");
  conteudoImput = document.getElementById("texto");
  novoParagrafo.innerHTML += conteudoImput.value;
  conteudoImput.value = "";
};

const valorAtualImput = () => {
  conteudoImput = document.getElementById("texto");
  console.log(conteudoImput.value);
};
