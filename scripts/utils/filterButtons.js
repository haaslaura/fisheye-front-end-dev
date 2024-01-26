/*******************************************************

This file contains the functions for the filters buttons

*******************************************************/


// 1 - Récupérer
	// a - les boutons :
		/*
		Popularité
		Date
		Titre
		*/
	// b - Les article de la galery .media-section__media-card

// 2 - Savoir quelle fonction display toute la galerie une première fois

// 3- Si "Popularité" est séléctionné
	// Ajouter un évènement sur le bouton
		// Quand le bouton est clické ou tapper 'Entré' au clavier

		// La liste des médias est reprise
		// Il faut que ça repasse par media factory ?
		// Une fonction sort() est appliqué en fonction du nombre de like de chaque media
			/**
			 * EXEMPLE
			 * boutonTrier.addEventListener("click", function () {
			 * const piecesOrdonnees = Array.from(pieces)
			 * piecesOrdonnees.sort(function (a, b) {
			 * return b.prix - a.prix;
			 * });
			 */
		// On efface la partie de l'écran où se trouve la galery
			// EXEMPLE : document.querySelector(".fiches").innerHTML = "";
		// On rappelle la fonction display de la galerie pour tout ré afficher

// 3 - Si "Date" est séléctionné
	// Ajouter un évènement sur le bouton
		// Quand le bouton est clické ou tapper 'Entré' au clavier

// 3 - Si "Titre" est séléctionné
	// Ajouter un évènement sur le bouton
		// Quand le bouton est clické ou tapper 'Entré' au clavier


/**
 * note :
 * map() copie en créant un autre tableau pour chaque élément du tableau existant
 */










// 1 - Selectionner le bouton dropbtn
const dropbtn = document.querySelector(".dropbtn");
console.log(dropbtn);

// 2 - Gérer aria-expanded du bouton : ouvert ou fermé, true ou false

// 3 - Ajouter les class nécessaire pour finir la CSS

// 4 - Selectionner les autres boutons (pour ajouter un évènement au click)

// 5 - Ajouter un évènement au clic pour utiliser .sort()



// 5 - Ensuite on s'occupe des boutons :
/* ici ne mettre que la fonction de trie !! Mettre les contenus dans le fichier photographer.js */

const popularityBtn = document.querySelector(".filter-popularity");
const dateBtn = document.querySelector(".filter-date");
const titleBtn = document.querySelector(".filter-title");

// pour pouvoir utiliser la fonction dans photographer.js, j'utilise 'export'
function filter() {
	
	popularityBtn.addEventListener("click", function () {
		const arrayOrdonne = Array.from(data.media); // (sortir ce bloc) copie du tableau pour conserver inchangé l'original
		arrayOrdonne.sort(function(nbLikeA, nbLikeB){
			return nbLikeA.likles - nbLikeB.likes;
		});
		console.log(arrayOrdonne); // vérifier que le tableau est bien ré-ordonné dans la console
	});
	
	
}
/* Transformer les données Json en tableau ? */
/* nameArray = media ? */