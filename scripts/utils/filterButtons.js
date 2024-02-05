/*******************************************************

This file contains the functions for the filters buttons

*******************************************************/

import { MediaFactory } from "../classes/MediaFactory.js";
import { displayGallery } from "../pages/photographer.js";

/***********************/
/** GLOABAL VARIABLES **/
/***********************/
const dropBtn = document.querySelector(".btn_drop"); // btn principal
const dropdown = document.querySelector(".dropdown"); // tout le menu, btn + ul
const dropdownContent = document.querySelector(".dropdown_content"); // liste ul
const filterBtns = document.querySelectorAll("ul button"); // Tous les boutons de la liste ul


export function displayFilter(mediaData) {
   
    dropBtn.addEventListener("click", () => openDropdownContent(mediaData));

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

// Faire disparaitre le bouton et apparaitre le menu
function openDropdownContent(mediaData) {   
    dropBtn.style.display = "none";
    dropBtn.setAttribute("aria-hidden", "true");
    dropdownContent.style.maxHeight = "100%";
    dropdownContent.setAttribute("aria-hidden", "false");
    dropdownContent.setAttribute("aria-expanded", "true");
    
    trapFocusIn();
    addFilterEvent(mediaData);
}

// Faire disparaitre le menu et remettre le bouton
function closeFilterMenu() {
    dropdownContent.style.maxHeight = "0";
    dropdownContent.setAttribute("aria-hidden", "true");
    dropBtn.style.display = "flex";
    dropBtn.setAttribute("aria-hidden", "false");
}


/*********************/
/**** TRAP FOCUS *****/
/*********************/

function trapFocusIn() {
	dropdownContent.addEventListener("keydown", function(e) {
		
		let isTabPressed = e.key === "Tab" || e.keyCode === 9;
		if (!isTabPressed) return;
		
		let focusableElement = filterBtns;
		let firstFocusableElement = focusableElement[0];
		let lastFocusableElement = focusableElement[focusableElement.length - 1];
		
		if (e.shiftKey) {
			// If the Shift key is held down, moves the focus to the previous element
			if (document.activeElement === firstFocusableElement) {
				lastFocusableElement.focus();
				e.preventDefault();
			}
		} else {
			// Otherwise, moves the focus to the next element
			if (document.activeElement === lastFocusableElement) {
				firstFocusableElement.focus();
				e.preventDefault();
			}
		}
	});
}


/**********************/
/** FILTER FUNCTIONS **/
/**********************/

// Evènement sur les boutons, en fonction de l'id
function addFilterEvent(mediaData) {
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            switch (btn.id) {
                case 'btnPopularity':
                    sortByPopularity(mediaData);
                    break;
                case 'btnDate':
                    sortByDate(mediaData);
                    break;
                case 'btnTitle':
                    sortByTitle(mediaData);
                    break;
                default:
                    console.log("Erreur, aucune fonction trie disponible");
            }
        });
    });
}


function sortByPopularity(mediaData) {
    console.log("trie par popularité");

    const mediaArray = mediaData.map(media => new MediaFactory(media));
    console.log(mediaArray);
}

function sortByDate(mediaData) {
    console.log("trie par date");

    const mediaArray = mediaData.map(media => new MediaFactory(media));
    console.log(mediaArray);
}

function sortByTitle(mediaData) {
    console.log("trie par titre");

    const mediaArray = mediaData.map(media => new MediaFactory(media));
    console.log("Tableau avant sort()");
    console.log(mediaArray);

    mediaArray.sort((a, b) => {
        if (a._title > b._title) {
            return 1;
        } else {
            return -1;
        }
    });
    
    console.log("Tableau après sort()");
    console.log(mediaArray);

    const newMediaData = Object.assign({}, mediaArray);
    console.log(newMediaData);

    displayGallery(newMediaData);
}



// Exemple de fonction trie
/*
function triAlphabetique() {
    medias.sort((a, b) => {
        if (a.nom > b.nom)
        return 1
        else
        return -1
    });
    
    displayAllMedia(medias)
}
*/