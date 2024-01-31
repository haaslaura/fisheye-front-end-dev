/*******************************************************

This file contains the functions for the filters buttons

*******************************************************/

function sortMediaGallery(){
	// 1a - Récupérer les boutons

		const filterBtnPopularity = document.getElementById("dropdown__menu1");
		const filterBtnDate = document.getElementById("dropdown__menu2");
		const filterBtnTitle = document.getElementById("dropdown__menu3");

	// 1b - Récupérer les article de la galery .media-section__media-card
	const allGalleryMedia = document.querySelectorAll("article");
	console.log(allGalleryMedia);

	// 2 - Savoir quelle fonction display toute la galerie une première fois
	// displayGallery()


	// 3- Si "Popularité" est séléctionné
		// Ajouter un évènement sur le bouton
			// Quand le bouton est clické ou tapper 'Entré' au clavier

			filterBtnPopularity.addEventListener("click", () => sortedMedia(/*paramètres ?*/));
			filterBtnPopularity.addEventListener("keypress", (event) => {
				if (event.code === "Enter") {
					sortedMedia(/*paramètres ?*/);
				}
			});

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

}