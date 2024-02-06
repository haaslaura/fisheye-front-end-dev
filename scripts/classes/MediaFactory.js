import { Video } from "./Video.js";
import { Image } from "./Image.js";

export class MediaFactory {
	constructor(data) {
        
		if (data.image) {
			return new Image(data);
            
		} else if (data.video) {
			return new Video(data);
            
		} else {
			throw "Format inconnu";
		}      
	}
}