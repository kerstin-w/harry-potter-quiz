// Declare const for DOM elements
const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

/**
 * Show High Score List
 * Return name, score and which house was played
 */
highScoresList.innerHTML = highScores.map((score) => {
    return `
        <tr>
            <td>${score.name}</td>
            <td>${score.score}</td>
            <td><img class="small" src="assets/images/${score.house}.png" alt="House Logo"></td>
        </tr>
    `;
}).join("");

function deleteStorage() {
    localStorage.clear();
    return window.location.assign("./index.html");
}