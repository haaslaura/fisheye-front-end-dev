// This JavaScript code is linked to the index.html page

    // Function for loading data from the JSON file using fetch
    async function getPhotographers() {

        try {
            // Fetch the JSON file
            let response = await fetch('../data/photographers.json');

            // Checking the HTTP response
            if (!response.ok) {
                throw new Error ('Erreur de chargement des données');
            }

            // Retrieving JSON data from the response
            let data = await response.json();
            let photographersArray = data.photographers;
            return photographersArray;
            
        } catch (error) {
            console.error('Erreur :', error); // Seeing what type of error
        }
    }
        
    async function displayData(photographersArray) {
        // Recovery of the photographers' divide
        const photographersSection = document.querySelector(".photographer_section");

        photographersArray.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Recovers data from photographers
        const photographersArray = await getPhotographers();
        displayData(photographersArray);
    }
    
    init();