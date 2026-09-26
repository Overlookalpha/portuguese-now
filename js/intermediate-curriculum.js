export const intermediateCurriculum = {
    id: "intermediate",
    title: "Intermediate Brazilian Portuguese",
    level: "B1",
    lessons: [
        [22, "Talking about your past", "pretérito perfeito", "Conte o que fez no fim de semana.", "No fim de semana, eu visitei meus amigos."],
        [23, "Past habits and memories", "pretérito imperfeito", "Descreva como era sua infância.", "Quando eu era criança, eu brincava na rua."],
        [24, "Plans and intentions", "futuro e ir + infinitivo", "Fale sobre seus planos para o Brasil.", "No próximo ano, eu vou viajar para o Brasil."],
        [25, "Making appointments", "horários e confirmação", "Marque uma consulta por telefone.", "Gostaria de marcar uma consulta para terça-feira."],
        [26, "At work", "rotina profissional", "Explique suas responsabilidades.", "Eu sou responsável pelos relatórios da equipe."],
        [27, "Meetings and opinions", "concordar e discordar", "Dê sua opinião numa reunião.", "Concordo com a ideia, mas precisamos revisar o prazo."],
        [28, "Professional messages", "e-mails e mensagens", "Escreva uma atualização curta.", "Olá, envio a atualização do projeto em anexo."],
        [29, "Travel problems", "pedir ajuda e resolver problemas", "Resolva uma reserva incorreta.", "Minha reserva não aparece no sistema. Você pode verificar?"],
        [30, "Health and wellbeing", "sintomas e recomendações", "Explique como você está se sentindo.", "Estou com dor de cabeça desde ontem."],
        [31, "Food and invitations", "convites e preferências", "Convide alguém para jantar.", "Você gostaria de jantar conosco amanhã?"],
        [32, "Brazilian small talk", "conversas naturais", "Mantenha uma conversa informal.", "E aí, como foi seu fim de semana?"],
        [33, "Giving advice", "dever, melhor, se eu fosse", "Aconselhe um amigo.", "Se eu fosse você, eu falaria com ela."],
        [34, "Stories and surprises", "sequência de acontecimentos", "Conte uma história curta.", "De repente, começou a chover muito forte."],
        [35, "Culture and celebrations", "tradições brasileiras", "Fale sobre uma celebração.", "No Brasil, muitas famílias se reúnem para a festa junina."],
        [36, "Money and services", "banco, pagamentos e reclamações", "Resolva um problema no banco.", "Meu cartão foi bloqueado e preciso de ajuda."],
        [37, "Housing and neighborhoods", "descrição e comparação", "Compare dois bairros.", "Este bairro é mais tranquilo do que o centro."],
        [38, "News and media", "relatar informação", "Resuma uma notícia simples.", "A notícia informou que a estrada foi fechada."],
        [39, "Feelings and relationships", "emoções e nuances", "Explique um mal-entendido.", "Fiquei chateado porque entendi a mensagem de outra forma."],
        [40, "Speaking with confidence", "conectores e fluência", "Defenda uma escolha.", "Na minha opinião, essa é a melhor opção porque é mais prática."],
        [41, "Intermediate review", "revisão integrada", "Conduza uma conversa completa.", "Foi ótimo conversar com você. Vamos marcar outra vez."]
    ].map(([number, title, focus, outcome, phrase]) => ({ number, title, focus, outcome, phrase }))
};

export const intermediateLessonContent = {
    22: {
        dialogue: ["A: O que você fez no fim de semana?", "B: Eu visitei meus amigos e fomos a um restaurante novo."],
        vocabulary: ["fim de semana — weekend", "visitei — I visited", "fomos — we went"],
        challenge: "Conte, em duas frases, o que você fez no último fim de semana."
    },
    23: {
        dialogue: ["A: Como era sua escola quando você era criança?", "B: Era pequena, mas eu gostava muito dos meus professores."],
        vocabulary: ["era — was/used to be", "criança — child", "gostava — used to like"],
        challenge: "Descreva uma lembrança da sua infância usando 'era' ou 'gostava'."
    },
    24: {
        dialogue: ["A: O que você vai fazer nas férias?", "B: Vou conhecer Salvador e praticar meu português."],
        vocabulary: ["vou — I am going to", "férias — vacation", "conhecer — to get to know"],
        challenge: "Fale sobre três planos que você vai realizar no próximo ano."
    },
    25: {
        dialogue: ["A: Bom dia. Gostaria de marcar uma consulta.", "B: Claro. Você prefere terça-feira ou quarta-feira?"],
        vocabulary: ["marcar — to schedule", "consulta — appointment", "prefere — do you prefer"],
        challenge: "Faça uma ligação curta para marcar uma consulta em português."
    },
    26: {
        dialogue: ["A: Qual é a sua principal responsabilidade?", "B: Eu coordeno os relatórios semanais da equipe."],
        vocabulary: ["responsabilidade — responsibility", "coordeno — I coordinate", "equipe — team"],
        challenge: "Explique sua rotina profissional em três frases."
    },
    27: {
        dialogue: ["A: O que você acha dessa proposta?", "B: Concordo com a ideia, mas precisamos rever o orçamento."],
        vocabulary: ["proposta — proposal", "concordo — I agree", "orçamento — budget"],
        challenge: "Dê uma opinião e apresente uma ressalva educada."
    },
    28: {
        dialogue: ["A: Você pode enviar a atualização hoje?", "B: Sim, vou enviar o e-mail até o fim do dia."],
        vocabulary: ["atualização — update", "enviar — to send", "fim do dia — end of the day"],
        challenge: "Escreva uma mensagem curta atualizando uma tarefa."
    },
    29: {
        dialogue: ["A: Minha reserva não aparece no sistema.", "B: Vou verificar agora. Você tem o número da confirmação?"],
        vocabulary: ["reserva — reservation", "sistema — system", "confirmação — confirmation"],
        challenge: "Peça ajuda para resolver um problema de viagem."
    },
    30: {
        dialogue: ["A: O que você está sentindo?", "B: Estou com febre e dor de garganta desde ontem."],
        vocabulary: ["febre — fever", "dor de garganta — sore throat", "desde ontem — since yesterday"],
        challenge: "Explique seus sintomas e peça uma recomendação."
    },
    31: {
        dialogue: ["A: Você gostaria de jantar lá em casa amanhã?", "B: Gostaria muito! Posso levar uma sobremesa?"],
        vocabulary: ["gostaria — would like", "jantar — dinner", "sobremesa — dessert"],
        challenge: "Convide alguém para uma refeição e responda ao convite."
    },
    32: {
        dialogue: ["A: E aí, tudo bem? Como foi seu fim de semana?", "B: Foi tranquilo. Aproveitei para descansar um pouco."],
        vocabulary: ["e aí — hey/how are things", "tranquilo — calm", "aproveitei — I took advantage"],
        challenge: "Inicie e mantenha uma conversa informal por quatro falas."
    },
    33: {
        dialogue: ["A: Estou pensando em aceitar a proposta.", "B: Se eu fosse você, pediria mais detalhes antes."],
        vocabulary: ["se eu fosse você — if I were you", "aceitar — to accept", "detalhes — details"],
        challenge: "Dê um conselho usando 'se eu fosse você'."
    },
    34: {
        dialogue: ["A: O que aconteceu depois?", "B: De repente, o ônibus parou e todos ficaram em silêncio."],
        vocabulary: ["de repente — suddenly", "parou — stopped", "ficaram — became/stayed"],
        challenge: "Conte uma história curta usando 'de repente'."
    },
    35: {
        dialogue: ["A: Você já foi a uma festa junina?", "B: Sim! Gosto muito das comidas e das músicas tradicionais."],
        vocabulary: ["festa junina — June festival", "comidas — foods", "tradicionais — traditional"],
        challenge: "Descreva uma celebração brasileira ou uma tradição do seu país."
    }
};
