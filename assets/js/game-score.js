'use-strict';

// Declare const for DOM elements
const housePick = localStorage.getItem('housePick');;
const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

/**
 * Show High Score List
 * Return name, score and which house was played
 */
highScoresList.innerHTML = highScores

.map(score => {
    return `<li class="high-score">${score.name} - ${score.score} Points <img class="house small flex-center" src="assets/images/${score.house}.png" alt="House Log">`
})
.join("");

function deleteStorage() {
    localStorage.clear();
  }