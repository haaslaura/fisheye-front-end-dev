


const lightbox = document.querySelector(".lightbox");
console.log(lightbox);

const infoMedia = document.querySelector(".info-media");
console.log(infoMedia);


async function pouet() {
document.addEventListener("DOMContentLoaded", function(){
    const links = document.querySelectorAll("article");
    console.log(links);
});

}
pouet();


/*********************/
/** OPENING LIGHTBOX */
/*********************/

/*
Récupérer l'élément à cliquer
Ajouter un évènement sur l'élément

Récupérer l'endroit où s'ajoute l'image
L'évènement va ajouter l'image dans la lightbox au bon endroit

Modifier les paramètre aria
*/

function displayLightbox() {
	
    lightbox.style.display = "block";

	// Passer le reste du site à aria-hidden true
	const otherContent = document.querySelectorAll("body > *:not(.lightbox)");
	otherContent.forEach(element => {
		element.setAttribute("aria-hidden", "true");
	});
	
	// Passer la modale à aria-hidden false
	lightbox.setAttribute("aria-hidden", "false");
	
	// Gestion du focus
	const currentFocusedElement = document.querySelector(".lightbox");
	if (!currentFocusedElement) {
		currentFocusedElement.focus();
	}
}




/*********************/
/** CLOSE LIGHTBOX ***/
/*********************/



function closeLightbox() {

    const closeBtn = document.querySelector(".lightbox__close");
    console.log(closeBtn);

    // Passer le reste du site à aria-hidden false
    const otherContent = document.querySelectorAll("body > *:not(.lightbox)");
    otherContent.forEach(element => {
        element.setAttribute("aria-hidden", "false");
    });

    // Passer la lightbox à aria-hidden true
    lightbox.setAttribute("aria-hidden", "true");


    closeBtn.addEventListener("click", function() {
        lightbox.style.display = "none";
        console.log("Le bouton clic bien");
    })

}


// Close lightbox when escape key is pressed
function handleKeyDown(event) {
	if (event.key === "Escape" && lightbox.style.display !== "none") {
        console.log("Echap fonctionne bien");
		closeLightbox();
	}
}
document.addEventListener("keydown", handleKeyDown);

/*
dialog.addEventListener('keydown', (event) => {
    if (event.which === keyCodes.escape) {
        closeLightbox();
    }
  });
  */


closeLightbox();