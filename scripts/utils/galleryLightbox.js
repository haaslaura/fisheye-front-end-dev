/**********************************************************************

This file contains the functions for the gallery Lightbox

**********************************************************************/


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
export function initLightbox(mediaArray) {
    openingLightbox(mediaArray);
    closeLightbox();
}


/**********************/
/** OPENING LIGHTBOX **/
/**********************/
function openingLightbox(mediaArray) {
    
    // Récupérer tous les boutons pour ouvrir la lightbox
    document.querySelectorAll("article a")
    .forEach(link => {

        link.addEventListener("click", (e) => {
            e.preventDefault();
            lightbox.showModal();
            displayMedia(link.dataset.id, mediaArray);
            trapFocusIn(lightbox);
        });
    });
}


/*********************/
/*** DISPLAY MEDIA ***/
/*********************/


// Afficher le bon média et le bon titre
function displayMedia(mediaId, mediaArray) {

    // Récupérer la div pour placer les éléments du média
    const mediaInfoInLightbox = document.querySelector("#lightbox div");

    // Vider la div en prévision de l'affichage du média
    mediaInfoInLightbox.innerHTML = "";
    
    // Rechercher le bon média en fonction de l'id du lien
    const selectedMedia = mediaArray.find(media => media._id === parseInt(mediaId));
    
    // Si l'id est trouvé, créer les éléments du DOM
    if (selectedMedia) {

        if (selectedMedia._image) {
            // Afficher l'image
            const lightboxMedia = document.createElement("img");
            lightboxMedia.setAttribute("src", `../../assets/photographersmedia/${selectedMedia._photographerId}/${selectedMedia._image}`);
            lightboxMedia.setAttribute("alt", `${selectedMedia._title}`);

            const lightboxMediaTitle = document.createElement("h5");
            lightboxMediaTitle.innerHTML = `${selectedMedia._title}`;

            // Ajouter les éléments dans le DOM
            mediaInfoInLightbox.appendChild(lightboxMedia);
            mediaInfoInLightbox.appendChild(lightboxMediaTitle);

            return mediaInfoInLightbox;
        
        } else {
            // Afficher la vidéo
            const lightboxMedia = document.createElement("video");
            lightboxMedia.setAttribute("controls", true);

            const sourceElement = document.createElement("source");
            sourceElement.setAttribute("src", `../../assets/photographersmedia/${selectedMedia._photographerId}/${selectedMedia._video}`);
            sourceElement.setAttribute("type", "video/mp4");
            lightboxMedia.appendChild(sourceElement);

            const lightboxMediaTitle = document.createElement("h5");
            lightboxMediaTitle.innerHTML = `${selectedMedia._title}`;

            // Ajouter les éléments dans le DOM
            mediaInfoInLightbox.appendChild(lightboxMedia);
            mediaInfoInLightbox.appendChild(lightboxMediaTitle);

            return mediaInfoInLightbox;
        }
    }
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