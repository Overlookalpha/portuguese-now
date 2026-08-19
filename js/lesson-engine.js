// =======================================
// Portuguese Now
// Lesson Engine - Module 2
// =======================================

const LessonEngine = {

    // ===================================
    // Initialize lesson
    // ===================================

    init: function(lesson) {

        if (!lesson) {
            console.error('Lesson data not found.');
            return;
        }

        this.lesson = lesson;

        this.renderHeader();
        this.renderObjectives();
        this.renderVocabulary();
        this.renderExpressions();
        this.renderListening();
        this.renderListeningChallenge();
        this.renderPractice();
    },


    // ===================================
    // Lesson Header
    // ===================================

    renderHeader: function() {

        const container = document.getElementById('lessonHeader');

        if (!container) return;

        container.innerHTML =
            '<div class="lesson-header-content">' +
                '<span class="lesson-module">Module ' +
                    this.lesson.module +
                '</span>' +

                '<h1>' +
                    this.lesson.title +
                '</h1>' +

                '<p>' +
                    this.lesson.subtitle +
                '</p>' +

                '<div class="lesson-meta">' +
                    '<span>⏱️ ' +
                        this.lesson.duration +
                    '</span>' +
                '</div>' +

            '</div>';
    },


    // ===================================
    // Learning Objectives
    // ===================================

    renderObjectives: function() {

        const container =
            document.getElementById('lessonObjectives');

        if (!container || !this.lesson.objectives) return;

        let html =
            '<h2>🎯 Learning Objectives</h2>' +
            '<ul>';

        this.lesson.objectives.forEach(function(objective) {

            html += '<li>' + objective + '</li>';

        });

        html += '</ul>';

        container.innerHTML = html;
    },


    // ===================================
    // Vocabulary
    // ===================================

    renderVocabulary: function() {

        const container =
            document.getElementById('lessonVocabulary');

        if (!container || !this.lesson.vocabulary) return;

        let html =
            '<h2>📚 Vocabulary</h2>' +
            '<div class="vocabulary-grid">';

        this.lesson.vocabulary.forEach(function(item) {

            html +=
                '<div class="vocabulary-card">' +

                    '<div class="vocabulary-emoji">' +
                        (item.emoji || '🇧🇷') +
                    '</div>' +

                    '<h3>' +
                        item.portuguese +
                    '</h3>' +

                    '<p>' +
                        item.english +
                    '</p>' +

                    '<button ' +
                        'class="listen-button" ' +
                        'onclick="LessonEngine.speak(' +
                        JSON.stringify(item.portuguese) +
                        ')">' +
                        '🔊 Listen' +
                    '</button>' +

                '</div>';

        });

        html += '</div>';

        container.innerHTML = html;
    },


    // ===================================
    // Useful Expressions
    // ===================================

    renderExpressions: function() {

        const container =
            document.getElementById('lessonExpressions');

        if (!container || !this.lesson.expressions) return;

        let html =
            '<h2>💬 Useful Expressions</h2>' +
            '<div class="expressions-container">';

        this.lesson.expressions.forEach(function(expression) {

            html +=
                '<div class="expression-card">' +

                    '<div class="expression-portuguese">' +
                        '🇧🇷 ' +
                        expression.portuguese +
                    '</div>' +

                    '<div class="expression-english">' +
                        expression.english +
                    '</div>' +

                    '<button ' +
                        'class="listen-button" ' +
                        'onclick="LessonEngine.speak(' +
                        JSON.stringify(expression.portuguese) +
                        ')">' +
                        '🔊 Listen' +
                    '</button>' +

                '</div>';

        });

        html += '</div>';

        container.innerHTML = html;
    },


    // ===================================
    // Listen & Repeat
    // ===================================

    renderListening: function() {

        const container =
            document.getElementById('lessonListening');

        if (!container || !this.lesson.repeat) return;

        let html =
            '<h2>🗣️ Listen & Repeat</h2>' +

            '<p class="section-intro">' +
                'Listen carefully and repeat the Portuguese sentence ' +
                'out loud. You can listen as many times as you need.' +
            '</p>' +

            '<div class="repeat-container">';

        this.lesson.repeat.forEach(function(item, index) {

            html +=
                '<div class="repeat-card">' +

                    '<div class="repeat-number">' +
                        (index + 1) +
                    '</div>' +

                    '<div class="repeat-content">' +

                        '<h3>' +
                            '🇧🇷 ' +
                            item.portuguese +
                        '</h3>' +

                        '<p>' +
                            item.english +
                        '</p>' +

                        '<button ' +
                            'class="listen-button" ' +
                            'onclick="LessonEngine.speak(' +
                            JSON.stringify(item.portuguese) +
                            ')">' +
                            '🔊 Listen' +
                        '</button>' +

                        '<span class="repeat-label">' +
                            '🗣️ Repeat aloud' +
                        '</span>' +

                    '</div>' +

                '</div>';

        });

        html += '</div>';

        container.innerHTML = html;
    },


    // ===================================
    // Listening Challenge
    // ===================================

    renderListeningChallenge: function() {

        const container =
            document.getElementById('lessonChallenge');

        if (!container || !this.lesson.listening) return;

        container.innerHTML =
            '<h2>🎧 Listening Challenge</h2>' +

            '<p>' +
                'Listen to the Portuguese word or sentence ' +
                'and choose the correct answer.' +
            '</p>' +

            '<div id="lessonListeningChallenge"></div>';
    },


    // ===================================
    // Practice
    // ===================================

    renderPractice: function() {

        const container =
            document.getElementById('lessonPractice');

        if (!container || !this.lesson.practice) return;

        let html =
            '<h2>✏️ Practice</h2>' +
            '<div class="practice-container">';

        this.lesson.practice.forEach(function(item) {

            html +=
                '<div class="practice-card">' +

                    '<p class="practice-question">' +
                        item.question +
                    '</p>' +

                    '<div class="practice-options">';

            item.options.forEach(function(option, index) {

                html +=
                    '<button ' +
                        'class="practice-option" ' +
                        'onclick="LessonEngine.checkPractice(' +
                        index + ', ' +
                        item.correct +
                        ', this)">' +
                        option +
                    '</button>';

            });

            html +=
                    '</div>' +

                    '<p class="practice-feedback"></p>' +

                '</div>';

        });

        html += '</div>';

        container.innerHTML = html;
    },


    // ===================================
    // Practice Answer
    // ===================================

    checkPractice: function(selected, correct, button) {

        const card = button.closest('.practice-card');

        if (!card) return;

        const feedback =
            card.querySelector('.practice-feedback');

        if (!feedback) return;

        if (selected === correct) {

            feedback.textContent =
                '✅ Correct! Great job!';

        } else {

            feedback.textContent =
                '❌ Not quite. Try again!';
        }
    },


    // =======================================
    // Brazilian Portuguese Speech
    // =======================================

    speak: function(text) {

        if (!window.speechSynthesis) {
            alert("Audio is not supported by this browser.");
            return;
        }

        const synth = window.speechSynthesis;

        synth.cancel();

        const utterance = new SpeechSynthesisUtterance(text);

        utterance.lang = "pt-BR";
        utterance.rate = 0.85;
        utterance.pitch = 1;
        utterance.volume = 1;

        const voices = synth.getVoices();

        let brazilianVoice = voices.find(function(voice) {
            return voice.lang === "pt-BR";
        });

        if (!brazilianVoice) {
            brazilianVoice = voices.find(function(voice) {
                return voice.lang &&
                    voice.lang.toLowerCase().startsWith("pt");
            });
        }

        if (brazilianVoice) {
            utterance.voice = brazilianVoice;
        }

        utterance.onerror = function(event) {
            console.error("Speech error:", event.error);
        };

        synth.speak(utterance);
    }

};


// =======================================
// Make Lesson Engine globally available
// =======================================

window.LessonEngine = LessonEngine;