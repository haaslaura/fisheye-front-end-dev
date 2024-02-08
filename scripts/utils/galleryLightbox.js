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
let currentIndex;


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
	
	document.querySelectorAll("article a")
	.forEach((link, index, links) => {
		
		link.addEventListener("click", (e) => {
			try {
				e.preventDefault();
				currentIndex = index; // Index update
				
				lightbox.showModal();
				displayMedia(link.dataset.id, mediaArray);
				trapFocusIn(lightbox);
				
				// Add arrow buttons
				nextLightBoxBtn.addEventListener("click", () => {
					
					currentIndex = (currentIndex + 1) % links.length;
					const nextLink = links[currentIndex];
					displayMedia(nextLink.dataset.id, mediaArray);
					
				});
				
				prevLightBoxBtn.addEventListener("click", () => {
					
					currentIndex = (currentIndex - 1 + links.length) % links.length;
					const prevLink = links[currentIndex];
					displayMedia(prevLink.dataset.id, mediaArray);
					
				});
			} catch (error) {
				console.error("Une erreur est survenue :", error);
			}
		});
	});
}


/*********************/
/*** DISPLAY MEDIA ***/
/*********************/

function displayMedia(mediaId, mediaArray) {
	
	// Retrieve and empty the div to place media elements
	const mediaInfoInLightbox = document.querySelector("#lightbox div");
	mediaInfoInLightbox.innerHTML = "";
	
	// Search for the right media based on the link id
	const selectedMedia = mediaArray.find(media => media._id === parseInt(mediaId));
	
	// If the id is found, create the DOM elements
	if (selectedMedia) {
		
		if (selectedMedia._image) {
			// Display the image
			const lightboxMedia = document.createElement("img");
			lightboxMedia.setAttribute("src", `../../assets/photographersmedia/${selectedMedia._photographerId}/${selectedMedia._image}`);
			lightboxMedia.setAttribute("alt", "");
			lightboxMedia.setAttribute("aria-labelledby", "mediaTitle");
			
			const lightboxMediaTitle = document.createElement("p");
			lightboxMediaTitle.setAttribute("id", "mediaTitle");
			lightboxMediaTitle.innerHTML = `${selectedMedia._title}`;
			
			// Integrating elements into the DOM
			mediaInfoInLightbox.appendChild(lightboxMedia);
			mediaInfoInLightbox.appendChild(lightboxMediaTitle);
			
			return mediaInfoInLightbox;
			
		} else {
			// Display the video
			const lightboxMedia = document.createElement("video");
			lightboxMedia.setAttribute("controls", true);
			lightboxMedia.setAttribute("aria-labelledby", "mediaTitle");
			
			const sourceElement = document.createElement("source");
			sourceElement.setAttribute("src", `../../assets/photographersmedia/${selectedMedia._photographerId}/${selectedMedia._video}`);
			sourceElement.setAttribute("type", "video/mp4");
			lightboxMedia.appendChild(sourceElement);
			
			const lightboxMediaTitle = document.createElement("p");
			lightboxMediaTitle.setAttribute("id", "mediaTitle");
			lightboxMediaTitle.innerHTML = `${selectedMedia._title}`;
			
			// Integrating elements into the DOM
			mediaInfoInLightbox.appendChild(lightboxMedia);
			mediaInfoInLightbox.appendChild(lightboxMediaTitle);
			
			return mediaInfoInLightbox;
		}
	} else {
		console.log("Erreur, aucun média trouvé");
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