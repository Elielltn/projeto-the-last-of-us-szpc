//PASSO 1 - DAR UM JEITO DE PEGAR O ELEMENTO HTML DOS BOTOES
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
// PASSO 2 - DAR UM JEITO DE IDENTIFICAR O CLIQUE DO USUARIO NO BOTAO
botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    // PASSO 3 - DESMARCAR  O BOTAO SELECIONADO ANTERIOR
    desativarBotaoSelecionado();

    //PASSO 4 - MARCAR O BOTAO CLICADO COMO SE ESTIVESSE SELECIONADA
    selecionarBotaoCarrossel(botao);

    //PASSO 5 - ESCONDER A IMAGEM DE FUNDO ANTERIOR
    esconderImagemAtiva();

    //PASSO 6 - FAZER APARECER A IMAGEM DE FUNDOO CORRESPONDENTE AO BOTAO CLICADO
    newFunction(indice);
  });
});

function newFunction(indice) {
  imagens[indice].classList.add("ativa");
}

function selecionarBotaoCarrossel(botao) {
  botao.classList.add("selecionado");
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector(".ativa");
  imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
