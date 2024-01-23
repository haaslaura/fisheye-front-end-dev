import { Media } from "./Media.js";

export class Image extends Media {
	constructor (data) {
		super(data); // pass parameters to the Media class
		
		this._image = data.image;
	}
	
	getMediaDOM() {
		const element = document.createElement("img");
		element.setAttribute("src", `./assets/photographersmedia/${this._photographerId}/${this._image}`);
		element.setAttribute("alt", this._title);
		return element;
	}
}