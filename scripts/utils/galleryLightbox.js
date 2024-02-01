/**********************************************************************

This file contains the functions for the gallery Lightbox

**********************************************************************/

const lightbox = document.querySelector(".lightbox");


export function initLightbox(mediaData) {
    addEventOpeningLightbox(mediaData);
    addEventCloseLightbox();

    // Close lightbox when escape key is pressed
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && lightbox.style.display !== "none") {
            closeLightbox();
        }
    });
}


function addEventOpeningLightbox(mediaData) {
    
    // Récupérer tous les boutons pour ouvrir la lightbox
    const links = document.querySelectorAll("article a");

    // Pour chaque bouton, ajouter des évènements d'ouverture
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            openingLightbox(mediaData);
        });
        link.addEventListener("keypress", event => {
            event.preventDefault();
            openingLightbox(mediaData);
        });
    })
}


// Fonction pour ouvrir la galerie
function openingLightbox(mediaData) {

    // Modify the attributes of the lightbox
    lightbox.style.display = "block";
    lightbox.setAttribute("aria-hidden", "false");

    // Display the media and its title
    displayMedia(mediaData);
    
    // Modify the attributes of the rest of the site
	const otherContent = document.querySelectorAll("body > *:not(.lightbox)");
	otherContent.forEach(element => {
		element.setAttribute("aria-hidden", "true");
	});

    // Focus management
	const currentFocusedElement = document.querySelector(".lightbox");
	if (!currentFocusedElement) {
		currentFocusedElement.focus();
	}
}

function displayMedia(mediaData) {

    // Il faudrait parcourir le tableau des média, ouvrir le média réellement en cours (et son titre)
    
    // Récupérer le container pour l'affichage
    const mediaContainer = document.querySelector(".lightbox__container");

    // test
    console.log(mediaContainer);
    console.log(mediaData);

    mediaContainer.innerHTML = `
        <img src="${mediaData.url}" alt="${mediaData.title}">
        <h5>${mediaData.title}</h5>
    `;

}


function addEventCloseLightbox() {
    
    // Récupérer le bouton de fermeture
    const closeBtnLightbox = document.querySelector(".lightbox__close");

    // Ajout d'un évènement sur le bouton
    closeBtnLightbox.addEventListener("click", () => {
        closeLightbox();
    });
    closeBtnLightbox.addEventListener("keypress", event => {
        closeLightbox();
    });
}

// Fonction pour fermer la galerie
function closeLightbox() {
    
    // Modify the attributes of the rest of the site
    const otherContent = document.querySelectorAll("body > *:not(.lightbox)");
    otherContent.forEach(element => {
        element.setAttribute("aria-hidden", "false");
    });

    // Modify the attributes of the lightbox
    lightbox.setAttribute("aria-hidden", "true");
    lightbox.style.display = "none";
}



// Une fonction pour contruire le DOM

// Fonction(s) flèche gauche et flèche droite