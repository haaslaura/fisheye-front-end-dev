// This JavaScript code is linked to the photographer.html page


// 1 - Importing data and functions

import { photographerTemplate } from "../templates/photographerInfo.js";
import { mediaCard } from "../templates/mediaCard.js";
import { getData } from "../utils/getData.js";
import { MediaFactory } from "../media/MediaFactory.js";


// 2a - Only retrieve photographer from his id (étape 2b en bas de la page)
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


// 3- Afficher les info du photographe dont c'est l'id

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
	
	/* Reste à ajouter le nombre de likes */
	priceInsert.appendChild(items.priceText);
	
}

// A CORRIGER ////////////////////////////////
// Répété deux fois/sorti de la fonction, pour le test
let params = new URLSearchParams(document.location.search);
let idItem = parseInt(params.get("id"));

async function initPage() {
	// 2b - Récupérer les informations du photographe uniquement avec son id
	let params = new URLSearchParams(document.location.search);
	let idItem = parseInt(params.get("id"));
	
	// Recovers data from photographer
	const photographer = await getPhotographerById(idItem);
	displayData(photographer);
}

initPage();


// 4 - Récupérer les infos média du photographe dont c'est l'id

// 5 - Afficher les médias

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

async function displayAllMedia() {
	
	// Récupérer les données dans une variable
	const mediaData = await getMediaById(idItem);
	
	// Passer les données à la moulinette du factory
	const imageArray = mediaData.map(media => new MediaFactory(media, 'image'));
	const videoArray = mediaData.map(media => new MediaFactory(media, 'video'));
	
	const allMedia = imageArray.concat(videoArray);
	
	// Afficher les infos via le template
	allMedia.forEach(media => {
		
		// >> Créer un autre fichier dans Template pour gérer l'affichage
		const mediaSection = document.querySelector(".media-section__media-card");
		const template = new mediaCard(media);
		mediaSection.appendChild(template.createMediaCard());
	})
}

displayAllMedia();


// 6 - Trier les médias

