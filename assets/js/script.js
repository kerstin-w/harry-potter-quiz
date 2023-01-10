// Hamburger Menu

// Declare const for DOM elements
const sideNav = document.getElementById("mySidenav");
const mainContent = document.getElementById("main");
const hamburger = document.getElementById("hamburger");
const headerLogo = document.getElementById("header-logo");
const houseLogo = document.getElementById("house-logo");
const audioPlayer = document.getElementById("player");
const elmAddMargin = [mainContent, hamburger, headerLogo];

/**
 * Set width & margin for hamburger menu
 */
function openNav() {
  for (let i = 0; i < elmAddMargin.length; i++) {
    elmAddMargin[i].classList.add('margin-nav-open');
  }

  sideNav.classList.add('width-nav-open');
  hamburger.style.visibility = "hidden";
  houseLogo.style.visibility = "hidden";
  audioPlayer.style.visibility = "hidden";
  audioPlayer.classList.add('margin-nav-open');
}

/**
 * Reverse width & margin for hamburger menu
 */
function closeNav() {
  for (let i = 0; i < elmAddMargin.length; i++) {
    elmAddMargin[i].classList.remove('margin-nav-open');
  }

  sideNav.classList.remove('width-nav-open');
  hamburger.style.visibility = "visible";
  houseLogo.style.visibility = "visible";
  audioPlayer.style.visibility = "visible";
  audioPlayer.classList.remove('margin-nav-open');
}

//Game 

/**
 * Start the game with house picked by user
 */
function newHouse(currentHouse) {
  const house = currentHouse.getAttribute("data-house");
  localStorage.setItem('house', house);
}