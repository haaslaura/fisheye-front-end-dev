/**********************************************************************

This JavaScript code is linked to the photographer.html page

**********************************************************************/

// Importing data, functions & classes
import { photographerIdentityTemplate } from "../templates/photographerCard.js";

import { getData } from "../utils/getData.js";
import { addNewLike } from "../utils/addNewLike.js";
import { displayNumberTotalOfLike } from "../utils/totalLike.js";
import { initLightbox } from "../utils/galleryLightbox.js";
import { displayFilter } from "../utils/filterButtons.js";

import { MediaFactory } from "../classes/MediaFactory.js";



// Get the photographer's id from the URL
let params = new URLSearchParams(document.location.search);
let idItem = parseInt(params.get("id"));
initPage();


// Only retrieve photographer information from his id
async function getPhotographerById(id) {
	
	try {
		// Retrieve data
		const data = await getData();
		
		// Check whether the data contains photographers
		if (data?.photographers) {
			const photographersArray = data.photographers;
			return photographersArray.find((element) => element.id === id);
		}
		console.log("Aucune donnée sur le photographe trouvée.");
		
	} catch (error) {
		console.error("Erreur lors de l'affichage du photographe :", error);
	}
}


// Show info for the photographer whose id this is
function displayData(photographer) {
	
	// Recovering info divs from the photographer
	const headerCol1 = document.getElementById("photograph-header-col1");
	const headerCol3 = document.getElementById("photograph-header-col3");
	const priceInsert = document.getElementById("photographer-price");
	
	// Using the template
	const photographerModel = photographerIdentityTemplate(photographer);
	const infoPhotographer = photographerModel.getPhotographerIdentity();
	
	headerCol1.appendChild(infoPhotographer);
	headerCol3.appendChild(photographerModel.imagePhotographer);
	priceInsert.appendChild(photographerModel.priceText);
	
}

// Initialise the page
async function initPage() {
	
	// Recovers data from photographer
	const photographer = await getPhotographerById(idItem);
	displayData(photographer);
	
	// Retrieve the photographer's media array
	const mediaData = await getMediaById(idItem);
	
	// Sorting data using the factory
	const mediaArray = mediaData.map(media => new MediaFactory(media));
	
	displayGallery(mediaArray);
	displayNumberTotalOfLike(mediaArray);
	displayFilter(mediaArray);
	initLightbox(mediaArray);
}


// Retrieve media info from the photographer whose id it is
async function getMediaById(id) {
	
	try {
		// Retrieve data
		const data = await getData();
		
		// Check whether the data contains photographers
		if (data?.media) {
			const mediaArray = data.media;
			return mediaArray.filter((media) => media.photographerId === id);
		}
		console.log("Aucune donnée media trouvée.");
		
	} catch (error) {
		console.error("Erreur lors de l'affichage du media :", error);
	}
}


// Show media gallery
export async function displayGallery(mediaArray) {
	
	// Clean the block call up the filter function
	document.querySelector(".media-section__media-card").innerHTML = "";
	
	// Displaying the gallery using the template
	mediaArray.forEach(media => {
		document.querySelector(".media-section__media-card").appendChild(media.getMediaDOM());
	});
	
	addNewLike();
}