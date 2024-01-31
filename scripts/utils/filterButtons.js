/*******************************************************

This file contains the functions for the filters buttons

*******************************************************/

/*
import { displayTotalLikes } from "../utils/likes.js";
import { displayLightbox } from "../utils/lightbox.js";
*/

// 1 - Récupérer by ID les bouton filtres
// 2 - ajouter un add event listener
// 3 - dans les fonction addEvent appliqué un tri avec la variable mediaData (méthode sort)
// 4 - appelé la  fonction displayAllMedia(mediaData) avec les mediaData trié (et pas oublié de supperimé tout les média en début de fonction)

export const openCloseFilterMenu = () => {
	// Récupérer le bouton principal
    const filterMenuBtn = document.querySelector(".btn_drop");
	// Récupérer la liste ul
	const filterMenu = document.querySelector(".dropdown_content");  
    // Récupérer tous les boutons de la liste ul
	const filterButtons = document.querySelectorAll(".dropdown_content button");

	// Evènement sur le bouton principal
    filterMenuBtn.addEventListener("click", () => {
        // Le menu est-il ouvert ou fermé ?
		const isExpanded = filterMenuBtn.getAttribute("aria-expanded") === "true" || false;
        
		// Attribut ARIA et css en fonction
		filterMenuBtn.setAttribute("aria-expanded", !isExpanded);
        filterMenu.classList.toggle("curtain_effect");
        document.querySelector(".fa-chevron-up").classList.toggle("rotate");

        const newAriaHiddenValue = filterMenu.classList.contains("curtain_effect") ? "false" : "true";
        filterMenu.setAttribute("aria-hidden", newAriaHiddenValue);

        const newTabIndexValue = filterMenu.classList.contains("curtain_effect") ? "0" : "-1";
        filterButtons.forEach(button => button.setAttribute("tabindex", newTabIndexValue));
    });
};


export const displayMediaWithFilter = mediasTemplate => {
    // Récupérer le filtre en cours
    const currentFilter = document.querySelector('#current_filter');
    // Récupérer tous les boutons de la liste ul à nouveau ?
    const allFilters = Array.from(document.querySelectorAll('.dropdown_content li button'))

    let filterAlreadySelected = allFilters.find(filter => filter.textContent == currentFilter.textContent);
    filterAlreadySelected.style.display = 'none'; // Cacher le filtre en cours

    // Parcours les boutons de filtre, mettre un évènement au clic sur chaque
    allFilters.forEach(filter => {
        filter.addEventListener('click', () => {

            // Changer le texte pour le filtre en cours
            currentFilter.textContent = filter.textContent;
            if (filterAlreadySelected) filterAlreadySelected.style.display = 'block';

            // Pas très bien compris ces deux lignes
            filterAlreadySelected = filter;
            filterAlreadySelected.style.display = 'none';

            // Utilise la fonction filtre ci-après
            sortByFilter(filter.textContent);
        })
    });

    const sortByFilter = filterValue => {
        switch (filterValue) {
            case 'Titre':

                // TROUVER UN AUTRE MOYEN DE RECUPERER LES MEDIA
                mediasTemplate.medias.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'Popularité':
                mediasTemplate.medias.sort((a, b) => b.likes - a.likes);
                break;
            case 'Date':
                mediasTemplate.medias.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
        }
        
        // Ré affiche la liste des médias à partir d'un template
        mediasTemplate.createPhotographerMedias();
        const mediasfiltered = mediasTemplate;
        displayLightbox(mediasfiltered);
        displayTotalLikes();

        // Notes
        // Mon template est dans getMediaDOM()
  
    };
};
