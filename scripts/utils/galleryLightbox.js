/**********************************************************************

This file contains the functions for the gallery Lightbox

**********************************************************************/

import { MediaFactory } from "../classes/MediaFactory.js";

/***********************/
/** GLOABAL VARIABLES **/
/***********************/
const lightbox = document.getElementById("lightbox");
const closeLightBoxBtn = document.querySelector(".lightbox__close");
const nextLightBoxBtn = document.querySelector(".lightbox__next");
const prevLightBoxBtn = document.querySelector(".lightbox__prev");


/*********************/
/*** INIT LIGHTBOX ***/
/*********************/
export function initLightbox(mediaData) {
    openingLightbox(mediaData);
    closeLightbox();
}


/**********************/
/** OPENING LIGHTBOX **/
/**********************/
function openingLightbox(mediaData) {
    
    // Récupérer tous les boutons pour ouvrir la lightbox
    const openLightboxLinks = document.querySelectorAll("article a");

    openLightboxLinks.forEach(link => {

        // Pour chaque lien, récupérer son id
        let idLink = link.dataset.id;

        link.addEventListener("click", (e) => {
            e.preventDefault();
            lightbox.showModal();
            displayMedia(mediaData, idLink);
            trapFocusIn(lightbox);
        });
    });
}


/*********************/
/*** DISPLAY MEDIA ***/
/*********************/


// Afficher le bon média et le bon titre
function displayMedia(mediaData, idLink) {

    console.log("pouet");
    console.log(mediaData);
    
    // Sorting data using the factory
	const mediaArray = mediaData.map(media => new MediaFactory(media));
    console.log(mediaArray);
    
    // Récupérer l'id du lien en cours,
    // donc récupérer tous les liens et les parcourir
    
    console.log(idLink); // donne bien l'id du lien cliqué

    for (let i = 0; i < mediaArray.length; i++) {
        
        if (mediaArray[i]._id === idLink) {
            // construire le dom
            console.log("c'est le bon média");

        } else {
            console.log("Erreur, média indisponible");
            console.log(mediaArray[i]._id);
        }
    }

    /*
    mediaArray.forEach(media => {

        if (media._id === idLink) {
            // construire le dom
            console.log("pouet");

        } else {
            console.log("Erreur, média indisponible");
        }
    });
    */
}



/*********************/
/**** TRAP FOCUS *****/
/*********************/

function trapFocusIn(lightbox) {
	lightbox.addEventListener("keydown", function(e) {
		
		let isTabPressed = e.key === "Tab" || e.keyCode === 9;
		if (!isTabPressed) return;
		
		let focusableElement = lightbox.querySelectorAll("button");
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


/*
    // Pour chaque bouton, ajouter des évènements d'ouverture
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            openingLightbox(mediaData, this.dataset.id);
        });
        link.addEventListener("keypress", function (event) {
            event.preventDefault();
            openingLightbox(mediaData, this.dataset.id);
        });
    })
*/


/********************/
/** CLOSE LIGHTBOX **/
/********************/

function closeLightbox() {

    // Le bouton "Fermer" ferme le dialogue
    closeLightBoxBtn.addEventListener("click", () => {
        lightbox.close();
    });

    // Close modal at click outside the modal
    closeLightBoxBtn.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.close();
        }
    });
}