'use strict';

// Hamburger Menu

// Declare const for DOM elements
const sideNav = document.getElementById("mySidenav");
const mainContent = document.getElementById("main");
const hamburger = document.getElementById("hamburger");
const headerLogo = document.getElementById("header-logo");
const houseLogo = document.getElementById("house-logo");
const addMargin = [mainContent, hamburger, headerLogo];

/**
 * Set width & margin for hamburger menu
 */
function openNav() {

  for (var i = 0; i < addMargin.length; i++) {
    addMargin[i].classList.add('margin-nav-open');
  }

  sideNav.classList.add('width-nav-open');
  hamburger.style.visibility = "hidden";
  houseLogo.style.visibility = "hidden";
};

/**
 * Reverse width & margin for hamburger menu
 */
function closeNav() {

  for (var i = 0; i < addMargin.length; i++) {
    addMargin[i].classList.add('margin-nav-close');
  }

  for (var i = 0; i < addMargin.length; i++) {
    addMargin[i].classList.remove('margin-nav-open', 'margin-nav-close');
  }
  sideNav.classList.add('width-nav-close');
  hamburger.style.visibility = "visible";
  sideNav.classList.remove('width-nav-open', 'width-nav-close');
  houseLogo.style.visibility = "visible";
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