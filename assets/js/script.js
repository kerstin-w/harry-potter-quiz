'use strict';

// Hamburger Menu

// Declare const for DOM elements
const sideNav = document.getElementById("mySidenav");
const mainContent = document.getElementById("main");
const hamburger = document.getElementById("hamburger");
const headerLogo = document.getElementById("header-logo");
const houseLogo = document.getElementById("house-logo");
const audioPlayer = document.getElementById("player");
const elmAddMargin = [mainContent, hamburger, headerLogo];
const elmHidden = [hamburger, houseLogo, audioPlayer];

/**
 * Set width & margin for hamburger menu
 */
function openNav() {
  for (let i = 0; i < elmAddMargin.length; i++) {
    elmAddMargin[i].classList.add('margin-nav-open');
  }

  for (let i = 0; i < elmHidden.length; i++) {
    elmHidden[i].style.visibility = "hidden";
  }
  sideNav.classList.add('width-nav-open');
};

/**
 * Reverse width & margin for hamburger menu
 */
function closeNav() {
  for (let i = 0; i < elmAddMargin.length; i++) {
    elmAddMargin[i].classList.remove('margin-nav-open');
  }

  for (let i = 0; i < elmHidden.length; i++) {
    elmHidden[i].style.visibility = "visible";
  }
  sideNav.classList.remove('width-nav-open');
};

//Game 
/**
 * Start the game with house picked by user
 */
function newHouse(currentHouse) {
  const housePick = currentHouse.getAttribute("data-house")
  console.log(housePick);
  localStorage.setItem('housePick', housePick);
};