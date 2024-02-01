/*******************************************************

This file contains the functions for the modal

*******************************************************/

// Global variable
const modal = document.getElementById("contact_modal");
const form = document.querySelector("form");
const formData = document.querySelectorAll("form input");
const messageArea = document.querySelector("textarea");

// Regular expression to check the email
let regexMail = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]{2,}$", "i");

/*********************/
/*** OPENING MODAL ***/
/*********************/

function displayModal() {
	modal.style.display = "block";
	
	// Switch the rest of the site to aria-hidden true
	const otherContent = document.querySelectorAll("body > *:not(#contact_modal)");
	otherContent.forEach(element => {
		element.setAttribute("aria-hidden", "true");
	});
	
	// Switch the modal to aria-hidden false
	modal.setAttribute("aria-hidden", "false");
	
	// Focus management
	const currentFocusedElement = document.querySelector(".modal");
	if (!currentFocusedElement) {
		currentFocusedElement.focus();
	}
}

/*********************/
/**** CLOSE MODAL ****/
/*********************/

function closeModal() {
	
	// Switch the rest of the site to aria-hidden false
	const otherContent = document.querySelectorAll("body > *:not(#contact_modal)");
	otherContent.forEach(element => {
		element.setAttribute("aria-hidden", "false");
	});
	
	// Switch the modal to aria-hidden true
	modal.setAttribute("aria-hidden", "true");
	
	modal.style.display = "none";
}


// Close modal when escape key is pressed
function handleKeyDown(event) {
	if (event.key === "Escape" && modal.style.display !== "none") {
		closeModal();
	}
}
document.addEventListener("keydown", handleKeyDown);

// Close modal at click outside the modal
modal.addEventListener("click", (event) => {
	if (event.target === modal) {
	  closeModal();
	}
  });


/*********************/
/** ERROR MESSAGES ***/
/*********************/

// Function to display error message
function displayErrorMessages() {
	
	// Function to add error message
	function addErrorMessage(input, errorMessage) {
		input.classList.add("data-error");
		
		const messageError = document.createElement("p");
		messageError.classList.add("data-tag");
		messageError.setAttribute("aria-live", "assertive");
		messageError.textContent = errorMessage;
		
		input.parentNode.insertBefore(messageError, input.nextSibling);
	}
	
	// Fonction pour remove error message
	function removeErrorMessages() {
		const errorElements = document.querySelectorAll(".data-tag");
		errorElements.forEach((error) => error.remove());
		
		const inputs = document.querySelectorAll(".data-error");
		inputs.forEach((input) => input.classList.remove("data-error"));
	}
	
	removeErrorMessages();
	
	// Browse input fields
	formData.forEach((input) => {
		let idInput = input.id;
		let valueInput = input.value.trim();
		
		switch (idInput) {
			case "firstname":
			case "lastname":
			if (!valueInput) {
				addErrorMessage(input, `Merci de remplir votre ${idInput === "firstname" ? "prénom" : "nom"}.`);
			}
			break;
			
			case "email":
			if (!valueInput) {
				addErrorMessage(input, "Merci de remplir votre email.");
			} else if (!regexMail.test(valueInput)) {
				addErrorMessage(input, "Merci de remplir un email correct.");
			}
			break;
			
			default:
			alert("Il y a une erreur dans le formulaire.");
			console.log("Un champ du formulaire n'est peut-être pas pris en compte.");
		}
	});
	
	// Check the text field
	let valueMessage = messageArea.value.trim();
	
	if (!valueMessage) {
		addErrorMessage(messageArea, "Votre message est vide.");
	}
}


/*********************/
/*** SUBMIT EVENT ****/
/*********************/

form.addEventListener("submit", (event) => { 
	event.preventDefault();
	displayErrorMessages();
	
	formData.forEach(input => { 
		console.log(input.value.trim());
	});
	
	console.log(messageArea.value.trim());
});