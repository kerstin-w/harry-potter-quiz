'use-strict';

// Declare const for DOM elements
const username = document.getElementById('username');
const finalScore = document.getElementById('final-score');
const lastScore = localStorage.getItem('lastScore');
const housePick = localStorage.getItem('housePick');;
const saveScore = document.getElementById('save-score');

//Show users final game score
finalScore.innerText = lastScore + " Points";