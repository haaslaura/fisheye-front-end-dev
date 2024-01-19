/**********************************************************************

This file contains the function to retrieve the data from the json file

**********************************************************************/

export async function getData() {
	
	try {
		// Fetch the JSON file
		let response = await fetch("../data/photographers.json");
		
		// Checking the HTTP response
		if (!response.ok) {
			throw new Error ("Erreur de chargement des données");
		}
		
		// Retrieving JSON data from the response
		// let data = await response.json();
		return await response.json();
		
	} catch (error) {
		console.error("Erreur :", error); // Seeing error
	}
}
