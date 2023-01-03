'use strict';

// Hamburger Menu
/**
 * Set width, margin for hamburger menu
 */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("hamburger").style.visibility = "hidden";
  document.getElementById("hamburger").style.marginLeft = "250px";
}


/**
 * Reverse width, margin for hamburger menu
 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("hamburger").style.visibility = "visible";
  document.getElementById("hamburger").style.marginLeft = "0";
}

//Game 

/**
 * Start the game with house picked by user
 */
function newHouse(currentHouse) {
  const housePick = currentHouse.getAttribute("data-house")
  console.log(housePick);
  localStorage.setItem('housePick', housePick);
}

