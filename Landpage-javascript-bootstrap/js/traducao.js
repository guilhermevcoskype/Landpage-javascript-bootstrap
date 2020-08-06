var usaflag = document.querySelector("#usaflag");
var brflag = document.querySelector("#brflag");
var catuai = document.querySelector(".catuai");
var shoppingCenters = document.querySelectorAll(".shoppingCenter");
var constEIncs = document.querySelectorAll(".constEInc");
var contatos = document.querySelectorAll(".contato");
var desenv = document.querySelector(".desenv");
var tel = document.querySelector(".tel");
var disponibilidade = document.querySelector(".disponibilidade");
var nomeComp = document.querySelector(".nomeComp");
var end = document.querySelector(".end");
var conteudo = document.querySelector(".conteudo");
var fechar = document.querySelector(".fechar");
var enviar = document.querySelector(".enviar");
var disponivel = document.querySelector(".disponivel");
var vlr = document.querySelector(".vlr");
var desenv = document.querySelector(".desenv");
var formGroupExampleInput = document.querySelector("#formGroupExampleInput");
var exampleFormControlInput1 = document.querySelector("#exampleFormControlInput1");
var exampleFormControlTextarea1 = document.querySelector("#exampleFormControlTextarea1");

usaflag.addEventListener("click", function(){
  traduzir("en");
});

brflag.addEventListener("click", function(){
  traduzir("pt");
});


function traduzir(idioma){
  if(idioma == "en"){
    catuai.textContent = "Catuaí Group";
    shoppingCenters.forEach((item, i) => {
      item.textContent = "Shopping Malls";
    });
    constEIncs.forEach((item, i) => {
      item.textContent = "Constructor and Merger";
    });
    contatos.forEach((item, i) => {
      item.textContent = "Contact";
    });
    tel.textContent = "Phone: (XX) XXXXX XXXX";
    disponibilidade.textContent = "Availability";
    nomeComp.textContent = "Full Name";
    end.textContent = "Email Adress";
    conteudo.textContent = "Content";
    fechar.textContent = "Close";
    enviar.textContent = "Send";
    disponivel.textContent = "Available for contracts and freelances";
    vlr.textContent = "Negotiable Value";
    desenv.textContent = "Developer: Guilherme do Vale Castro Oliveira";
    formGroupExampleInput.placeholder = "Insert your full name";
    exampleFormControlInput1.placeholder = "name@example.com";
    exampleFormControlTextarea1.placeholder = "Insert your e-mail content";
  }else{
    catuai.textContent = "Grupo Catuaí";
    shoppingCenters.forEach((item, i) => {
      item.textContent = "Shopping Centers";
    });
    constEIncs.forEach((item, i) => {
      item.textContent = "Contrutora e Incorporadora";
    });
    contatos.forEach((item, i) => {
      item.textContent = "Contato";
    });
    tel.textContent = "Telefone: (XX) XXXXX XXXX";
    disponibilidade.textContent = "Disponibilidade";
    nomeComp.textContent = "Nome Completo";
    end.textContent = "Endereço de Email";
    conteudo.textContent = "Conteúdo";
    fechar.textContent = "Fechar";
    enviar.textContent = "Enviar";
    disponivel.textContent = "Disponível para contratos e freelances";
    vlr.textContent = "Valor negociável";
    desenv.textContent = "Desenvolvedor: Guilherme do Vale Castro Oliveira";
    formGroupExampleInput.placeholder = "Insira seu nome completo";
    exampleFormControlInput1.placeholder = "nome@exemplo.com";
    exampleFormControlTextarea1.placeholder = "Insira o conteúdo do e-email";
  }
}
