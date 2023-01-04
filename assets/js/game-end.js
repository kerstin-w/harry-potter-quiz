'use-strict';

// Declare const for DOM elements
const username = document.getElementById('username');
const endScore = document.getElementById('end-score');
const lastScore = localStorage.getItem('lastScore');
const housePick = localStorage.getItem('housePick');;
const saveScore = document.getElementById('save-score');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

//Show users final game score
if (lastScore >= 80) {
    endScore.innerText = `${lastScore} Points! 
    You are a true ${housePick}`;
} else {
    endScore.innerText = `${lastScore} Points!`;
}

/**
 * Enable the save button
 * */
username.addEventListener('keyup', () => {
    saveScore.disabled = !username.value;
});

/**
 * Save username, score and which house was picked.
 * Forward user to score page.
 */
saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: lastScore,
        name: username.value,
        house: housePick,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(6);

    window.location.assign('game-score.html');
    localStorage.setItem('highScores', JSON.stringify(highScores));
};