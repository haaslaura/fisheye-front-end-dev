import { Media } from "./Media.js";

export class Video extends Media {
    constructor (data) {
        super(data); // pass parameters to the Media class
        
        this._video = data.video;
    }
    
    getMediaDOM() {
        const element = document.createElement("video");
        element.setAttribute("src", `./assets/photographersmedia/${this._photographerId}/${this._video}`);
        element.setAttribute("type", "video/mp4");
        return element;
    }
}