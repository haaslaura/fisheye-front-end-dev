/**********************************************************************

This file contains the functions for the gallery Lightbox

**********************************************************************/


const lightbox = document.querySelector(".lightbox");
console.log(lightbox);


/*********************/
/** OPENING LIGHTBOX */
/*********************/

/*
Eviter onclick

Récupérer l'élément à cliquer
>> Ajouter un évènement sur l'élément

Récupérer l'endroit où s'ajoute l'image
>> L'évènement va ajouter l'image dans la lightbox au bon endroit

/!\Modifier les paramètre aria
*/

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