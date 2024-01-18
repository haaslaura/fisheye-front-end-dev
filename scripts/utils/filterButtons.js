/*******************************************************

This file contains the functions for the filters buttons

*******************************************************/


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