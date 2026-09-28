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
                afirmacao: "Ficou assustado com a rapidez com que a tecnologia evoluiu."
            },
            {
                texto: "O Guia",
                afirmacao: "Ficou encantado com as possibilidades da nova tecnologia."
            }
        ]
    },
    {
        enunciado: "Após derrotar os pilares celestiais, o mundo começa a tremer e uma entidade é invocada. Quem é esta entidade?",
        alternativas: [
            {
                texto: "Senhor da lua (MoonLord).",
                afirmacao: "Usou a IA como uma ferramenta de estudos para resumir e entender conteúdos difíceis."
            },
            {
                texto: "Ocultista Lunático.",
                afirmacao: "Preferiu confiar nas suas próprias pesquisas e nas conversas com os colegas para criar o trabalho."
            }
        ]
    },
    {
        enunciado: "Após derrotar a Imperatriz da Luz diante a luz do dia, ela lhe concede um item específico. Qual item é esse?",
        alternativas: [
            {
                texto: "Último Prima (Last prima).",
                afirmacao: "Defendeu a proteção dos empregos humanos contra a automação excessiva."
            },
            {
                texto: "Terraprisma.",
                afirmacao: "Acredita que a IA vai transformar o mercado e criar novas profissões do futuro."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Preferiu criar suas próprias artes de forma tradicional e manual no computador."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Aproveitou os geradores automáticos de imagem para expressar suas ideias visualmente."
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Entendeu que a IA pode cometer erros e que o toque e a revisão humana são indispensáveis."
            },
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Considerou que saber fazer as perguntas certas para a IA já é uma forma válida de contribuição."
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
   
