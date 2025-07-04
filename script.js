const meuBotao = document.querySelector("#meuBotao");
const meuTexto = document.querySelector("#meuTexto");

meuBotao.style.background="blue";

meuBotao.addEventListener("click", function() {
    meuBotao.style.background="red";
})

meuTexto.addEventListener("click", function(){
    meuTexto.textContent="Aqui deveria ter uma mensagem motivacional."
})