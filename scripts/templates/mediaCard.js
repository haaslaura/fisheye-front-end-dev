export function mediaCard(mediaData) {
	
	// Déstructure l'objet mediaData et crée autant de constante que nécessaire
	const { id, photographerId, title, image, video, likes, date, price } = mediaData;
	
	// Crée la constante picture => pour ajouter le chemin du dossier où se trouve les photos au nom de la photo
	// const picture = `assets/photographers/${portrait}`;
	
	function createMediaCard() {

		// Creating the 'media' item
		const articleMedia = document.createElement("article");

		// Creating elements to include in 'article' & attributes
		const lightboxLink = document.createElement("a");
		lightboxLink.setAttribute("href", "");
		lightboxLink.setAttribute("role", "button");
		lightboxLink.setAttribute("aria-label", "Ouvre la vue lightbox");

		const imageMedia = document.createElement("img");
		imageMedia.setAttribute("src", `asset/images/photographersmedia/${name}/${image}`); // ERREUR ici, je n'ai pas le nom du photographe :(
		imageMedia.setAttribute("alt", title);
		
		// Or
		const videoMedia = document.createElement("video");
		videoMedia.setAttribute("source", `asset/images/photographersmedia/${name}/${video}`);
		videoMedia.setAttribute("type", "video/mp4");
		
		// And
		const infoMediaInsert = document.createElement("div");
		infoMediaInsert.className = "info-media";

		const titleMedia = document.createElement("h5");
		const likeMedia = document.createElement("p");

		// Intègre les éléments ensemble
		contenant.appendChild(contenu)
		
		articleMedia.appendChild(lightboxLink);
		lightboxLink.appendChild(imageMedia);
		lightboxLink.appendChild(videoMedia);

		articleMedia.appendChild(infoMediaInsert);
		infoMediaInsert.appendChild(titleMedia);
		infoMediaInsert.appendChild(likeMedia);		
	
		return (articleMedia);
	}
	
	return { createMediaCard };
}