import { Media } from "./Media.js";


// 1 - Créer deux classes : une classe image et une classe vidéo (ici)

// 4 - J'ai étendu le code existant pour que la classe Video
// puisse se servir de la classe Media

export class Video extends Media {
    constructor (data) {
        super(data); // Super, c'est pour passer des paramètres à la class Media, ici les data
        
        this.video = data.video;
    }

    get video() {
		return `assets/images/photographersmedia/${this.video}`;
	}
}