// =======================================
// Portuguese Now
// Module 2 - Lessons Data
// =======================================

const module2Lessons = {

    lesson21: {

        id: 21,

        module: 2,

        title: 'Building Sentences',

        subtitle: 'Learn how to build simple sentences in Brazilian Portuguese.',

        duration: '30 min',

        objectives: [
            'Understand the basic structure of a Portuguese sentence.',
            'Learn how to use subject, verb and object.',
            'Build simple sentences in Brazilian Portuguese.',
            'Listen to and repeat useful Portuguese sentences.'
        ],

        vocabulary: [

            {
                portuguese: 'eu',
                english: 'I',
                emoji: '🙋'
            },

            {
                portuguese: 'você',
                english: 'you',
                emoji: '👉'
            },

            {
                portuguese: 'ele',
                english: 'he',
                emoji: '👨'
            },

            {
                portuguese: 'ela',
                english: 'she',
                emoji: '👩'
            },

            {
                portuguese: 'gosto',
                english: 'like',
                emoji: '❤️'
            },

            {
                portuguese: 'tenho',
                english: 'have',
                emoji: '🤲'
            },

            {
                portuguese: 'quero',
                english: 'want',
                emoji: '🎯'
            },

            {
                portuguese: 'preciso',
                english: 'need',
                emoji: '🙏'
            }

        ],

        expressions: [

            {
                portuguese: 'Eu gosto de café.',
                english: 'I like coffee.'
            },

            {
                portuguese: 'Eu quero água.',
                english: 'I want water.'
            },

            {
                portuguese: 'Eu tenho um carro.',
                english: 'I have a car.'
            },

            {
                portuguese: 'Eu preciso de ajuda.',
                english: 'I need help.'
            },

            {
                portuguese: 'Você fala português.',
                english: 'You speak Portuguese.'
            }

        ],

        repeat: [

            {
                portuguese: 'Eu gosto de música.',
                english: 'I like music.'
            },

            {
                portuguese: 'Eu quero aprender português.',
                english: 'I want to learn Portuguese.'
            },

            {
                portuguese: 'Eu preciso de ajuda.',
                english: 'I need help.'
            },

            {
                portuguese: 'Você fala português.',
                english: 'You speak Portuguese.'
            },

            {
                portuguese: 'Eu moro em Portugal.',
                english: 'I live in Portugal.'
            }

        ],

        listening: [

            {
                portuguese: 'Eu gosto de café.',
                options: [
                    'I like coffee.',
                    'I want coffee.',
                    'I have coffee.'
                ],
                correct: 0
            },

            {
                portuguese: 'Eu quero água.',
                options: [
                    'I need water.',
                    'I want water.',
                    'I drink water.'
                ],
                correct: 1
            },

            {
                portuguese: 'Eu tenho um carro.',
                options: [
                    'I have a car.',
                    'I want a car.',
                    'I drive a car.'
                ],
                correct: 0
            }

        ],

        practice: [

            {
                question: 'Choose the correct sentence:',
                options: [
                    'Eu gosto de café.',
                    'Eu café gosto.',
                    'Gosto eu café.'
                ],
                correct: 0
            },

            {
                question: 'Choose the correct sentence:',
                options: [
                    'Eu quero água.',
                    'Eu água quero.',
                    'Quero eu água.'
                ],
                correct: 0
            },

            {
                question: 'Choose the correct sentence:',
                options: [
                    'Eu tenho um carro.',
                    'Eu um carro tenho.',
                    'Tenho eu carro um.'
                ],
                correct: 0
            }

        ]

    }

};


// =======================================
// Get Module 2 Lesson
// =======================================

function getModule2Lesson(lessonNumber) {

    const key = 'lesson' + lessonNumber;

    return module2Lessons[key];

}


// =======================================
// Make data globally available
// =======================================

window.module2Lessons = module2Lessons;

window.getModule2Lesson = getModule2Lesson;