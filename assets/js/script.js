'use strict';

// Hamburger Menu
/**
 * Set width, margin and background color for hamburger menu
 */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("header").style.marginLeft = "250px";
  document.getElementById("hamburger").style.display = "none";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}


/**
 * Reverse width, margin and background color for hamburger menu
 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("header").style.marginLeft = "0";
  document.getElementById("hamburger").style.display = "block";
  document.body.style.backgroundColor = "white";
}