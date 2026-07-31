// =======================================
// Portuguese Now - Lessons Database
// =======================================

const lessons = {

    lesson1: {

        id: 1,
        module: 1,
        title: "The Brazilian Alphabet",
        subtitle: "Learn the Brazilian Portuguese alphabet and its pronunciation.",
        duration: "15 min",
        progress: 5,
        next: "lesson2.html"

    },

    lesson2: {

    id: 2,
    module: 1,
    title: "Brazilian Pronunciation",
    subtitle: "Learn the main sounds used in Brazilian Portuguese.",
    duration: "20 min",
    progress: 10,
    next: "lesson3.html"

},

lesson3: {

    id: 3,
    module: 1,
    title: "Greetings",
    subtitle: "Learn the most common greetings used in Brazil.",
    duration: "20 min",
    progress: 15,
    next: "lesson4.html"

},

lesson4: {

    id: 4,
    module: 1,
    title: "Introducing Yourself",
    subtitle: "Learn how to introduce yourself in Brazilian Portuguese.",
    duration: "20 min",
    progress: 20,
    next: "lesson5.html"

},

lesson5: {
    id: 5,
    module: 1,
    title: "Numbers",
    subtitle: "Learn numbers from 0 to 20 in Brazilian Portuguese.",
    duration: "20 min",
    progress: 25,
    next: "lesson6.html"
},

lesson6: {
    id: 6,
    module: 1,
    title: "Days of the Week",
    subtitle: "Learn the days of the week in Brazilian Portuguese.",
    duration: "20 min",
    progress: 30,
    next: "lesson7.html"
},

lesson7: {
    id: 7,
    module: 1,
    title: "Colors",
    subtitle: "Learn the most common colors in Brazilian Portuguese.",
    duration: "20 min",
    progress: 35,
    next: "lesson8.html"
},

lesson8: {
    id: 8,
    module: 1,
    title: "Family",
    subtitle: "Learn family members and relationships.",
    duration: "20 min",
    progress: 40,
    next: "lesson9.html"
},

lesson9: {
    id: 9,
    module: 1,
    title: "Food & Drinks",
    subtitle: "Learn common food and drink vocabulary.",
    duration: "20 min",
    progress: 45,
    next: "lesson10.html"
},
lesson10: {
    id: 10,
    module: 1,
    title: "Food and Drinks",
    subtitle: "Learn food, drinks and restaurant vocabulary.",
    duration: "20 min",
    progress: 50,
    next: "lesson11.html"
},

lesson11: {
    id: 11,
    module: 1,
    title: "Shopping",
    subtitle: "Learn shopping expressions and prices.",
    duration: "20 min",
    progress: 55,
    next: "lesson12.html"
},

lesson12: {
    id: 12,
    module: 1,
    title: "Asking for Directions",
    subtitle: "Learn how to ask and understand directions.",
    duration: "20 min",
    progress: 60,
    next: "lesson13.html"
},

lesson13: {
    id: 13,
    module: 1,
    title: "Transportation",
    subtitle: "Learn transportation vocabulary.",
    duration: "20 min",
    progress: 65,
    next: "lesson14.html"
},

lesson14: {
    id: 14,
    module: 1,
    title: "Transportation",
    subtitle: "Learn transportation vocabulary.",
    duration: "20 min",
    progress: 70,
    next: "lesson15.html"
},

lesson15: {
    id: 15,
    module: 1,
    title: "Time and Schedule",
    subtitle: "Learn how to tell the time and make appointments.",
    duration: "20 min",
    progress: 75,
    next: "lesson16.html"
},

lesson16: {
    id: 16,
    module: 1,
    title: "Weather",
    subtitle: "Learn to talk about the weather.",
    duration: "20 min",
    progress: 80,
    next: "lesson17.html"
},

lesson17: {
    id: 17,
    module: 1,
    title: "Daily Routine",
    subtitle: "Learn common daily routine expressions.",
    duration: "20 min",
    progress: 85,
    next: "lesson18.html"
},

lesson18: {
    id: 18,
    module: 1,
    title: "Present Tense Basics",
    subtitle: "Learn the basics of the present tense.",
    duration: "20 min",
    progress: 90,
    next: "lesson19.html"
},

lesson19: {
    id: 19,
    module: 1,
    title: "Common Conversations",
    subtitle: "Practice real-life conversations.",
    duration: "20 min",
    progress: 95,
    next: "lesson20.html"
},

lesson20: {
    id: 20,
    module: 1,
    title: "Final Review & Certificate",
    subtitle: "Review everything you've learned and complete Module 1.",
    duration: "30 min",
    progress: 100,
    next: null
}
    
};

const listeningQuestions = [

{
audio:"Casa",
options:[
    {
        word:"Casa",
        emoji:"🏠"
    },
    {
        word:"Cama",
        emoji:"🛏️"
    },
    {
        word:"Carro",
        emoji:"🚗"
    },
    {
        word:"Copo",
        emoji:"🥤"
    }
],
correct:0
},

{
audio:"Janela",
options:[
    {
        word:"Porta",
        emoji:"🚪"
    },
    {
        word:"Janela",
        emoji:"🪟"
    },
    {
        word:"Mesa",
        emoji:"🪑"
    },
    {
        word:"Livro",
        emoji:"📚"
    }
],
correct:1
},

{
audio:"Rua",
options:[
    {
        word:"Rua",
        emoji:"🛣️"
    },
    {
        word:"Casa",
        emoji:"🏠"
    },
    {
        word:"Escola",
        emoji:"🏫"
    },
    {
        word:"Praia",
        emoji:"🏖️"
    }
],
correct:0
},

{
audio:"Livro",
options:[
    {
        word:"Livro",
        emoji:"📚"
    },
    {
        word:"Caneta",
        emoji:"🖊️"
    },
    {
        word:"Bola",
        emoji:"⚽"
    },
    {
        word:"Carro",
        emoji:"🚗"
    }
],
correct:0
},

{
audio:"Gato",
options:[
    {
        word:"Cachorro",
        emoji:"🐶"
    },
    {
        word:"Gato",
        emoji:"🐱"
    },
    {
        word:"Pássaro",
        emoji:"🐦"
    },
    {
        word:"Peixe",
        emoji:"🐟"
    }
],
correct:1
}

];
const lesson1Quiz = [
{
question:"How many letters does the Brazilian alphabet have?",
options:["24","26","28"],
correct:1
},
{
question:"Which letter is usually silent?",
options:["J","X","H"],
correct:2
},
{
question:"At the beginning of a word, the Brazilian R sounds like...",
options:["English R","English H","Spanish R"],
correct:1
},
{
question:"Which word means House?",
options:["Casa","Livro","Janela"],
correct:0
},
{
question:"Which word means Window?",
options:["Livro","Janela","Rua"],
correct:1
},
{
question:"Which word means Book?",
options:["Livro","Casa","Hotel"],
correct:0
},
{
question:"Which word means Street?",
options:["Rua","Mesa","Hotel"],
correct:0
},
{
question:"Which word means Ice?",
options:["Gelo","Fogo","Água"],
correct:0
},
{
question:"Which letter can have different sounds?",
options:["B","X","M"],
correct:1
},
{
question:"Which word starts with a silent H?",
options:["Hotel","Rua","Casa"],
correct:0
},
{
question:"Which letter sounds like the English sound in 'measure'?",
options:["J","T","P"],
correct:0
},
{
question:"Which word means Cup?",
options:["Livro","Xícara","Mesa"],
correct:1
},
{
question:"How many vowels are there?",
options:["4","5","6"],
correct:1
},
{
question:"Which is a vowel?",
options:["B","A","T"],
correct:1
},
{
question:"Which letter comes after M?",
options:["L","N","O"],
correct:1
}
];

const lesson2Quiz = [

{
question:"How many vowels are there in Brazilian Portuguese?",
options:["4","5","6"],
correct:1
},

{
question:"Which vowel sounds like 'ah'?",
options:["A","E","I"],
correct:0
},

{
question:"Which combination sounds like 'sh'?",
options:["CH","LH","NH"],
correct:0
},

{
question:"Which word contains the NH sound?",
options:["Filho","Manhã","Casa"],
correct:1
},

{
question:"Which word contains the LH sound?",
options:["Carro","Filho","Amor"],
correct:1
},

{
question:"The word 'Carro' uses:",
options:["Soft R","Strong R","Silent R"],
correct:1
},

{
question:"The letter Ç sounds like:",
options:["S","Z","CH"],
correct:0
},

{
question:"Brazilian vowels are usually:",
options:["Silent","Clear","Optional"],
correct:1
},

{
question:"The X in 'Peixe' sounds like:",
options:["SH","KS","Z"],
correct:0
},

{
question:"The X in 'Táxi' sounds like:",
options:["KS","SH","H"],
correct:0
},

{
question:"What should you do before speaking?",
options:["Listen","Translate","Read"],
correct:0
},

{
question:"Which word contains RR?",
options:["Carro","Casa","Rua"],
correct:0
},

{
question:"Which word contains CH?",
options:["Chuva","Filho","Manhã"],
correct:0
},

{
question:"How many times should you repeat a new word?",
options:["1","3","5 or more"],
correct:2
},

{
question:"The best way to improve pronunciation is:",
options:[
"Practice every day",
"Study once a month",
"Only read"
],
correct:0
}

];

const lesson3Quiz = [

{
question:"How do you say 'Hello' in Portuguese?",
options:["Olá","Tchau","Obrigado"],
correct:0
},

{
question:"Which greeting is commonly used with friends?",
options:["Oi","Boa tarde","Boa noite"],
correct:0
},

{
question:"What does 'Bom dia' mean?",
options:["Good evening","Good morning","Goodbye"],
correct:1
},

{
question:"When do you normally say 'Boa tarde'?",
options:["Morning","Afternoon","Late night"],
correct:1
},

{
question:"When is 'Boa noite' used?",
options:["Only in the morning","In the evening or before bed","Only at noon"],
correct:1
},

{
question:"How do you say 'Goodbye'?",
options:["Até amanhã","Tchau","Olá"],
correct:1
},

{
question:"What does 'Até logo' mean?",
options:["See you later","Good morning","Thank you"],
correct:0
},

{
question:"What does 'Até amanhã' mean?",
options:["See you tomorrow","See you tonight","Good afternoon"],
correct:0
},

{
question:"Which greeting is suitable in almost every situation?",
options:["Oi","Olá","Tchau"],
correct:1
},

{
question:"'Oi' is considered:",
options:["Formal","Informal","Old-fashioned"],
correct:1
},

{
question:"Which greeting is used after lunch?",
options:["Bom dia","Boa tarde","Boa noite"],
correct:1
},

{
question:"Brazilians are generally:",
options:["Reserved","Friendly","Silent"],
correct:1
},

{
question:"What usually helps make a good first impression?",
options:["Ignoring people","Using the correct greeting","Speaking loudly"],
correct:1
},

{
question:"How should you improve your greetings?",
options:["Practice every day","Only study grammar","Never speak aloud"],
correct:0
},

{
question:"Greetings are important because:",
options:["They start conversations","They replace grammar","They are optional"],
correct:0
}

];

const lesson4Quiz = [

{
question:"How do you say 'My name is...' in Portuguese?",
options:["Meu nome é...","Eu moro em...","Eu sou de..."],
correct:0
},

{
question:"How do you say 'I am...'?",
options:["Eu sou...","Eu falo...","Eu moro..."],
correct:0
},

{
question:"How do you say 'I am from...'?",
options:["Eu moro em...","Eu sou de...","Meu nome é..."],
correct:1
},

{
question:"How do you say 'I live in...'?",
options:["Eu moro em...","Eu sou de...","Eu falo..."],
correct:0
},

{
question:"How do you say 'I speak English'?",
options:["Eu falo inglês.","Eu moro em inglês.","Meu inglês é."],
correct:0
},

{
question:"How do you say 'I am learning Portuguese'?",
options:["Estou aprendendo português.","Eu ensino português.","Eu gosto de português."],
correct:0
},

{
question:"How do you ask 'What is your name?'",
options:["Qual é o seu nome?","Onde você mora?","Quantos anos você tem?"],
correct:0
},

{
question:"How do you ask 'Where are you from?'",
options:["De onde você é?","Onde você mora?","Qual é o seu nome?"],
correct:0
},

{
question:"How do you ask 'Where do you live?'",
options:["Onde você mora?","Como você está?","De onde você é?"],
correct:0
},

{
question:"How do you ask 'How old are you?'",
options:["Quantos anos você tem?","Qual é o seu nome?","Você fala inglês?"],
correct:0
},

{
question:"Brazilians usually introduce themselves using:",
options:["Their first name","Their last name only","A nickname only"],
correct:0
},

{
question:"Which sentence means 'I live in São Paulo'?",
options:["Eu moro em São Paulo.","Eu sou de São Paulo.","Meu nome é São Paulo."],
correct:0
},

{
question:"Which sentence means 'I am from Brazil'?",
options:["Eu sou do Brasil.","Eu moro no Brasil.","Eu falo Brasil."],
correct:0
},

{
question:"A good introduction should be:",
options:["Polite and friendly","Very loud","Very fast"],
correct:0
},

{
question:"The best way to improve introductions is:",
options:["Practice speaking every day","Only memorize grammar","Never speak aloud"],
correct:0
}

];

// =======================================
// Lesson 5 Quiz
// =======================================

const lesson5Quiz = [

{
question:"How do you say number 0 in Portuguese?",
options:["Zero","Um","Dez"],
correct:0
},

{
question:"How do you say number 1?",
options:["Dois","Um","Cinco"],
correct:1
},

{
question:"How do you say number 2?",
options:["Dois","Três","Quatro"],
correct:0
},

{
question:"How do you say number 3?",
options:["Cinco","Quatro","Três"],
correct:2
},

{
question:"How do you say number 5?",
options:["Cinco","Seis","Sete"],
correct:0
},

{
question:"How do you say number 7?",
options:["Seis","Sete","Oito"],
correct:1
},

{
question:"How do you say number 10?",
options:["Nove","Onze","Dez"],
correct:2
},

{
question:"Which number is 'Onze'?",
options:["10","11","12"],
correct:1
},

{
question:"Which number is 'Doze'?",
options:["11","12","13"],
correct:1
},

{
question:"Which number is 'Treze'?",
options:["13","14","15"],
correct:0
},

{
question:"How do you say number 15?",
options:["Treze","Quatorze","Quinze"],
correct:2
},

{
question:"Which number is 'Dezessete'?",
options:["16","17","18"],
correct:1
},

{
question:"Which number is 'Dezoito'?",
options:["17","18","19"],
correct:1
},

{
question:"Which number is 'Dezenove'?",
options:["18","19","20"],
correct:1
},

{
question:"How do you say number 20?",
options:["Dezenove","Vinte","Trinta"],
correct:1
}

];

// =======================================
// Lesson 6 Quiz
// =======================================

const lesson6Quiz = [

{
question:"How do you say Monday in Portuguese?",
options:["Segunda-feira","Sexta-feira","Domingo"],
correct:0
},

{
question:"How do you say Tuesday in Portuguese?",
options:["Terça-feira","Quarta-feira","Quinta-feira"],
correct:0
},

{
question:"How do you say Friday in Portuguese?",
options:["Quinta-feira","Sexta-feira","Sábado"],
correct:1
},

{
question:"How do you say Sunday in Portuguese?",
options:["Domingo","Sábado","Segunda-feira"],
correct:0
},

{
question:"How do you say January in Portuguese?",
options:["Janeiro","Junho","Julho"],
correct:0
},

{
question:"How do you say March in Portuguese?",
options:["Março","Maio","Abril"],
correct:0
},

{
question:"How do you say July in Portuguese?",
options:["Junho","Julho","Agosto"],
correct:1
},

{
question:"How do you say December in Portuguese?",
options:["Novembro","Dezembro","Outubro"],
correct:1
},

{
question:"How do you say 'Today is Monday' in Portuguese?",
options:[
"Hoje é segunda-feira.",
"Hoje é domingo.",
"Hoje é sexta-feira."
],
correct:0
},

{
question:"How do you say 'My birthday is in February' in Portuguese?",
options:[
"Meu aniversário é em fevereiro.",
"Meu aniversário é em março.",
"Meu aniversário é em janeiro."
],
correct:0
},

{
question:"How do you say August in Portuguese?",
options:[
"Agosto",
"Abril",
"Outubro"
],
correct:0
},

{
question:"How do you say October in Portuguese?",
options:[
"Outubro",
"Novembro",
"Setembro"
],
correct:0
},

{
question:"How do you say Wednesday in Portuguese?",
options:[
"Quarta-feira",
"Quinta-feira",
"Terça-feira"
],
correct:0
},

{
question:"How do you say Saturday in Portuguese?",
options:[
"Sábado",
"Domingo",
"Sexta-feira"
],
correct:0
},

{
question:"How do you say November in Portuguese?",
options:[
"Novembro",
"Dezembro",
"Outubro"
],
correct:0
}

];

// =======================================
// Lesson 7 Quiz
// =======================================

const lesson7Quiz = [

{
question:"How do you say 'Red' in Portuguese?",
options:["Azul","Vermelho","Verde"],
correct:1
},

{
question:"How do you say 'Blue'?",
options:["Azul","Roxo","Cinza"],
correct:0
},

{
question:"How do you say 'Green'?",
options:["Verde","Amarelo","Branco"],
correct:0
},

{
question:"How do you say 'Yellow'?",
options:["Laranja","Amarelo","Roxo"],
correct:1
},

{
question:"How do you say 'Black'?",
options:["Preto","Branco","Cinza"],
correct:0
},

{
question:"How do you say 'White'?",
options:["Cinza","Branco","Rosa"],
correct:1
},

{
question:"How do you say 'Pink'?",
options:["Rosa","Marrom","Azul"],
correct:0
},

{
question:"How do you say 'Brown'?",
options:["Marrom","Verde","Preto"],
correct:0
},

{
question:"How do you say 'Orange'?",
options:["Laranja","Roxo","Cinza"],
correct:0
},

{
question:"How do you say 'Purple'?",
options:["Roxo","Azul","Preto"],
correct:0
},

{
question:"What color is the sky?",
options:[
"O céu é azul.",
"O céu é verde.",
"O céu é preto."
],
correct:0
},

{
question:"What color is the grass?",
options:[
"A grama é verde.",
"A grama é azul.",
"A grama é branca."
],
correct:0
},

{
question:"What color is a banana?",
options:[
"Amarela",
"Preta",
"Roxa"
],
correct:0
},

{
question:"Which sentence is correct?",
options:[
"Meu carro é preto.",
"Meu carro é verdeu.",
"Meu carro é azulado."
],
correct:0
},

{
question:"Which color appears on the Brazilian flag?",
options:[
"Verde",
"Roxo",
"Rosa"
],
correct:0
}

];

// =======================================
// Lesson 8 Quiz
// =======================================

const lesson8Quiz = [

{
question:"How do you say 'Father' in Portuguese?",
options:["Pai","Mãe","Filho"],
correct:0
},

{
question:"How do you say 'Mother'?",
options:["Pai","Mãe","Irmã"],
correct:1
},

{
question:"How do you say 'Brother'?",
options:["Primo","Irmão","Tio"],
correct:1
},

{
question:"How do you say 'Sister'?",
options:["Irmã","Filha","Avó"],
correct:0
},

{
question:"How do you say 'Grandmother'?",
options:["Avó","Tia","Prima"],
correct:0
},

{
question:"How do you say 'Grandfather'?",
options:["Pai","Avô","Filho"],
correct:1
},

{
question:"What does 'Minha mãe' mean?",
options:[
"My mother",
"My father",
"My sister"
],
correct:0
},

{
question:"What does 'Meu pai' mean?",
options:[
"My father",
"My uncle",
"My brother"
],
correct:0
},

{
question:"Which sentence means 'I have one brother'?",
options:[
"Eu tenho um irmão.",
"Eu tenho uma irmã.",
"Meu irmão é alto."
],
correct:0
},

{
question:"How do you say 'Family'?",
options:[
"Família",
"Casa",
"Parente"
],
correct:0
},

{
question:"How do you say 'Uncle'?",
options:[
"Tio",
"Tia",
"Primo"
],
correct:0
},

{
question:"How do you say 'Aunt'?",
options:[
"Tia",
"Tio",
"Avó"
],
correct:0
},

{
question:"Which possessive is used with 'mãe'?",
options:[
"Meu",
"Minha",
"Meus"
],
correct:1
},

{
question:"Which possessive is used with 'pai'?",
options:[
"Minha",
"Meu",
"Minhas"
],
correct:1
},

{
question:"Which sentence is correct?",
options:[
"Minha família é grande.",
"Meu família é grande.",
"Minha família são grande."
],
correct:0
}

];

// =======================================
// Lesson 9 Quiz
// =======================================

const lesson9Quiz = [

{
question:"How do you say 'Water' in Portuguese?",
options:["Água","Leite","Suco"],
correct:0
},

{
question:"How do you say 'Coffee'?",
options:["Café","Chá","Suco"],
correct:0
},

{
question:"How do you say 'Bread'?",
options:["Pão","Bolo","Queijo"],
correct:0
},

{
question:"How do you say 'Rice'?",
options:["Arroz","Feijão","Carne"],
correct:0
},

{
question:"How do you say 'Beans'?",
options:["Frango","Feijão","Peixe"],
correct:1
},

{
question:"How do you say 'Chicken'?",
options:["Carne","Frango","Peixe"],
correct:1
},

{
question:"How do you say 'Fruit'?",
options:["Fruta","Legume","Salada"],
correct:0
},

{
question:"What does 'Eu gosto de café.' mean?",
options:[
"I like coffee.",
"I want coffee.",
"I drink coffee."
],
correct:0
},

{
question:"What does 'Eu quero água.' mean?",
options:[
"I want water.",
"I like water.",
"I have water."
],
correct:0
},

{
question:"How do you say 'Juice'?",
options:[
"Suco",
"Leite",
"Café"
],
correct:0
},

{
question:"How do you say 'Milk'?",
options:[
"Leite",
"Água",
"Bebida"
],
correct:0
},

{
question:"Which sentence is correct?",
options:[
"Eu gosto de arroz.",
"Eu gosto arroz.",
"Eu gosto no arroz."
],
correct:0
},

{
question:"Which food is traditional in Brazil?",
options:[
"Arroz e feijão",
"Pizza",
"Sushi"
],
correct:0
},

{
question:"How do you say 'Cake'?",
options:[
"Bolo",
"Pão",
"Doce"
],
correct:0
},

{
question:"How do you say 'Ice cream'?",
options:[
"Sorvete",
"Bolo",
"Fruta"
],
correct:0
}

];

// =======================================
// Lesson 10 Quiz
// =======================================

const lesson10Quiz = [

{
question:"How do you say 'Restaurant' in Portuguese?",
options:["Restaurante","Mercado","Cozinha"],
correct:0
},

{
question:"How do you ask for the menu?",
options:[
"O cardápio, por favor.",
"A conta, por favor.",
"Eu quero café."
],
correct:0
},

{
question:"How do you ask for the bill?",
options:[
"A conta, por favor.",
"O cardápio, por favor.",
"Mais água."
],
correct:0
},

{
question:"What does 'Garçom' mean?",
options:[
"Customer",
"Waiter",
"Cook"
],
correct:1
},

{
question:"What does 'Mesa' mean?",
options:[
"Chair",
"Kitchen",
"Table"
],
correct:2
},

{
question:"How do you say 'I would like...'?",
options:[
"Eu gostaria de...",
"Eu gosto de...",
"Eu tenho..."
],
correct:0
},

{
question:"What does 'Por favor' mean?",
options:[
"Please",
"Thank you",
"You're welcome"
],
correct:0
},

{
question:"How do you say 'Dessert'?",
options:[
"Sobremesa",
"Salada",
"Bebida"
],
correct:0
},

{
question:"What is a 'Prato Feito (PF)'?",
options:[
"A traditional Brazilian meal",
"A dessert",
"A drink"
],
correct:0
},

{
question:"Which sentence is correct?",
options:[
"Eu gostaria de um café.",
"Eu gostaria um café.",
"Eu café gostaria."
],
correct:0
},

{
question:"How do you say 'Thank you'?",
options:[
"Obrigado",
"Por favor",
"Conta"
],
correct:0
},

{
question:"How do you say 'Juice'?",
options:[
"Suco",
"Café",
"Leite"
],
correct:0
},

{
question:"What does 'Boa noite' mean?",
options:[
"Good morning",
"Good afternoon",
"Good evening"
],
correct:2
},

{
question:"How does the waiter ask 'Anything else?'",
options:[
"Mais alguma coisa?",
"Qual é seu nome?",
"Quanto custa?"
],
correct:0
},

{
question:"Which expression is the most polite when ordering?",
options:[
"Eu gostaria de...",
"Me dá...",
"Quero isso."
],
correct:0
}

];

// =======================================
// Lesson 11 Quiz
// =======================================

const lesson11Quiz = [

{
question:"How do you say 'Store' in Portuguese?",
options:["Loja","Casa","Escola"],
correct:0
},

{
question:"What does 'Preço' mean?",
options:["Bag","Price","Receipt"],
correct:1
},

{
question:"How do you ask 'How much does it cost?'",
options:[
"Quanto custa?",
"Como vai?",
"Onde fica?"
],
correct:0
},

{
question:"What does 'Caro' mean?",
options:[
"Cheap",
"Expensive",
"Large"
],
correct:1
},

{
question:"What does 'Barato' mean?",
options:[
"Cheap",
"Expensive",
"Heavy"
],
correct:0
},

{
question:"How do you ask for a discount?",
options:[
"Tem desconto?",
"Tem café?",
"Tem água?"
],
correct:0
},

{
question:"What does 'Eu vou levar.' mean?",
options:[
"I'll take it.",
"I'll come back.",
"I don't want it."
],
correct:0
},

{
question:"How do you say 'Credit card'?",
options:[
"Cartão de crédito",
"Dinheiro",
"Recibo"
],
correct:0
},

{
question:"What does 'Recibo' mean?",
options:[
"Receipt",
"Bag",
"Store"
],
correct:0
},

{
question:"How do you say 'Bag'?",
options:[
"Sacola",
"Mesa",
"Conta"
],
correct:0
},

{
question:"What is the Portuguese word for 'Size'?",
options:[
"Tamanho",
"Preço",
"Caro"
],
correct:0
},

{
question:"What payment method is 'Dinheiro em espécie'?",
options:[
"Cash",
"Pix",
"Credit card"
],
correct:0
},

{
question:"In Brazil, shopping malls are commonly called:",
options:[
"Shopping",
"Mercado",
"Centro"
],
correct:0
},

{
question:"Which sentence is correct?",
options:[
"Posso pagar com cartão?",
"Posso cartão pagar?",
"Cartão posso com pagar?"
],
correct:0
},

{
question:"Which expression is the most polite when buying something?",
options:[
"Eu vou levar.",
"Me dá isso.",
"Quero agora."
],
correct:0
}

];

// =======================================
// Lesson 12 Quiz
// =======================================

const lesson12Quiz = [

{
question:"How do you say 'Street' in Portuguese?",
options:["Rua","Loja","Praça"],
correct:0
},

{
question:"What does 'Direita' mean?",
options:["Left","Right","Straight"],
correct:1
},

{
question:"What does 'Esquerda' mean?",
options:["Left","Right","Near"],
correct:0
},

{
question:"How do you ask 'Where is...?'",
options:[
"Onde fica...?",
"Quanto custa?",
"Como vai?"
],
correct:0
},

{
question:"What does 'Em frente' mean?",
options:[
"Straight ahead",
"Turn left",
"Go back"
],
correct:0
},

{
question:"What does 'Perto' mean?",
options:[
"Near",
"Far",
"Fast"
],
correct:0
},

{
question:"What does 'Longe' mean?",
options:[
"Near",
"Far",
"Corner"
],
correct:1
},

{
question:"How do you say 'Traffic light'?",
options:[
"Semáforo",
"Esquina",
"Mapa"
],
correct:0
},

{
question:"How do you say 'Address'?",
options:[
"Endereço",
"Rua",
"Centro"
],
correct:0
},

{
question:"How do you ask politely for help?",
options:[
"Pode me ajudar?",
"Me ajuda!",
"Anda logo!"
],
correct:0
},

{
question:"What does 'Centro' mean?",
options:[
"Downtown",
"Airport",
"Hotel"
],
correct:0
},

{
question:"What does 'Mapa' mean?",
options:[
"Map",
"Bus",
"Street"
],
correct:0
},

{
question:"What should you say before asking a stranger for directions?",
options:[
"Com licença",
"Tchau",
"Boa noite"
],
correct:0
},

{
question:"Which expression means 'Is it far?'",
options:[
"É longe?",
"É barato?",
"É bonito?"
],
correct:0
},

{
question:"Which sentence is correct?",
options:[
"Siga em frente.",
"Frente siga em.",
"Em siga frente."
],
correct:0
}

];

// =======================================
// Lesson 13 Quiz
// =======================================

const lesson13Quiz = [

{
question:"How do you say 'Bus' in Portuguese?",
options:["Ônibus","Carro","Trem"],
correct:0
},

{
question:"What is 'Metrô'?",
options:["Subway","Taxi","Airport"],
correct:0
},

{
question:"How do you say 'Taxi'?",
options:["Táxi","Trem","Passagem"],
correct:0
},

{
question:"What does 'Aeroporto' mean?",
options:["Airport","Bus stop","Station"],
correct:0
},

{
question:"How do you say 'Bus stop'?",
options:["Ponto de ônibus","Estação","Rua"],
correct:0
},

{
question:"What does 'Passagem' mean?",
options:["Ticket","Driver","Road"],
correct:0
},

{
question:"How do you say 'Driver'?",
options:["Motorista","Passageiro","Policial"],
correct:0
},

{
question:"What does 'Trem' mean?",
options:["Train","Truck","Bus"],
correct:0
},

{
question:"What does 'Bicicleta' mean?",
options:["Bicycle","Motorcycle","Car"],
correct:0
},

{
question:"How do you say 'Car'?",
options:["Carro","Táxi","Ônibus"],
correct:0
},

{
question:"How do you ask 'Where is the bus stop?'",
options:[
"Onde fica o ponto de ônibus?",
"Onde fica o aeroporto?",
"Quanto custa?"
],
correct:0
},

{
question:"How do you ask 'How much is the ticket?'",
options:[
"Quanto custa a passagem?",
"Onde fica o metrô?",
"Preciso de um táxi."
],
correct:0
},

{
question:"Which sentence means 'I need a taxi'?",
options:[
"Preciso de um táxi.",
"Vou de ônibus.",
"Cadê o motorista?"
],
correct:0
},

{
question:"Which transportation app is widely used in Brazil?",
options:[
"Uber",
"WhatsApp",
"Instagram"
],
correct:0
},

{
question:"Which word means 'Station'?",
options:[
"Estação",
"Esquina",
"Centro"
],
correct:0
}

];

// =======================================
// Lesson 14 Quiz
// =======================================

const lesson14Quiz = [

{
question:"How do you ask 'What time is it?'",
options:[
"Que horas são?",
"Como vai?",
"Onde fica?"
],
correct:0
},

{
question:"How do you say 'One o'clock'?",
options:[
"É uma hora.",
"São uma hora.",
"Uma horas."
],
correct:0
},

{
question:"What does 'Relógio' mean?",
options:[
"Clock",
"Schedule",
"Minute"
],
correct:0
},

{
question:"What does 'Manhã' mean?",
options:[
"Morning",
"Afternoon",
"Night"
],
correct:0
},

{
question:"What does 'Tarde' mean?",
options:[
"Morning",
"Afternoon",
"Night"
],
correct:1
},

{
question:"What does 'Noite' mean?",
options:[
"Night",
"Morning",
"Noon"
],
correct:0
},

{
question:"How do you say 'Appointment'?",
options:[
"Compromisso",
"Calendário",
"Agenda"
],
correct:0
},

{
question:"How do you say 'Schedule'?",
options:[
"Horário",
"Hora",
"Relógio"
],
correct:0
},

{
question:"Complete: 'Nos vemos às cinco.'",
options:[
"See you at five.",
"See you tomorrow.",
"It's five o'clock."
],
correct:0
},

{
question:"Which sentence is correct?",
options:[
"Meu compromisso é às oito.",
"Meu compromisso oito é.",
"Compromisso meu oito."
],
correct:0
},

{
question:"How do Brazilians usually tell time in everyday conversations?",
options:[
"12-hour format",
"Only 24-hour format",
"Only military time"
],
correct:0
},

{
question:"How do you say 'Minute'?",
options:[
"Minuto",
"Segundo",
"Hora"
],
correct:0
},

{
question:"How do you say 'Second'?",
options:[
"Segundo",
"Hora",
"Relógio"
],
correct:0
},

{
question:"Which phrase asks for the time?",
options:[
"Que horas são?",
"Qual é seu nome?",
"Onde mora?"
],
correct:0
},

{
question:"Which sentence is correct?",
options:[
"São três horas.",
"É três horas.",
"Três hora."
],
correct:0
}

];

const lesson15Quiz = [

{
    question: "How do you say 'It's sunny' in Portuguese?",
    options: [
        "Está ensolarado.",
        "Está chovendo.",
        "Está ventando.",
        "Está nevando."
    ],
    correct: 0
},

{
    question: "What does 'Está chovendo' mean?",
    options: [
        "It's windy.",
        "It's raining.",
        "It's cloudy.",
        "It's hot."
    ],
    correct: 1
},

{
    question: "How do you ask 'How's the weather?'",
    options: [
        "Que horas são?",
        "Onde fica?",
        "Como está o tempo?",
        "Quanto custa?"
    ],
    correct: 2
},

{
    question: "What does 'Está nublado' mean?",
    options: [
        "It's cloudy.",
        "It's sunny.",
        "It's cold.",
        "It's snowing."
    ],
    correct: 0
},

{
    question: "What does 'Está frio' mean?",
    options: [
        "It's hot.",
        "It's windy.",
        "It's cold.",
        "It's raining."
    ],
    correct: 2
},

{
    question: "How do you say 'The sun' in Portuguese?",
    options: [
        "Lua",
        "Sol",
        "Vento",
        "Nuvem"
    ],
    correct: 1
},

{
    question: "What does 'Quente' mean?",
    options: [
        "Cold",
        "Windy",
        "Hot",
        "Cloudy"
    ],
    correct: 2
},

{
    question: "How do you say 'Wind' in Portuguese?",
    options: [
        "Vento",
        "Chuva",
        "Sol",
        "Frio"
    ],
    correct: 0
},

{
    question: "What does 'Tempestade' mean?",
    options: [
        "Storm",
        "Sunny",
        "Cloud",
        "Rainbow"
    ],
    correct: 0
},

{
    question: "How do you say 'It's hot' in Portuguese?",
    options: [
        "Está frio.",
        "Está quente.",
        "Está nublado.",
        "Está ventando."
    ],
    correct: 1
},

{
    question: "What does 'Nuvem' mean?",
    options: [
        "Sun",
        "Rain",
        "Cloud",
        "Wind"
    ],
    correct: 2
},

{
    question: "How do you say 'Rain' in Portuguese?",
    options: [
        "Sol",
        "Chuva",
        "Vento",
        "Frio"
    ],
    correct: 1
},

{
    question: "What is the Portuguese word for 'Cloudy'?",
    options: [
        "Ensolarado",
        "Tempestade",
        "Nublado",
        "Quente"
    ],
    correct: 2
},

{
    question: "How do you say 'It's raining' in Portuguese?",
    options: [
        "Está chovendo.",
        "Está ensolarado.",
        "Está frio.",
        "Está ventando."
    ],
    correct: 0
},

{
    question: "Which expression means 'Today it's sunny'?",
    options: [
        "Hoje está ensolarado.",
        "Hoje está frio.",
        "Hoje está chovendo.",
        "Hoje está ventando."
    ],
    correct: 0
}

];


const lesson16Quiz = [

{
    question:"What does 'Acordar' mean?",
    options:[
        "To wake up",
        "To go to bed",
        "To work",
        "To study"
    ],
    correct:0
},

{
    question:"How do you say 'I wake up at 7 a.m.'?",
    options:[
        "Eu acordo às sete.",
        "Eu durmo às sete.",
        "Eu almoço às sete.",
        "Eu estudo às sete."
    ],
    correct:0
},

{
    question:"What does 'Tomar café da manhã' mean?",
    options:[
        "To have breakfast",
        "To have lunch",
        "To have dinner",
        "To drink coffee only"
    ],
    correct:0
},

{
    question:"How do you say 'I go to work'?",
    options:[
        "Eu vou ao trabalho.",
        "Eu volto para casa.",
        "Eu vou dormir.",
        "Eu estudo português."
    ],
    correct:0
},

{
    question:"What does 'Almoçar' mean?",
    options:[
        "To have lunch",
        "To have dinner",
        "To wake up",
        "To study"
    ],
    correct:0
},

{
    question:"How do you say 'I study Portuguese every day'?",
    options:[
        "Eu estudo português todos os dias.",
        "Eu durmo todos os dias.",
        "Eu acordo português.",
        "Eu trabalho português."
    ],
    correct:0
},

{
    question:"What does 'Trabalhar' mean?",
    options:[
        "To work",
        "To sleep",
        "To eat",
        "To drive"
    ],
    correct:0
},

{
    question:"How do you say 'I arrive home'?",
    options:[
        "Eu chego em casa.",
        "Eu acordo em casa.",
        "Eu almoço em casa.",
        "Eu estudo em casa."
    ],
    correct:0
},

{
    question:"What does 'Jantar' mean?",
    options:[
        "To have dinner",
        "To have breakfast",
        "To have lunch",
        "To walk"
    ],
    correct:0
},

{
    question:"How do you say 'I watch TV at night'?",
    options:[
        "Eu assisto TV à noite.",
        "Eu vejo trabalho.",
        "Eu estudo TV.",
        "Eu durmo TV."
    ],
    correct:0
},

{
    question:"What does 'Dormir' mean?",
    options:[
        "To sleep",
        "To wake up",
        "To study",
        "To eat"
    ],
    correct:0
},

{
    question:"Which expression means 'Every day'?",
    options:[
        "Todos os dias",
        "Toda noite",
        "Hoje cedo",
        "Na semana passada"
    ],
    correct:0
},

{
    question:"How do you say 'I go to bed'?",
    options:[
        "Eu vou para a cama.",
        "Eu vou ao trabalho.",
        "Eu vou à escola.",
        "Eu vou ao mercado."
    ],
    correct:0
},

{
    question:"What does 'Rotina diária' mean?",
    options:[
        "Daily routine",
        "Weekend trip",
        "Work schedule",
        "Free time"
    ],
    correct:0
},

{
    question:"Which sentence is correct?",
    options:[
        "Eu acordo cedo todos os dias.",
        "Eu cedo acordo dias todos.",
        "Acordo eu todos cedo.",
        "Todos acordo dias cedo."
    ],
    correct:0
}

];

const lesson17Quiz = [

{
question: "How do you say 'I speak Portuguese'?",
options: [
"Eu fala português",
"Eu falo português",
"Eu falar português",
"Eu falando português"
],
correct: 1
},

{
question: "What is the infinitive of 'I eat'?",
options: [
"Comer",
"Come",
"Comendo",
"Comi"
],
correct: 0
},

{
question: "Complete: Nós __ português.",
options: [
"fala",
"falam",
"falamos",
"falar"
],
correct: 2
},

{
question: "Which verb means 'to live'?",
options: [
"Beber",
"Ler",
"Morar",
"Abrir"
],
correct: 2
},

{
question: "Complete: Ela __ café todas as manhãs.",
options: [
"bebe",
"beber",
"bebo",
"bebemos"
],
correct: 0
},

{
question: "What is the correct form?",
options: [
"Eu estudar português.",
"Eu estudo português.",
"Eu estuda português.",
"Eu estudamos português."
],
correct: 1
},

{
question: "Complete: Eles __ em Portugal.",
options: [
"mora",
"morar",
"moram",
"moramos"
],
correct: 2
},

{
question: "Which verb means 'to work'?",
options: [
"Trabalhar",
"Estudar",
"Aprender",
"Escrever"
],
correct: 0
},

{
question: "Complete: Você __ inglês.",
options: [
"estuda",
"estudamos",
"estudo",
"estudar"
],
correct: 0
},

{
question: "What does 'Abrir' mean?",
options: [
"To close",
"To open",
"To read",
"To write"
],
correct: 1
},

{
question: "Complete: Nós __ muito.",
options: [
"trabalhamos",
"trabalha",
"trabalham",
"trabalhar"
],
correct: 0
},

{
question: "Which sentence is correct?",
options: [
"Eu bebe água.",
"Eu beber água.",
"Eu bebo água.",
"Eu bebemos água."
],
correct: 2
},

{
question: "Complete: Ela __ cartas.",
options: [
"escreve",
"escrever",
"escrevo",
"escrevemos"
],
correct: 0
},

{
question: "Complete: Eu __ muito todos os dias.",
options: [
"aprender",
"aprende",
"aprendo",
"aprendemos"
],
correct: 2
},

{
question: "Which sentence is in the Present Tense?",
options: [
"Eu falei português.",
"Eu vou falar português.",
"Eu falo português.",
"Eu falaria português."
],
correct: 2
}
];

// =======================================
// Lesson 18 Quiz
// =======================================

const lesson18Quiz = [

{
question: "How do you ask 'How are you?' in Portuguese?",
options: [
"Como você está?",
"Qual é o seu nome?",
"De onde você é?",
"Até amanhã!"
],
correct: 0
},

{
question: "What does 'Estou muito bem.' mean?",
options: [
"I'm very well.",
"I'm tired.",
"I'm from Brazil.",
"I'm hungry."
],
correct: 0
},

{
question: "How do you say 'Nice to meet you'?",
options: [
"Prazer em conhecer você.",
"Bom dia.",
"Até logo.",
"Com licença."
],
correct: 0
},

{
question: "How do you ask 'Where are you from?'",
options: [
"Onde você mora?",
"De onde você é?",
"Como você está?",
"O que você faz?"
],
correct: 1
},

{
question: "Complete: Eu _ do Brasil.",
options: [
"estou",
"sou",
"tenho",
"vou"
],
correct: 1
},

{
question: "Which expression means 'See you tomorrow'?",
options: [
"Até amanhã.",
"Boa tarde.",
"Tudo bem.",
"Obrigado."
],
correct: 0
},

{
question: "How do you answer 'Como você está?'",
options: [
"Estou bem.",
"Até amanhã.",
"Bom dia.",
"Sou do Brasil."
],
correct: 0
},

{
question: "What does 'O prazer é meu.' mean?",
options: [
"The pleasure is mine.",
"Good afternoon.",
"See you soon.",
"I'm fine."
],
correct: 0
},

{
question: "Complete: __ conhecer você.",
options: [
"Prazer em",
"Obrigado",
"Bom dia",
"Até logo"
],
correct: 0
},

{
question: "Which expression is used to say goodbye?",
options: [
"Até mais.",
"Como vai?",
"Qual é seu nome?",
"De onde você é?"
],
correct: 0
},

{
question: "What does 'Bom dia' mean?",
options: [
"Good morning.",
"Good night.",
"See you later.",
"Goodbye."
],
correct: 0
},

{
question: "Which sentence is correct?",
options: [
"Eu sou do Brasil.",
"Eu Brasil sou.",
"Sou eu Brasil.",
"Brasil eu sou."
],
correct: 0
},

{
question: "How do Brazilians usually start a conversation?",
options: [
"By greeting the other person.",
"By talking about money.",
"By staying silent.",
"By saying goodbye."
],
correct: 0
},

{
question: "Complete: Até __.",
options: [
"amanhã",
"Brasil",
"trabalho",
"café"
],
correct: 0
},

{
question: "Which conversation sounds the most natural?",
options: [
"— Como você está? — Estou muito bem!",
"— Até amanhã! — Bom dia!",
"— De onde você é? — Até logo!",
"— Bom dia! — Tchau, ontem!"
],
correct: 0
}

];
let currentChallenge = 0;



function loadChallenge() {

    const question = listeningQuestions[currentChallenge];

    document.getElementById("challengeQuestion").textContent =
        `Question ${currentChallenge + 1} of ${listeningQuestions.length}`;

    const optionsDiv = document.querySelector(".challenge-options");

    optionsDiv.innerHTML = "";

    question.options.forEach((option, index) => {

    const word = typeof option === "string" ? option : option.word;

     const emoji = typeof option === "string" ? "❓" : option.emoji;
        
    optionsDiv.innerHTML += `
    <div class="challenge-card" onclick="checkChallenge(${index})">

        <div class="challenge-image">
    ${emoji}
        </div>

        <h3>${word}</h3>

    </div>
`;
});

    document.getElementById("challengeFeedback").textContent = "";
    document.getElementById("nextChallenge").style.display = "none";

}

function playChallengeAudio() {

    const question = listeningQuestions[currentChallenge];

    speakLetter(question.audio);

}

function checkChallenge(selected) {

    const question = listeningQuestions[currentChallenge];

    const feedback = document.getElementById("challengeFeedback");

    if (selected === question.correct) {

        feedback.innerHTML =
            "✅ Correct! Great job!";

    } else {

        feedback.innerHTML =
            "❌ Incorrect. Try the next question.";

    }

    document.getElementById("nextChallenge").style.display = "inline-block";

}

function nextChallenge() {

    currentChallenge++;

    if (currentChallenge >= listeningQuestions.length) {

        document.getElementById("challengeBox").innerHTML = `
            <h2>🎉 Congratulations!</h2>
            <p>You completed the Listening Challenge.</p>
        `;

        return;

    }

    loadChallenge();

}

document.addEventListener("DOMContentLoaded", () => {

    if (document.getElementById("challengeBox")) {
        loadChallenge();
    }

});

window.checkChallenge = checkChallenge;
window.playChallengeAudio = playChallengeAudio;
window.nextChallenge = nextChallenge;

// =======================================
// Lesson 1 Quiz
// =======================================

let currentQuizQuestion = 0;

function loadQuiz() {

    const container = document.getElementById("quizQuestions");

    if (!container) return;

    const question = lesson1Quiz[currentQuizQuestion];

    let html = `
        <h3>Question ${currentQuizQuestion + 1} of ${lesson1Quiz.length}</h3>
        <p>${question.question}</p>
    `;

    question.options.forEach((option, index) => {
        html += `
            <label>
                <input type="radio" name="quiz" value="${index}">
                ${option}
            </label><br><br>
        `;
    });

    container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {

    if (document.getElementById("quizContainer")) {

    if (window.location.pathname.includes("lesson18")) {

    loadLesson18Quiz();

} else if (window.location.pathname.includes("lesson17")) {

    loadLesson17Quiz();

} else if (window.location.pathname.includes("lesson16")) {

    loadLesson16Quiz();

} else if (window.location.pathname.includes("lesson15")) {

    loadLesson15Quiz();

}

} else if (window.location.pathname.includes("lesson14")) {

    loadLesson14Quiz();

} else if (window.location.pathname.includes("lesson13")) {

    loadLesson13Quiz();


} else if (window.location.pathname.includes("lesson12")) {
    loadLesson12Quiz();

} else if (window.location.pathname.includes("lesson11")) {

    loadLesson11Quiz();

} else if (window.location.pathname.includes("lesson10")) {

    loadLesson10Quiz();
   
} else if (window.location.pathname.includes("lesson9")) {

    loadLesson9Quiz();

} else if (window.location.pathname.includes("lesson8")) {

    loadLesson8Quiz();

} else if (window.location.pathname.includes("lesson7")) {

    loadLesson7Quiz();

} else if (window.location.pathname.includes("lesson6")) {
    loadLesson6Quiz();

} else if (window.location.pathname.includes("lesson5")) {

    loadLesson5Quiz();

} else if (window.location.pathname.includes("lesson4")) {

    loadLesson4Quiz();

} else if (window.location.pathname.includes("lesson3")) {

    loadLesson3Quiz();

} else if (window.location.pathname.includes("lesson2")) {

    loadLesson2Quiz();

} else {

    loadQuiz();

}
    

    if (document.getElementById("challengeBox")) {
        loadChallenge();
    }

});

let quizScore = 0;

function checkLesson1Quiz() {

    const selected = document.querySelector('input[name="quiz"]:checked');

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    if (parseInt(selected.value) === lesson1Quiz[currentQuizQuestion].correct) {
        quizScore++;
        document.getElementById("quizResult").innerHTML = "✅ Correct!";
    } else {
        document.getElementById("quizResult").innerHTML = "❌ Incorrect!";
    }

    setTimeout(() => {

        currentQuizQuestion++;

        if (currentQuizQuestion < lesson1Quiz.length) {

            loadQuiz();
            document.getElementById("quizResult").innerHTML = "";

        } else {

    document.getElementById("quizContainer").innerHTML = `
        <h2>🎉 Lesson 1 Completed!</h2>

        <p><strong>Correct:</strong> ${quizScore}</p>
        <p><strong>Incorrect:</strong> ${lesson1Quiz.length - quizScore}</p>
        <p><strong>Score:</strong> ${Math.round((quizScore / lesson1Quiz.length) * 100)}%</p>

        <br>

        <button class="hero-button" onclick="location.reload()">
            🔄 Retake Quiz
        </button>

        <br><br>

        <button class="hero-button" onclick="finishLesson1()">
            ➜ Continue to Lesson 2
        </button>
    `;

    document.getElementById("quizResult").innerHTML = "";
    document.getElementById("checkAnswerBtn").style.display = "none";
}

    }, 1000);

}

window.checkLesson1Quiz = checkLesson1Quiz;

async function finishLesson1() {

    const { completeLesson } = await import("./progress.js");

    await completeLesson(1);

}

window.finishLesson1 = finishLesson1;

// =======================================
// Lesson 2 Quiz
// =======================================

let currentLesson2Question = 0;
let lesson2Score = 0;

function loadLesson2Quiz() {

    const container = document.getElementById("quizQuestions");

    if (!container) return;

    const question = lesson2Quiz[currentLesson2Question];

    let html = `
        <h3>Question ${currentLesson2Question + 1} of ${lesson2Quiz.length}</h3>
        <p>${question.question}</p>
    `;

    question.options.forEach((option, index) => {

        html += `
            <label>
                <input type="radio" name="lesson2quiz" value="${index}">
                ${option}
            </label><br><br>
        `;

    });

    container.innerHTML = html;

}

function checkLesson2Quiz() {

    const selected = document.querySelector('input[name="lesson2quiz"]:checked');

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    if (parseInt(selected.value) === lesson2Quiz[currentLesson2Question].correct) {
        lesson2Score++;
        document.getElementById("quizResult").innerHTML = "✅ Correct!";
    } else {
        document.getElementById("quizResult").innerHTML = "❌ Incorrect!";
    }

    setTimeout(() => {

        currentLesson2Question++;

        if (currentLesson2Question < lesson2Quiz.length) {

            loadLesson2Quiz();
            document.getElementById("quizResult").innerHTML = "";

        } else {

            document.getElementById("quizContainer").innerHTML = `
                <h2>🎉 Lesson 2 Completed!</h2>

                <p><strong>Correct:</strong> ${lesson2Score}</p>
                <p><strong>Incorrect:</strong> ${lesson2Quiz.length - lesson2Score}</p>
                <p><strong>Score:</strong> ${Math.round((lesson2Score / lesson2Quiz.length) * 100)}%</p>

                <br>

                <button class="hero-button" onclick="location.reload()">
                    🔄 Retake Quiz
                </button>

                <br><br>

                <button class="hero-button" onclick="finishLesson2()">
                    ➜ Continue to Lesson 3
                </button>
            `;

            document.getElementById("quizResult").innerHTML = "";

            const btn = document.getElementById("checkAnswerBtn");
            if (btn) btn.style.display = "none";
        }

    }, 1000);

}

window.checkLesson2Quiz = checkLesson2Quiz;

async function finishLesson2() {

    const { completeLesson } = await import("./progress.js");

    await completeLesson(2);

}

window.finishLesson2 = finishLesson2;

// =======================================
// Lesson 3 Quiz
// =======================================

let currentLesson3Question = 0;
let lesson3Score = 0;

function loadLesson3Quiz() {

    const container = document.getElementById("quizQuestions");

    if (!container) return;

    const question = lesson3Quiz[currentLesson3Question];

    let html = `
        <h3>Question ${currentLesson3Question + 1} of ${lesson3Quiz.length}</h3>
        <p>${question.question}</p>
    `;

    question.options.forEach((option, index) => {

        html += `
            <label>
                <input type="radio" name="lesson3quiz" value="${index}">
                ${option}
            </label><br><br>
        `;

    });

    container.innerHTML = html;

}

function checkLesson3Quiz() {

    const selected = document.querySelector('input[name="lesson3quiz"]:checked');

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    if (parseInt(selected.value) === lesson3Quiz[currentLesson3Question].correct) {
        lesson3Score++;
        document.getElementById("quizResult").innerHTML = "✅ Correct!";
    } else {
        document.getElementById("quizResult").innerHTML = "❌ Incorrect!";
    }

    setTimeout(() => {

        currentLesson3Question++;

        if (currentLesson3Question < lesson3Quiz.length) {

            loadLesson3Quiz();
            document.getElementById("quizResult").innerHTML = "";

        } else {

            document.getElementById("quizContainer").innerHTML = `
                <h2>🎉 Lesson 3 Completed!</h2>

                <p><strong>Correct:</strong> ${lesson3Score}</p>
                <p><strong>Incorrect:</strong> ${lesson3Quiz.length - lesson3Score}</p>
                <p><strong>Score:</strong> ${Math.round((lesson3Score / lesson3Quiz.length) * 100)}%</p>

                <br>

                <button class="hero-button" onclick="location.reload()">
                    🔄 Retake Quiz
                </button>

                <br><br>

                <button class="hero-button" onclick="finishLesson3()">
                    ➜ Continue to Lesson 4
                </button>
            `;

           const result = document.getElementById("quizResult");
if (result) {
    result.innerHTML = "";
}

const btn = document.getElementById("checkAnswerBtn");
if (btn) {
    btn.style.display = "none";
}
        }

    }, 1000);

}

window.checkLesson3Quiz = checkLesson3Quiz;

async function finishLesson3() {

    const { completeLesson } = await import("./progress.js");

    await completeLesson(3);

}

window.finishLesson3 = finishLesson3;

// =======================================
// Lesson 4 Quiz
// =======================================

let currentLesson4Question = 0;
let lesson4Score = 0;

function loadLesson4Quiz() {

    const container = document.getElementById("quizQuestions");

    if (!container) return;

    const question = lesson4Quiz[currentLesson4Question];

    let html = `
        <h3>Question ${currentLesson4Question + 1} of ${lesson4Quiz.length}</h3>
        <p>${question.question}</p>
    `;

    question.options.forEach((option, index) => {

        html += `
            <label>
                <input type="radio" name="lesson4quiz" value="${index}">
                ${option}
            </label><br><br>
        `;

    });

    container.innerHTML = html;

}

function checkLesson4Quiz() {

    const selected = document.querySelector('input[name="lesson4quiz"]:checked');

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    if (parseInt(selected.value) === lesson4Quiz[currentLesson4Question].correct) {
        lesson4Score++;
        document.getElementById("quizResult").innerHTML = "✅ Correct!";
    } else {
        document.getElementById("quizResult").innerHTML = "❌ Incorrect!";
    }

    setTimeout(() => {

        currentLesson4Question++;

        if (currentLesson4Question < lesson4Quiz.length) {

            loadLesson4Quiz();
            document.getElementById("quizResult").innerHTML = "";

        } else {

            document.getElementById("quizContainer").innerHTML = `
                <h2>🎉 Lesson 4 Completed!</h2>

                <p><strong>Correct:</strong> ${lesson4Score}</p>
                <p><strong>Incorrect:</strong> ${lesson4Quiz.length - lesson4Score}</p>
                <p><strong>Score:</strong> ${Math.round((lesson4Score / lesson4Quiz.length) * 100)}%</p>

                <br>

                <button class="hero-button" onclick="location.reload()">
                    🔄 Retake Quiz
                </button>

                <br><br>

                <button class="hero-button" onclick="finishLesson4()">
                    ➜ Continue to Lesson 5
                </button>
            `;

            const result = document.getElementById("quizResult");
            if (result) {
                result.innerHTML = "";
            }

            const btn = document.getElementById("checkAnswerBtn");
            if (btn) {
                btn.style.display = "none";
            }
        }

    }, 1000);

}

window.checkLesson4Quiz = checkLesson4Quiz;

async function finishLesson4() {

    const { completeLesson } = await import("./progress.js");

    await completeLesson(4);

}

window.finishLesson4 = finishLesson4;

// =======================================
// Lesson 5 Quiz
// =======================================

let currentLesson5Question = 0;
let lesson5Score = 0;

function loadLesson5Quiz() {

    const container = document.getElementById("quizQuestions");

    if (!container) return;

    const question = lesson5Quiz[currentLesson5Question];

    let html = `
        <h3>Question ${currentLesson5Question + 1} of ${lesson5Quiz.length}</h3>
        <p>${question.question}</p>
    `;

    question.options.forEach((option, index) => {

        html += `
            <label>
                <input type="radio" name="lesson5quiz" value="${index}">
                ${option}
            </label><br><br>
        `;

    });

    container.innerHTML = html;

}

function checkLesson5Quiz() {

    const selected = document.querySelector('input[name="lesson5quiz"]:checked');

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    if (parseInt(selected.value) === lesson5Quiz[currentLesson5Question].correct) {
        lesson5Score++;
        document.getElementById("quizResult").innerHTML = "✅ Correct!";
    } else {
        document.getElementById("quizResult").innerHTML = "❌ Incorrect!";
    }

    setTimeout(() => {

        currentLesson5Question++;

        if (currentLesson5Question < lesson5Quiz.length) {

            loadLesson5Quiz();
            document.getElementById("quizResult").innerHTML = "";

        } else {

            document.getElementById("quizContainer").innerHTML = `
                <h2>🎉 Lesson 5 Completed!</h2>

                <p><strong>Correct:</strong> ${lesson5Score}</p>
                <p><strong>Incorrect:</strong> ${lesson5Quiz.length - lesson5Score}</p>
                <p><strong>Score:</strong> ${Math.round((lesson5Score / lesson5Quiz.length) * 100)}%</p>

                <br>

                <button class="hero-button" onclick="location.reload()">
                    🔄 Retake Quiz
                </button>

                <br><br>

                <button class="hero-button" onclick="finishLesson5()">
                    ➜ Continue to Lesson 6
                </button>
            `;

            const result = document.getElementById("quizResult");
            if (result) {
                result.innerHTML = "";
            }

            const btn = document.getElementById("checkAnswerBtn");
            if (btn) {
                btn.style.display = "none";
            }
        }

    }, 1000);

}

window.checkLesson5Quiz = checkLesson5Quiz;

async function finishLesson5() {

    const { completeLesson } = await import("./progress.js");

    await completeLesson(5);

    window.location.href = "lesson6.html";

}

window.finishLesson5 = finishLesson5;

// =======================================
// Lesson 6 Quiz
// =======================================

let currentLesson6Question = 0;
let lesson6Score = 0;

function loadLesson6Quiz() {

    const container = document.getElementById("quizQuestions");

    if (!container) return;

    const question = lesson6Quiz[currentLesson6Question];

    let html = `
        <h3>Question ${currentLesson6Question + 1} of ${lesson6Quiz.length}</h3>
        <p>${question.question}</p>
    `;

    question.options.forEach((option, index) => {

        html += `
            <label>
                <input type="radio" name="lesson6quiz" value="${index}">
                ${option}
            </label><br><br>
        `;

    });

    container.innerHTML = html;

}

function checkLesson6Quiz() {

    const selected = document.querySelector('input[name="lesson6quiz"]:checked');

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    if (parseInt(selected.value) === lesson6Quiz[currentLesson6Question].correct) {

        lesson6Score++;
        document.getElementById("quizResult").innerHTML = "✅ Correct!";

    } else {

        document.getElementById("quizResult").innerHTML = "❌ Incorrect!";

    }

    setTimeout(() => {

        currentLesson6Question++;

        if (currentLesson6Question < lesson6Quiz.length) {

            loadLesson6Quiz();
            document.getElementById("quizResult").innerHTML = "";

        } else {

            document.getElementById("quizContainer").innerHTML = `
                <h2>🎉 Lesson 6 Completed!</h2>

                <p><strong>Correct:</strong> ${lesson6Score}</p>
                <p><strong>Incorrect:</strong> ${lesson6Quiz.length - lesson6Score}</p>
                <p><strong>Score:</strong> ${Math.round((lesson6Score / lesson6Quiz.length) * 100)}%</p>

                <br>

                <button class="hero-button" onclick="location.reload()">
                    🔄 Retake Quiz
                </button>

                <br><br>

                <button class="hero-button" onclick="finishLesson6()">
                    ➜ Continue to Lesson 7
                </button>
            `;

            const result = document.getElementById("quizResult");
            if (result) {
                result.innerHTML = "";
            }

            const btn = document.getElementById("checkAnswerBtn");
            if (btn) {
                btn.style.display = "none";
            }
        }

    }, 1000);

}

window.checkLesson6Quiz = checkLesson6Quiz;

async function finishLesson6() {

    const { completeLesson } = await import("./progress.js");

    await completeLesson(6);

    window.location.href = "lesson7.html";

}

window.finishLesson6 = finishLesson6;

// =======================================
// Lesson 7 Quiz
// =======================================

let currentLesson7Question = 0;
let lesson7Score = 0;

function loadLesson7Quiz() {

    const container = document.getElementById("quizQuestions");

    if (!container) return;

    const question = lesson7Quiz[currentLesson7Question];

    let html = `
        <h3>Question ${currentLesson7Question + 1} of ${lesson7Quiz.length}</h3>
        <p>${question.question}</p>
    `;

    question.options.forEach((option, index) => {

        html += `
            <label>
                <input type="radio" name="lesson7quiz" value="${index}">
                ${option}
            </label><br><br>
        `;

    });

    container.innerHTML = html;

}

function checkLesson7Quiz() {

    const selected = document.querySelector('input[name="lesson7quiz"]:checked');

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    if (parseInt(selected.value) === lesson7Quiz[currentLesson7Question].correct) {

        lesson7Score++;
        document.getElementById("quizResult").innerHTML = "✅ Correct!";

    } else {

        document.getElementById("quizResult").innerHTML = "❌ Incorrect!";

    }

    setTimeout(() => {

        currentLesson7Question++;

        if (currentLesson7Question < lesson7Quiz.length) {

            loadLesson7Quiz();
            document.getElementById("quizResult").innerHTML = "";

        } else {

            document.getElementById("quizContainer").innerHTML = `
                <h2>🎉 Lesson 7 Completed!</h2>

                <p><strong>Correct:</strong> ${lesson7Score}</p>
                <p><strong>Incorrect:</strong> ${lesson7Quiz.length - lesson7Score}</p>
                <p><strong>Score:</strong> ${Math.round((lesson7Score / lesson7Quiz.length) * 100)}%</p>

                <br>

                <button class="hero-button" onclick="location.reload()">
                    🔄 Retake Quiz
                </button>

                <br><br>

                <button class="hero-button" onclick="finishLesson7()">
                    ➜ Continue to Lesson 8
                </button>
            `;

            const result = document.getElementById("quizResult");
            if (result) {
                result.innerHTML = "";
            }

            const btn = document.getElementById("checkAnswerBtn");
            if (btn) {
                btn.style.display = "none";
            }

        }

    }, 1000);

}

window.checkLesson7Quiz = checkLesson7Quiz;

async function finishLesson7() {

    const { completeLesson } = await import("./progress.js");

    await completeLesson(7);

    window.location.href = "lesson8.html";

}

window.finishLesson7 = finishLesson7;

// =======================================
// Lesson 8 Quiz
// =======================================

let currentLesson8Question = 0;
let lesson8Score = 0;

function loadLesson8Quiz() {

    const container = document.getElementById("quizQuestions");

    if (!container) return;

    const question = lesson8Quiz[currentLesson8Question];

    let html = `
        <h3>Question ${currentLesson8Question + 1} of ${lesson8Quiz.length}</h3>
        <p>${question.question}</p>
    `;

    question.options.forEach((option, index) => {

        html += `
            <label>
                <input type="radio" name="lesson8quiz" value="${index}">
                ${option}
            </label><br><br>
        `;

    });

    container.innerHTML = html;

}

function checkLesson8Quiz() {

    const selected = document.querySelector('input[name="lesson8quiz"]:checked');

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    if (parseInt(selected.value) === lesson8Quiz[currentLesson8Question].correct) {

        lesson8Score++;
        document.getElementById("quizResult").innerHTML = "✅ Correct!";

    } else {

        document.getElementById("quizResult").innerHTML = "❌ Incorrect!";

    }

    setTimeout(() => {

        currentLesson8Question++;

        if (currentLesson8Question < lesson8Quiz.length) {

            loadLesson8Quiz();
            document.getElementById("quizResult").innerHTML = "";

        } else {

            document.getElementById("quizContainer").innerHTML = `
                <h2>🎉 Lesson 8 Completed!</h2>

                <p><strong>Correct:</strong> ${lesson8Score}</p>
                <p><strong>Incorrect:</strong> ${lesson8Quiz.length - lesson8Score}</p>
                <p><strong>Score:</strong> ${Math.round((lesson8Score / lesson8Quiz.length) * 100)}%</p>

                <br>

                <button class="hero-button" onclick="location.reload()">
                    🔄 Retake Quiz
                </button>

                <br><br>

                <button class="hero-button" onclick="finishLesson8()">
                    ➜ Continue to Lesson 9
                </button>
            `;

            const result = document.getElementById("quizResult");
            if (result) result.innerHTML = "";

            const btn = document.getElementById("checkAnswerBtn");
            if (btn) btn.style.display = "none";

        }

    }, 1000);

}

window.checkLesson8Quiz = checkLesson8Quiz;

async function finishLesson8() {

    const { completeLesson } = await import("./progress.js");

    await completeLesson(8);

    window.location.href = "lesson9.html";

}

window.finishLesson8 = finishLesson8;

// =======================================
// Lesson 9 Quiz
// =======================================

let currentLesson9Question = 0;
let lesson9Score = 0;

function loadLesson9Quiz() {

    const container = document.getElementById("quizQuestions");

    if (!container) return;

    const question = lesson9Quiz[currentLesson9Question];

    let html = `
        <h3>Question ${currentLesson9Question + 1} of ${lesson9Quiz.length}</h3>
        <p>${question.question}</p>
    `;

    question.options.forEach((option, index) => {

        html += `
            <label>
                <input type="radio" name="lesson9quiz" value="${index}">
                ${option}
            </label><br><br>
        `;

    });

    container.innerHTML = html;

}

function checkLesson9Quiz() {

    const selected = document.querySelector('input[name="lesson9quiz"]:checked');

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    if (parseInt(selected.value) === lesson9Quiz[currentLesson9Question].correct) {

        lesson9Score++;
        document.getElementById("quizResult").innerHTML = "✅ Correct!";

    } else {

        document.getElementById("quizResult").innerHTML = "❌ Incorrect!";

    }

    setTimeout(() => {

        currentLesson9Question++;

        if (currentLesson9Question < lesson9Quiz.length) {

            loadLesson9Quiz();
            document.getElementById("quizResult").innerHTML = "";

        } else {

            document.getElementById("quizContainer").innerHTML = `
                <h2>🎉 Lesson 9 Completed!</h2>

                <p><strong>Correct:</strong> ${lesson9Score}</p>
                <p><strong>Incorrect:</strong> ${lesson9Quiz.length - lesson9Score}</p>
                <p><strong>Score:</strong> ${Math.round((lesson9Score / lesson9Quiz.length) * 100)}%</p>

                <br>

                <button class="hero-button" onclick="location.reload()">
                    🔄 Retake Quiz
                </button>

                <br><br>

                <button class="hero-button" onclick="finishLesson9()">
                    ➜ Continue to Lesson 10
                </button>
            `;

            const result = document.getElementById("quizResult");
            if (result) {
                result.innerHTML = "";
            }

            const btn = document.getElementById("checkAnswerBtn");
            if (btn) {
                btn.style.display = "none";
            }

        }

    }, 1000);

}

window.checkLesson9Quiz = checkLesson9Quiz;

async function finishLesson9() {

    const { completeLesson } = await import("./progress.js");

    await completeLesson(9);

    window.location.href = "lesson10.html";

}

window.finishLesson9 = finishLesson9;

// =======================================
// Lesson 10 Quiz
// =======================================

let currentLesson10Question = 0;
let lesson10Score = 0;

function loadLesson10Quiz() {

    const container = document.getElementById("quizQuestions");

    if (!container) return;

    const question = lesson10Quiz[currentLesson10Question];

    let html = `
        <h3>Question ${currentLesson10Question + 1} of ${lesson10Quiz.length}</h3>
        <p>${question.question}</p>
    `;

    question.options.forEach((option, index) => {

        html += `
            <label>
                <input type="radio" name="lesson10quiz" value="${index}">
                ${option}
            </label><br><br>
        `;

    });

    container.innerHTML = html;

}

function checkLesson10Quiz() {

    const selected = document.querySelector('input[name="lesson10quiz"]:checked');

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    if (parseInt(selected.value) === lesson10Quiz[currentLesson10Question].correct) {

        lesson10Score++;
        document.getElementById("quizResult").innerHTML = "✅ Correct!";

    } else {

        document.getElementById("quizResult").innerHTML = "❌ Incorrect!";

    }

    setTimeout(() => {

        currentLesson10Question++;

        if (currentLesson10Question < lesson10Quiz.length) {

            loadLesson10Quiz();
            document.getElementById("quizResult").innerHTML = "";

        } else {

            document.getElementById("quizContainer").innerHTML = `
                <h2>🎉 Lesson 10 Completed!</h2>

                <p><strong>Correct:</strong> ${lesson10Score}</p>
                <p><strong>Incorrect:</strong> ${lesson10Quiz.length - lesson10Score}</p>
                <p><strong>Score:</strong> ${Math.round((lesson10Score / lesson10Quiz.length) * 100)}%</p>

                <br>

                <button class="hero-button" onclick="location.reload()">
                    🔄 Retake Quiz
                </button>

                <br><br>

                <button class="hero-button" onclick="finishLesson10()">
                    ➜ Continue to Lesson 11
                </button>
            `;

            const result = document.getElementById("quizResult");
            if (result) {
                result.innerHTML = "";
            }

            const btn = document.getElementById("checkAnswerBtn");
            if (btn) {
                btn.style.display = "none";
            }

        }

    }, 1000);

}

window.checkLesson10Quiz = checkLesson10Quiz;

async function finishLesson10() {

    const { completeLesson } = await import("./progress.js");

    await completeLesson(10);

    window.location.href = "lesson11.html";

}

window.finishLesson10 = finishLesson10;

// =======================================
// Lesson 11 Quiz
// =======================================

let currentLesson11Question = 0;
let lesson11Score = 0;

function loadLesson11Quiz() {

    const container = document.getElementById("quizQuestions");

    if (!container) return;

    const question = lesson11Quiz[currentLesson11Question];

    let html = `
        <h3>Question ${currentLesson11Question + 1} of ${lesson11Quiz.length}</h3>
        <p>${question.question}</p>
    `;

    question.options.forEach((option, index) => {

        html += `
            <label>
                <input type="radio" name="lesson11quiz" value="${index}">
                ${option}
            </label><br><br>
        `;

    });

    container.innerHTML = html;

}

function checkLesson11Quiz() {

    const selected = document.querySelector('input[name="lesson11quiz"]:checked');

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    if (parseInt(selected.value) === lesson11Quiz[currentLesson11Question].correct) {

        lesson11Score++;
        document.getElementById("quizResult").innerHTML = "✅ Correct!";

    } else {

        document.getElementById("quizResult").innerHTML = "❌ Incorrect!";

    }

    setTimeout(() => {

        currentLesson11Question++;

        if (currentLesson11Question < lesson11Quiz.length) {

            loadLesson11Quiz();
            document.getElementById("quizResult").innerHTML = "";

        } else {

            document.getElementById("quizContainer").innerHTML = `
                <h2>🎉 Lesson 11 Completed!</h2>

                <p><strong>Correct:</strong> ${lesson11Score}</p>
                <p><strong>Incorrect:</strong> ${lesson11Quiz.length - lesson11Score}</p>
                <p><strong>Score:</strong> ${Math.round((lesson11Score / lesson11Quiz.length) * 100)}%</p>

                <br>

                <button class="hero-button" onclick="location.reload()">
                    🔄 Retake Quiz
                </button>

                <br><br>

                <button class="hero-button" onclick="finishLesson11()">
                    ➜ Continue to Lesson 12
                </button>
            `;

            const result = document.getElementById("quizResult");
            if (result) {
                result.innerHTML = "";
            }

            const btn = document.getElementById("checkAnswerBtn");
            if (btn) {
                btn.style.display = "none";
            }

        }

    }, 1000);

}

window.checkLesson11Quiz = checkLesson11Quiz;

async function finishLesson11() {

    const { completeLesson } = await import("./progress.js");

    await completeLesson(11);

    window.location.href = "lesson12.html";

}

window.finishLesson11 = finishLesson11;

// =======================================
// Lesson 12 Quiz
// =======================================

let currentLesson12Question = 0;
let lesson12Score = 0;

function loadLesson12Quiz() {

    const container = document.getElementById("quizQuestions");

    if (!container) return;

    const question = lesson12Quiz[currentLesson12Question];

    let html = `
        <h3>Question ${currentLesson12Question + 1} of ${lesson12Quiz.length}</h3>
        <p>${question.question}</p>
    `;

    question.options.forEach((option, index) => {

        html += `
            <label>
                <input type="radio" name="lesson12quiz" value="${index}">
                ${option}
            </label><br><br>
        `;

    });

    container.innerHTML = html;

}

function checkLesson12Quiz() {

    const selected = document.querySelector('input[name="lesson12quiz"]:checked');

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    if (parseInt(selected.value) === lesson12Quiz[currentLesson12Question].correct) {

        lesson12Score++;
        document.getElementById("quizResult").innerHTML = "✅ Correct!";

    } else {

        document.getElementById("quizResult").innerHTML = "❌ Incorrect!";

    }

    setTimeout(() => {

        currentLesson12Question++;

        if (currentLesson12Question < lesson12Quiz.length) {

            loadLesson12Quiz();
            document.getElementById("quizResult").innerHTML = "";

        } else {

            document.getElementById("quizContainer").innerHTML = `
                <h2>🎉 Lesson 12 Completed!</h2>

                <p><strong>Correct:</strong> ${lesson12Score}</p>
                <p><strong>Incorrect:</strong> ${lesson12Quiz.length - lesson12Score}</p>
                <p><strong>Score:</strong> ${Math.round((lesson12Score / lesson12Quiz.length) * 100)}%</p>

                <br>

                <button class="hero-button" onclick="location.reload()">
                    🔄 Retake Quiz
                </button>

                <br><br>

                <button class="hero-button" onclick="finishLesson12()">
                    ➜ Continue to Lesson 13
                </button>
            `;

            const result = document.getElementById("quizResult");
            if (result) result.innerHTML = "";

            const btn = document.getElementById("checkAnswerBtn");
            if (btn) btn.style.display = "none";

        }

    }, 1000);

}

window.checkLesson12Quiz = checkLesson12Quiz;

async function finishLesson12() {

    const { completeLesson } = await import("./progress.js");

    await completeLesson(12);

    window.location.href = "lesson13.html";

}

window.finishLesson12 = finishLesson12;

// =======================================
// Lesson 13 Quiz
// =======================================

let currentLesson13Question = 0;
let lesson13Score = 0;

function loadLesson13Quiz() {

    const container = document.getElementById("quizQuestions");

    if (!container) return;

    const question = lesson13Quiz[currentLesson13Question];

    let html = `
        <h3>Question ${currentLesson13Question + 1} of ${lesson13Quiz.length}</h3>
        <p>${question.question}</p>
    `;

    question.options.forEach((option, index) => {

        html += `
            <label>
                <input type="radio" name="lesson13quiz" value="${index}">
                ${option}
            </label><br><br>
        `;

    });

    container.innerHTML = html;

}

function checkLesson13Quiz() {

    const selected = document.querySelector('input[name="lesson13quiz"]:checked');

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    if (parseInt(selected.value) === lesson13Quiz[currentLesson13Question].correct) {

        lesson13Score++;
        document.getElementById("quizResult").innerHTML = "✅ Correct!";

    } else {

        document.getElementById("quizResult").innerHTML = "❌ Incorrect!";

    }

    setTimeout(() => {

        currentLesson13Question++;

        if (currentLesson13Question < lesson13Quiz.length) {

            loadLesson13Quiz();
            document.getElementById("quizResult").innerHTML = "";

        } else {

            document.getElementById("quizContainer").innerHTML = `
                <h2>🎉 Lesson 13 Completed!</h2>

                <p><strong>Correct:</strong> ${lesson13Score}</p>
                <p><strong>Incorrect:</strong> ${lesson13Quiz.length - lesson13Score}</p>
                <p><strong>Score:</strong> ${Math.round((lesson13Score / lesson13Quiz.length) * 100)}%</p>

                <br>

                <button class="hero-button" onclick="location.reload()">
                    🔄 Retake Quiz
                </button>

                <br><br>

                <button class="hero-button" onclick="finishLesson13()">
                    ➜ Continue to Lesson 14
                </button>
            `;

            const result = document.getElementById("quizResult");
            if (result) result.innerHTML = "";

            const btn = document.getElementById("checkAnswerBtn");
            if (btn) btn.style.display = "none";

        }

    }, 1000);

}

window.checkLesson13Quiz = checkLesson13Quiz;

async function finishLesson13() {

    const { completeLesson } = await import("./progress.js");

    await completeLesson(13);

    window.location.href = "lesson14.html";

}

window.finishLesson13 = finishLesson13;

// =======================================
// Lesson 14 Quiz
// =======================================

let currentLesson14Question = 0;
let lesson14Score = 0;

function loadLesson14Quiz() {

    const container = document.getElementById("quizQuestions");

    if (!container) return;

    const question = lesson14Quiz[currentLesson14Question];

    let html = `
        <h3>Question ${currentLesson14Question + 1} of ${lesson14Quiz.length}</h3>
        <p>${question.question}</p>
    `;

    question.options.forEach((option, index) => {

        html += `
            <label>
                <input type="radio" name="lesson14quiz" value="${index}">
                ${option}
            </label><br><br>
        `;

    });

    container.innerHTML = html;

}

function checkLesson14Quiz() {

    const selected = document.querySelector('input[name="lesson14quiz"]:checked');

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    if (parseInt(selected.value) === lesson14Quiz[currentLesson14Question].correct) {

        lesson14Score++;
        document.getElementById("quizResult").innerHTML = "✅ Correct!";

    } else {

        document.getElementById("quizResult").innerHTML = "❌ Incorrect!";

    }

    setTimeout(() => {

        currentLesson14Question++;

        if (currentLesson14Question < lesson14Quiz.length) {

            loadLesson14Quiz();
            document.getElementById("quizResult").innerHTML = "";

        } else {

            document.getElementById("quizContainer").innerHTML = `
                <h2>🎉 Lesson 14 Completed!</h2>

                <p><strong>Correct:</strong> ${lesson14Score}</p>
                <p><strong>Incorrect:</strong> ${lesson14Quiz.length - lesson14Score}</p>
                <p><strong>Score:</strong> ${Math.round((lesson14Score / lesson14Quiz.length) * 100)}%</p>

                <br>

                <button class="hero-button" onclick="location.reload()">
                    🔄 Retake Quiz
                </button>

                <br><br>

                <button class="hero-button" onclick="finishLesson14()">
                    ➜ Continue to Lesson 15
                </button>
            `;

            const result = document.getElementById("quizResult");
            if (result) result.innerHTML = "";

            const btn = document.getElementById("checkAnswerBtn");
            if (btn) btn.style.display = "none";

        }

    }, 1000);

}

window.checkLesson14Quiz = checkLesson14Quiz;

async function finishLesson14() {

    const { completeLesson } = await import("./progress.js");

    await completeLesson(14);

    window.location.href = "lesson15.html";

}

window.finishLesson14 = finishLesson14;


// =======================================
// Lesson 15 Quiz
// =======================================

let currentLesson15Question = 0;
let lesson15Score = 0;

function loadLesson15Quiz() {

    const container = document.getElementById("quizQuestions");

    if (!container) return;

    const question = lesson15Quiz[currentLesson15Question];

    let html = `
        <h3>Question ${currentLesson15Question + 1} of ${lesson15Quiz.length}</h3>
        <p>${question.question}</p>
    `;

    question.options.forEach((option, index) => {

        html += `
            <label>
                <input type="radio" name="lesson15quiz" value="${index}">
                ${option}
            </label><br><br>
        `;

    });

    container.innerHTML = html;

}

function checkLesson15Quiz() {

    const selected = document.querySelector('input[name="lesson15quiz"]:checked');

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    if (parseInt(selected.value) === lesson15Quiz[currentLesson15Question].correct) {

        lesson15Score++;
        document.getElementById("quizResult").innerHTML = "✅ Correct!";

    } else {

        document.getElementById("quizResult").innerHTML = "❌ Incorrect!";

    }

    setTimeout(() => {

        currentLesson15Question++;

        if (currentLesson15Question < lesson15Quiz.length) {

            loadLesson15Quiz();
            document.getElementById("quizResult").innerHTML = "";

        } else {

            document.getElementById("quizContainer").innerHTML = `
                <h2>🎉 Lesson 15 Completed!</h2>

                <p><strong>Correct:</strong> ${lesson15Score}</p>
                <p><strong>Incorrect:</strong> ${lesson15Quiz.length - lesson15Score}</p>
                <p><strong>Score:</strong> ${Math.round((lesson15Score / lesson15Quiz.length) * 100)}%</p>

                <br>

                <button class="hero-button" onclick="location.reload()">
                    🔄 Retake Quiz
                </button>

                <br><br>

                <button class="hero-button" onclick="finishLesson15()">
                    ➜ Continue to Lesson 16
                </button>
            `;

            const result = document.getElementById("quizResult");
            if (result) result.innerHTML = "";

            const btn = document.getElementById("checkAnswerBtn");
            if (btn) btn.style.display = "none";

        }

    }, 1000);

}

window.checkLesson15Quiz = checkLesson15Quiz;

async function finishLesson15() {

    const { completeLesson } = await import("./progress.js");

    await completeLesson(15);

    window.location.href = "lesson16.html";

}

window.finishLesson15 = finishLesson15;

// =======================================
// Lesson 16 Quiz
// =======================================

let currentLesson16Question = 0;
let lesson16Score = 0;

function loadLesson16Quiz() {

    const container = document.getElementById("quizQuestions");

    if (!container) return;

    const question = lesson16Quiz[currentLesson16Question];

    let html = `
        <h3>Question ${currentLesson16Question + 1} of ${lesson16Quiz.length}</h3>
        <p>${question.question}</p>
    `;

    question.options.forEach((option, index) => {

        html += `
            <label>
                <input type="radio" name="lesson16quiz" value="${index}">
                ${option}
            </label><br><br>
        `;

    });

    container.innerHTML = html;

}

function checkLesson16Quiz() {

    const selected = document.querySelector('input[name="lesson16quiz"]:checked');

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    if (parseInt(selected.value) === lesson16Quiz[currentLesson16Question].correct) {

        lesson16Score++;
        document.getElementById("quizResult").innerHTML = "✅ Correct!";

    } else {

        document.getElementById("quizResult").innerHTML = "❌ Incorrect!";

    }

    setTimeout(() => {

        currentLesson16Question++;

        if (currentLesson16Question < lesson16Quiz.length) {

            loadLesson16Quiz();
            document.getElementById("quizResult").innerHTML = "";

        } else {

            document.getElementById("quizContainer").innerHTML = `
                <h2>🎉 Lesson 16 Completed!</h2>

                <p><strong>Correct:</strong> ${lesson16Score}</p>
                <p><strong>Incorrect:</strong> ${lesson16Quiz.length - lesson16Score}</p>
                <p><strong>Score:</strong> ${Math.round((lesson16Score / lesson16Quiz.length) * 100)}%</p>

                <br>

                <button class="hero-button" onclick="location.reload()">
                    🔄 Retake Quiz
                </button>

                <br><br>

                <button class="hero-button" onclick="finishLesson16()">
                    ➜ Continue to Lesson 17
                </button>
            `;

            const result = document.getElementById("quizResult");
            if (result) result.innerHTML = "";

            const btn = document.getElementById("checkAnswerBtn");
            if (btn) btn.style.display = "none";

        }

    }, 1000);

}

window.checkLesson16Quiz = checkLesson16Quiz;

async function finishLesson16() {

    const { completeLesson } = await import("./progress.js");

    await completeLesson(16);

    window.location.href = "lesson17.html";

}

window.finishLesson16 = finishLesson16;

// =======================================
// Lesson 17 Quiz
// =======================================

let currentLesson17Question = 0;
let lesson17Score = 0;

function loadLesson17Quiz() {

    const container = document.getElementById("quizQuestions");

    if (!container) return;

    const question = lesson17Quiz[currentLesson17Question];

    let html = `
        <h3>Question ${currentLesson17Question + 1} of ${lesson17Quiz.length}</h3>
        <p>${question.question}</p>
    `;

    question.options.forEach((option, index) => {

        html += `
            <label>
                <input type="radio" name="lesson17quiz" value="${index}">
                ${option}
            </label><br><br>
        `;

    });

    container.innerHTML = html;

}

function checkLesson17Quiz() {

    const selected = document.querySelector('input[name="lesson17quiz"]:checked');

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    if (parseInt(selected.value) === lesson17Quiz[currentLesson17Question].correct) {

        lesson17Score++;
        document.getElementById("quizResult").innerHTML = "✅ Correct!";

    } else {

        document.getElementById("quizResult").innerHTML = "❌ Incorrect!";

    }

    setTimeout(() => {

        currentLesson17Question++;

        if (currentLesson17Question < lesson17Quiz.length) {

            loadLesson17Quiz();
            document.getElementById("quizResult").innerHTML = "";

        } else {

            document.getElementById("quizContainer").innerHTML = `
                <h2>🎉 Lesson 17 Completed!</h2>

                <p><strong>Correct:</strong> ${lesson17Score}</p>
                <p><strong>Incorrect:</strong> ${lesson17Quiz.length - lesson17Score}</p>
                <p><strong>Score:</strong> ${Math.round((lesson17Score / lesson17Quiz.length) * 100)}%</p>

                <br>

                <button class="hero-button" onclick="location.reload()">
                    🔄 Retake Quiz
                </button>

                <br><br>

                <button class="hero-button" onclick="finishLesson17()">
                    ➜ Continue to Lesson 18
                </button>
            `;

            const result = document.getElementById("quizResult");
            if (result) result.innerHTML = "";

            const btn = document.getElementById("checkAnswerBtn");
            if (btn) btn.style.display = "none";

        }

    }, 1000);

}

window.checkLesson17Quiz = checkLesson17Quiz;

async function finishLesson17() {

    const { completeLesson } = await import("./progress.js");

    await completeLesson(17);

    window.location.href = "lesson18.html";

}

window.finishLesson17 = finishLesson17;

// =======================================
// Lesson 18 Quiz
// =======================================

let currentLesson18Question = 0;
let lesson18Score = 0;

function loadLesson18Quiz() {

    const container = document.getElementById("quizQuestions");

    if (!container) return;

    const question = lesson18Quiz[currentLesson18Question];

    let html = `
        <h3>Question ${currentLesson18Question + 1} of ${lesson18Quiz.length}</h3>
        <p>${question.question}</p>
    `;

    question.options.forEach((option, index) => {

        html += `
            <label>
                <input type="radio" name="lesson18quiz" value="${index}">
                ${option}
            </label><br><br>
        `;

    });

    container.innerHTML = html;

}

function checkLesson18Quiz() {

    const selected = document.querySelector('input[name="lesson18quiz"]:checked');

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    if (parseInt(selected.value) === lesson18Quiz[currentLesson18Question].correct) {

        lesson18Score++;
        document.getElementById("quizResult").innerHTML = "✅ Correct!";

    } else {

        document.getElementById("quizResult").innerHTML = "❌ Incorrect!";

    }

    setTimeout(() => {

        currentLesson18Question++;

        if (currentLesson18Question < lesson18Quiz.length) {

            loadLesson18Quiz();
            document.getElementById("quizResult").innerHTML = "";

        } else {

            document.getElementById("quizContainer").innerHTML = `
                <h2>🎉 Lesson 18 Completed!</h2>

                <p><strong>Correct:</strong> ${lesson18Score}</p>
                <p><strong>Incorrect:</strong> ${lesson18Quiz.length - lesson18Score}</p>
                <p><strong>Score:</strong> ${Math.round((lesson18Score / lesson18Quiz.length) * 100)}%</p>

                <br>

                <button class="hero-button" onclick="location.reload()">
                    🔄 Retake Quiz
                </button>

                <br><br>

                <button class="hero-button" onclick="finishLesson18()">
                    ➜ Continue to Lesson 19
                </button>
            `;

            const result = document.getElementById("quizResult");
            if (result) result.innerHTML = "";

            const btn = document.getElementById("checkAnswerBtn");
            if (btn) btn.style.display = "none";

        }

    }, 1000);

}

window.checkLesson18Quiz = checkLesson18Quiz;

async function finishLesson18() {

    const { completeLesson } = await import("./progress.js");

    await completeLesson(18);

    window.location.href = "lesson19.html";

}

window.finishLesson18 = finishLesson18;
