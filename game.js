// game.js
// Código principal do jogo Eu Sou Angolano

// Botões principais
const playBtn = document.getElementById('playBtn');
const settingsBtn = document.getElementById('settingsBtn');
const creditsBtn = document.getElementById('creditsBtn');
const exitBtn = document.getElementById('exitBtn');
// Modal
const modalBg = document.getElementById('modalBg');
const closeModalBtn = document.getElementById('closeModalBtn');
const volumeSlider = document.getElementById('volumeSlider');

// Seletores da área do quiz
const quizArea = document.getElementById('quizArea');
const quizRound = document.getElementById('quizRound');
const quizScore = document.getElementById('quizScore');
const quizQuestion = document.getElementById('quizQuestion');
const quizOptions = document.getElementById('quizOptions');
const help5050 = document.getElementById('help5050');
const helpAudience = document.getElementById('helpAudience');
const helpPhone = document.getElementById('helpPhone');
const container = document.querySelector('.container');
const bgMusic = document.getElementById('bgMusic');
bgMusic.volume = 0.7; // Volume de 0 (mudo) até 1 (máximo)

// Perguntas Nacionais (exemplo)
const perguntasNacionais = [
  { question: "Qual é a capital de Angola?", options: ["Benguela", "Huambo", "Luanda", "Lubango"], answer: 2 },
  { question: "Em que ano Angola conquistou a independência?", options: ["1975", "1961", "1980", "1991"], answer: 0 },
  { question: "Qual é o maior rio de Angola?", options: ["Kwanza", "Cunene", "Zambeze", "Cubango"], answer: 0 },
  { question: "Qual é a moeda oficial de Angola?", options: ["Real", "Dólar", "Kwanza", "Euro"], answer: 2 },
  { question: "Quem foi o primeiro presidente de Angola?", options: ["Agostinho Neto", "José Eduardo dos Santos", "João Lourenço", "Holden Roberto"], answer: 0 },
  { question: "Qual destas províncias não pertence a Angola?", options: ["Namibe", "Bengo", "Huambo", "Maputo"], answer: 3 },
  { question: "Qual é o prato típico angolano feito com peixe e óleo de palma?", options: ["Moamba", "Calulu", "Funge", "Kizaca"], answer: 1 },
  { question: "Qual destas línguas é nacional em Angola?", options: ["Umbundu", "Suaíli", "Zulu", "Twi"], answer: 0 },
  { question: "Onde se situa a floresta do Maiombe?", options: ["Huila", "Cabinda", "Zaire", "Lunda Norte"], answer: 1 },
  { question: "Qual destas cidades é conhecida como a 'Cidade das Acácias'?", options: ["Luanda", "Huambo", "Benguela", "Lubango"], answer: 1 },
  { question: "Qual é o nome do aeroporto internacional de Luanda?", options: ["4 de Fevereiro", "Aeroporto do Kuito", "Aeroporto do Namibe", "Aeroporto do Soyo"], answer: 0 },
  { question: "Qual destas danças é originária de Angola?", options: ["Kizomba", "Samba", "Tango", "Fado"], answer: 0 },
  { question: "Qual é o nome do famoso parque nacional próximo a Luanda?", options: ["Kissama", "Iona", "Cangandala", "Maiombe"], answer: 0 },
  { question: "Qual destas províncias é a mais a norte de Angola?", options: ["Cabinda", "Zaire", "Uíge", "Lunda Norte"], answer: 0 },
  { question: "Qual é o nome do maior estádio de futebol de Angola?", options: ["Estádio 11 de Novembro", "Estádio da Tundavala", "Estádio dos Coqueiros", "Estádio Nacional"], answer: 0 },
  { question: "Qual destas cidades é famosa pelo Festival Internacional de Música do Sumbe?", options: ["Sumbe", "Benguela", "Huambo", "Malanje"], answer: 0 },
  { question: "Qual é o nome do rio que separa Angola da Namíbia?", options: ["Cunene", "Kwanza", "Zambeze", "Cubango"], answer: 0 },
  { question: "Qual destas instituições é responsável pela educação superior em Angola?", options: ["Universidade Agostinho Neto", "Banco Nacional de Angola", "TAAG", "Sonangol"], answer: 0 },
  { question: "Qual é o nome do famoso escritor angolano autor de 'Mayombe'?", options: ["Pepetela", "Ondjaki", "Agostinho Neto", "Luandino Vieira"], answer: 0 },
  { question: "Qual destas cidades é conhecida pelo seu Carnaval tradicional?", options: ["Luanda", "Benguela", "Lubango", "Sumbe"], answer: 0 },
  { question: "Qual é o nome do principal porto marítimo de Angola?", options: ["Porto de Luanda", "Porto do Lobito", "Porto do Namibe", "Porto do Soyo"], answer: 0 },
  { question: "Qual destas províncias é famosa pela produção de café?", options: ["Uíge", "Namibe", "Benguela", "Cabinda"], answer: 0 },
  { question: "Qual é o nome do maior mercado popular de Luanda?", options: ["Roque Santeiro", "Mercado do Kinaxixi", "Mercado do 30", "Mercado do Catinton"], answer: 0 },
  { question: "Qual destas cidades é conhecida como a 'Cidade Ferroviária'?", options: ["Lobito", "Huambo", "Luanda", "Malanje"], answer: 0 },
  { question: "Qual é o nome do famoso deserto no sul de Angola?", options: ["Namibe", "Kalahari", "Sahara", "Gobi"], answer: 0 },
  { question: "Qual destas instituições é responsável pela moeda nacional?", options: ["Banco Nacional de Angola", "Sonangol", "TAAG", "Ministério da Cultura"], answer: 0 },
  { question: "Qual destas cidades é famosa pelas quedas de água de Kalandula?", options: ["Malanje", "Huambo", "Benguela", "Sumbe"], answer: 0 },
  { question: "Qual destas províncias faz fronteira com a República Democrática do Congo?", options: ["Zaire", "Namibe", "Benguela", "Huíla"], answer: 0 },
  { question: "Qual é o nome do famoso músico angolano conhecido por 'Windeck'?", options: ["C4 Pedro", "Anselmo Ralph", "Yuri da Cunha", "Paulo Flores"], answer: 2 },
  { question: "Qual destas cidades é conhecida pelo Festival Internacional de Cinema?", options: ["Luanda", "Benguela", "Lubango", "Sumbe"], answer: 0 },
  { question: "Qual destas províncias é famosa pela produção de sal?", options: ["Benguela", "Huambo", "Namibe", "Malanje"], answer: 0 },
  { question: "Qual é o nome do famoso escritor angolano autor de 'Os Transparentes'?", options: ["Ondjaki", "Pepetela", "Agostinho Neto", "Luandino Vieira"], answer: 0 },
  { question: "Qual destas cidades é conhecida pelo seu clima ameno e altitude?", options: ["Huambo", "Luanda", "Benguela", "Sumbe"], answer: 0 },
  { question: "Qual destas instituições é responsável pela aviação civil em Angola?", options: ["TAAG", "Sonangol", "Banco Nacional de Angola", "Ministério da Cultura"], answer: 0 },
  { question: "Qual destas cidades é famosa pelo Festival Nacional de Cultura?", options: ["Luanda", "Benguela", "Lubango", "Sumbe"], answer: 0 },
  { question: "Qual destas províncias é conhecida pela produção de diamantes?", options: ["Lunda Norte", "Namibe", "Benguela", "Huíla"], answer: 0 },
  { question: "Qual é o nome do famoso poeta angolano autor de 'Sagrada Esperança'?", options: ["Agostinho Neto", "Pepetela", "Ondjaki", "Luandino Vieira"], answer: 0 },
  { question: "Qual destas cidades é conhecida pelo seu festival de jazz?", options: ["Luanda", "Benguela", "Lubango", "Sumbe"], answer: 0 },
  { question: "Qual destas províncias é famosa pela produção de petróleo?", options: ["Cabinda", "Namibe", "Benguela", "Huíla"], answer: 0 },
  { question: "Qual destas cidades é conhecida pelo seu festival de teatro?", options: ["Luanda", "Benguela", "Lubango", "Sumbe"], answer: 0 },
  { question: "Qual destas províncias é famosa pela produção de algodão?", options: ["Malanje", "Namibe", "Benguela", "Huíla"], answer: 0 },
  { question: "Qual destas cidades é conhecida pelo seu festival de dança?", options: ["Luanda", "Benguela", "Lubango", "Sumbe"], answer: 0 },
  { question: "Qual destas províncias é famosa pela produção de sisal?", options: ["Benguela", "Namibe", "Huambo", "Malanje"], answer: 0 },
  { question: "Qual destas cidades é conhecida pelo seu festival de música gospel?", options: ["Luanda", "Benguela", "Lubango", "Sumbe"], answer: 0 },
  { question: "Qual destas províncias é famosa pela produção de vinho?", options: ["Huíla", "Namibe", "Benguela", "Malanje"], answer: 0 },
  { question: "Qual destas cidades é conhecida pelo seu festival de literatura?", options: ["Luanda", "Benguela", "Lubango", "Sumbe"], answer: 0 },
  { question: "Qual destas províncias é famosa pela produção de café robusta?", options: ["Uíge", "Namibe", "Benguela", "Cabinda"], answer: 0 },
  { question: "Qual destas cidades é conhecida pelo seu festival de cinema africano?", options: ["Luanda", "Benguela", "Lubango", "Sumbe"], answer: 0 },
  { question: "Qual destas províncias é famosa pela produção de mandioca?", options: ["Malanje", "Namibe", "Benguela", "Huíla"], answer: 0 },
  { question: "Qual destas cidades é conhecida pelo seu festival de artes plásticas?", options: ["Luanda", "Benguela", "Lubango", "Sumbe"], answer: 0 },
  { question: 'Quem é o dono do jogo?', options: ['Geraldo Sense', 'Jose Ramiro Simba Sense', 'Braulio Sense', 'Vanusa Sense'], answer: 0 },
];

// Perguntas de Ciências (exemplo)
const perguntasCiencias = [
  { question: 'Quantos anos vive, em média, uma borboleta?', options: ['1 dia', '1 semana', '1 mês', '1 ano'], answer: 2 },
  { question: 'Qual destes insetos é conhecido por produzir mel?', options: ['Formiga', 'Abelha', 'Borboleta', 'Besouro'], answer: 1 },
  // ...adicione até 10 perguntas de ciências
];

// Perguntas de Língua Portuguesa (exemplo)
const perguntasLinguaPortuguesa = [
  { question: 'Qual é o plural de "cidadão"?', options: ['Cidadãos', 'Cidadães', 'Cidadões', 'Cidadãoses'], answer: 0 },
  { question: 'Qual destas palavras está escrita corretamente?', options: ['Excessão', 'Exceção', 'Exessão', 'Exceçãoo'], answer: 1 },
  // ...adicione até 10 perguntas de língua portuguesa
];

// Perguntas de Matemática (exemplo)
const perguntasMatematica = [
  { question: 'Quanto é 7 x 8?', options: ['54', '56', '58', '60'], answer: 1 },
  { question: 'Qual é a raiz quadrada de 81?', options: ['7', '8', '9', '10'], answer: 2 },
  // ...adicione até 10 perguntas de matemática
];

// Perguntas de Biologia (exemplo)
const perguntasBiologia = [
  { question: 'Qual é o maior órgão do corpo humano?', options: ['Coração', 'Fígado', 'Pele', 'Pulmão'], answer: 2 },
  { question: 'Qual destes animais passa por metamorfose?', options: ['Borboleta', 'Cão', 'Gato', 'Galinha'], answer: 0 },
  // ...adicione até 10 perguntas de biologia
];

// Perguntas de História de Angola (exemplo)
const perguntasHistoriaAngola = [
  { question: 'Quem foi o primeiro presidente de Angola?', options: ['Agostinho Neto', 'José Eduardo dos Santos', 'João Lourenço', 'Holden Roberto'], answer: 0 },
  { question: 'Quem é o atual presidente de Angola (2024)?', options: ['Agostinho Neto', 'José Eduardo dos Santos', 'João Lourenço', 'Manuel Vicente'], answer: 2 },
  // ...adicione até 10 perguntas de história de Angola
];

// Outras categorias (adicione mais arrays conforme desejar)
const outrasPerguntas = [
  // ...adicione perguntas de outras categorias aqui
];

// Junta todas as perguntas em um único banco
const questionBank = [
  ...perguntasNacionais,
  ...perguntasCiencias,
  ...perguntasLinguaPortuguesa,
  ...perguntasMatematica,
  ...perguntasBiologia,
  ...perguntasHistoriaAngola,
  ...outrasPerguntas
];

let questions = [];
let currentQuestion = 0;
let score = 0;
https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.123rf.com%2Fphoto_189145512_pa%25C3%25ADs-angola-bandeira-angola-ilustra%25C3%25A7%25C3%25A3o-vetorial.html&psig=AOvVaw0Bcu4BA0uX4ycAFBe9gcsb&ust=1753185473017000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLCitv7yzY4DFQAAAAAdAAAAABAEhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.123rf.com%2Fphoto_189145512_pa%25C3%25ADs-angola-bandeira-angola-ilustra%25C3%25A7%25C3%25A3o-vetorial.html&psig=AOvVaw0Bcu4BA0uX4ycAFBe9gcsb&ust=1753185473017000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLCitv7yzY4DFQAAAAAdAAAAABA
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Função para mostrar toast de categoria
function showCategoriaToast(categoria) {
  const toast = document.getElementById('toastCategoria');
  toast.textContent = `Categoria: ${categoria}`;
  toast.style.display = 'block';
  setTimeout(() => { toast.style.display = 'none'; }, 2000);
}

// Função para obter categoria da pergunta
function getCategoriaPergunta(idx) {
  let total = 0;
  if (idx < (total += perguntasNacionais.length)) return 'Nacionais';
  if (idx < (total += perguntasCiencias.length)) return 'Ciências';
  if (idx < (total += perguntasLinguaPortuguesa.length)) return 'Língua Portuguesa';
  if (idx < (total += perguntasMatematica.length)) return 'Matemática';
  if (idx < (total += perguntasBiologia.length)) return 'Biologia';
  if (idx < (total += perguntasHistoriaAngola.length)) return 'História de Angola';
  return 'Outros';
}

let acertos = 0;
// let faseImagens = false;

function showQuiz() {
  container.style.display = 'none';
  quizArea.style.display = 'flex';
  questions = shuffleArray([...questionBank]).slice(0, 100);
  currentQuestion = 0;
  score = 0;
  acertos = 0;
  // faseImagens = false;
  showQuestion();
}

function showQuestion() {
  // if (faseImagens) {
  //   showImagePhase();
  //   return;
  // }
  if (currentQuestion >= questions.length) {
    showEndGame(true);
    return;
  }
  // Mostrar toast de categoria
  showCategoriaToast(getCategoriaPergunta(currentQuestion));
  const q = questions[currentQuestion];
  quizRound.textContent = `${currentQuestion + 1}ª RONDA`;
  quizScore.textContent = score + ' Kz';
  quizQuestion.textContent = q.question;
  quizOptions.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];

  // Embaralhar opções e ajustar índice da resposta correta
  const optionObjs = q.options.map((opt, idx) => ({ text: opt, isCorrect: idx === q.answer }));
  const shuffled = shuffleArray(optionObjs.slice());
  const newAnswerIndex = shuffled.findIndex(opt => opt.isCorrect);

  shuffled.forEach((optObj, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.innerHTML = `<span class="quiz-option-label">${labels[idx]}</span><span class="quiz-option-text">${optObj.text}</span>`;
    btn.onclick = () => selectOption(idx, btn, newAnswerIndex);
    quizOptions.appendChild(btn);
  });
  // Reset helps
  help5050.disabled = false;
  helpAudience.disabled = false;
  helpPhone.disabled = false;
}

function selectOption(idx, btn, correctIdx) {
  const options = document.querySelectorAll('.quiz-option');
  options.forEach(b => b.disabled = true);
  if (idx === correctIdx) {
    btn.classList.add('correct');
    score += 10;
    acertos++;
    quizScore.textContent = score + ' Kz';
    // if (acertos === 10) {
    //   faseImagens = true;
    //   setTimeout(() => showImagePhase(), 1200);
    //   return;
    // }
    setTimeout(() => {
      currentQuestion++;
      showQuestion();
    }, 1000);
  } else {
    btn.classList.add('incorrect');
    options[correctIdx].classList.add('correct');
    setTimeout(() => {
      showEndGame(false);
    }, 1000);
  }
}

// Remover variáveis e funções relacionadas à fase de imagens
// let faseImagens = false; // Remover
// function showImagePhase() { ... } // Remover

function showEndGame(victory) {
  if (victory) {
    quizQuestion.textContent = 'Parabéns! Você completou o quiz!';
    quizRound.textContent = 'Fim de Jogo';
  } else {
    quizQuestion.textContent = 'Você perdeu! Tente novamente.';
    quizRound.textContent = 'Game Over';
  }
  quizOptions.innerHTML = '';
  // Botão para jogar novamente
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.textContent = 'Jogar Novamente';
  btn.onclick = showQuiz;
  quizOptions.appendChild(btn);
  // Desabilitar ajudas
  help5050.disabled = true;
  helpAudience.disabled = true;
  helpPhone.disabled = true;
}

// Ajuda 50/50
help5050.onclick = () => {
  const q = questions[currentQuestion];
  let wrong = [0,1,2,3].filter(i => i !== q.answer);
  // Remove duas erradas
  wrong = wrong.sort(() => Math.random() - 0.5).slice(0,2);
  const options = document.querySelectorAll('.quiz-option');
  wrong.forEach(i => {
    options[i].style.visibility = 'hidden';
  });
  help5050.disabled = true;
};
// Ajuda público
helpAudience.onclick = () => {
  alert('O público acha que a resposta correta é: ' + questions[currentQuestion].options[questions[currentQuestion].answer]);
  helpAudience.disabled = true;
};
// Ajuda telefone
helpPhone.onclick = () => {
  alert('Seu amigo acha que a resposta correta é: ' + questions[currentQuestion].options[questions[currentQuestion].answer]);
  helpPhone.disabled = true;
};

// Abrir modal de configurações
settingsBtn.onclick = () => {
  modalBg.classList.add('active');
};
// Fechar modal
closeModalBtn.onclick = () => {
  modalBg.classList.remove('active');
};
modalBg.onclick = (e) => {
  if (e.target === modalBg) modalBg.classList.remove('active');
};

// Volume (simulação)
volumeSlider.oninput = (e) => {
  localStorage.setItem('volume', e.target.value);
  if (bgMusic) bgMusic.volume = e.target.value / 100;
};
// Carregar volume salvo
window.onload = () => {
  const savedVolume = localStorage.getItem('volume');
  if (savedVolume) {
    volumeSlider.value = savedVolume;
    if (bgMusic) bgMusic.volume = savedVolume / 100;
  } else {
    if (bgMusic) bgMusic.volume = 0.7;
  }
};

// Modificar o botão jogar para mostrar o quiz
playBtn.onclick = showQuiz;
// Créditos
creditsBtn.onclick = () => {
  alert('Desenvolvido por [Seu Nome].\nInspirado no jogo Eu Sou Angolano!');
};
// Sair
exitBtn.onclick = () => {
  if (confirm('Deseja realmente sair do jogo?')) {
    window.close();
  }
}; 