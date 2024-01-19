import { Video } from "./Video.js";
import { Image } from "./Image.js";

export class MediaFactory {
    constructor(data, type) {
        
        // Si type correspond à image, retourner format image
        if (type === 'image') {
            return new Image(data);
            
            // Si type correspond à video, retourner format video
        } else if (type === 'video') {
            return new Video(data);
            
        } else {
            throw 'Format inconnu';
        }      
    }
}