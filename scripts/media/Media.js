/*
export class Media { 
	constructor (data) {
		this.id = data.id;
		this.photographerId = data.photographerId;
		this.title = data.title;
		this.likes = data.likes;
		this.date = data.date;
		this.price = data.price;
	}
}
*/

/*

La factory méthode te propose de prendre en entrée un objet quelconque
de la grappe média. De regarder si l'objet que tu lui passes en entrée
a un attribut image, si oui tu retournes un objet de type Photo().
Sinon, si elle a un attribut "video" tu retournes un objet de type media Vidéo()

*/


// 1 - Créer deux classes : une classe image et une classe vidéo

export class Image {
	constructor(data) {
		this.id = data.id;
		this.photographerId = data.photographerId;
		this.title = data.title;
		this.image = data.image;
		this.likes = data.likes;
		this.date = data.date;
		this.price = data.price;
	}
}

export class Video {
	constructor(data) {
		this.id = data.id;
		this.photographerId = data.photographerId;
		this.title = data.title;
		this.video = data.video;
		this.likes = data.likes;
		this.date = data.date;
		this.price = data.price;
	}
}

// 2 - Après on peut instancier de nouveaux contenus

const ImageInstance = new Image(data);
const VideoInstance = new Image(data);

console.log(ImageInstance);
console.log(VideoInstance);

// 3 - Je créé une autre class Media qui contient la méthode pour afficher l'image ou le film
// à partir de l'id du photographe

export class Media {
	constructor(id) {
		this._id = id;
	}

	displayMedia() {
		console.log("Je test l'affiche");
		console.log(this._id);
	}
}