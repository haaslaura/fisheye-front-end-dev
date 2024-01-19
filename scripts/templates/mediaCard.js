export function mediaCard(mediaData) {
	
	// Déstructure l'objet mediaData et crée autant de constante que nécessaire
	const { id, photographerId, title, image, video, likes, date, price } = mediaData;
	
	function createMediaCard() {

		// Creating the 'media' item
		const articleMedia = document.createElement("article");

		// Creating elements to include in 'article' & attributes
		const lightboxLink = document.createElement("a");
		lightboxLink.setAttribute("href", "");
		lightboxLink.setAttribute("role", "button");
		lightboxLink.setAttribute("aria-label", "Ouvre la vue lightbox");

		const imageMedia = document.createElement("img");
		imageMedia.setAttribute("src", `./assets/images/photographersmedia/${photographerId}/${image}`);
		imageMedia.setAttribute("alt", title);
		
		// Or
		const videoMedia = document.createElement("video");
		videoMedia.setAttribute("source", `./asset/images/photographersmedia/${photographerId}/${video}`);
		videoMedia.setAttribute("type", "video/mp4");
		
		// And
		const infoMediaInsert = document.createElement("div");
		infoMediaInsert.className = "info-media";

		const titleMedia = document.createElement("h5");
		titleMedia.innerHTML = title;
		
		const likeMedia = document.createElement("p");
		likeMedia.innerHTML = `${likes} <i aria-label=\"likes\" class=\"fa-solid fa-heart\"></i>`;

		// Intègre les éléments ensemble		
		articleMedia.appendChild(lightboxLink);
		lightboxLink.appendChild(imageMedia);
		lightboxLink.appendChild(videoMedia);

		articleMedia.appendChild(infoMediaInsert);
		infoMediaInsert.appendChild(titleMedia);
		infoMediaInsert.appendChild(likeMedia);		
	
		return (articleMedia);
	}
	
	return { id, date, price, createMediaCard };
}