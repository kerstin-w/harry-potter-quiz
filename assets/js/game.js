'use strict';
// Declare const for DOM elements
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progress-text');
const scoreText = document.getElementById('score');
const housePick = localStorage.getItem("housePick");
const progressBar = document.getElementById('progress-bar');

// Const with the value of points per correct question and max number of questions per game
const pointsCorrectAnswer = 10;
const maxQuestions= 10;

//Declare variables for game
let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let gameQuestions = [];
let time = 1500;
let acceptingAnswers;

//Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function () {
    newGame(housePick);
});

/**
 * Start a new game
 * */
function newGame(housePick) {
    score = 0;
    questionCounter = 0;
    gameQuestions = questionsArray[housePick];
    availableQuestions = [...gameQuestions];
    getNewQuestion();
    localStorage.setItem('housePick', housePick);
    console.log(housePick);
    document.getElementById('house-logo').innerHTML = `<img src="assets/images/${housePick}.png" alt="Hogwards House Logo">`;
}


/**
 * Get a new question
 * */
function getNewQuestion() {
    localStorage.setItem('lastScore', score);
    if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
        return window.location.assign('game-end.html');;
    }

    questionCounter++;
    progressText.innerText = 'Question ' + questionCounter + '/' + maxQuestions;


    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const choiceNumber = choice.dataset.choice;
        const image = currentQuestion['choice' + choiceNumber]

        if (currentQuestion['choice' + choiceNumber].includes('assets/images')) {
            choice.replaceChildren();
            choice.innerHTML += `<img src=${image} data-choice="${choiceNumber}">`
        } else {
            choice.innerText = currentQuestion['choice' + choiceNumber];
        }
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
    progressBar.value += 1;
}


/**
 * Compare user's answer with correct answer. If it is true the user will get displayed a message in green and if it is wrong a message appears in red
 * */
choices.forEach(choice => {
    choice.addEventListener('click', e => {

        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.choice;
        const currentCorrectAnswer = currentQuestion.correctAnswer;
        const currentCorrectAnswerBox = document.querySelector(`[data-choice="${currentCorrectAnswer}"]`);
        console.log(selectedAnswer);
        const classToApply =
            selectedAnswer == currentQuestion.correctAnswer ? 'correct' : 'incorrect';

        let correctAnswerReply = ['Correct'];
        const correctAnswerReplyIndex = Math.floor(Math.random() * correctAnswerReply.length);
        const corrrectAnswerReplyRandom = correctAnswerReply[correctAnswerReplyIndex];

        let wrongAnswerReply = ['Wrong'];

        const wrongAnswerReplyIndex = Math.floor(Math.random() * wrongAnswerReply.length);
        const wrongAnswerReplyRandom = wrongAnswerReply[wrongAnswerReplyIndex];
        selectedChoice.classList.add(classToApply);

        if (selectedAnswer == currentQuestion.correctAnswer) {
            incrementScore(pointsCorrectAnswer);

            if (questionCounter <= 2) {
                question.innerHTML = correctAnswerReply[1];
            } else if (questionCounter == maxQuestions) {
                question.innerHTML = correctAnswerReply[0];
            } else {
                question.innerHTML = corrrectAnswerReplyRandom;
            }
            question.classList.add('correct-text');

        } else {
            if (questionCounter == maxQuestions || questionCounter <= 2) {
                question.innerHTML = wrongAnswerReply[0];
            } else {
                question.innerHTML = wrongAnswerReplyRandom;
            }

            question.classList.add('incorrect-text');
            currentCorrectAnswerBox.classList.add('correct');

        }

        loadNewQuestion(() => {
            selectedChoice.classList.remove(classToApply);
            currentCorrectAnswerBox.classList.remove('correct');
            question.classList.remove('correct-text');
            question.classList.remove('incorrect-text');
            getNewQuestion();
        }, time);
    });
});

function incrementScore(num) {
    score += num;
    scoreText.innerText = score;
}
