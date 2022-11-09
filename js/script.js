const links = document.querySelectorAll(".header-menu a");

console.log(links);

function cabeca(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(cabeca);

// proximo

const parametro = new URLSearchParams(location.search)

function ativarProduto(parametros){
  const elemento = document.getElementById(parametros)
  if (elemento){
  elemento.checked = true;
  console.log(elemento)
  }
}

parametro.forEach(ativarProduto)

// perguntas frequentes

const perguntas = document.querySelectorAll('.perguntas button')
 function ativarPergunta(event){
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls')
  const resposta = document.getElementById(controls)
  resposta.classList.toggle('ativa')

  console.log(pergunta)
 }

function eventosPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPergunta)
}

perguntas.forEach(eventosPerguntas);

// galeria de bicicletas

// const galeria = document.querySelectorAll('.bicicleta-imagens img');
// const galeriaContainer = document.querySelector('.bicicleta')

// function trocarImg(event) {
//   const img = event.currentTarget;
//   galeriaContainer.prepend(img)
//   console.log(img)
// }


// function eventosGaleria(img){
// img.addEventListener('click', trocarImg)
// }

// galeria.forEach(eventosGaleria)

//animaçao
if(window.SimpleAnime) {
  new SimpleAnime();
}
