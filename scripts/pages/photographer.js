/**********************************************************************

This JavaScript code is linked to the photographer.html page

**********************************************************************/

// Importing data, functions & classes
import { photographerTemplate } from "../templates/photographerInfo.js";

import { getData } from "../utils/getData.js";
import { addNewLike } from "../utils/addNewLike.js";

import { MediaFactory } from "../classes/MediaFactory.js";
import { Lightbox } from "../classes/GalleryLightbox.js";



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
	const photographerModel = photographerTemplate(photographer);
	const items = photographerModel.createItems();
	
	// Add content in DOM
	headerCol1.appendChild(items.namePhotographer);
	headerCol1.appendChild(items.locationText);
	headerCol1.appendChild(items.sloganText);
	headerCol3.appendChild(items.imagePhotographer);
	priceInsert.appendChild(items.priceText);
}

// Initialise the page
async function initPage() {
	
	// Recovers data from photographer
	const photographer = await getPhotographerById(idItem);
	displayData(photographer);

	// Retrieve the photographer's media array
	const mediaData = await getMediaById(idItem);
	displayGallery(mediaData);
	addNewLike();

	// Initialise the lightbox
	Lightbox.init(mediaData);
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
async function displayGallery(mediaData) {

	// Vider le bloc avec tous les média
	// Pour pouvoir faire un ré appel de cette fonction dans le filtre
	
	// Sorting data using the factory
	const mediaArray = mediaData.map(media => new MediaFactory(media));
	
	// Prepare to add up the likes
	const emptyLikesArray = [];
	
	// Displaying the gallery using the template
	mediaArray.forEach(media => {
		
		const mediaSection = document.querySelector(".media-section__media-card");
		mediaSection.appendChild(media.getMediaDOM());
		
		// Take each like of these media and put them in a table
		emptyLikesArray.push(media._likes);
	})
	
	// Add likes & Install the total in the DOM
	const totalLikes = emptyLikesArray.reduce(function(accumulator, currentValue) {
		return accumulator + currentValue;
	});
	
	const insertPrice = document.getElementById("photographer-price");
	const priceLikes = document.createElement("p");
	priceLikes.innerHTML = `<span id="total-likes">${totalLikes}</span><span><i class="fa-solid fa-heart"></i></span>`;
	insertPrice.appendChild(priceLikes);

}