function displayModal() {
    const modal = document.getElementById("contact_modal");

    // Passer le reste du site à aria-hidden true
    const otherContent = document.querySelectorAll("body > *:not(#contact_modal)");
    otherContent.forEach(element => {
        element.setAttribute("aria-hidden", "true");
    });

    // Passer la modale à aria-hidden false
    modal.setAttribute("aria-hidden", "false");

    modal.style.display = "block";

    // Gestion du focus
    const currentFocusedElement = document.querySelector("contact_modal");
    if (!currentFocusedElement) {
        currentFocusedElement.focus();
    } // A CORRIGER

}

function closeModal() {
    const modal = document.getElementById("contact_modal");

    // Passer le reste du site à aria-hidden false
    const otherContent = document.querySelectorAll("body > *:not(#contact_modal)");
    otherContent.forEach(element => {
        element.setAttribute("aria-hidden", "false");
    });

    // Passer la modale à aria-hidden true
    modal.setAttribute("aria-hidden", "true");

    // Gestion du focus
    const previouslyFocusedElement = document.querySelector("contact_modal");
    if (previouslyFocusedElement) {
        previouslyFocusedElement.focus();
    }

    // Gestion de la fermeture avec la touche echap
    document.removeEventListener('keydown', handleKeyDown);

    modal.style.display = "none";
}

 
// Close modal when escape key is pressed
 function handleKeyDown(event) {
    const modal = document.getElementById("contact_modal");
    if (event.key === "Escape" && modal.style.display !== "none") {
        closeModal();
    }
}

document.addEventListener('keydown', handleKeyDown); // à corriger