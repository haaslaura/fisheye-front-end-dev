import { Media } from "./Media.js";

export class Video extends Media {
    constructor (data) {
        super(data); // pass parameters to the Media class
        
        this._video = data.video;
    }
    
    getMediaDOM() {
        // Creating the 'media' item
        const articleMedia = document.createElement("article");
        
        // Creating elements to include in 'article' & attributes
        const lightboxLink = document.createElement("a");
        lightboxLink.setAttribute("href", `../../assets/photographersmedia/${this._photographerId}/${this._video}`);
        lightboxLink.setAttribute("role", "button");
        lightboxLink.setAttribute("aria-label", "Opens the lightbox view");
        lightboxLink.dataset.id = `${this._id}`;

        const elementMedia = document.createElement("video");
        elementMedia.setAttribute("src", `./assets/photographersmedia/${this._photographerId}/${this._video}`);
        elementMedia.setAttribute("type", "video/mp4");
        
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