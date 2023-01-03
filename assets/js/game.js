'use strict';
// Declare const for DOM elements
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const housePick = localStorage.getItem("housePick");

//Declare variables for game
let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let gameQuestions = [];
let time = 2100;

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
    //localStorage.setItem('housePick', JSON.stringify(housePick))
    document.getElementById('house-logo').innerHTML = `<img src="assets/images/${housePick}.png" alt="Hogwards House Logo">`;
}

/**
 * Load new question
 * */
function getNewQuestion() {

    questionCounter++;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const choiceNumber = choice.dataset.choice;
        const image = currentQuestion['choice' + choiceNumber]
        console.log(choice.firstElementChild);

        if (currentQuestion['choice' + choiceNumber].includes('assets/images')) {
            choice.replaceChildren();
            choice.innerHTML += `<img src=${image} data-choice="${choiceNumber}">`
        } else {
            choice.firstElementChild.innerText = currentQuestion['choice' + choiceNumber];
        }
    });

    availableQuestions.splice(questionIndex, 1);
}
