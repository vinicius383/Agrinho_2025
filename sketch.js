let perguntas = [
  {
    pergunta: "Onde geralmente se produz a maioria dos alimentos?",
    opcoes: ["Na cidade", "No campo", "No supermercado"],
    resposta: 1
  },
  {
    pergunta: "Qual é uma vantagem da vida urbana?",
    opcoes: ["Contato com a natureza", "Acesso a serviços diversos", "Mais tempo livre"],
    resposta: 1
  },
  {
    pergunta: "Qual dessas atividades é típica do agro?",
    opcoes: ["Trabalhar em escritório", "Plantar e colher alimentos", "Usar metrô"],
    resposta: 1
  }
];

let perguntaAtual = 0;
let pontuacao = 0;
let feedback = "";
let podeResponder = true;

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  textSize(18);
}

function draw() {
  background(220);

  if (perguntaAtual < perguntas.length) {
    mostrarPergunta(perguntas[perguntaAtual]);
  } else {
    fill(0, 150, 0);
    textSize(28);
    text("Quiz concluído!", width / 2, height / 2 - 20);
    text("Pontuação: " + pontuacao + "/" + perguntas.length, width / 2, height / 2 + 20);
  }

  // Mostrar feedback
  fill(0);
  textSize(16);
  text(feedback, width / 2, height - 30);
}

function mostrarPergunta(q) {
  fill(0);
  textSize(20);
  text(q.pergunta, width / 2, 60);

  for (let i = 0; i < q.opcoes.length; i++) {
    fill(255);
    rect(150, 120 + i * 60, 300, 40, 10);

    fill(0);
    text(q.opcoes[i], 300, 140 + i * 60);
  }
}

function mousePressed() {
  if (!podeResponder) return;

  let q = perguntas[perguntaAtual];
  for (let i = 0; i < q.opcoes.length; i++) {
    let x = 150;
    let y = 120 + i * 60;
    let w = 300;
    let h = 40;

    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
      podeResponder = false;

      if (i === q.resposta) {
        pontuacao++;
        feedback = "✅ Resposta correta!";
      } else {
        feedback = "❌ Resposta errada!";
      }

      setTimeout(() => {
        perguntaAtual++;
        feedback = "";
        podeResponder = true;
      }, 1000);
    }
  }
}
