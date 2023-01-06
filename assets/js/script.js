'use strict';

// Hamburger Menu

// Declare const for DOM elements
const sideNav = document.getElementById("mySidenav");
const mainContent = document.getElementById("main");
const hamburger = document.getElementById("hamburger");
const headerLogo = document.getElementById("header-logo");

/**
 * Set width, margin for hamburger menu
 */
function openNav() {
  sideNav.classList.add('width-nav-open');
  mainContent.classList.add('margin-nav-open');
  hamburger.style.visibility = "hidden";
  hamburger.classList.add('margin-nav-open');
  headerLogo.classList.add('margin-nav-open');
}

/**
 * Reverse width, margin for hamburger menu
 */
function closeNav() {
  sideNav.classList.add('width-nav-close');
  mainContent.classList.add('margin-nav-close');
  hamburger.style.visibility = "visible";
  hamburger.classList.add('margin-nav-close');
  headerLogo.classList.add('margin-nav-close');
  sideNav.classList.remove('width-nav-open', 'width-nav-close');
  mainContent.classList.remove('margin-nav-open', 'margin-nav-close');
  hamburger.classList.remove('margin-nav-open', 'margin-nav-close')
  headerLogo.classList.remove('margin-nav-open', 'margin-nav-close')
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

