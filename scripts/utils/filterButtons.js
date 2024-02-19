/*******************************************************

This file contains the functions for the filters buttons

*******************************************************/

import { displayGallery } from "../pages/photographer.js";

/***********************/
/** GLOABAL VARIABLES **/
/***********************/
const dropBtn = document.querySelector(".btn_drop"); // Main button
const dropdown = document.querySelector(".dropdown"); // All menu, btn + ul
const dropdownContent = document.querySelector(".dropdown_content"); // ul list
const filterBtns = document.querySelectorAll("ul button"); // All button of ul list


/*********************/
/**** INIT FILTER ****/
/*********************/
export function displayFilter(mediaArray) {
	
	dropBtn.addEventListener("click", () => openDropdownContent());

	trapFocusIn();
	addFilterEvent(mediaArray);
	
	// Close filter at click outside
	document.addEventListener("click", (event) => {
		if (!dropdown.contains(event.target)) {
			closeFilterMenu();
		}
	});
	
	// Close filter when escape key is pressed
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape" && dropdownContent.style.maxHeight !== "0") {
			closeFilterMenu();
		}
	});	
}


/**********************/
/** OPENING & CLOSE ***/
/**********************/

// Make the button disappear and the menu appear
function openDropdownContent() {   
	dropBtn.style.display = "none";
	dropBtn.setAttribute("aria-hidden", "true");
	dropBtn.setAttribute("aria-expanded", "true");
	
	dropdownContent.style.maxHeight = "100%";
	dropdownContent.setAttribute("aria-hidden", "false");
	dropdownContent.setAttribute("aria-expanded", "true"); 
	dropdownContent.style.display = "block";
}

// Clear the menu and press the button again
function closeFilterMenu() {
	
	dropdownContent.style.maxHeight = "0";
	dropdownContent.setAttribute("aria-hidden", "true");
	dropdownContent.setAttribute("aria-expanded", "false");
	dropdownContent.style.display = "none";
	
	dropBtn.style.display = "flex";
	dropBtn.setAttribute("aria-hidden", "false");
}


/*********************/
/**** TRAP FOCUS *****/
/*********************/

function trapFocusIn() {
	dropdownContent.addEventListener("keydown", function (e) {
		
		let isTabPressed = e.key === "Tab" || e.keyCode === 9;

		if (!isTabPressed) return;
		
		let firstFocusableElement = filterBtns[0]; // filterBtns is all button of ul list
		let lastFocusableElement = filterBtns[filterBtns.length - 1];
		
		if (e.shiftKey) {
			// If the Shift key is held down, moves the focus to the previous element
			if (document.activeElement === firstFocusableElement) {
				e.preventDefault();
				lastFocusableElement.focus();
			}
		} else {
			// Otherwise, moves the focus to the next element
			if (document.activeElement === lastFocusableElement) {
				e.preventDefault();
				firstFocusableElement.focus();
			}
		}
	});
}


/**********************/
/** FILTER FUNCTIONS **/
/**********************/

// Button events, based on id
function addFilterEvent(mediaArray) {
	filterBtns.forEach(btn => {
		btn.addEventListener("click", () => {
			switch (btn.id) {
			case "btnPopularity":
				sortByPopularity(mediaArray);
				break;
			case "btnDate":
				sortByDate(mediaArray);
				break;
			case "btnTitle":
				sortByTitle(mediaArray);
				break;
			default:
				console.log("Erreur, aucune fonction trie disponible");
			}
		});
	});
}


function sortByPopularity(mediaArray) {
	
	mediaArray.sort((a, b) => {
		if (a._likes > b._likes) {
			return -1;
		} else {
			return 1;
		}
	});
	
	// Reset gallery
	displayGallery(mediaArray);	
	closeFilterMenu();
	
	// Retrieve span main button and replace the contents with the name of the current filter
	document.getElementById("current_filter").innerHTML = "Popularité";
}

function sortByDate(mediaArray) {
	
	mediaArray.sort((a, b) => {
		if (a._date > b._date) {
			return 1;
		} else {
			return -1;
		}
	});

	// Reset gallery
	displayGallery(mediaArray);	
	closeFilterMenu();
	
	// Retrieve span main button and replace the contents with the name of the current filter
	document.getElementById("current_filter").innerHTML = "Date";
}

function sortByTitle(mediaArray) {
	
	mediaArray.sort((a, b) => {
		if (a._title > b._title) {
			return 1;
		} else {
			return -1;
		}
	});
	
	// Reset gallery
	displayGallery(mediaArray);	
	closeFilterMenu();
	
	// Retrieve span main button and replace the contents with the name of the current filter
	document.getElementById("current_filter").innerHTML = "Titre";
}