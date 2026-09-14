const caixaPrincipal = document.querySelector('.caixa-principal')
const caixaPerguntas = document.querySelector('.caixa-perguntas')
const caixaAlternativa = document.querySelector('.caixa-alternativa')
const caixaResultado = document.querySelector('.caixa-resultado')
const caixaResultado = document.querySelector('.texto-resultado')
const listsa = [item1, item2]
const perguntas = {
    tamanho: 20,
    tipo 'HB',
    cor: 'grafite',
    temBorrachaAtras: false
}
const perguntas = [
    {
        enunciado: "Qual a arma mais forte do jogo",
        Alternativas: [
            {
                texto:"Zenith"
                afirmacao:"afirmacao"
            }
            "Zenith"
            "Fúria das estrelas"
        ]
     },
     {
        enunciado: "Qual o primeiro boss do jogo?",
        Alternativas: [
            {
                texto:"Rei Slime"
                afirmacao:"afirmacao"
            }
            "Rei Slime"
            "Olho de Cthulhu"
        ],
     },
     {
        enunciado: "Qual o último boss do game",
        Alternativas: [
            {
                texto:"Senhor da Lua"
                afirmacao:"afirmacao"
            }
            "Ocultista Lunático"
            "Senhor da Lua"
        ],
     },
];
     let atual = 0;
     let perguntaAtual;

     function mostraPergunta (){
        if (atual >= perguntas.lenght){
            mostraResultado();
            return;
        }
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.textContent= " ";
        mostraALternativba ();
     }


     function mostraAlternativa() {
        for (const alternativa of perguntaAtual.alternativas){
            const botaoAlternativa = document.createElement("button");
            botaoAlternativa.textContent = alternativa.texto;
            botaoAlternativa.addEventListener("click",function(){
                atual++;
                mostraPergunta();
            })
            
        }
     }
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    
}
