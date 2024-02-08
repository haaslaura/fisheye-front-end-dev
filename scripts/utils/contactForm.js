/*******************************************************

This file contains the functions for the modal

*******************************************************/

/***********************/
/** GLOABAL VARIABLES **/
/***********************/

// For the modal
const modalDialog = document.getElementById("contact_modal");
const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");

// For the form
const form = document.querySelector("form");
const formData = document.querySelectorAll("form input");
const messageArea = document.querySelector("textarea");

// Regular expression to check the email
let regexMail = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]{2,}$", "i");


/*********************/
/*** OPENING MODAL ***/
/*********************/

openModalBtn.addEventListener("click", () => {
	modalDialog.showModal();
	trapFocusIn(modalDialog);
});


/*********************/
/**** CLOSE MODAL ****/
/*********************/

// The "Close" button closes the dialog
closeModalBtn.addEventListener("click", () => {
	modalDialog.close();
});

closeModalBtn.addEventListener("keypress", () => {
	modalDialog.close();
});

// Close modal at click outside the modal
modalDialog.addEventListener("click", (event) => {
	if (event.target === modalDialog) {
		modalDialog.close();
	}
});

/*********************/
/**** TRAP FOCUS *****/
/*********************/

function trapFocusIn(modal) {
	modal.addEventListener("keydown", function(e) {
		
		let isTabPressed = e.key === "Tab" || e.keyCode === 9;
		if (!isTabPressed) return;
		
		let focusableElement = modal.querySelectorAll(".focusable");
		let firstFocusableElement = focusableElement[0];
		let lastFocusableElement = focusableElement[focusableElement.length - 1];
		
		if (e.shiftKey) {
			// If the Shift key is held down, moves the focus to the previous element
			if (document.activeElement === firstFocusableElement) {
				lastFocusableElement.focus();
				e.preventDefault();
			}
		} else {
			// Otherwise, moves the focus to the next element
			if (document.activeElement === lastFocusableElement) {
				firstFocusableElement.focus();
				e.preventDefault();
			}
		}
	});
}


/*********************/
/** ERROR MESSAGES ***/
/*********************/

// Function to display error message
function displayErrorMessages() {
	
	// Prepare to return a booleen
	let correct = true;
	
	function addErrorMessage(input, errorMessage) {
		input.classList.add("data-error");
		
		const messageError = document.createElement("p");
		messageError.classList.add("data-tag");
		messageError.setAttribute("aria-live", "assertive");
		messageError.textContent = errorMessage;
		
		input.parentNode.insertBefore(messageError, input.nextSibling);
	}
	
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
				correct = false;
				addErrorMessage(input, `Merci de remplir votre ${idInput === "firstname" ? "prénom" : "nom"}.`);
			}
			break;
			
		case "email":
			if (!valueInput) {
				correct = false;
				addErrorMessage(input, "Merci de remplir votre email.");
			} else if (!regexMail.test(valueInput)) {
				correct = false;
				addErrorMessage(input, "Merci de remplir un email correct.");
			}
			break;
			
		default:
			correct = false;
			alert("Il y a une erreur dans le formulaire.");
			console.log("Un champ du formulaire n'est peut-être pas pris en compte.");
		}
	});
	
	// Check the text field
	let valueMessage = messageArea.value.trim();
	if (!valueMessage) {
		correct = false;
		addErrorMessage(messageArea, "Votre message est vide.");
	}
	
	// Return booleen
	return correct;
}


/*********************/
/*** SUBMIT EVENT ****/
/*********************/

form.addEventListener("submit", (event) => { 
	event.preventDefault();
	displayErrorMessages();
	
	if (displayErrorMessages()) {
		
		// Display value in the console
		formData.forEach(input => { 
			console.log(input.value.trim());
		});
		
		console.log(messageArea.value.trim());
		
		modalDialog.innerHTML = "Merci pour votre message !</br>Le photographe reviendra vers vous sous peu.";
	}
});