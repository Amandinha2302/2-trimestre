const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = ducument.querySelector(".caixa-perguntas");
const caixaAlternativas = docment.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado")

const perguntas = [
  {
    enunciado:"Você gostaria de ir á Italia?";
    alternativas:[
      {
    texto:"sim",
      afirmação:"afirmação",
      }
      {
      texto:"não",
      afirmação:"afirmação"
      }
      ]
}
{
     enunciado:"Você já viajou?";
    alternativas:[
      "Sim";
      "Não";
]
},
  {
    enunciado:"Você tem passaporte?";
    alternativas:[
      "Sim";
      "Não";
]
},
  {
    enunciado:"Você tem condições para viajar?";
    alternativas:[
      "Sim";
      "Não";
]
},
  {
    enunciado:"Você trabalha?";
    alternativas:[
      "Sim";
      "Não";
]
},
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if(atual >= perguntas.lenght){
    mostraResultado();
    return;
}
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
         botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function repostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + "";
    atual++;
    mostraPergunta();
}
function mostraResposta(){
  caixaPerguntas.textContent = "";
}
mostraPergunta();
