/**********************************************************************

This JavaScript code is linked to the index.html page

**********************************************************************/

// 0 - Importing data and functions
import { photographerTemplate } from "../templates/photographerInfo.js";
import { getData } from "../utils/getData.js";


// 1 - Only retrieve data from photographers
async function getPhotographers() {
	try {
		// Retrieve data
		const data = await getData();
        
		// Check whether the data contains photographers
		// Use facultative chaining to check if data is correctly loaded.
		// If it isn't loaded, data is undefined and the check returns undefined
		if (data?.photographers) {
			/*const photographersArray = data.photographers;*/
			return data.photographers;
		}
        
		console.log("Aucune donnée sur les photographes trouvée.");
        
	} catch (error) {
		console.error("Erreur lors de l'affichage des photographes :", error);
	}
}


// 2 - Design patterns
function displayData(photographersArray) {
    
	// Recovery of the photographers' divide
	const photographersSection = document.querySelector(".photographer_section");
    
	photographersArray.forEach((photographer) => {
		const photographerModel = photographerTemplate(photographer);
		const userCardDOM = photographerModel.createUserCardDOM();
		photographersSection.appendChild(userCardDOM);
	});
}

async function initPage() {
	// Recovers data from photographers
	const photographersArray = await getPhotographers();
	displayData(photographersArray);
}

initPage();

