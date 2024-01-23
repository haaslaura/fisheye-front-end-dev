export function mediaCard(mediaData) {
	
	// Destructures the mediaData object and creates as many constants as necessary
	const { _title, _likes, _date } = mediaData;
	
	function createMediaCard() {
		
		// Creating the 'media' item
		const articleMedia = document.createElement("article");
		
		// Creating elements to include in 'article' & attributes
		const lightboxLink = document.createElement("a");
		lightboxLink.setAttribute("href", "");
		lightboxLink.setAttribute("role", "button");
		lightboxLink.setAttribute("aria-label", "Ouvre la vue lightbox");
		
		const infoMediaInsert = document.createElement("div");
		infoMediaInsert.className = "info-media";
		
		const titleMedia = document.createElement("h5");
		titleMedia.innerHTML = _title;
		
		const likeMedia = document.createElement("p");
		likeMedia.innerHTML = `${_likes} <i aria-label=\"likes\" class=\"fa-solid fa-heart\"></i>`;
		
		// Integrates elements together		
		articleMedia.appendChild(lightboxLink);
		lightboxLink.appendChild(mediaData.getMediaDOM());
		articleMedia.appendChild(infoMediaInsert);
		infoMediaInsert.appendChild(titleMedia);
		infoMediaInsert.appendChild(likeMedia);		
		
		return (articleMedia);
	}
	
	return { _date, _likes, createMediaCard };
}