import { Media } from "./Media.js";

export class Image extends Media {
	constructor (data) {
		super(data); // pass parameters to the Media class
		
		this._image = data.image;
	}
	
	getMediaDOM() {
		// Creating the 'media' item
		const articleMedia = document.createElement("article");

		// Creating elements to include in 'article' & attributes
		const lightboxLink = document.createElement("a");
		//lightboxLink.setAttribute("href", `../../assets/photographersmedia/${this._photographerId}/${this._image}`);
		lightboxLink.setAttribute("role", "button");
		lightboxLink.setAttribute("aria-label", "Opens the lightbox view");
		lightboxLink.dataset.id = `${this._id}`;

		const elementMedia = document.createElement("img");
		elementMedia.setAttribute("src", `./assets/photographersmedia/${this._photographerId}/${this._image}`);
		elementMedia.setAttribute("alt", `${this._title}`);

		const infoMediaInsert = document.createElement("div");
		infoMediaInsert.className = "info-media";
		infoMediaInsert.setAttribute("id", `info-media_${this._id}`);
		
		const titleMedia = document.createElement("h5");
		titleMedia.innerHTML = this._title;
		
		const likeMedia = document.createElement("p");
		likeMedia.innerHTML = `<span class="like-number">${this._likes}</span>
		<span>
			<i tabindex="0" role="button" class="fa-regular fa-heart heart-empty" aria-label="Like this media"></i>
		</span>`;

		const priceText = document.createElement("p");
		priceText.textContent = this._price ? `${this._price}€/jour` : "Aucune information pour le moment";

		// Integrates elements together		
		articleMedia.appendChild(lightboxLink);
		lightboxLink.appendChild(elementMedia);
		articleMedia.appendChild(infoMediaInsert);
		infoMediaInsert.appendChild(titleMedia);
		infoMediaInsert.appendChild(likeMedia);		

		return articleMedia;
	}
}