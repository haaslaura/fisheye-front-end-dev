// 3 - Je créé une autre class Media qui contient la méthode
// pour afficher l'image ou le film
// à partir de l'id du photographe

export class Media {
	constructor(data) {
		
		// Tout ce qui est en doublon pour les deux class est parti ici
		this.id = data.id;
		this.photographerId = data.photographerId;
		this.title = data.title;
		this.likes = data.likes;
		this.date = data.date;
		this.price = data.price;
	}
}