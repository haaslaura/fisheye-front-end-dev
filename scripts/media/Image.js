import { Media } from "./Media.js";


// 1 - Créer deux classes : une classe image (ici) et une classe vidéo

// 4 - J'ai étendu le code existant pour que la classe Image
// puisse se servir de la classe Media

export class Image extends Media {
	constructor (data) {
		super(data); // Super, c'est pour passer des paramètres à la class Media, ici les data
		
		this.image = data.image;
	}
}