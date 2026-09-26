const questions = [
  ["Ontem eu ___ ao mercado.", ["vou", "fui", "ia", "irei"], 1],
  ["Quando eu era criança, eu ___ no parque todos os dias.", ["brincava", "brinquei", "brincarei", "brinco"], 0],
  ["Amanhã nós ___ uma reunião.", ["tivemos", "temos ontem", "vamos ter", "tínhamos"], 2],
  ["Qual frase é mais adequada para marcar uma consulta?", ["Quero marcar um horário, por favor.", "Eu horário ontem.", "Marcar é consulta.", "Você marcaram?"], 0],
  ["'Concordo com você' expressa:", ["uma dúvida", "um acordo", "um convite", "uma despedida"], 1],
  ["Qual conector mostra contraste?", ["porque", "portanto", "porém", "então"], 2],
  ["'Eu gostaria de...' é usado para:", ["fazer um pedido educado", "falar só do passado", "dar uma ordem", "fazer uma negação"], 0],
  ["No Brasil, 'dar um jeito' normalmente significa:", ["resolver uma situação", "desistir", "viajar", "comer rápido"], 0],
  ["'Se eu fosse você' é uma forma de:", ["contar uma história", "dar conselho", "fazer pagamento", "cumprimentar"], 1],
  ["Qual resposta combina com 'Como você está se sentindo?'", ["Estou com dor de cabeça.", "São três horas.", "Moro perto daqui.", "Fui ao banco."], 0],
  ["'A reunião foi adiada' quer dizer que ela:", ["aconteceu mais cedo", "foi cancelada para sempre", "vai acontecer mais tarde", "durou mais tempo"], 2],
  ["Qual frase usa o passado de forma correta?", ["Eu conheço ela ontem.", "Eu conheci ela ontem.", "Eu conhecerei ela ontem.", "Eu conhecendo ela ontem."], 1],
  ["Para pedir ajuda numa viagem, você pode dizer:", ["Você poderia me ajudar?", "Eu ajuda você ontem.", "Ajuda é viagem.", "Você ajudará passado?"], 0],
  ["'Apesar de' introduz uma ideia de:", ["causa", "contraste", "tempo futuro", "pergunta"], 1],
  ["Qual frase mostra uma opinião com justificativa?", ["Eu gosto porque é prático.", "Eu gosto amanhã.", "Eu gosto ontem foi.", "Eu gostando."], 0]
];

const quizForm = document.getElementById("quizForm");
questions.forEach(([question, options], questionIndex) => {
  const card = document.createElement("section");
  card.className = "learning-card";
  card.innerHTML = `<h3>${questionIndex + 1}. ${question}</h3>`;
  options.forEach((option, optionIndex) => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="question-${questionIndex}" value="${optionIndex}"> ${option}`;
    card.appendChild(label);
    card.appendChild(document.createElement("br"));
  });
  quizForm.appendChild(card);
});

document.getElementById("submitQuiz").addEventListener("click", () => {
  let score = 0;
  questions.forEach(([, , answer], questionIndex) => {
    const selected = document.querySelector(`input[name="question-${questionIndex}"]:checked`);
    if (selected && Number(selected.value) === answer) score += 1;
  });
  const passed = score >= 12;
  document.getElementById("quizResult").textContent = passed
    ? `🎉 You passed: ${score}/15. Intermediate module complete!`
    : `You scored ${score}/15. Review the lessons and try again.`;
});
