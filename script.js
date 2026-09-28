const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que você entra no mundo de Terraria você se depara com um Npc.Qual npc é este?",
        alternativas: [
            {
                texto: "Comerciante",
                afirmacao: [
                    "afirmacao"
                ]
            },
            {
                texto: "O Guia",
                afirmacao: [
                    "afirmacao"
                ]
            }
        ]
    },
    {
        enunciado: "Após derrotar os pilares celestiais, o mundo começa a tremer e uma entidade é invocada. Quem é esta entidade?",
        alternativas: [
            {
                texto: "Senhor da lua (MoonLord).",
                afirmacao: [
                    "afirmacao."
                ]
            },
            {
                texto: "Ocultista Lunático.",
                afirmacao: [
                    "afirmacao."
                ]
            }
        ]
    },
    {
        enunciado: "Após derrotar a Imperatriz da Luz diante a luz do dia, ela lhe concede um item específico. Qual item é esse?",
        alternativas: [
            {
                texto: "Último Prima (Last prima).",
                afirmacao: [
                    "afirmacao."
                ]
            },
            {
                texto: "Terraprisma.",
                afirmacao: [
                    "Afirmacao."
                ]
            }
        ]
    },
    {
        enunciado: "Qual o minério que se destaca por sua cor verde?",
        alternativas: [
            {
                texto: "Clorofita",
                afirmacao: [
                    "afirmacao"
                ]
            },
            {
                texto: "Luminita.",
                afirmacao: [
                    "afirmacao"
                ]
            }
        ]
    },
    {
        enunciado: "No Terraria existe quatro classes, que determinam o futuro do jogador no jogo. Qual seriam essas classes?",
        alternativas: [
            {
                texto: "Healer, Ranger, Melle e Mage",
                afirmacao: [
                    "afirmacao"
                ]
            },
            {
                texto: "Mage, Melle, Summoner e Ranger.",
                afirmacao: [
                    "afirmacao"
                ]
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
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

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Meus parabéns...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
   
