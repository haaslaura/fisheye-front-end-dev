/**********************************************************************

This file contains the functions for the gallery Lightbox

**********************************************************************/


/* NOTE */
// CONSIGNE : éviter 'onclick'

// Etape 1 - Récupérer les éléments

const lightbox = document.querySelector(".lightbox"); // La lightbox à afficher. Ok dans la console
console.log(lightbox);

function testFonction() {

    const links = document.querySelectorAll("article a"); 
    console.log(links);
    links.forEach(link => link.addEventListener("click", event =>
        event.preventDefault();
        link.getAttribute("href");
        console.log(link);

    ))

    
}


// Etape 2 - Ajouter un évènement sur l'élément

// Récupérer l'endroit où s'ajoute l'image
// L'évènement va ajouter l'image dans la lightbox au bon endroit

// /!\ Penser à modifier les paramètre aria






/*********************/
/** OPENING LIGHTBOX */
/*********************/

function displayLightbox() {
    
    lightbox.style.display = "block";
    
    // Switch the rest of the site to aria-hidden true
    const otherContent = document.querySelectorAll("body > *:not(.lightbox)");
    otherContent.forEach(element => {
        element.setAttribute("aria-hidden", "true");
    });
    
    // Switch the modal to aria-hidden false
    lightbox.setAttribute("aria-hidden", "false");
    
    // Focus management
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
    
    // Switch the rest of the site to aria-hidden false
    const otherContent = document.querySelectorAll("body > *:not(.lightbox)");
    otherContent.forEach(element => {
        element.setAttribute("aria-hidden", "false");
    });
    
    // Set lightbox to aria-hidden true
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


closeLightbox();