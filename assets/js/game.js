'use strict';
// Declare const for DOM elements
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progress-text');
const scoreText = document.getElementById('score');
const housePick = localStorage.getItem("housePick");
const progressBar = document.getElementById('progress-bar');
const myAudio = document.getElementById("audio");
const soundIcon = document.getElementById("soundIcon");
const audioOffIcon = document.getElementById("sound-off");
const audioOnIcon = document.getElementById("sound-on");

// Const for points for each question and maximum questions
const pointsCorrectAnswer = 10;
const maxQuestions = 10;

//Declare variables for game
let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let gameQuestions = [];
let time = 2000;
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

    //Display House logo depending on which house was picked by the user
    document.getElementById('house-logo').innerHTML = `<img src="assets/images/${housePick}.png" alt="Hogwards House Logo">`;

    localStorage.setItem('housePick', housePick);
}


/**
 * Get a new question
 * */
function getNewQuestion() {
    localStorage.setItem('lastScore', score);
    if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {

        //Forward user to end page once game is finished
        return window.location.assign('game-end.html');
    }

    //Counter for Scoreboard. Shows user numer of question and updates progrss bar
    questionCounter++;
    progressText.innerText = 'Question ' + questionCounter + '/' + maxQuestions;
    progressBar.value += 1;

    //Update question
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    //Update answer
    choices.forEach(choice => {
        const choiceNumber = choice.dataset.choice;
        const imageChoice = currentQuestion['choice' + choiceNumber];

        //Differentiate between image and text and display the appropriate answer
        if (currentQuestion['choice' + choiceNumber].includes('assets/images')) {
            choice.replaceChildren();
            choice.innerHTML += `<img src=${imageChoice} data-choice="${choiceNumber}">`
        } else {
            choice.innerText = currentQuestion['choice' + choiceNumber];
        }
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
}


/**
 * Compare user's answer with correct answer. 
 * If it is true the user will get displayed a message in green.
 * If it is wrong a message appears in red
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

        //Array for the correct/incorrect answer to the user
        let correctAnswerReply = ['Bombardo! Correct Answer!', 'Correct Answer! You are doing magical!', 'Yeah! Correct Answer!'];
        const corrrectAnswerReplyRandom = correctAnswerReply[Math.floor(Math.random() * correctAnswerReply.length)];

        let wrongAnswerReply = ['Expelliarmus! We got you! Wrong Answer', 'Are you a muggle? Wrong Answer!', "Oh no! Wrong Answer!"];
        const wrongAnswerReplyRandom = wrongAnswerReply[Math.floor(Math.random() * wrongAnswerReply.length)];

        //Add class to DIV in case choices were pictures and not text
        if (selectedChoice.nodeName === 'IMG') {
            selectedChoice.parentElement.classList.add(classToApply);
        } else {
            selectedChoice.classList.add(classToApply);
            console.log(selectedChoice.nodeName);
        }

        //Display random replies to user and show correct answer, in case user was wrong
        if (selectedAnswer == currentQuestion.correctAnswer) {
            incrementScore(pointsCorrectAnswer);
            question.innerHTML = corrrectAnswerReplyRandom;
            question.classList.add('correct-text');
        } else {
            question.innerHTML = wrongAnswerReplyRandom;
            question.classList.add('incorrect-text');
            currentCorrectAnswerBox.classList.add('correct');
        }

        /*Set the time out and load new question. 
        Created using information from FreeCodeCamp.*/
        setTimeout(() => {
            selectedChoice.classList.remove(classToApply);
            selectedChoice.parentElement.classList.remove(classToApply);
            currentCorrectAnswerBox.classList.remove('correct');
            question.classList.remove('correct-text', 'incorrect-text');
            getNewQuestion();
        }, time);
    });
});

/**
 * Update and display current score
 * */
function incrementScore(num) {
    score += num;
    scoreText.innerText = score;
}

/*Audio Player 
Created using information from Stackflow
https://stackoverflow.com/questions/27368778/how-to-toggle-audio-play-pause-with-one-button-or-link*/

/**
 * Play audio on button click
 */
function togglePlay() {
    if (myAudio.paused) {
        myAudio.play();
        audioOffIcon.classList.remove("hide");
        audioOnIcon.classList.add("hide");
    } else {
        myAudio.pause();
        audioOffIcon.classList.add("hide");
        audioOnIcon.classList.remove("hide");
    }
};