/* SELETORES */

/* 1- Utilizando document.getElementById(""), ocultar o elemento <h1
id=”cabecalho”> ao carregar a página.*/

document.getElementById("cabecalho").style.display = "none";
/* 2- Utilizando querySelector(“”) fazer com que, depois do carregamento da
página, a coruja fique preta e branca. */

let owl_image = document.querySelector("#lechuza");
owl_image.style.filter = "grayscale(100%)";

/* 3- Utilizando querySelectorAll(“”) selecionar todos os inputs do formulário e
alterar a cor de fundo de cada um (percorrê-los), usando background = red */

let inputs = document.querySelectorAll("input");
inputs.forEach(input => {
  input.style.background = "red";
});

/* DOM */

/* 1-  Selecionar o elemento com id “copyright” e mostrar todos os atributos dele
na linha de comando, utilizando elemento.attributes. */
let copyright = document.querySelector("#copyright");
console.log(copyright.attributes);

/* 2- Usando getAttribute, mostrar na linha de comando a url à qual o botão do
Twitter redireciona. */
let twitter = document.querySelector(".social .fa-twitter");
console.log(twitter.getAttribute("href"));

/* 3- Usando getAttribute, mostrar na linha de comando a url à qual o botão do
Facebook redireciona */
let facebook = document.querySelector(".social .fa-facebook");
console.log(facebook.getAttribute("href"));

/*4. Ficamos sabendo que o ícone do YouTube direciona ao Google.
Queremos mudar isso com JavaScript, usando setAttribute, para que o
ícone direcione ao canal da Digital House no YouTube. */
/* https://www.youtube.com/channel/UCRQdwmWMhTcqDFjPT4UPZYA */

let youtube = document.querySelector(".social .fa-youtube");
youtube.setAttribute(
  "href",
  "https://www.youtube.com/channel/UCRQdwmWMhTcqDFjPT4UPZYA"
);

/* 5 - Ficamos sabendo que o form não está funcionando e nos perguntaram se,
por JavaScript, podemos ver se há um atributo action atribuído e imprimir
o resultado em linha de comando */
let form = document.querySelector("form");
console.log(
  form.getAttribute("action") == null
    ? "Não possui atributo Action"
    : form.getAttribute("action")
);
/* 6 - Ficamos sabendo que o programador se confundiu e adicionou o action a
um atributo url errado. Agora, precisamos excluir e adicionar a url a action,
tudo por JavaScript. */
let url = form.getAttribute("url");
form.removeAttribute("url");
form.setAttribute("action", url);

/* 7 - Utilizando elemento.style, trocar a cor de h2 para vermelho. */

let h2 = document.querySelectorAll("h2");
h2.forEach(element => {
  element.style.color = "red";
});

/* 8 - Precisamos mudar a cor de todos os ícones da página. Lembre que eles
são da classe “icon”. */

let icons = document.querySelectorAll(".icon");
icons.forEach(icon => {
  icon.style.color = "blue";
});

/* Elementos * /
/* 1. Traduzir todos os textos da top nav para português. Para isso, podemos
usar os ids deles com o textContent. */
document.querySelector("#top").innerText = "Topo";
document.querySelector("#work").innerText = "Trabalho";
document.querySelector("#portfolio").innerText = "Portfolio";
document.querySelector("#contact").innerText = "Contato";

/* 2- Utilizando removeChild, remover o ícone do FourSquare das redes sociais
(classe “.social”). */

let social = document.querySelector("ul.social");
let foursquare = document.querySelectorAll("ul.social li");
social.removeChild(foursquare[3]);
//social.removeChild(foursquare);
