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

    }

};

const listeningQuestions = [

{
audio:"Casa",
options:["Casa","Cama","Carro","Copo"],
correct:0
},

{
audio:"Janela",
options:["Porta","Janela","Mesa","Livro"],
correct:1
},

{
audio:"Rua",
options:["Rua","Casa","Escola","Praia"],
correct:0
},

{
audio:"Livro",
options:["Livro","Caneta","Bola","Carro"],
correct:0
},

{
audio:"Gato",
options:["Cachorro","Gato","Pássaro","Peixe"],
correct:1
}

];
