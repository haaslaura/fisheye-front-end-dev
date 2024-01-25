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
        lightboxLink.setAttribute("aria-label", "Ouvre la vue lightbox");
        
        const elementMedia = document.createElement("video");
        elementMedia.setAttribute("src", `./assets/photographersmedia/${this._photographerId}/${this._video}`);
        elementMedia.setAttribute("type", "video/mp4");
        
        const infoMediaInsert = document.createElement("div");
        infoMediaInsert.className = "info-media";
        
        const titleMedia = document.createElement("h5");
        titleMedia.innerHTML = this._title;
        
        const likeMedia = document.createElement("p");
        likeMedia.innerHTML = `${this._likes} <label class="heart-checkbox">
			<input tabindex="0" id="heartbox-id_${this._id}" class="heartbox" name="heartbox" type="checkbox" aria-label="Liker cette image">
			<i id="heart-empty-id_${this._id}" class="fa-regular fa-heart heart-empty" aria-label="Dislike"></i>
			<i id="heart-full-id_${this._id}" class="fa-solid fa-heart heart-full" aria-label="Like"></i>		
		</label>`       
        
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