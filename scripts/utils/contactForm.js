/*******************************************************

This file contains the functions for the modal

*******************************************************/

// Global variable
const modal = document.getElementById("contact_modal");
const form = document.querySelector("form");
console.log(form);

// Regular expression to check the email
let regexMail = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]{2,}$", "i");

/*********************/
/*** OPENING MODAL ***/
/*********************/

function displayModal() {
    modal.style.display = "block";

    // Passer le reste du site à aria-hidden true
    const otherContent = document.querySelectorAll("body > *:not(#contact_modal)");
    otherContent.forEach(element => {
        element.setAttribute("aria-hidden", "true");
    });

    // Passer la modale à aria-hidden false
    modal.setAttribute("aria-hidden", "false");

    // Gestion du focus
    const currentFocusedElement = document.querySelector(".modal");
    if (!currentFocusedElement) {
        currentFocusedElement.focus();
    }
}

/*********************/
/**** CLOSE MODAL ****/
/*********************/

function closeModal() {

    // Passer le reste du site à aria-hidden false
    const otherContent = document.querySelectorAll("body > *:not(#contact_modal)");
    otherContent.forEach(element => {
        element.setAttribute("aria-hidden", "false");
    });

    // Passer la modale à aria-hidden true
    modal.setAttribute("aria-hidden", "true");

    modal.style.display = "none";
}

 
// Close modal when escape key is pressed
 function handleKeyDown(event) {
    if (event.key === "Escape" && modal.style.display !== "none") {
        closeModal();
    }
}
document.addEventListener('keydown', handleKeyDown);


/*********************/
/** ERROR MESSAGES ***/
/*********************/

// Function to display error message
function displayErrorMessages(test) {

    const formData = document.querySelectorAll("form input");

    for (i = 0; i < formData.length; i++) {

        let idInput = formData[i].id;
        let valueInput = formData[i].value.trim();

        switch (idInput) {
            case 'firstname':
                if (!valueInput){
                    formData[i].setAttribute("data-error", "Merci de remplir votre prénom.");
                }else if (valueInput.length < 2){
                    formData[i].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus.");
                } else {
                    formData[i].removeAttribute("data-error");
                }
                break;
            
            case 'lastname':
                if (!valueInput){
                    formData[i].setAttribute("data-error", "Merci de remplir votre nom.");
                }else if (valueInput.length < 2){
                    formData[i].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus.");
                } else {
                    formData[i].removeAttribute("data-error");
                }
                break;
            
            case 'email':
                if (!valueInput){
                    formData[i].setAttribute("data-error", "Merci de remplir votre email.");
                } else if (!regexMail.test(valueInput)) {
                    formData[i].setAttribute("data-error", "Merci de nous indiquer un email valide.");
                } else {
                    formData[i].removeAttribute("data-error");
                }
                break;
        }
    }
    
    const messageArea = document.querySelector("textarea");
    console.log(messageArea);
    let valueMessage = messageArea.value.trim();
    if (!valueMessage){
        messageArea.setAttribute("data-error", "Votre message est vide.");
    } else {
        messageArea.removeAttribute("data-error");
    }

}


/*********************/
/*** SUBMIT EVENT ****/
/*********************/

form.addEventListener("submit", (event) => { 
    event.preventDefault();
    displayErrorMessages();

});

/*Plus tard, le bouton de contact enverra un message au
photographe. Pour l'instant, seulement afficher le contenu des
trois champs dans les logs de la console.*/