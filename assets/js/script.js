'use strict';

// Hamburger Menu
/**
 * Set width, margin and background color for hamburger menu
 */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("hamburger").style.visibility = "hidden";
  document.getElementById("hamburger").style.marginLeft = "250px";
}


/**
 * Reverse width, margin and background color for hamburger menu
 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("hamburger").style.visibility = "visible";
  document.getElementById("hamburger").style.marginLeft = "0";
}