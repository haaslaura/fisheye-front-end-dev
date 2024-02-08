/**********************************************************************

This file contains the template function for display photographer's informations

**********************************************************************/

export function photographerIdentityTemplate(photographersData) {
	
	console.log("Fichier relié");
	
	// Destructures the photographersData object and creates as many constants as necessary
	const { name, id, portrait, city, country, tagline, price } = photographersData;
	
	const imagePhotographer = document.createElement("img");
	imagePhotographer.setAttribute("src", `../assets/photographers/${portrait}`);
	imagePhotographer.setAttribute("alt", "");
	
	const priceText = document.createElement("p");
	priceText.textContent = price ? `${price}€/jour` : "Aucune information pour le moment";
	
	function getPhotographerIdentity() {
		
		const infoPhotographer = document.createElement("p");
		
		const namePhotographer = document.createElement("h1");
		namePhotographer.textContent = name;
		
		const locationText = document.createElement("h2");
		locationText.textContent = `${city}, ${country}`;
		
		const sloganText = document.createElement("h3");
		sloganText.textContent = tagline;
		
		infoPhotographer.appendChild(namePhotographer);
		infoPhotographer.appendChild(locationText);
		infoPhotographer.appendChild(sloganText);
		
		return (infoPhotographer);
	}
	
	return { id, imagePhotographer, priceText, getPhotographerIdentity };
}