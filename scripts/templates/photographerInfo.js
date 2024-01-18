export function photographerTemplate(photographersData) {
	// Déstructure l'objet photographersData et crée autant de constante que nécessaire
	const { name, id, portrait, city, country, tagline, price } = photographersData;
	
	// Crée la constante picture => pour ajouter le chemin du dossier où se trouve les photos au nom de la photo
	const picture = `assets/photographers/${portrait}`;
	
	function createItems() {
		const imagePhotographer = document.createElement("img");
		imagePhotographer.setAttribute("src", picture);
		// Alt vide permet d'ignorer la photo pour les lecteurs d'écran
		imagePhotographer.setAttribute("alt", "");
		
		const namePhotographer = document.createElement("h2");
		namePhotographer.textContent = name;
		
		const locationText = document.createElement("h3");
		locationText.textContent = `${city}, ${country}`;
		
		const sloganText = document.createElement("h4");
		sloganText.textContent = tagline;
		
		const priceText = document.createElement("p");
		priceText.textContent = price ? `${price}€/jour` : "Aucune information pour le moment";
		
		return {
			imagePhotographer,
			namePhotographer,
			locationText,
			sloganText,
			priceText,
		};
	}
	
	function createUserCardDOM() {
		// Creating the 'article' item
		const articlePhotographer = document.createElement("article");
		
		// Creating elements to include in 'article'
		const linkPhotographerPage = document.createElement("a");
		linkPhotographerPage.setAttribute("href", `/photographer.html?id=${id}`);
		linkPhotographerPage.setAttribute("role", "button");
		linkPhotographerPage.setAttribute("aria-label", `Lien vers la page de ${name}`);
		
		const portraitPhotographer = document.createElement("div");
		
		const {imagePhotographer, locationText, namePhotographer, priceText, sloganText} = createItems();
		
		// Integrating elements
		articlePhotographer.appendChild(linkPhotographerPage);
		linkPhotographerPage.appendChild(portraitPhotographer);
		portraitPhotographer.appendChild(imagePhotographer);
		portraitPhotographer.appendChild(namePhotographer);
		articlePhotographer.appendChild(locationText);
		articlePhotographer.appendChild(sloganText);
		articlePhotographer.appendChild(priceText);
		
		return (articlePhotographer);
	}
	
	return { createItems, createUserCardDOM };
}