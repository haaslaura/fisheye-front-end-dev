// This JavaScript code is linked to the photographer.html page


// 0 - Importing data and functions
import { photographerTemplate } from "../templates/photographerInfo.js";
import { mediaCard } from "../templates/mediaCard.js";
import { getData } from "../utils/getData.js";
import { MediaFactory } from "../media/MediaFactory.js";


// Get the photographer's id from the URL
let params = new URLSearchParams(document.location.search);
let idItem = parseInt(params.get("id"));


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


async function initPage() {
	
	// Recovers data from photographer
	const photographer = await getPhotographerById(idItem);
	displayData(photographer);
}

initPage();


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
async function displayAllMedia() {
	
	// Retrieve the photographer's media array
	const mediaData = await getMediaById(idItem);
	
	// Sorting data using the factory
	const mediaArray = mediaData.map(media => new MediaFactory(media));
	
	// Displaying the gallery using the template
	mediaArray.forEach(media => {
		
		const mediaSection = document.querySelector(".media-section__media-card");
		const template = new mediaCard(media);
		mediaSection.appendChild(template.createMediaCard());
		

		
		/*
		console.log(allMedia._likes);
		const test = allMedia._likes.reduce(
			(accumulateur, valeurCourante) => accumulateur + valeurCourante
			);
			console.log(test);
			*/
			
		})
	}
	
	displayAllMedia();
	
	
	// 6 - Additionner les likes
	
	// 0 - englober dans une fonction
	
	// Prendre chaque média
	
	// Prendre chaque like de ces médias
	// Les additionner / reduce() ?
	// Afficher la valeur
	
	
	// 7 - Trier les médias
	
	